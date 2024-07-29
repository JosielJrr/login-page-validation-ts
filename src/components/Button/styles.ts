import styled from "styled-components";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  height: 42px;
  background-color: ${({ disabled }) => (disabled ? "#dcdcdc" : "#81259d")};
  color: ${({ disabled }) => (disabled ? "#a0a0a0" : "#fff")};
  border: 1px solid ${({ disabled }) => (disabled ? "#dcdcdc" : "#81259d")};
  border-radius: 21px;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? "1" : "0.6")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }

  &:focus {
    outline: none;
  }
  }
`;
