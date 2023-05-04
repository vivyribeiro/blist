import {
	Box,
	Heading,
	Text,
	Button,
	VStack,
	Flex,
	useColorModeValue
} from "@chakra-ui/react";
import NavLink from "../../components/Navigation/NavLink";

const NotFound = () => {
	const hColor = useColorModeValue("blue.800", "white");

	return (
		<VStack pt="80px" pb="40px">
			<Box textAlign="center" px={8} alignItems="center">
				<Text
					display="inline-block"
					as="h2"
					fontSize="2xl"
					fontWeight="bold"
					color={hColor}
				>
					404
				</Text>
				<Text fontSize="18px" mt={3} mb={2}>
					Página Não Encontrada
				</Text>
				<Text color={"gray.500"} mb={3}>
					A página que você está procurando não existe
				</Text>
			</Box>
			<Flex w="10rem" justifyContent="center">
				{/* <Button variant="brandSolid">Ir pra Home</Button> */}
				<NavLink path="/" type="router" variant="brandSolid">
					Ir pra Home
				</NavLink>
			</Flex>
		</VStack>
	);
};

export default NotFound;
