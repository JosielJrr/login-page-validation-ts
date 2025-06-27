import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types"; // Importa a interface das props do botão

export const Button: React.FC<IButtonProps> = ({ title, disabled, onClick }) => {
  return (
    <ButtonContainer
      disabled={disabled} // Desabilita o botão, bloqueando clique e alterando estilo
      onClick={onClick}   // Executa onClick ao clicar, só funciona se não estiver desabilitado
    >
      {title}
    </ButtonContainer>
  );
};

