import api from "../api";

import { iUserContacts, iUserProfileResponse } from "../../types/contexts";

const userProfile = async (): Promise<iUserProfileResponse | undefined> => {
	const token = localStorage.getItem("blist@token");

	if (token) {
		api.defaults.headers.common.authorization = `Bearer ${token}`;
		const { data } = await api.get<iUserContacts>("profile");
		const { contacts, ...userData } = data!;

		return { user: userData, contacts };
	}
};

export default userProfile;
