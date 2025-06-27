export interface IButtonProps {
  title: string; // Texto exibido dentro do botão
  disabled?: boolean; // Indica se o botão está desabilitado (opcional)
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Função chamada ao clicar no botão (opcional)
}
