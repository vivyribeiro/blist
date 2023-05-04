import { NavLink as ReactRouterLink } from "react-router-dom";

import { Link } from "@chakra-ui/react";
import { iNavLinkProps } from "../../../types/components";

const NavLink = ({ children, variant, type, path }: iNavLinkProps) => (
	<>
		{type == "router" && (
			<Link as={ReactRouterLink} to={path} variant={variant}>
				{children}
			</Link>
		)}

		{type == "section" && (
			<Link href={`#${path}`} variant={variant}>
				{children}
			</Link>
		)}

		{type == "external" && (
			<Link href={`http://${path}`} variant={variant} isExternal>
				{children}
			</Link>
		)}
	</>
);

export default NavLink;

/*
<Box
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700")
		}}
	>
	</Box>
*/
