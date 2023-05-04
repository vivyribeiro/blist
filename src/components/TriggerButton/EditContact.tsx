import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { EditIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure } from "@chakra-ui/react";

import CustomModal from "../Modal";
import InputForm from "../InputForm";

import { useUserContext } from "../../contexts/userContext";
import { useContactContext } from "../../contexts/contactContext";

import { updateSchema } from "../../schemas/update";
import { iContactRequest } from "../../types/contexts";
import { iModalTriggerProps } from "../../types/components";

const EditContact = ({ id }: iModalTriggerProps) => {
	const { contacts } = useUserContext();
	const { updateContact } = useContactContext();
	const { isOpen, onOpen, onClose } = useDisclosure();

	let contact = contacts.find(contact => contact.id == id);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<iContactRequest>({
		resolver: zodResolver(updateSchema),
		mode: "all"
	});

	const edit = (data: iContactRequest) => {
		updateContact(contact?.id!, data);
		onClose();
	};

	return (
		<>
			<IconButton
				icon={<EditIcon />}
				onClick={onOpen}
				title="Editar Contato"
				aria-label="Editar Contato"
			/>
			<CustomModal
				isOpen={isOpen}
				onClose={onClose}
				textClose="Cancelar"
				textConfirm="Salvar"
				title="Editar Contato"
				isLoading={isSubmitting}
				fnConfirm={handleSubmit(edit)}
			>
				<InputForm
					id="fullName"
					type="text"
					label="Nome completo"
					error={errors.fullName}
					placeholder="Fulano de Tal"
					register={register("fullName", { value: contact?.fullName })}
				/>

				<InputForm
					id="email"
					type="email"
					label="E-mail"
					error={errors.email}
					placeholder="email@mail.com"
					register={register("email", { value: contact?.email })}
				/>

				<InputForm
					id="telephone"
					type="tel"
					label="Telefone"
					error={errors.telephone}
					placeholder="DDD + o número"
					register={register("telephone", { value: contact?.telephone })}
				/>
			</CustomModal>
		</>
	);
};

export default EditContact;
