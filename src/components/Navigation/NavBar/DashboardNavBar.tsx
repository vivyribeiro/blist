import { useLocation } from "react-router-dom";
import {
	Flex,
	Button,
	Avatar,
	VStack,
	Popover,
	Divider,
	Accordion,
	PopoverBody,
	PopoverArrow,
	useDisclosure,
	AccordionItem,
	AccordionIcon,
	PopoverContent,
	PopoverTrigger,
	AccordionPanel,
	AccordionButton
} from "@chakra-ui/react";

import { useUserContext } from "../../../contexts/userContext";

import NavLink from "../NavLink";
import AvatarProfile from "../../AvatarProfile";
import DeactivateAccount from "../../../pages/Profile/DesactiveUser";

const DashboardNavBar = () => {
	const { user, userLogout } = useUserContext();
	const { isOpen, onClose, onOpen } = useDisclosure();

	const location = useLocation();

	return (
		<>
			<Popover
				trigger="hover"
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
				isLazy={true}
				closeOnBlur={false}
			>
				<PopoverTrigger>
					<Avatar
						size="sm"
						bg="green.500"
						rounded="full"
						cursor="pointer"
						userSelect="none"
						name={user?.fullName}
					/>
				</PopoverTrigger>
				<PopoverContent mt="6px" mx="8px" w="18rem">
					<PopoverArrow />

					<PopoverBody p="0" w={{ base: "15rem!important", xs: "20rem" }}>
						<Flex justifyContent="space-between" flexDirection="column">
							<AvatarProfile />
							<Divider />
							<VStack
								p="16px"
								spacing="12px"
								alignItems="flex-start"
								minH="110px"
								display="flex"
								justifyContent="space-between"
							>
								<NavLink
									path={
										location.pathname == "/profile" ? "/dashboard" : "/profile"
									}
									type="router"
								>
									{location.pathname == "/profile" ? "Dashboard" : "Perfil"}
								</NavLink>

								<Accordion allowToggle w="full">
									<AccordionItem border="none" alignItems="start">
										<AccordionButton
											w="full"
											px="0"
											justifyContent="space-between"
											_expanded={{ color: "blue.300" }}
											_hover={{ bg: "none", color: "blue.300" }}
										>
											Configurações
											<AccordionIcon />
										</AccordionButton>
										<AccordionPanel pb={4}>
											<DeactivateAccount id={user?.id} />
										</AccordionPanel>
									</AccordionItem>
								</Accordion>
								<Button
									onClick={() => userLogout()}
									fontSize="14px"
									fontWeight="normal"
									_hover={{ color: "blue.300" }}
								>
									Sair
								</Button>
							</VStack>
						</Flex>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</>
	);
};

export default DashboardNavBar;
