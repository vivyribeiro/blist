import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Text, Stack, Button, Heading, VStack, Flex } from "@chakra-ui/react";

import { useUserContext } from "../../contexts/userContext";

import { loginSchema } from "../../schemas/login";
import { iUserLogin } from "../../types/contexts";

import InputForm from "../../components/InputForm";
import NavLink from "../../components/Navigation/NavLink";
import FormContainer from "../../components/CustomContainers/FormContainer";

const Login = () => {
	const { userLogin } = useUserContext();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<iUserLogin>({ resolver: zodResolver(loginSchema), mode: "all" });

	return (
		<>
			<FormContainer>
				<Stack align="center" spacing={4}>
					<Heading fontSize="4xl" pb={4}>
						Login
					</Heading>
					<VStack as="form" onSubmit={handleSubmit(userLogin)} spacing={4}>
						<InputForm
							id="email"
							type="email"
							label="Seu e-mail"
							error={errors.email}
							register={register("email")}
							placeholder="email@mail.com"
						/>

						<InputForm
							id="password"
							type="password"
							label="Sua senha"
							error={errors.password}
							register={register("password")}
							placeholder="••••••"
						/>

						<Stack spacing={5} pt={2} w="full">
							<Flex w="inherit" justifyContent="flex-end" align="center">
								<NavLink path="/reset_password" type="router">
									Esqueceu a senha?
								</NavLink>
							</Flex>
							<Button
								type="submit"
								variant="brandSolid"
								isLoading={isSubmitting}
							>
								Entrar
							</Button>

							<Text align="center" fontSize="14px">
								{"Não possui uma conta? "}
								<NavLink path="/register" type="router">
									Cadastre-se
								</NavLink>
							</Text>
						</Stack>
					</VStack>
				</Stack>
			</FormContainer>
		</>
	);
};

export default Login;
