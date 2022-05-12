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
    keyboardKey: "!",
  },
  {
    label: (
      <span>
        10<sup>x</sup>
      </span>
    ),
    operator: Operator.PowerTen,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
    keyboardKey: "y",
  },
  {
    label: (
      <span>
        e<sup>x</sup>
      </span>
    ),
    operator: Operator.ExponentPower,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
    keyboardKey: "w",
  },
  {
    label: "%",
    operator: Operator.Percent,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Calculator,
  },
  {
    label: "00",
    operator: Operator.DoubleZero,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Calculator,
    keyboardKey: "o",
  },
  {
    label: "←",
    operator: Operator.Backspace,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Calculator,
    keyboardKey: "Backspace",
  },
  {
    label: "Clear",
    operator: Operator.Clear,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Calculator,
    keyboardKey: " ",
  },
  {
    label: (
      <span>
        sin<sup>-1</sup>
      </span>
    ),
    operator: Operator.SinusPow,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
    keyboardKey: "u",
  },
  {
    label: "sin",
    operator: Operator.Sinus,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
    keyboardKey: "s",
  },
  {
    label: (
      <span>
        cos<sup>-1</sup>
      </span>
    ),
    operator: Operator.CosinusPower,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
    keyboardKey: "k",
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
    keyboardKey: "/",
  },
  {
    label: "π",
    operator: Operator.PI,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
    keyboardKey: "p",
  },
  {
    label: "cos",
    operator: Operator.Cosinus,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
    keyboardKey: "c",
  },
  {
    label: "log",
    operator: Operator.Logarithm,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
    keyboardKey: "g",
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
    keyboardKey: "*",
  },
  {
    label: "e",
    operator: Operator.Exponent,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
    keyboardKey: "e",
  },
  {
    label: "tan",
    operator: Operator.Tangens,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
    keyboardKey: "t",
  },
  {
    label: "√",
    operator: Operator.Root,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
    keyboardKey: "r",
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
    label: (
      <span>
        x<sup>2</sup>
      </span>
    ),
    operator: Operator.PowerTwo,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
    keyboardKey: "a",
  },
  {
    label: "EXP",
    operator: Operator.Exp,
    appearance: ButtonAppearance.Light,
    type: ButtonType.Action,
    keyboardKey: "v",
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
    keyboardKey: "z",
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
