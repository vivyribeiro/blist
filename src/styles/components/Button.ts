import { mode } from "@chakra-ui/theme-tools";
import { ComponentStyleConfig, StyleFunctionProps } from "@chakra-ui/react";

const brandSolid = {
	h: "3rem",
	bg: "blue.800",
	color: "white",
	_hover: {
		bg: "blue.700"
	},
	_active: {
		bg: "blue.700"
	},
	_disabled: {
		cursor: "not allowed"
	}
};

const negative = (props: StyleFunctionProps) => ({
	h: "3rem",
	bg: "red.600",
	color: "white",
	_hover: {
		bg: "red.400"
	},
	_active: {
		bg: "red.400"
	},
	_disabled: {
		cursor: "not allowed"
	}
});

const Button: ComponentStyleConfig = {
	baseStyle: {
		fontSize: "14px",
		borderRadius: "6px",
		fontWeight: "semibold",
		transition: "all 0.5s ease-out"
	},

	sizes: {},

	variants: {
		negative,
		brandSolid
	},

	defaultProps: {
		size: "",
		variant: ""
	}
};

export default Button;
