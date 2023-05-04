import api from "../api";

import { iContact, iContactRequest } from "../../types/contexts";

const update = async (id: string, data: iContactRequest): Promise<iContact> => {
	const response = await api.patch<iContact>(`contacts/${id}`, data);

	return response.data;
};

export default update;
