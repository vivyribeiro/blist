import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useGlobalContext } from "../../contexts/globalContext";

import Loader from "../Loader";
import { useUserContext } from "../../contexts/userContext";

const ProtectRoutes = () => {
	const { user } = useUserContext();
	const { globalLoading } = useGlobalContext();

	const location = useLocation().pathname;
	const token = localStorage.getItem("blist@token");

	if (globalLoading) {
		return <Loader size="xl" />;
	}

	return (
		<>
			{user ? (
				<Outlet />
			) : (
				<Navigate to="/" replace state={{ from: location }} />
			)}
		</>
	);
};

export default ProtectRoutes;
