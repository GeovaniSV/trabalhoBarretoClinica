export interface IUser {
  id: number;
  email: string;
  senha: string;
}

export interface ILogin {
  email: string;
  senha: string;
}

export interface IMedico {
  nome: string;
  telefone: string;
  cep: string;
  especialidade: string;
}

export interface IPaciente {
  nome: string;
  telefone: string;
  cep: string;
}

export interface IRegister {
  email: string;
  senha: string;
  tipo: string;
  nome: string;
  telefone: string;
  cep: string;
  especialidade?: string | undefined;
}
