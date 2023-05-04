import { StyleFunctionProps } from "@chakra-ui/react";

const styles = {
	global: (props: StyleFunctionProps) => ({
		"html, body": {
			fontSize: "sm",
			color: props.colorMode === "dark" ? "whiteAlpha.900" : "blue.800",
			bg: props.colorMode === "dark" ? "gray.800" : "gray.50",
			lineHeight: "tall"
		}
	})
};

export default styles;
