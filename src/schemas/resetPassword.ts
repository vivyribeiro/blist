import { z } from "zod";

export const sendResetPasswordSchema = z.object({
	email: z.string().min(1, "Campo obrigatório").email("Digite um e-mail válido")
});

export const userResetPasswordSchema = z
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
			.min(6, "Deve conter pelo menos 6 digítos")
			.max(120),
		confirmPassword: z.string().min(1, "Campo obrigatório")
	})
	.refine(data => data.password === data.confirmPassword, {
		message: "As senhas devem ser iguais",
		path: ["confirmPassword"]
	});
