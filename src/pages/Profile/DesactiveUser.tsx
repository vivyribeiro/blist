import { Button, useDisclosure } from "@chakra-ui/react";

import { iModalTriggerProps } from "../../types/components";
import { useUserContext } from "../../contexts/userContext";
import DialogConfirmation from "../../components/DialogConfirmation";

const DeactivateAccount = ({ id }: iModalTriggerProps) => {
	const { userDelete } = useUserContext();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const disable = () => {
		userDelete(id!);
		onClose();
	};

	return (
		<>
			<Button
				onClick={onOpen}
				title="Desativar Conta"
				aria-label="Desativar Conta"
				_hover={{ color: "red.500" }}
			>
				Desativar Conta
			</Button>
			<DialogConfirmation
				isOpen={isOpen}
				onClose={onClose}
				fnConfirm={disable}
				textCancel="Cancelar"
				textConfirm="Desativar"
				textHeader="Desativar Conta"
				textBody="Você tem certeza disso? Sua conta ficará inativa, mas poderá ser reativado ao fazer novamente o login no sistema."
			/>
		</>
	);
};

export default DeactivateAccount;
