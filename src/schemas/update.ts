import { z } from "zod";

import { requestContactSchema } from "./contacts";

const updateSchema = requestContactSchema;

const updatePasswordSchema = z
	.object({
		password: z
			.string()
			.min(1, "Campo obrigatório")
			.regex(new RegExp(".*[A-Z].*"), "Pelo menos uma letra maiúscula")
			.regex(new RegExp(".*[a-z].*"), "Pelo menos uma letra minúscula")
			.regex(new RegExp(".*\\d.*"), "Pelo menos um número")
			.regex(
				new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
				"Pelo menos um caractere especial"
			)
			.min(6, "Deve conter pelo menos 6 digítos"),
		confirmPassword: z.string().min(1, "Campo obrigatório")
	})
	.refine(data => data.password === data.confirmPassword, {
		message: "As senhas devem ser iguais",
		path: ["confirmPassword"]
	});

export { updateSchema, updatePasswordSchema };
