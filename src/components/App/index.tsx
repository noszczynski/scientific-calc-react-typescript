import React, {useMemo} from "react";
import styled from "styled-components";
import Button, {ButtonAppearance, ButtonProps} from "../Button";

const App = () => {
    const buttons: ButtonProps[] = useMemo(() => [
        {
            label: "Rad",
            callback: () => console.log("Rad"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "Deg",
            callback: () => console.log("Deg"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "x!",
            callback: () => console.log("x!"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "(",
            callback: () => console.log("("),
            appearance: ButtonAppearance.Light,
        },
        {
            label: ")",
            callback: () => console.log(")"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "%",
            callback: () => console.log("%"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "CE",
            callback: () => console.log("CE"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "Inv",
            callback: () => console.log("Inv"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "sin",
            callback: () => console.log("sin"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "ln",
            callback: () => console.log("ln"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "7",
            callback: () => console.log("7"),
            appearance: ButtonAppearance.Dark,
        },
        {
            label: "8",
            callback: () => console.log("8"),
            appearance: ButtonAppearance.Dark,
        },
        {
            label: "9",
            callback: () => console.log("9"),
            appearance: ButtonAppearance.Dark,
        },
        {
            label: "÷",
            callback: () => console.log("÷"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "π",
            callback: () => console.log("π"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "cos",
            callback: () => console.log("cos"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "log",
            callback: () => console.log("log"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "4",
            callback: () => console.log("4"),
            appearance: ButtonAppearance.Dark,
        },
        {
            label: "5",
            callback: () => console.log("5"),
            appearance: ButtonAppearance.Dark,
        },
        {
            label: "6",
            callback: () => console.log("6"),
            appearance: ButtonAppearance.Dark,
        },
        {
            label: "×",
            callback: () => console.log("×"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "e",
            callback: () => console.log("e"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "tan",
            callback: () => console.log("tan"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "√",
            callback: () => console.log("√"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "1",
            callback: () => console.log("1"),
            appearance: ButtonAppearance.Dark,
        },
        {
            label: "2",
            callback: () => console.log("2"),
            appearance: ButtonAppearance.Dark,
        },
        {
            label: "3",
            callback: () => console.log("3"),
            appearance: ButtonAppearance.Dark,
        },
        {
            label: "-",
            callback: () => console.log("-"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "Ans",
            callback: () => console.log("Ans"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "EXP",
            callback: () => console.log("EXP"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: <span>x<sup>y</sup></span>,
            callback: () => console.log("xy"),
            appearance: ButtonAppearance.Light,
        },
        {
            label: "0",
            callback: () => console.log("0"),
            appearance: ButtonAppearance.Dark,
        },
        {
            label: ".",
            callback: () => console.log("."),
            appearance: ButtonAppearance.Dark,
        },
        {
            label: "=",
            callback: () => console.log("="),
            appearance: ButtonAppearance.Special,
        },
        {
            label: "+",
            callback: () => console.log("+"),
            appearance: ButtonAppearance.Light,
        },
    ], []);

    return (
        <Wrapper>
            <Container>
                {buttons.map((button) => <Button key={button.label.toString()} {...button}/>)}
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 0.25rem;
`;

export default App;
