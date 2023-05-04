import { Avatar, Heading, VStack } from "@chakra-ui/react";

import { useUserContext } from "../../contexts/userContext";

const AvatarProfile = () => {
	const { user } = useUserContext();

	return (
		<>
			<VStack
				py="24px"
				spacing="16px"
				justifyContent="center"
				alignContent="center"
			>
				<Avatar
					size="lg"
					bg="green.500"
					rounded="full"
					userSelect="none"
					name={user?.fullName}
				/>
				<Heading fontSize="lg">{user?.fullName}</Heading>
			</VStack>
		</>
	);
};

export default AvatarProfile;
