import { createContext, useContext } from "react";

import { Box, useColorModeValue, useToast } from "@chakra-ui/react";

import { mandatoryChildren } from "../types/components";
import { iToast, iToastProviderData } from "../types/contexts";

const ToastContext = createContext<iToastProviderData>(
	{} as iToastProviderData
);

export const ToastProvider = ({ children }: mandatoryChildren) => {
	const toastForm = useToast();
	const toast = ({ title, description, status, customIcon }: iToast) => {
		toastForm({
			title,
			status,
			description,
			icon: customIcon,
			variant: "solid",
			position: "top-right",
			isClosable: true
		});
	};

	return (
		<ToastContext.Provider value={{ toast }}>{children}</ToastContext.Provider>
	);
};

export const useToastForm = (): iToastProviderData => useContext(ToastContext);
