import { z } from "zod";
import { AlertStatus } from "@chakra-ui/react";
import { Dispatch, ReactNode, SetStateAction } from "react";

import {
	sendResetPasswordSchema,
	userResetPasswordSchema
} from "../schemas/resetPassword";
import { loginSchema } from "../schemas/login";
import { userContacts, userSchema } from "../schemas/user";
import {
	contactSchema,
	contactsListSchema,
	requestContactSchema
} from "../schemas/contacts";
import { registerSchema, registerAdminSchema } from "../schemas/register";
import { updatePasswordSchema, updateSchema } from "../schemas/update";

export type iUser = z.infer<typeof userSchema>;
export type iUserContacts = z.infer<typeof userContacts>;

export type iContact = z.infer<typeof contactSchema>;
export type iContactsList = z.infer<typeof contactsListSchema>;

export type iUserLogin = z.infer<typeof loginSchema>;

export type iUserLoginResponse = {
	token: string;
	user: iUserContacts;
};

export type iUserProfileResponse = {
	user: iUser;
	contacts: iContactsList;
};

export type iUserRegister = z.infer<typeof registerSchema>;
export type iUserAdminRegister = z.infer<typeof registerAdminSchema>;

export type iUserProviderData = {
	user: iUser | null;
	reportLoader: boolean;
	userLogout: () => void;
	contacts: iContactsList;
	userReport: () => Promise<void>;
	requestResetPassword: (
		data: iSendResetPasswordEmail
	) => Promise<string | undefined>;
	userResetPassword: (
		data: iUserResetPasswordRequest
	) => Promise<string | undefined>;
	userDelete: (id: string) => Promise<void>;
	userLogin: (data: iUserLogin) => Promise<void>;
	userRegister: (data: iUserRegister) => Promise<void>;
	setContacts: Dispatch<SetStateAction<iContactsList>>;
	userUpdate: (id: string, data: iUserEdit) => Promise<void>;
	userPasswordUpdate: (id: string, data: iUserEditPassword) => Promise<void>;
};

export type iGlobalContextProps = {
	isVisible: boolean;
	windowSize: {
		innerWidth: number;
	};
	globalLoading: boolean;
	setGlobalLoading: Dispatch<SetStateAction<boolean>>;
};

export type iToast = {
	title: string;
	description: string;
	customIcon?: ReactNode;
	status: AlertStatus;
};

export type iToastProviderData = {
	toast: (toastData: iToast) => void;
};

export type iUserConfirmEmail = { message: string };
export type iUserResetPassword = iUserConfirmEmail;
export type iSendResetPasswordEmail = z.infer<typeof sendResetPasswordSchema>;
export type iUserResetPasswordRequest = z.infer<typeof userResetPasswordSchema>;

export type iUserEdit = z.infer<typeof updateSchema>;
export type iContactRequest = z.infer<typeof requestContactSchema>;
export type iUserEditPassword = z.infer<typeof updatePasswordSchema>;

export type iContactTableProps = {
	total: number;
	list: iContactsList;
};

export type iContactsContextProps = {
	count: number | null;
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
	removeContact: (id: string) => Promise<void>;
	setCount: Dispatch<SetStateAction<number | null>>;
	addContact: (contactData: iContactRequest) => Promise<void>;
	updateContact: (id: string, contactData: iContactRequest) => Promise<void>;
};
