export interface IUser {
  id?: number;
  email: string;
  senha: string;
}

export interface IRegisterMedico {
  email: string;
  senha: string;
  tipo: string;
  nome: string;
  telefone: string;
  cep: string;
  especialidade: string;
}

export interface IRegisterPaciente {
  email: string;
  senha: string;
  tipo: string;
  nome: string;
  telefone: string;
  cep: string;
}
