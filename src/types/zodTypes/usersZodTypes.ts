import z from "zod";

const userZodLogin = z.object({
  email: z.email().trim(),
  senha: z.string().trim(),
});

const userZodRegister = z.object({
  email: z.email().trim(),
  senha: z.string().trim(),
  tipo: z.string().trim(),
  nome: z.string().trim(),
  telefone: z.string().trim(),
  cep: z.string().trim(),
  especialidade: z.string().trim().optional(),
});

export { userZodLogin, userZodRegister };
