import api from "../api";

import { iUser, iUserEdit } from "../../types/contexts";

const editUser = async (id: string, userData: iUserEdit): Promise<iUser> => {
	const { data } = await api.patch<iUser>(`users/${id}`, userData);

	return data;
};

export default editUser;
