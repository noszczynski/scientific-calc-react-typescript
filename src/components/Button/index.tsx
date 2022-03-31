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

export interface ButtonProps extends OperatorButton {
  onClick(): void;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, appearance }) => {
  return (
    <Container appearance={appearance} onClick={onClick}>
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
        `;
      case ButtonAppearance.Dark:
        return css`
          background-color: #3c4043;
          color: #ffffff;
        `;
      case ButtonAppearance.Special:
        return css`
          background-color: #8ab4f8;
          color: #202124;
        `;
      default:
        throw Error("Unexpected ButtonAppearance");
    }
  }};
`;

export default Button;
