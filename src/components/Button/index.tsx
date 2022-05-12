import React from "react";
import styled, { css } from "styled-components";
import { pxToRem } from "../../helpers";
import { Operator } from "../../providers/CalculatorProvider";

export enum ButtonAppearance {
  Light,
  Dark,
  Special,
}

export interface OperatorButton {
  operator: Operator;
  label: string | Operator | JSX.Element;
  appearance: ButtonAppearance;
}

export interface ButtonProps extends Partial<OperatorButton> {
  onClick(): void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled,
  appearance,
  operator,
}) => {
  return (
    <Container
      appearance={appearance}
      data-cy={operator}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Container>
  );
};

const Container = styled.button<Pick<ButtonProps, "appearance">>`
  font-size: ${pxToRem(18)};
  border: none;
  cursor: pointer;
  border-radius: ${pxToRem(4)};
  line-height: ${pxToRem(34)};
  text-align: center;

  ${({ appearance }) => {
    switch (appearance) {
      case ButtonAppearance.Light:
        return css`
          background-color: #5f6368;
          color: #ffffff;

          &:hover {
            background-color: #70757a;
          }
        `;
      case ButtonAppearance.Dark:
        return css`
          background-color: #3c4043;
          color: #ffffff;

          &:hover {
            background-color: #424548;
          }
        `;
      case ButtonAppearance.Special:
        return css`
          background-color: #8ab4f8;
          color: #202124;

          &:hover {
            background-color: #aecbfa;
          }
        `;
      default:
        throw Error(`Unexpected ButtonAppearance: ${appearance}`);
    }
  }};

  &:disabled {
    background-color: red;
  }
`;

export default Button;
