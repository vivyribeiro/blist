import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";

const FreeRoutes = () => {
	const { user } = useUserContext();

	const location = useLocation().pathname;
	const token = localStorage.getItem("blist@token");

	return (
		<>
			{user ? (
				<Navigate to="/dashboard" replace state={{ from: location }} />
			) : (
				<Outlet />
			)}
		</>
	);
};

export default FreeRoutes;
