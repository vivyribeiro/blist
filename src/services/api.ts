import axios from "axios";

const api = axios.create({
	baseURL: "https://blist-api.onrender.com/",
	timeout: 5000
});

export default api;
