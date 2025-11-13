import z from "zod";

const userZodLogin = z.object({
  email: z.email().trim(),
  senha: z.string().trim(),
});

const userMedicoLogin = z.object({
  email: z.email().trim(),
  senha: z.string().trim(),
  tipo: z.string().trim(),
  nome: z.string().trim(),
  telefone: z.string().trim(),
  cep: z.string().trim(),
  especialidade: z.string().trim(),
});

const userPacienteLogin = z.object({
  email: z.email().trim(),
  senha: z.string().trim(),
  tipo: z.string().trim(),
  nome: z.string().trim(),
  telefone: z.string().trim(),
  cep: z.string().trim(),
});

export { userZodLogin, userPacienteLogin, userMedicoLogin };
