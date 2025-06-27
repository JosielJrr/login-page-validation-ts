// Interface que define o formato dos dados do formulário de login
export interface IFormLogin {
    email: string;
    password: string;
}

// Valores padrão iniciais para o formulário de login, começando vazio
export const defaultValues: IFormLogin = {
    email: '',
    password: ''
}
