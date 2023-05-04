import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AddIcon } from "@chakra-ui/icons";
import { Button, useDisclosure } from "@chakra-ui/react";

import CustomModal from "../Modal";
import InputForm from "../InputForm";

import { useGlobalContext } from "../../contexts/globalContext";
import { useContactContext } from "../../contexts/contactContext";

import { iContactRequest } from "../../types/contexts";
import { requestContactSchema } from "../../schemas/contacts";

const BtnAddContact = () => {
	const { addContact } = useContactContext();
	const { windowSize } = useGlobalContext();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<iContactRequest>({
		resolver: zodResolver(requestContactSchema),
		mode: "all"
	});

	const add = (data: iContactRequest) => {
		addContact(data);
		reset();
		onClose();
	};

	const commonStyle = {
		px: "10px",
		fontSize: "14px",
		variant: "brandSolid",
		title: "Adicionar Contato",
		justifyContent: "space-between",
		minW: { base: "max-content", md: "6.75rem" }
	};

	return (
		<>
			<Button {...commonStyle} onClick={onOpen}>
				{windowSize.innerWidth > 540 ? "Contato" : ""} <AddIcon />
			</Button>

			<CustomModal
				title="Adicionar Contato"
				textClose="Cancelar"
				textConfirm="Salvar"
				isOpen={isOpen}
				onClose={onClose}
				isLoading={isSubmitting}
				fnConfirm={handleSubmit(add)}
			>
				<InputForm
					id="fullName"
					type="text"
					label="Nome completo"
					error={errors.fullName}
					register={register("fullName", { value: "" })}
					placeholder="Fulano de Tal"
				/>

				<InputForm
					id="email"
					type="email"
					label="E-mail"
					error={errors.email}
					register={register("email", { value: "" })}
					placeholder="email@mail.com"
				/>

				<InputForm
					id="telephone"
					type="tel"
					label="Telefone"
					error={errors.telephone}
					register={register("telephone", { value: "" })}
					placeholder="DDD + o número"
				/>
			</CustomModal>
		</>
	);
};

export default BtnAddContact;
