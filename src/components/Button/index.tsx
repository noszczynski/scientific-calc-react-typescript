import React, {ReactNode} from "react";
import styled, {css} from "styled-components";

export enum ButtonAppearance {
    Light,
    Dark,
    Special,
}

export interface ButtonProps {
    label: string | JSX.Element;

    callback(): void;

    appearance: ButtonAppearance;
}

const Button: React.FC<ButtonProps> = ({label, callback, appearance}) => {
    return <Container appearance={appearance} onClick={callback}>{label}</Container>;
};

const Container = styled.button<Pick<ButtonProps, "appearance">>`
  font-size: 18px;
  border: 0;
  cursor: pointer;
  border-radius: 0.25rem;
  line-height: 34px;
  text-align: center;

  ${({appearance}) => {
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
