import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements
} from "react-router-dom";
import { Heading } from "@chakra-ui/react";

import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import RootLayout from "../layouts/RootLayout";
import FreeRoutes from "../components/FreeRoutes";
import ProtectRoutes from "../components/ProtectRoutes";
import ConfirmationEmail from "../pages/ConfirmationEmail";
import UserResetPassword from "../pages/ResetPassword/UserResetPassword";
import SendResetPasswordEmail from "../pages/ResetPassword/SendResetPasswordEmail";
import Profile from "../pages/Profile";

const MainRoutes = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={<RootLayout />}
				errorElement={
					<Heading h="100vh" textAlign="center">
						"Oops, Algo deu errado!🤷"
					</Heading>
				}
			>
				<Route element={<FreeRoutes />}>
					<Route index element={<Login />} />

					<Route path="register" element={<Register />}>
						<Route path=":role" />
					</Route>

					<Route path="confirm_email/:token" element={<ConfirmationEmail />} />

					<Route path="">
						<Route
							path="reset_password/"
							element={<SendResetPasswordEmail />}
						/>
						<Route
							path="reset_password/:token"
							element={<UserResetPassword />}
						/>
					</Route>
				</Route>

				<Route element={<ProtectRoutes />}>
					<Route path="profile" element={<Profile />} />
					<Route path="dashboard" element={<Dashboard />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default MainRoutes;
