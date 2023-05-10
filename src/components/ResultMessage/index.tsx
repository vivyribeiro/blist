import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";

import { iResultMessageProps } from "../../types/components";

const ResultMessage = ({
	type,
	text,
	style,
	children
}: iResultMessageProps) => {
	const vConfig = {
		w: "full",
		align: "center",
		spacing: "1rem",
		justifyContent: "center"
	};

	const icConfig = {
		boxSize: "3rem",
		color: useColorModeValue("blue.800", "whiteAlpha.900")
	};
	// mt="1rem"
	return (
		<>
			{type == "success" && (
				<>
					{style == "doble" && (
						<VStack {...vConfig}>
							<CheckCircleIcon {...icConfig} />
							<Heading fontSize={{ base: "16px", md: "xl" }} textAlign="center">
								{children}
							</Heading>
							<Text textAlign="justify" fontSize={{ base: "12px", md: "lg" }}>
								{text ? text : "Por favor, tente novamente mais tarde."}
							</Text>
						</VStack>
					)}

					{style == "single" && (
						<VStack {...vConfig}>
							<CheckCircleIcon {...icConfig} />
							<Heading fontSize={{ base: "16px", md: "xl" }} textAlign="center">
								{children}
							</Heading>
						</VStack>
					)}
				</>
			)}

			{type == "error" && (
				<>
					{style == "doble" && (
						<VStack {...vConfig}>
							<WarningTwoIcon {...icConfig} />
							<Heading fontSize={{ base: "16px", md: "xl" }} textAlign="center">
								{children}
							</Heading>
							<Text textAlign="justify" fontSize={{ base: "12px", md: "lg" }}>
								{text ? text : "Por favor, tente novamente mais tarde."}
							</Text>
						</VStack>
					)}

					{style == "single" && (
						<VStack {...vConfig}>
							<WarningTwoIcon {...icConfig} />
							<Heading fontSize={{ base: "16px", md: "xl" }} textAlign="center">
								{children}
							</Heading>
						</VStack>
					)}
				</>
			)}
		</>
	);
};

export default ResultMessage;
