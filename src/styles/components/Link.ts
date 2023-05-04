import { ComponentStyleConfig, defineStyle } from "@chakra-ui/react";

const standard = defineStyle({
	color: "blue.800",
	fontSize: "14px",
	fontWeight: "normal",
	_dark: {
		color: "whiteAlpha.900"
	},
	_hover: {
		textDecoration: "none",
		color: "blue.300",
		_dark: {
			color: "blue.300"
		}
	},
	_activeLink: {
		color: "blue.300!important"
	}
});

const brandSolid = defineStyle({
	p: "0.75rem",
	borderRadius: "4px",
	bg: "blue.800",
	color: "white",
	_hover: {
		textDecoration: "none",
		bg: "blue.700"
	},
	_activeLink: {
		bg: "blue.700!important"
	}
});

const Link: ComponentStyleConfig = {
	baseStyle: {
		transition: "all 0.5s ease-out"
	},
	variants: {
		standard,
		brandSolid
	},
	defaultProps: {
		variant: "standard"
	}
};

export default Link;
