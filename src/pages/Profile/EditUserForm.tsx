import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Flex, Heading, VStack } from "@chakra-ui/react";

import { useUserContext } from "../../contexts/userContext";

import InputForm from "../../components/InputForm";

import { iUserEdit } from "../../types/contexts";
import { updateSchema } from "../../schemas/update";

const EditUserForm = () => {
	const { user, userUpdate } = useUserContext();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<iUserEdit>({
		resolver: zodResolver(updateSchema),
		mode: "all"
	});

	return (
		<>
			<Heading fontSize="2xl" py={8} textAlign="center">
				Atualizar Perfil
			</Heading>
			<VStack
				as="form"
				onSubmit={handleSubmit(data => userUpdate(user?.id!, data))}
				spacing={4}
				px={8}
			>
				<InputForm
					id="fullName"
					type="text"
					label="Nome completo"
					error={errors.fullName}
					placeholder="Fulano de Tal"
					register={register("fullName", { value: user?.fullName })}
				/>

				<InputForm
					id="email"
					type="email"
					label="E-mail"
					error={errors.email}
					placeholder="email@mail.com"
					register={register("email", { value: user?.email })}
				/>

				<InputForm
					id="telephone"
					type="tel"
					label="Telefone"
					error={errors.telephone}
					placeholder="DDD + o número"
					register={register("telephone", { value: user?.telephone })}
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

export default EditUserForm;
