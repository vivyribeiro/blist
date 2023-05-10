import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useUserContext } from "../../contexts/userContext";

import Loader from "../../components/Loader";
import ResultMessage from "../../components/ResultMessage";
import FormContainer from "../../components/CustomContainers/FormContainer";

import { iApiMessage } from "../../types/api.type";
import userConfirmationEmail from "../../services/user/userConfirmationEmail";

const ConfirmationEmail = () => {
	const { user } = useUserContext();
	const [isLoading, setIsLoading] = useState(false);
	const [sucessMessage, setSucessMessage] = useState<string | null | undefined>(
		null
	);

	const { token } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			if (user?.isEmailVerified) {
				setTimeout(() => {
					return navigate("/dashboard", { replace: true });
				}, 500);
			}

			if (token) {
				try {
					setIsLoading(true);
					const response = await userConfirmationEmail(token);
					setSucessMessage(response.message);
				} catch (error) {
					const requestError = error as AxiosError<iApiMessage>;
					const message =
						requestError.response?.data.message || requestError.message;
					console.error(message);
				} finally {
					setTimeout(() => {
						setIsLoading(false);
					}, 1000);
				}
			}
		})();
	}, [token]);

	return (
		<>
			{isLoading ? (
				<Loader size="xl" />
			) : (
				<FormContainer>
					{sucessMessage && (
						<ResultMessage type="success" style="single">
							{sucessMessage}
						</ResultMessage>
					)}

					{!sucessMessage && (
						<ResultMessage type="error" style="single">
							Ops! Link inválido ou expirado
						</ResultMessage>
					)}
				</FormContainer>
			)}
		</>
	);
};

export default ConfirmationEmail;
