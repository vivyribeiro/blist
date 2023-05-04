import { useState } from "react";
import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { iInputFormProps } from "../../types/components";

const InputForm = ({
	id,
	type,
	label,
	error,
	register,
	placeholder
}: iInputFormProps) => {
	const fieldError = error != undefined;

	const [showPassword, setShowPassword] = useState(false);
	const toShowPassword = () => {
		setShowPassword(showPassword => !showPassword);
	};

	return (
		<>
			{type == "password" ? (
				<FormControl id={id} isInvalid={fieldError}>
					<FormLabel>{label}</FormLabel>
					<InputGroup>
						<Input
							type={showPassword ? "text" : "password"}
							placeholder={placeholder}
							{...register}
							errorBorderColor="red.500"
						/>
						<InputRightElement h={"full"}>
							<Button variant={"ghost"} onClick={toShowPassword}>
								{showPassword ? <ViewOffIcon /> : <ViewIcon />}
							</Button>
						</InputRightElement>
					</InputGroup>
					{error && <FormErrorMessage as="p">{error.message}</FormErrorMessage>}
				</FormControl>
			) : (
				<FormControl id={id} isInvalid={fieldError}>
					<FormLabel>{label}</FormLabel>
					<Input
						type={type}
						placeholder={placeholder}
						{...register}
						errorBorderColor="red.500"
					/>
					{error && <FormErrorMessage as="p">{error.message}</FormErrorMessage>}
				</FormControl>
			)}
		</>
	);
};

export default InputForm;
