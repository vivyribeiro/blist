import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Text, Stack, Button, VStack, Heading } from "@chakra-ui/react";

import { useUserContext } from "../../contexts/userContext";

import { iUserRegister } from "../../types/contexts";
import { registerSchema } from "../../schemas/register";

import InputForm from "../../components/InputForm";
import NavLink from "../../components/Navigation/NavLink";
import FormContainer from "../../components/CustomContainers/FormContainer";

const Register = () => {
	const { userRegister } = useUserContext();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<iUserRegister>({
		resolver: zodResolver(registerSchema),
		mode: "all"
	});

	return (
		<>
			<FormContainer>
				<Stack align={"center"} spacing={4}>
					<Heading fontSize={"4xl"} pb={4}>
						Cadastro
					</Heading>
					<VStack as="form" onSubmit={handleSubmit(userRegister)} spacing={4}>
						<InputForm
							id="fullName"
							type="text"
							label="Seu nome completo"
							error={errors.fullName}
							register={register("fullName")}
							placeholder="Fulano de Tal"
						/>

						<InputForm
							id="email"
							type="email"
							label="Seu e-mail"
							error={errors.email}
							register={register("email")}
							placeholder="email@mail.com"
						/>

						<InputForm
							id="telephone"
							type="tel"
							label="Seu telefone"
							error={errors.telephone}
							register={register("telephone")}
							placeholder="DDD + o número"
						/>

						<InputForm
							id="password"
							type="password"
							label="Sua senha"
							error={errors.password}
							register={register("password")}
							placeholder="••••••"
						/>

						<InputForm
							id="confirmPassword"
							type="password"
							label="Confirme sua senha"
							error={errors.confirmPassword}
							register={register("confirmPassword")}
							placeholder="••••••"
						/>

						<Stack spacing={5} pt={2} w="full">
							<Button
								type="submit"
								variant="brandSolid"
								isLoading={isSubmitting}
							>
								Cadastrar
							</Button>

							<Text align={"center"} fontSize="14px">
								{"Já possui uma conta? "}
								<NavLink path="/" type="router">
									Login
								</NavLink>
							</Text>
						</Stack>
					</VStack>
				</Stack>
			</FormContainer>
		</>
	);
};

export default Register;
