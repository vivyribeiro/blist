import {
	ColorModeProvider,
	CSSReset,
	theme,
	ThemeProvider
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<ThemeProvider theme={theme}>
			<ColorModeProvider>
				<CSSReset />
				<Outlet />
			</ColorModeProvider>
		</ThemeProvider>
	);
};

export default RootLayout;
