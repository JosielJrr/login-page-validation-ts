import { useForm } from "react-hook-form"; // Lida com o estado do formulário
import { yupResolver } from "@hookform/resolvers/yup"; // Permite usar a validação do Yup com o react-hook-form
import * as yup from "yup"; // Biblioteca Yup para definir regras de validação

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";

import { defaultValues, IFormLogin } from "./types"; // Importa os valores iniciais e o tipo do formulário

// Define o esquema de validação do formulário usando Yup
const schema = yup
  .object({
    // Campo de e-mail: precisa ser uma string válida e obrigatória
    email: yup
      .string()
      .email("E-mail inválido")         // Mostra mensagem se o e-mail for inválido
      .required("Campo obrigatório"),   // Torna o campo obrigatório

    // Campo de senha: precisa ser uma string com no mínimo 6 caracteres e obrigatória
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres") // Valida o comprimento mínimo da senha
      .required("Campo obrigatório"),   // Torna o campo obrigatório
  })
  .required(); // Torna o objeto inteiro obrigatório


export const Login = () => {
  // Inicializa o hook useForm com o tipo IFormLogin e configurações de validação
  const {
    control,                 // Utilizado para registrar os campos de input
    formState: { errors, isValid }, // Captura os erros e status de validade do formulário
    handleSubmit,            // Função que trata o submit e executa a função de callback
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),    // Usa o schema do Yup como validador
    mode: "onChange",                 // Valida os campos sempre que são alterados
    defaultValues,                    // Valores iniciais do formulário
    reValidateMode: "onChange",       // Revalida sempre que o input mudar
  });

  // Função chamada quando o formulário é enviado com sucesso
  const onSubmit = (data: IFormLogin) => {
    console.log("Formulário enviado:", data);
  };

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />

          {/* Campo de e-mail */}
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message} // Exibe a mensagem de erro do campo se houver
          />
          <Spacing />

          {/* Campo de senha */}
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message} // Exibe a mensagem de erro do campo se houver
          />
          <Spacing />

          {/* Botão de envio, desabilitado se o formulário for inválido */}
          <Button
            title="Entrar"
            disabled={!isValid}
            onClick={handleSubmit(onSubmit)} // Envia o formulário se for válido
          />
        </Column>
      </LoginContainer>
    </Container>
  );
};
