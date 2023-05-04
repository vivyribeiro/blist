import { Flex } from "@chakra-ui/react";

import Logo from "../../Logo";
import HomeNavBar from "./HomeNavBar";
import DashboardNavBar from "./DashboardNavBar";
import ThemeSelector from "../../ThemeSelector";
import { useUserContext } from "../../../contexts/userContext";

const NavBar = () => {
	const { user } = useUserContext();

	return (
		<>
			<Flex
				px="2rem"
				mx="auto"
				w="8xl"
				align="center"
				justifyContent="space-between"
			>
				<Logo />
				<Flex gap="24px" align="center">
					<ThemeSelector />
					{user ? <DashboardNavBar /> : <HomeNavBar />}
				</Flex>
			</Flex>
		</>
	);
};
export default NavBar;
