import {
	ButtonProps,
	ChakraComponent,
	IconButtonProps
} from "@chakra-ui/react";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type mandatoryChildren = {
	children: ReactNode;
};

export type optionalChildren = Partial<mandatoryChildren>;

export type iNavLinkProps = mandatoryChildren & {
	path: string;
	variant?: string;
	type: "router" | "external" | "section";
};

export type iMenuLink = {
	name: string;
	path: string;
};

export type iLoaderProps = {
	color?: string;
	size: string;
};

export type iInputFormProps = {
	id: string;
	type: string;
	label: string;
	placeholder: string;
	error: FieldError | undefined;
	register: UseFormRegisterReturn<string>;
};

export type iSearchInputProps = {
	value: string;
	placeholder: string;
	setValue: Dispatch<SetStateAction<string>>;
};

export type iDialogConfirmationProps = {
	isOpen: boolean;
	textBody: string;
	textHeader: string;
	textCancel: string;
	textConfirm: string;
	onClose: () => void;
	fnConfirm: () => void;
};

export type iCustomModalProps = {
	title: string;
	isOpen: boolean;
	textClose: string;
	textConfirm: string;
	isLoading?: boolean;
	children: ReactNode;
	onClose: () => void;
	fnConfirm: () => void;
};

export type iTriggerBtnProps = {
	id?: string;
	type: "add" | "edit" | "delete";
};

export type iModalTriggerProps = Pick<iTriggerBtnProps, "id">;

export type iPaginationProps = {
	totalPage: number;
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
};
