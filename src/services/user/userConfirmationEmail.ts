import { iUserConfirmEmail } from "../../types/contexts";
import api from "../api";

const userConfirmationEmail = async (
	token: string
): Promise<iUserConfirmEmail> => {
	const response = await api.get<iUserConfirmEmail>(`confirm_email/${token}`);

	return response.data;
};

export default userConfirmationEmail;
