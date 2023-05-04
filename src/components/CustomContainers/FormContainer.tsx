import { Box, Flex, Stack, useColorModeValue } from "@chakra-ui/react";

import { mandatoryChildren } from "../../types/components";

const FormContainer = ({ children }: mandatoryChildren) => (
	<>
		<Flex minH="100vh" align="center" justify="center" pt="14">
			<Stack as="section" spacing={8} mx="auto" maxW="lg" py={12} px={6}>
				<Box
					rounded="lg"
					bg={useColorModeValue("white", "gray.700")}
					boxShadow="lg"
					p={8}
				>
					{children}
				</Box>
			</Stack>
		</Flex>
	</>
);

export default FormContainer;
