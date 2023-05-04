import { UserProvider } from "./userContext";
import { GlobalProvider } from "./globalContext";
import { ContactProvider } from "./contactContext";

import { mandatoryChildren } from "../types/components";
import { ToastProvider } from "./toastContext";

const Providers = ({ children }: mandatoryChildren) => {
	return (
		<ToastProvider>
			<GlobalProvider>
				<UserProvider>
					<ContactProvider>{children}</ContactProvider>
				</UserProvider>
			</GlobalProvider>
		</ToastProvider>
	);
};

export default Providers;
