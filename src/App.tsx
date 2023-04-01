import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RootLayout from "./layouts";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Login />} />
			<Route path="register" element={<Register />} />
			<Route path="register/:admin" element={<Register />} />
			<Route path="dashboard" element={<Dashboard />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
