import { Spinner, VStack } from "@chakra-ui/react";

import { iLoaderProps } from "../../types/components";

const Loader = ({ color, size }: iLoaderProps) => {
	return (
		<VStack pt="20" align="center" justifyContent="center" h="100vh">
			<Spinner
				thickness="0.25rem"
				speed="0.5s"
				emptyColor="gray.300"
				color={color || "blue.300"}
				size={size}
			/>
		</VStack>
	);
};

export default Loader;
