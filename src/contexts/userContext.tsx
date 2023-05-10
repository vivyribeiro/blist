import { useState, useEffect, useContext, createContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { AxiosError } from "axios";

import login from "../services/user/userLogin";
import register from "../services/user/userRegister";
import userProfile from "../services/user/userProfile";

import { useToastForm } from "./toastContext";
import { useGlobalContext } from "./globalContext";

import editUser from "../services/user/userEdit";
import report from "../services/user/userReport";
import destroyUser from "../services/user/userDelete";
import resetPassword from "../services/user/userResetPassword";
import userEditPassword from "../services/user/userEditPassword";
import sendResetPasswordEmail from "../services/user/requestResetPassword";

import {
	iUser,
	iUserEdit,
	iUserLogin,
	iContactsList,
	iUserRegister,
	iUserProviderData,
	iUserEditPassword,
	iSendResetPasswordEmail,
	iUserResetPasswordRequest
} from "../types/contexts";
import { iApiMessage } from "../types/api.type";
import { mandatoryChildren } from "../types/components";

export const UserContext = createContext<iUserProviderData>(
	{} as iUserProviderData
);

export const UserProvider = ({ children }: mandatoryChildren) => {
	const { setGlobalLoading } = useGlobalContext();
	const [user, setUser] = useState<iUser | null>(null);
	const [contacts, setContacts] = useState<iContactsList>([]);
	const [reportLoader, setReportLoader] = useState<boolean>(false);

	const navigate = useNavigate();
	const location = useLocation();
	const pathParams = useParams();

	const { toast } = useToastForm();

	const userRegister = async (data: iUserRegister): Promise<void> => {
		try {
			const { role } = pathParams;
			const userData = role === "admin" ? { ...data, role } : data;

			await register(userData);

			navigate("/", { replace: true });
			toast({
				title: "Cadastro realizado com sucesso",
				description: "Por favor verifique seu e-mail!",
				status: "success"
			});
		} catch (error) {
			const requestError = error as AxiosError<iApiMessage>;
			const message =
				requestError.response?.data.message || requestError.message;

			toast({
				title: "Cadastro não realizado",
				description: message,
				status: "error"
			});
		}
	};

	const requestResetPassword = async (data: iSendResetPasswordEmail) => {
		try {
			const response = await sendResetPasswordEmail(data);
			return response.message;
		} catch (error) {
			const requestError = error as AxiosError<iApiMessage>;
			const message =
				requestError.response?.data.message || requestError.message;

			console.error(message);
		}
	};

	const userResetPassword = async (data: iUserResetPasswordRequest) => {
		try {
			const { token } = pathParams;
			const response = await resetPassword(token!, data);
			return response.message;
		} catch (error) {
			const requestError = error as AxiosError<iApiMessage>;
			const message =
				requestError.response?.data.message || requestError.message;

			console.error(message);
		}
	};

	const userLogin = async (data: iUserLogin): Promise<void> => {
		try {
			const { token, user } = await login(data);
			localStorage.setItem("blist@token", token);

			const { contacts: contactList, ...userData } = user;
			setUser(userData);
			setContacts(contactList);

			const toPath: string = location.state?.from?.pathname || "/dashboard";
			navigate(toPath, { replace: true });

			toast({
				title: "Logado com sucesso",
				description: "Bem Vindo(a) à Blist!",
				status: "success"
			});
		} catch (error) {
			const requestError = error as AxiosError<iApiMessage>;
			const message =
				requestError.response?.data.message || requestError.message;

			toast({
				title: "Autenticação falhou",
				description: message,
				status: "error"
			});
		}
	};

	useEffect(() => {
		const userAutoLogin = async () => {
			try {
				const userData = await userProfile();

				setUser(userData?.user!);
				setContacts(userData?.contacts!);
			} catch (error) {
				const requestError = error as AxiosError<iApiMessage>;
				const message =
					requestError.response?.data.message || requestError.message;

				toast({
					title: "Autenticação falhou",
					description: message,
					status: "error"
				});
			} finally {
				setTimeout(() => {
					setGlobalLoading(false);
				}, 1000);
			}
		};

		userAutoLogin();
	}, []);

	const userLogout = () => {
		setUser(null);
		setContacts([]);

		localStorage.removeItem("blist@token");
		navigate("/", { replace: true });
	};

	const userReport = async () => {
		try {
			setReportLoader(true);
			const pdfBuffer = await report(user?.id!);
			const pdfUrl = window.URL.createObjectURL(new Blob([pdfBuffer]));

			const tagA = document.createElement("a");
			tagA.href = pdfUrl;
			tagA.setAttribute("download", "Relátorio.pdf");

			document.body.appendChild(tagA);
			tagA.click();
			tagA.remove();
		} catch (error) {
			const requestError = error as AxiosError<iApiMessage>;
			const message =
				requestError.response?.data.message || requestError.message;

			toast({
				title: "Exportação falhou",
				description: message,
				status: "error"
			});
		} finally {
			setTimeout(() => {
				setReportLoader(false);
			}, 500);
		}
	};

	const userUpdate = async (id: string, data: iUserEdit) => {
		try {
			const response = await editUser(id, data);
			setUser(response);

			toast({
				title: "Atualizado com sucesso",
				description: "As alterações foram salvas ",
				status: "success"
			});
		} catch (error) {
			const requestError = error as AxiosError<iApiMessage>;
			const message =
				requestError.response?.data.message || requestError.message;

			toast({
				title: "Usúario não atualizado",
				description: message,
				status: "error"
			});
		}
	};

	const userPasswordUpdate = async (id: string, data: iUserEditPassword) => {
		try {
			const response = await userEditPassword(id, data);
			setUser(response);

			toast({
				title: "Atualização bem sucedida",
				description: "Senha atualizada ",
				status: "success"
			});
		} catch (error) {
			const requestError = error as AxiosError<iApiMessage>;
			const message =
				requestError.response?.data.message || requestError.message;

			toast({
				title: "Senha não atualizada",
				description: message,
				status: "error"
			});
		}
	};

	const userDelete = async (id: string) => {
		try {
			await destroyUser(id);

			setUser(null);
			setContacts([]);
			localStorage.removeItem("blist@token");
			navigate("/", { replace: true });
			toast({
				title: "Conta desativada",
				description: "Sua conta foi desativada com sucesso",
				status: "success"
			});
		} catch (error) {
			const requestError = error as AxiosError<iApiMessage>;
			const message =
				requestError.response?.data.message || requestError.message;

			toast({
				title: "Conta não desativada",
				description: message,
				status: "error"
			});
		}
	};

	return (
		<UserContext.Provider
			value={{
				user,
				contacts,
				userLogin,
				userDelete,
				userLogout,
				userReport,
				userUpdate,
				setContacts,
				userRegister,
				reportLoader,
				userResetPassword,
				userPasswordUpdate,
				requestResetPassword
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = (): iUserProviderData => useContext(UserContext);
