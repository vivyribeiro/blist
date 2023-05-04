import { HStack, useColorModeValue } from "@chakra-ui/react";

import NavBar from "../Navigation/NavBar";

const Header = () => (
	<>
		<HStack
			py="1rem"
			w="full"
			shadow="sm"
			position="fixed"
			justifyContent="center"
			border="none"
			borderBottom="solid"
			borderWidth="1px"
			borderBottomColor={useColorModeValue("gray.300", "gray.700")}
			bg={useColorModeValue("gray.100", "gray.900")}
			zIndex="sticky"
		>
			<NavBar />
		</HStack>
	</>
);

export default Header;
