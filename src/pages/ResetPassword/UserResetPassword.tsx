import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
	Box,
	VStack,
	Button,
	Heading,
	useColorModeValue
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { useUserContext } from "../../contexts/userContext";

import InputForm from "../../components/InputForm";
import NavLink from "../../components/Navigation/NavLink";
import FormContainer from "../../components/CustomContainers/FormContainer";

import { iUserResetPasswordRequest } from "../../types/contexts";
import { userResetPasswordSchema } from "../../schemas/resetPassword";

const UserResetPassword = () => {
	const { userResetPassword } = useUserContext();
	const [sucessMessage, setSucessMessage] = useState<string | null | undefined>(
		null
	);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted, isSubmitting }
	} = useForm<iUserResetPasswordRequest>({
		resolver: zodResolver(userResetPasswordSchema)
	});

	const submitData = async (data: iUserResetPasswordRequest) => {
		const message = await userResetPassword(data);

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
				</VStack>
			) : (
				<VStack w="full" spacing="1rem">
					<Box w="inherit" alignContent="start" mb="16px">
						<NavLink path="/login" type="router">
							Voltar para Login
						</NavLink>
					</Box>
					<Box w="inherit" alignContent="start">
						<Heading
							size={{ base: "md", sm: "lg" }}
							textAlign="center"
							mb="8px"
						>
							Redefinição de Senha
						</Heading>
					</Box>
					<Box
						mt="32px!important"
						onSubmit={handleSubmit(submitData)}
						as="form"
						w="inherit"
					>
						<VStack spacing="24px">
							<InputForm
								id="password"
								type="password"
								label="Nova Senha"
								error={errors.password}
								register={register("password")}
								placeholder="••••••"
							/>

							<InputForm
								id="confirmPassword"
								type="password"
								label="Confirmar Senha"
								error={errors.confirmPassword}
								register={register("confirmPassword")}
								placeholder="••••••"
							/>
						</VStack>

						<Button
							w="full"
							mt="32px"
							type="submit"
							variant="brandSolid"
							isLoading={isSubmitting}
						>
							Redefinir senha
						</Button>
					</Box>
				</VStack>
			)}
		</FormContainer>
	);
};

export default UserResetPassword;
