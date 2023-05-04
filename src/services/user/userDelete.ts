import api from "../api";

const destroyUser = async (id: string): Promise<void> => {
	await api.delete<void>(`users/${id}`);
};

export default destroyUser;
