import api from "../api";
import {
	iUserResetPassword,
	iUserResetPasswordRequest
} from "../../types/contexts";

const resetPassword = async (
	token: string,
	data: iUserResetPasswordRequest
): Promise<iUserResetPassword> => {
	const response = await api.patch<iUserResetPassword>(
		`/reset_password/${token}`,
		data
	);

	return response.data;
};

export default resetPassword;
