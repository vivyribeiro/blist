import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import { useToastForm } from "./toastContext";
import { useUserContext } from "./userContext";
import { iContactRequest, iContactsContextProps } from "../types/contexts";

import { iApiMessage } from "../types/api.type";
import update from "../services/contact/contactUpdate";
import destroy from "../services/contact/contactDelete";
import contactRegister from "../services/contact/contactRegister";

import { mandatoryChildren } from "../types/components";

export const ContactContext = createContext({} as iContactsContextProps);

export const ContactProvider = ({ children }: mandatoryChildren) => {
	const [search, setSearch] = useState("");
	const { contacts, setContacts } = useUserContext();
	const [count, setCount] = useState<number | null>(null);

	const { toast } = useToastForm();

	useEffect(() => {
		const filterContactsSearch = () => {
			const newContactList = contacts?.filter(contact => {
				const nameNormalize = contact.fullName
						.toLowerCase()
						.normalize("NFD")
						.replace(/[\u0300-\u036f]/g, ""),
					emailNormalize = contact.email
						.toLowerCase()
						.normalize("NFD")
						.replace(/[\u0300-\u036f]/g, ""),
					valueSearchNormalize = search
						.trim()
						.toLowerCase()
						.normalize("NFD")
						.replace(/[\u0300-\u036f]/g, "");

				if (
					nameNormalize.includes(valueSearchNormalize) ||
					emailNormalize.includes(valueSearchNormalize) ||
					contact.telephone.includes(valueSearchNormalize) ||
					contact.id.includes(valueSearchNormalize)
				) {
					return contact;
				}
			});

			newContactList?.length
				? setContacts(newContactList)
				: setContacts(contacts);
		};

		filterContactsSearch();
	}, [search]);

	const addContact = async (contactData: iContactRequest) => {
		try {
			const data = await contactRegister(contactData);
			setContacts(oldList => [...oldList, data]);

			toast({
				title: "Contato cadastrado",
				description: "Contato adicionado com sucesso",
				status: "success"
			});
		} catch (error) {
			const requestError = error as AxiosError<iApiMessage>;
			const message =
				requestError.response?.data.message || requestError.message;
			console.error(message);

			toast({
				title: "Contato não cadastrado",
				description: "O e-mail/telefone já existe.",
				status: "error"
			});
		}
	};

	const updateContact = async (id: string, contactData: iContactRequest) => {
		try {
			const data = await update(id, contactData);
			const newContactList = contacts.map(contact => {
				if (contact.id == id) {
					return data;
				}

				return contact;
			});

			setContacts(newContactList);
			toast({
				title: "Contato atualizado",
				description: "Alterações salvas com sucesso",
				status: "success"
			});
		} catch (error) {
			const requestError = error as AxiosError<iApiMessage>;
			const message =
				requestError.response?.data.message || requestError.message;
			console.error(message);

			toast({
				title: "Contato não atualizado",
				description: "O e-mail/telefone já existe.",
				status: "error"
			});
		}
	};

	const removeContact = async (id: string) => {
		try {
			await destroy(id);

			const newContactList = contacts.filter(contact => contact.id !== id);
			setContacts(newContactList);

			toast({
				title: "Contato deletado",
				description: "Deletado da lista com sucesso",
				status: "success"
			});
		} catch (error) {
			const requestError = error as AxiosError<iApiMessage>;
			const message =
				requestError.response?.data.message || requestError.message;
			console.error(message);

			toast({
				title: "Contato não removido",
				description: "Por favor, tente novamente mais tarde.",
				status: "error"
			});
		}
	};

	return (
		<ContactContext.Provider
			value={{
				count,
				search,
				setCount,
				setSearch,
				addContact,
				updateContact,
				removeContact
			}}
		>
			{children}
		</ContactContext.Provider>
	);
};

export const useContactContext = (): iContactsContextProps =>
	useContext(ContactContext);
