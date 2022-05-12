import {
  ButtonAppearance,
  ButtonType,
  OperatorButton,
} from "../../components/Button";
import { Operator } from "../Operators";

const buttons: OperatorButton[] = [
  {
    label: "x!",
    operator: Operator.Factorial,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "(",
    operator: Operator.LeftBracket,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: ")",
    operator: Operator.RightBracket,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "%",
    operator: Operator.Percent,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "CE",
    operator: Operator.Clear,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Calculator,
  },
  {
    label: "Inv",
    operator: Operator.Inv,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "sin",
    operator: Operator.Sinus,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "ln",
    operator: Operator.Ln,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "7",
    operator: Operator.Seven,
    appearance: ButtonAppearance.Dark,
    type: ButtonType.Digit,
  },
  {
    label: "8",
    operator: Operator.Eight,
    appearance: ButtonAppearance.Dark,
    type: ButtonType.Digit,
  },
  {
    label: "9",
    operator: Operator.Nine,
    appearance: ButtonAppearance.Dark,
    type: ButtonType.Digit,
  },
  {
    label: "÷",
    operator: Operator.Div,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "π",
    operator: Operator.PI,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "cos",
    operator: Operator.Cosinus,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "log",
    operator: Operator.Logarithm,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "4",
    operator: Operator.Four,
    appearance: ButtonAppearance.Dark,
    type: ButtonType.Digit,
  },
  {
    label: "5",
    operator: Operator.Five,
    appearance: ButtonAppearance.Dark,
    type: ButtonType.Digit,
  },
  {
    label: "6",
    operator: Operator.Six,
    appearance: ButtonAppearance.Dark,
    type: ButtonType.Digit,
  },
  {
    label: "×",
    operator: Operator.Multiplier,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "e",
    operator: Operator.Exponent,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "tan",
    operator: Operator.Tangens,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "√",
    operator: Operator.Root,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "1",
    operator: Operator.One,
    appearance: ButtonAppearance.Dark,
    type: ButtonType.Digit,
  },
  {
    label: "2",
    operator: Operator.Two,
    appearance: ButtonAppearance.Dark,
    type: ButtonType.Digit,
  },
  {
    label: "3",
    operator: Operator.Three,
    appearance: ButtonAppearance.Dark,
    type: ButtonType.Digit,
  },
  {
    label: "-",
    operator: Operator.Minus,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "Ans",
    operator: Operator.Ans,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "EXP",
    operator: Operator.Exp,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: (
      <span>
        x<sup>y</sup>
      </span>
    ),
    operator: Operator.Power,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
  {
    label: "0",
    operator: Operator.Zero,
    appearance: ButtonAppearance.Dark,
    type: ButtonType.Digit,
  },
  {
    label: ".",
    operator: Operator.Dot,
    appearance: ButtonAppearance.Dark,
    type: ButtonType.Dot,
  },
  {
    label: "=",
    operator: Operator.Equal,
    appearance: ButtonAppearance.Special,
    type: ButtonType.Calculator,
  },
  {
    label: "+",
    operator: Operator.Plus,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
  },
];

export default buttons;
