import {
	Flex,
	Popover,
	IconButton,
	PopoverBody,
	PopoverArrow,
	useDisclosure,
	PopoverContent,
	PopoverTrigger,
	useColorModeValue
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import NavLink from "../NavLink";
import { homeLinks } from "../menuLinks";
import { useGlobalContext } from "../../../contexts/globalContext";

const HomeNavBar = () => {
	const { windowSize } = useGlobalContext();
	return <>{windowSize.innerWidth > 767 ? <DesktopNav /> : <MobileNav />}</>;
};

const DesktopNav = () => (
	<Flex
		display={{ base: "none", md: "flex" }}
		justifyContent="space-between"
		gap="2"
	>
		{homeLinks.map(({ name, path }) => (
			<NavLink key={name} path={path} type="router">
				{name}
			</NavLink>
		))}
	</Flex>
);

const MobileNav = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} isLazy={true}>
			<PopoverTrigger>
				<IconButton
					bg="none"
					size="lg"
					aria-label="Abrir menu"
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					display={{ base: "flex", md: "none" }}
				/>
			</PopoverTrigger>
			<PopoverContent mt="7px" mr="8px" w="18rem">
				<PopoverArrow />

				<PopoverBody>
					<Flex gap="2" justifyContent="space-between" flexDirection="column">
						{homeLinks.map(({ name, path }) => (
							<NavLink key={name} path={path} type="router">
								{name}
							</NavLink>
						))}
					</Flex>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

export default HomeNavBar;
