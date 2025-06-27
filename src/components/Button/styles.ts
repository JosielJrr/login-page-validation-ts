import styled from "styled-components";

// Define as props aceitas pelo ButtonContainer
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Função de clique opcional
  children?: React.ReactNode; // Conteúdo interno do botão opcional
  disabled?: boolean; // Estado desabilitado opcional
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  height: 42px;

  /* Estilos que variam conforme o estado disabled: cor de fundo, texto e borda */
  background-color: ${({ disabled }) => (disabled ? "#dcdcdc" : "#81259d")};
  color: ${({ disabled }) => (disabled ? "#a0a0a0" : "#fff")};
  border: 1px solid ${({ disabled }) => (disabled ? "#dcdcdc" : "#81259d")};

  border-radius: 21px;

  /* Efeito hover: muda opacidade e cursor, respeitando estado disabled */
  &:hover {
    opacity: ${({ disabled }) => (disabled ? "1" : "0.6")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }

  /* Remove contorno de foco padrão para personalizar visual */
  &:focus {
    outline: none;
  }
`;
