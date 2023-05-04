import { Link } from "react-router-dom";
import { Image, useColorMode } from "@chakra-ui/react";

import whiteLogo from "../../assets/logoW.png";
import standardLogo from "../../assets/logo.png";

import { useUserContext } from "../../contexts/userContext";

const Logo = () => {
	const { colorMode } = useColorMode();
	const { user } = useUserContext();

	return (
		<>
			<Link to={user ? "/dashboard" : "/"}>
				<Image
					src={colorMode == "dark" ? whiteLogo : standardLogo}
					maxW="5rem"
					alt="Blist Logo"
					title="Blist"
				/>
			</Link>
		</>
	);
};

export default Logo;
