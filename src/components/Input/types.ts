import { Control } from "react-hook-form";
import { IFormLogin } from "../../pages/Login/types";

// Interface para as props do componente Input
export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control: Control<IFormLogin, any>;   // controle do react-hook-form do formulário login
    name: "email" | "password";          // nome do campo no form (apenas email ou password)
    errorMessage?: string;               // mensagem de erro opcional para exibir no input
}
