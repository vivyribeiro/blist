import { useState } from "react";
import {
	Flex,
	Grid,
	Spacer,
	HStack,
	VStack,
	Button,
	Heading,
	GridItem,
	Text
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

import { useUserContext } from "../../contexts/userContext";
import { useGlobalContext } from "../../contexts/globalContext";

import Pagination from "../../components/Pagination";
import SearchInput from "../../components/SearchInput";
import ContactsTable from "../../components/ContactsTable";
import TriggerButton from "../../components/TriggerButton";
import { useContactContext } from "../../contexts/contactContext";

const Dashboard = () => {
	const { windowSize } = useGlobalContext();
	const { search, setSearch } = useContactContext();
	const { userReport, reportLoader, contacts } = useUserContext();

	const itemsPerPage = 5;
	const [currentPage, setCurrentPage] = useState(1);
	const endIndex = currentPage * itemsPerPage;
	const startIndex = endIndex - itemsPerPage;
	const items = contacts.slice(startIndex, endIndex);
	const totalList = contacts.length == 0 ? 1 : contacts.length;
	const totalPage = Math.ceil(totalList / itemsPerPage);

	const commonStyle = {
		px: "10px",
		fontSize: "14px",
		variant: "brandSolid",
		justifyContent: "space-between",
		minW: { base: "max-content", md: "7.25rem" }
	};

	return (
		<>
			<VStack
				minH="100vh"
				pt="5rem"
				px="2rem"
				maxW="8xl"
				margin="auto"
				alignItems="start"
			>
				<Grid
					templateColumns="repeat(8, 1fr)"
					mt="1rem!important"
					gap="1.5rem"
					w="full"
				>
					<GridItem colSpan={8} w="inherit">
						<HStack h="4rem">
							<SearchInput
								value={search}
								setValue={setSearch}
								placeholder="pesquisar..."
							/>
							{windowSize.innerWidth > 539 ? <Spacer w="50%" /> : null}
							<Flex gap={{ base: "0.5rem", md: "1rem" }} pl={{ md: "1rem" }}>
								<TriggerButton type="add" />
								<Button
									{...commonStyle}
									isLoading={reportLoader}
									onClick={() => userReport()}
								>
									{windowSize.innerWidth > 540 ? "Relátorio" : ""}{" "}
									<DownloadIcon boxSize="1.15rem" />
								</Button>
							</Flex>
						</HStack>
						<HStack
							gap="1rem"
							justifyContent="space-between"
							flexDirection={{ base: "column", sm: "row" }}
							alignItems={{ base: "flex-start", sm: "flex-end" }}
						>
							<Heading fontSize={{ base: "xl", lg: "2xl" }} mt="2rem">
								Contatos
							</Heading>
							<Pagination
								totalPage={totalPage}
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
							/>
						</HStack>
					</GridItem>

					<GridItem
						colSpan={8}
						w="inherit"
						maxH="29.5rem"
						borderTop="1px solid"
						borderTopColor="blue.300"
					>
						{contacts.length ? (
							<ContactsTable list={items} total={contacts.length} />
						) : (
							<Heading fontSize={{ base: "xl", lg: "2xl" }} mt="2rem">
								Ainda não há contato(s) cadastrado(s)
							</Heading>
						)}
					</GridItem>
				</Grid>
			</VStack>
		</>
	);
};

export default Dashboard;
