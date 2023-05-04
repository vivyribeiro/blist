import {
	Th,
	Tr,
	Td,
	Table,
	Thead,
	Tbody,
	Tfoot,
	TableCaption,
	TableContainer
} from "@chakra-ui/react";

import TriggerButton from "../TriggerButton";
import { iContactTableProps } from "../../types/contexts";

const ContactsTable = ({ list, total }: iContactTableProps) => {
	return (
		<>
			<TableContainer>
				<Table variant="striped" colorScheme="blue">
					<TableCaption fontSize="16px">
						{" "}
						{`Contatos em exibição: ${list.length} de ${total} cadastrados`}
					</TableCaption>
					<Thead>
						<Tr>
							<Th>ID</Th>
							<Th>Name</Th>
							<Th>E-mail</Th>
							<Th>Telefone</Th>
							<Th></Th>
							<Th></Th>
						</Tr>
					</Thead>
					<Tbody>
						{list.map(({ id, fullName, email, telephone }) => (
							<Tr key={id}>
								<Td>{id}</Td>
								<Td>{fullName}</Td>
								<Td>{email}</Td>
								<Td>{telephone}</Td>
								<Td>
									<TriggerButton type="edit" id={id} />
								</Td>
								<Td>
									<TriggerButton type="delete" id={id} />
								</Td>
							</Tr>
						))}
					</Tbody>
					<Tfoot>
						<Tr>
							<Th>ID</Th>
							<Th>Name</Th>
							<Th>E-mail</Th>
							<Th>Telefone</Th>
						</Tr>
					</Tfoot>
				</Table>
			</TableContainer>
		</>
	);
};

export default ContactsTable;
