import React from "react";
import styled, { css } from "styled-components";
import { pxToRem } from "../../helpers";
import { Operator } from "../../constants/Operators";
import { useCalculator } from "../../hooks/useCalculator";

export enum ButtonAppearance {
  Light,
  Dark,
  Special,
}

export enum ButtonType {
  Digit = "Digit",
  Dot = "Dot",
  Action = "Action",
  Calculator = "Calculator",
}

export interface OperatorButton {
  operator: Operator;
  label: string | Operator | JSX.Element;
  appearance: ButtonAppearance;
  type: ButtonType;
  keyboardKey?: string;
}

export interface ButtonProps extends Partial<OperatorButton> {
  onClick(): void;
  setRef(ref: HTMLButtonElement | null): void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled,
  appearance,
  operator,
  keyboardKey,
  setRef,
}) => {
  const { isShortcutsShown } = useCalculator();

  return (
    <Container
      ref={(ref) => setRef(ref)}
      appearance={appearance}
      data-cy={operator}
      data-keyboard-key={keyboardKey || label}
      data-label={label}
      data-operator={operator}
      disabled={disabled}
      id={`button-${operator}`}
      onClick={onClick}
    >
      {label}
      {isShortcutsShown && <Shortcut>{keyboardKey || label}</Shortcut>}
    </Container>
  );
};

const Container = styled.button<Pick<ButtonProps, "appearance">>`
  font-size: ${pxToRem(18)};
  border: none;
  border-radius: ${pxToRem(4)};
  line-height: ${pxToRem(34)};
  text-align: center;
  cursor: pointer;
  position: relative;

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

  &:focus {
    outline: 1px solid red;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #202124;
  }
`;

const Shortcut = styled.span`
  line-height: 100%;
  position: absolute;
  bottom: ${pxToRem(2)};
  right: ${pxToRem(2)};
  font-size: ${pxToRem(10)};
`;

export default Button;
