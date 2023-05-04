import api from "../api";

import { iContact, iContactRequest } from "../../types/contexts";

const contactRegister = async (data: iContactRequest): Promise<iContact> => {
	const { data: contactData } = await api.post<iContact>("contacts", data);

	return contactData;
};

export default contactRegister;
