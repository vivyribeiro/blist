import api from "../api";

import { iUserLogin, iUserLoginResponse } from "../../types/contexts";

const login = async (data: iUserLogin): Promise<iUserLoginResponse> => {
	const response = await api.post<iUserLoginResponse>("login", data);

	const { token } = response.data;
	api.defaults.headers.common.authorization = `Bearer ${token}`;

	return response.data;
};

export default login;
