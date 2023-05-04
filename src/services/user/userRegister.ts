import api from "../api";

import { iUserAdminRegister, iUserRegister } from "../../types/contexts";

const register = async (
	data: iUserRegister | iUserAdminRegister
): Promise<object> => {
	const response = await api.post<object>("users", data);

	return response.data;
};

export default register;
