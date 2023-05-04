import AddContact from "./AddContact";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";

import { iTriggerBtnProps } from "../../types/components";

const TriggerButton = ({ type, id }: iTriggerBtnProps) => {
	return (
		<>
			{type == "add" ? <AddContact /> : null}

			{type == "delete" ? <DeleteContact id={id} /> : null}

			{type == "edit" ? <EditContact id={id} /> : null}
		</>
	);
};

export default TriggerButton;
