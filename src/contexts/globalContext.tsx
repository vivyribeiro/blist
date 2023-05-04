import { createContext, useContext, useEffect, useState } from "react";

import { iGlobalContextProps } from "../types/contexts";
import { mandatoryChildren } from "../types/components";

export const GlobalContext = createContext({} as iGlobalContextProps);

export const GlobalProvider = ({ children }: mandatoryChildren) => {
	const [isVisible, setIsVisible] = useState(false);
	const [globalLoading, setGlobalLoading] = useState(true);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const getWindowSize = () => {
		const { innerWidth } = window;
		return { innerWidth };
	};

	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize(getWindowSize());
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<GlobalContext.Provider
			value={{ isVisible, windowSize, globalLoading, setGlobalLoading }}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = (): iGlobalContextProps =>
	useContext(GlobalContext);
