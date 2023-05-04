import {
	Modal,
	Button,
	ModalBody,
	ModalHeader,
	ModalFooter,
	ModalContent,
	ModalOverlay,
	ModalCloseButton
} from "@chakra-ui/react";

import { iCustomModalProps } from "../../types/components";

const CustomModal = ({
	title,
	isOpen,
	onClose,
	children,
	textClose,
	isLoading,
	fnConfirm,
	textConfirm
}: iCustomModalProps) => {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInRight">
				<ModalOverlay />
				<ModalContent mx="0.5rem">
					<ModalHeader>{title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody display="grid" gap="1rem">
						{children}
					</ModalBody>

					<ModalFooter justifyContent="space-between">
						<Button variant="negative" minW="45%" mr={3} onClick={onClose}>
							{textClose}
						</Button>
						<Button
							variant="brandSolid"
							minW="45%"
							onClick={fnConfirm}
							isLoading={isLoading}
						>
							{textConfirm}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CustomModal;
