import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure } from "@chakra-ui/react";

import DialogConfirmation from "../DialogConfirmation";
import { useContactContext } from "../../contexts/contactContext";

import { iModalTriggerProps } from "../../types/components";

const DeleteContact = ({ id }: iModalTriggerProps) => {
	const { removeContact } = useContactContext();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const remove = () => {
		removeContact(id!);
		onClose();
	};

	return (
		<>
			<IconButton
				onClick={onOpen}
				icon={<DeleteIcon />}
				title="Excluir Contato"
				aria-label="Excluir Contato"
			/>
			<DialogConfirmation
				isOpen={isOpen}
				onClose={onClose}
				fnConfirm={remove}
				textCancel="Cancelar"
				textConfirm="Excluir"
				textHeader="Excluir Contato"
				textBody="Você tem certeza disso? Essa ação não poderá ser desfeita."
			/>
		</>
	);
};

export default DeleteContact;
