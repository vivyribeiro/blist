import { z } from "zod";

const registerSchema = z
	.object({
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
			.length(11, "Deve conter exatamente 11 caracteres"),
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

const registerAdminSchema = z.object({
	fullName: z.string().min(1, "Campo obrigatório").min(2).max(50),
	email: z
		.string()
		.min(1, "Campo obrigatório")
		.email("E-mail inválido")
		.min(7)
		.max(70),
	telephone: z.string().min(1, "Campo obrigatório").length(11),
	password: z
		.string()
		.min(1, "Campo obrigatório")
		.regex(new RegExp(".*[A-Z].*"), "One uppercase character")
		.regex(new RegExp(".*[a-z].*"), "One lowercase character")
		.regex(new RegExp(".*\\d.*"), "One number")
		.regex(
			new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
			"One special character"
		)
		.min(6, "Deve conter pelo menos 6 digítos")
		.max(120),
	confirmPassword: z
		.string()
		.min(1, "Campo obrigatório")
		.min(6, "Deve conter pelo menos 6 digítos")
		.max(120),
	role: z.string().default("admin")
});

export { registerSchema, registerAdminSchema };
