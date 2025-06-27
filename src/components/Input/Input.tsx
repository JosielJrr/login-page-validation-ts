import { InputContainer, ErrorMessage } from "./styles";
import { IInputProps } from "././types";
import { Controller } from "react-hook-form";

export const Input = ({ control, name, errorMessage, ...rest }: IInputProps) => {
  return (
    <>
      <InputContainer>
        {/* Controlador do react-hook-form que conecta o input ao formulário */}
        <Controller
          control={control}  // controle do formulário
          name={name}        // nome do campo no formulário (email ou password)
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <input
              {...rest}       // demais props passadas para o input (ex: placeholder, type)
              onChange={onChange} // atualiza o valor no form
              onBlur={onBlur}     // notifica perda de foco
              value={value}       // valor atual do input
              ref={ref}           // referência para controle do react-hook-form
            />
          )}
        />
      </InputContainer>

      {/* Exibe mensagem de erro caso exista */}
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </>
  );
};
