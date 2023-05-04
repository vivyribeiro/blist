import { useRef } from "react";
import {
	Text,
	Button,
	AlertDialog,
	AlertDialogBody,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogContent,
	AlertDialogOverlay
} from "@chakra-ui/react";

import { iDialogConfirmationProps } from "../../types/components";

const DialogConfirmation = ({
	isOpen,
	onClose,
	textBody,
	fnConfirm,
	textHeader,
	textCancel,
	textConfirm
}: iDialogConfirmationProps) => {
	const cancelRef = useRef();

	return (
		<>
			<AlertDialog
				isOpen={isOpen}
				onClose={onClose}
				motionPreset="slideInRight"
				leastDestructiveRef={cancelRef.current!}
			>
				<AlertDialogOverlay>
					<AlertDialogContent mx={{ base: "1rem", sm: "0" }}>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							{textHeader}
						</AlertDialogHeader>

						<AlertDialogBody>
							<Text fontSize="14px">{textBody}</Text>
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button
								w="45%"
								onClick={onClose}
								variant="negative"
								ref={cancelRef.current}
							>
								{textCancel}
							</Button>
							<Button
								w="45%"
								ml={3}
								colorScheme="red"
								onClick={fnConfirm}
								variant="brandSolid"
							>
								{textConfirm}
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
};

export default DialogConfirmation;
