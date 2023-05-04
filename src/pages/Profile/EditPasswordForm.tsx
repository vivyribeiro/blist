import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Flex, Heading, VStack } from "@chakra-ui/react";

import { useUserContext } from "../../contexts/userContext";

import InputForm from "../../components/InputForm";

import { iUserEditPassword } from "../../types/contexts";
import { updatePasswordSchema } from "../../schemas/update";

const EditPasswordForm = () => {
	const { user, userPasswordUpdate } = useUserContext();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<iUserEditPassword>({
		resolver: zodResolver(updatePasswordSchema),
		mode: "all"
	});

	return (
		<>
			<Heading fontSize="2xl" py={8} textAlign="center">
				Atualizar Senha
			</Heading>
			<VStack
				as="form"
				onSubmit={handleSubmit(data => userPasswordUpdate(user?.id!, data))}
				spacing={4}
				px={8}
			>
				<InputForm
					id="password"
					type="password"
					label="Nova senha"
					error={errors.password}
					register={register("password")}
					placeholder="••••••"
				/>

				<InputForm
					id="confirmPassword"
					type="password"
					label="Confirme a senha"
					error={errors.confirmPassword}
					register={register("confirmPassword")}
					placeholder="••••••"
				/>
				<Flex justifyContent="flex-end" w="full">
					<Button
						minW="6rem"
						type="submit"
						variant="brandSolid"
						isLoading={isSubmitting}
					>
						Salvar
					</Button>
				</Flex>
			</VStack>
		</>
	);
};

export default EditPasswordForm;
