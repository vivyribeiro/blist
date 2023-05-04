import api from "../api";

import { iUser, iUserEditPassword } from "../../types/contexts";

const userEditPassword = async (
	id: string,
	passData: iUserEditPassword
): Promise<iUser> => {
	const { data } = await api.patch<iUser>(`users/${id}`, passData);

	return data;
};

export default userEditPassword;
