import { z } from "zod";

const requestContactSchema = z.object({
	fullName: z
		.string()
		.min(1, "Campo obrigatório")
		.min(2, "Deve conter pelo no mínimo 2 letras")
		.max(50),
	email: z
		.string()
		.min(1, "Campo obrigatório")
		.email("E-mail inválido")
		.max(70),
	telephone: z
		.string()
		.min(1, "Campo obrigatório")
		.length(11, "Deve conter exatamente 11 caracteres")
});

const contactSchema = z.object({
	id: z.string(),
	fullName: z.string(),
	email: z.string(),
	telephone: z.string(),
	createdAt: z.string(),
	updatedAt: z.string()
});

const contactsListSchema = z.array(contactSchema);

export { contactSchema, contactsListSchema, requestContactSchema };
