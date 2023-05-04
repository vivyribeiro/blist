import { Button, Flex, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { iPaginationProps } from "../../types/components";

const Pagination = ({
	totalPage,
	currentPage,
	setCurrentPage
}: iPaginationProps) => {
	const prevPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const nextPage = () => {
		if (currentPage !== totalPage) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<>
			<Flex gap="1rem">
				{currentPage > 1 ? (
					<Button
						leftIcon={<ChevronLeftIcon />}
						_hover={{ color: "blue.300" }}
						onClick={prevPage}
					>
						Anterior
					</Button>
				) : null}
				<Flex gap="4px" align="center">
					<Text size="1" variant="600">
						{currentPage}
					</Text>
					<Text size="1" variant="600" color="gray.400">
						de {totalPage}
					</Text>
				</Flex>
				{totalPage > currentPage ? (
					<Button
						rightIcon={<ChevronRightIcon />}
						_hover={{ color: "blue.300" }}
						onClick={nextPage}
					>
						Próxima
					</Button>
				) : null}
			</Flex>
		</>
	);
};

export default Pagination;
