import api from "../api";
import {
	iSendResetPasswordEmail,
	iUserResetPassword
} from "../../types/contexts";

const sendResetPasswordEmail = async (
	data: iSendResetPasswordEmail
): Promise<iUserResetPassword> => {
	const response = await api.post<iUserResetPassword>("/reset_password", data);

	return response.data;
};

export default sendResetPasswordEmail;
