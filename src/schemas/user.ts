import { z } from "zod";
import { contactsListSchema } from "./contacts";

const userSchema = z.object({
	id: z.string(),
	fullName: z.string(),
	email: z.string(),
	telephone: z.string(),
	role: z.enum(["admin", "client"]),
	createdAt: z.string(),
	updatedAt: z.string(),
	deletedAt: z.string().nullable(),
	resetToken: z.string().nullable(),
	isEmailVerified: z.boolean().default(false)
});

const userContacts = userSchema.extend({
	contacts: contactsListSchema
});

export { userSchema, userContacts };
