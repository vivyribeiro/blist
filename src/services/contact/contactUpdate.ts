import api from "../api";

import { iContact, iContactUpdate } from "../../types/contexts";

const update = async (id: string, data: iContactUpdate): Promise<iContact> => {
	const response = await api.patch<iContact>(`contacts/${id}`, data);

	return response.data;
};

export default update;
