import { ThemeConfig } from "@chakra-ui/theme";
import { extendTheme } from "@chakra-ui/theme-utils";

import styles from "./style";
import components from "../components";
import { fonts, colors } from "../foundations";

const config: ThemeConfig = {
	initialColorMode: "light",
	useSystemColorMode: false
};

const customTheme = extendTheme({ config, colors, fonts, styles, components });

export default customTheme;
