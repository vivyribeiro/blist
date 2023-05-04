import api from "../api";

const destroy = async (id: string): Promise<void> => {
	await api.delete<void>(`contacts/${id}`);
};

export default destroy;
