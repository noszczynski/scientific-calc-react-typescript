import { ButtonAppearance, OperatorButton } from "../../components/Button";
import { Operator } from "../Operators";

const buttons: OperatorButton[] = [
  {
    label: "x!",
    operator: Operator.Factorial,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "(",
    operator: Operator.LeftBracket,
    appearance: ButtonAppearance.Light,
  },
  {
    label: ")",
    operator: Operator.RightBracket,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "%",
    operator: Operator.Percent,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "CE",
    operator: Operator.Clear,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "Inv",
    operator: Operator.Inv,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "sin",
    operator: Operator.Sinus,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "ln",
    operator: Operator.Ln,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "7",
    operator: Operator.Seven,
    appearance: ButtonAppearance.Dark,
  },
  {
    label: "8",
    operator: Operator.Eight,
    appearance: ButtonAppearance.Dark,
  },
  {
    label: "9",
    operator: Operator.Nine,
    appearance: ButtonAppearance.Dark,
  },
  {
    label: "÷",
    operator: Operator.Div,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "π",
    operator: Operator.PI,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "cos",
    operator: Operator.Cosinus,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "log",
    operator: Operator.Logarithm,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "4",
    operator: Operator.Four,
    appearance: ButtonAppearance.Dark,
  },
  {
    label: "5",
    operator: Operator.Five,
    appearance: ButtonAppearance.Dark,
  },
  {
    label: "6",
    operator: Operator.Six,
    appearance: ButtonAppearance.Dark,
  },
  {
    label: "×",
    operator: Operator.Multiplier,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "e",
    operator: Operator.Exponent,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "tan",
    operator: Operator.Tangens,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "√",
    operator: Operator.Root,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "1",
    operator: Operator.One,
    appearance: ButtonAppearance.Dark,
  },
  {
    label: "2",
    operator: Operator.Two,
    appearance: ButtonAppearance.Dark,
  },
  {
    label: "3",
    operator: Operator.Three,
    appearance: ButtonAppearance.Dark,
  },
  {
    label: "-",
    operator: Operator.Minus,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "Ans",
    operator: Operator.Ans,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "EXP",
    operator: Operator.Exp,
    appearance: ButtonAppearance.Light,
  },
  {
    label: (
      <span>
        x<sup>y</sup>
      </span>
    ),
    operator: Operator.Power,
    appearance: ButtonAppearance.Light,
  },
  {
    label: "0",
    operator: Operator.Zero,
    appearance: ButtonAppearance.Dark,
  },
  {
    label: ".",
    operator: Operator.Dot,
    appearance: ButtonAppearance.Dark,
  },
  {
    label: "=",
    operator: Operator.Equal,
    appearance: ButtonAppearance.Special,
  },
  {
    label: "+",
    operator: Operator.Plus,
    appearance: ButtonAppearance.Light,
  },
];

export default buttons;
