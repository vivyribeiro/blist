import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AxiosError } from "axios";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Flex, Heading, VStack, useColorModeValue } from "@chakra-ui/react";

import { useToastForm } from "../../contexts/toastContext";
import { useUserContext } from "../../contexts/userContext";

import Loader from "../../components/Loader";
import { iApiMessage } from "../../types/api.type";
import userConfirmationEmail from "../../services/user/userConfirmationEmail";

const ConfirmationEmail = () => {
	const { user } = useUserContext();
	const [isLoading, setIsLoading] = useState(false);
	const [sucessMessage, setSucessMessage] = useState<string | null | undefined>(
		null
	);

	const { toast } = useToastForm();

	const { token } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			if (user?.isEmailVerified) {
				setTimeout(() => {
					return navigate("/dashboard", { replace: true });
				}, 1500);
			}

			if (token) {
				try {
					setIsLoading(true);
					const response = await userConfirmationEmail(token);
					setSucessMessage(response.message);
				} catch (error) {
					const requestError = error as AxiosError<iApiMessage>;
					const message =
						requestError.response?.data.message || requestError.message;

					toast({
						title: "Email não enviado",
						description: message,
						status: "error"
					});
				} finally {
					setTimeout(() => {
						setIsLoading(false);
					}, 1000);
				}
			}
		})();
	}, [token]);

	const vBG = useColorModeValue("whiteAlpha.700", "gray.700");
	const icColor = useColorModeValue("blue.800", "whiteAlpha.900");

	return (
		<>
			{isLoading ? (
				<Loader size="xl" />
			) : (
				<Flex minH={"100vh"} align={"center"} justify={"center"} pt="14">
					<VStack
						spacing={8}
						py={10}
						px={6}
						mx="4"
						rounded="lg"
						bg={vBG}
						boxShadow="lg"
					>
						<CheckCircleIcon color={icColor} boxSize="3rem" />
						<Heading size={{ base: "md", md: "lg" }}>{sucessMessage}</Heading>
					</VStack>
				</Flex>
			)}
		</>
	);
};

export default ConfirmationEmail;
