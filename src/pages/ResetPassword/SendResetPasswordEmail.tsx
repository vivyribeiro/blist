import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
	Box,
	Text,
	Button,
	VStack,
	Heading,
	useColorModeValue
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { useUserContext } from "../../contexts/userContext";
import { iSendResetPasswordEmail } from "../../types/contexts";
import { sendResetPasswordSchema } from "../../schemas/resetPassword";

import InputForm from "../../components/InputForm";
import NavLink from "../../components/Navigation/NavLink";
import FormContainer from "../../components/CustomContainers/FormContainer";

const SendResetPasswordEmail = () => {
	const { requestResetPassword } = useUserContext();
	const [sucessMessage, setSucessMessage] = useState<string | null | undefined>(
		null
	);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted, isSubmitting }
	} = useForm<iSendResetPasswordEmail>({
		resolver: zodResolver(sendResetPasswordSchema)
	});

	const submitData = async (data: iSendResetPasswordEmail) => {
		const message = await requestResetPassword(data);

		setSucessMessage(message);
	};

	const icColor = useColorModeValue("blue.800", "whiteAlpha.900");

	return (
		<FormContainer>
			{isSubmitted && sucessMessage ? (
				<VStack w="full" align="center" justifyContent="center" spacing="1rem">
					<CheckCircleIcon color={icColor} boxSize="3rem" />
					<Heading fontSize={{ base: "16px", md: "xl" }} textAlign="center">
						{sucessMessage}!
					</Heading>
					<Text textAlign="justify" fontSize={{ base: "12px", md: "lg" }}>
						Por favor, verifique seu e-mail.
					</Text>
				</VStack>
			) : (
				<VStack w="full" spacing="1rem">
					<Box w="inherit" alignContent="start" mb="16px">
						<NavLink path="/" type="router">
							Voltar para Login
						</NavLink>
					</Box>
					<Box w="inherit" alignContent="start">
						<Heading
							size={{ base: "md", sm: "lg" }}
							textAlign="center"
							mb="8px"
						>
							Redefinir Senha
						</Heading>
						<Text textAlign="justify" fontSize={{ base: "md", md: "lg" }}>
							Ensira o e-mail cadastrado na sua conta e receba um link para
							redefinir sua senha.
						</Text>
					</Box>
					<Box
						mt="32px!important"
						onSubmit={handleSubmit(submitData)}
						as="form"
						w="inherit"
					>
						<InputForm
							id="email"
							type="email"
							label="Email"
							error={errors.email}
							register={register("email")}
							placeholder="Digitar email"
						/>

						<Button
							w="full"
							mt="16px"
							type="submit"
							variant="brandSolid"
							isLoading={isSubmitting}
						>
							Enviar Link
						</Button>
					</Box>
				</VStack>
			)}
		</FormContainer>
	);
};

export default SendResetPasswordEmail;
