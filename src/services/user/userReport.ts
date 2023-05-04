import { AxiosRequestConfig } from "axios";

import api from "../api";

const report = async (userId: string): Promise<string> => {
	const token = localStorage.getItem("blist@token");

	const axiosConfig: AxiosRequestConfig = {
		responseType: "arraybuffer",
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${token}`
		}
	};

	const response = await api.get<string>(`users/${userId}/report`, axiosConfig);

	return response.data;
};

export default report;
