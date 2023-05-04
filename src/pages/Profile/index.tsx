import { EditIcon, LockIcon } from "@chakra-ui/icons";
import {
	Tab,
	Grid,
	Tabs,
	VStack,
	TabList,
	GridItem,
	TabPanel,
	TabPanels,
	useColorModeValue
} from "@chakra-ui/react";
import EditUserForm from "./EditUserForm";
import EditPasswordForm from "./EditPasswordForm";
import AvatarProfile from "../../components/AvatarProfile";

const Profile = () => {
	return (
		<>
			<VStack
				pt="5rem"
				px="2rem"
				maxW="8xl"
				minH="100vh"
				margin="auto"
				alignItems="center"
				justifyContent="center"
			>
				<Tabs
					w={{ base: "18rem", xs: "23rem", md: "full" }}
					maxW="50rem"
					py={{ base: "4rem", sm: "1rem" }}
				>
					<Grid
						w="full"
						shadow="md"
						minH="28rem"
						borderRadius="4px"
						templateColumns="repeat(3, 1fr)"
						bg={useColorModeValue("gray.100", "gray.700")}
					>
						<GridItem
							colSpan={{ base: 3, md: 1 }}
							w="inherit"
							minH="20rem"
							borderRight={{ md: "1px solid" }}
							borderBottom={{ base: "1px solid", md: "none" }}
							borderColor="blue.200!important"
						>
							<AvatarProfile />
							<TabList flexDirection="column" border="none" w="full" mt="1rem">
								<Tab
									pl="1rem"
									gap="1rem"
									border="none"
									alignItems="flex-start"
									justifyContent="flex-start"
									_selected={{ color: "white", bg: "blue.300" }}
								>
									<EditIcon boxSize="18px" /> Detalhes da Conta
								</Tab>
								<Tab
									pl="1rem"
									gap="1rem"
									border="none"
									alignItems="flex-start"
									justifyContent="flex-start"
									_selected={{
										color: "white",
										bg: "blue.300"
									}}
								>
									<LockIcon boxSize="18px" /> Mudar Senha
								</Tab>
							</TabList>
						</GridItem>
						<GridItem colSpan={{ base: 3, md: 2 }} w="inherit">
							<TabPanels>
								<TabPanel>
									<EditUserForm />
								</TabPanel>
								<TabPanel>
									<EditPasswordForm />
								</TabPanel>
							</TabPanels>
						</GridItem>
					</Grid>
				</Tabs>
			</VStack>
		</>
	);
};

export default Profile;
