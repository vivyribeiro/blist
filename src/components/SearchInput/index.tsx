import {
	Input,
	FormLabel,
	IconButton,
	InputGroup,
	FormControl,
	FormErrorMessage,
	InputRightElement
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { iSearchInputProps } from "../../types/components";

const SearchInput = ({ value, setValue, placeholder }: iSearchInputProps) => {
	const fieldError = value == " " ? true : false;

	return (
		<>
			<FormControl
				id="search"
				isInvalid={fieldError}
				w={{ base: "full", sm: "50%" }}
			>
				<FormLabel hidden>Pesquisar</FormLabel>
				<InputGroup>
					<Input
						h="3rem"
						type="search"
						value={value}
						borderRadius="6px"
						placeholder={placeholder}
						errorBorderColor="red.500"
						onChange={e => setValue(e.target.value)}
					/>
					<InputRightElement h="full">
						<IconButton
							type="submit"
							aria-label="pesquisar"
							variant="ghost"
							pointerEvents="none"
							icon={<SearchIcon />}
						/>
					</InputRightElement>
				</InputGroup>
				{fieldError && (
					<FormErrorMessage as="p">
						Informe o termo para pesquisa sem espaços em brancos
					</FormErrorMessage>
				)}
			</FormControl>
		</>
	);
};

export default SearchInput;
