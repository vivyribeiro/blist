import { Outlet } from "react-router-dom";

import Providers from "../../contexts/Providers";

import Header from "../../components/Header";

const RootLayout = () => {
	return (
		<>
			<Providers>
				<Header />
				<Outlet />
			</Providers>
		</>
	);
};

export default RootLayout;
