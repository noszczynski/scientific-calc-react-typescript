import { Operator } from "../Operators";
import styled from "styled-components";

export enum ButtonAppearance {
  Light,
  Dark,
  Special,
}

export enum ButtonType {
  Digit = "Digit",
  Dot = "Dot",
  ZeroParameter = "ZeroParameter",
  OneParameter = "OneParameter",
  TwoParameters = "TwoParameters",
}

export const X_COLOR = "#ff731c";
const X = styled.span.attrs({ children: "X" })`
  color: ${X_COLOR};
`;

export const Y_COLOR = "#41bd00";
const Y = styled.span.attrs({ children: "Y" })`
  color: ${Y_COLOR};
`;

export interface OperatorButton {
  label: JSX.Element;
  keyboardKey?: string;
}

export interface ButtonAppearanceLight {
  appearance: ButtonAppearance.Light;
}

export interface ButtonAppearanceDark {
  appearance: ButtonAppearance.Dark;
}

export interface ButtonTypeDigit extends ButtonAppearanceDark {
  type: ButtonType.Digit;
}

export interface ButtonTypeDot extends ButtonAppearanceDark {
  type: ButtonType.Dot;
}

export interface ButtonTypeOneParameter extends ButtonAppearanceLight {
  type: ButtonType.OneParameter;
}

export interface ButtonTypeTwoParameters extends ButtonAppearanceLight {
  type: ButtonType.TwoParameters;
}

export interface ButtonTypeZeroParameter extends ButtonAppearanceLight {
  type: ButtonType.ZeroParameter;
}

/* Factorial */
interface FactorialButton extends OperatorButton, ButtonTypeOneParameter {
  operator: Operator.Factorial;
}

const factorialButton: FactorialButton = {
  label: (
    <span>
      <X />!
    </span>
  ),
  operator: Operator.Factorial,
  appearance: ButtonAppearance.Light,
  type: ButtonType.OneParameter,
  keyboardKey: "!",
};
/* Factorial */

/* PowerTen */
interface PowerTenButton extends OperatorButton, ButtonTypeOneParameter {
  operator: Operator.PowerTen;
}

const powerTenButton: PowerTenButton = {
  label: (
    <span>
      10
      <sup>
        <X />
      </sup>
    </span>
  ),
  operator: Operator.PowerTen,
  appearance: ButtonAppearance.Light,
  type: ButtonType.OneParameter,
  keyboardKey: "y",
};
/* PowerTen */

/* EulerPower */
interface EulerPowerButton extends OperatorButton, ButtonTypeOneParameter {
  operator: Operator.EulerPower;
}

const eulerPowerButton: EulerPowerButton = {
  label: (
    <span>
      <X />e
      <sup>
        <Y />
      </sup>
    </span>
  ),
  operator: Operator.EulerPower,
  appearance: ButtonAppearance.Light,
  type: ButtonType.OneParameter,
  keyboardKey: "w",
};
/* EulerPower */

/* Percent */
interface PercentButton extends OperatorButton, ButtonTypeZeroParameter {
  operator: Operator.Percent;
}

const percentButton: PercentButton = {
  label: <span>%</span>,
  operator: Operator.Percent,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ZeroParameter,
};
/* Percent */

/* DoubleZero */
interface DoubleZeroButton extends OperatorButton, ButtonTypeZeroParameter {
  operator: Operator.DoubleZero;
}

const doubleZeroButton: DoubleZeroButton = {
  label: <span>00</span>,
  operator: Operator.DoubleZero,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ZeroParameter,
  keyboardKey: "o",
};
/* DoubleZero */

/* Backspace */
interface BackspaceButton extends OperatorButton, ButtonTypeZeroParameter {
  operator: Operator.Backspace;
}

const backspaceButton: BackspaceButton = {
  label: <span>←</span>,
  operator: Operator.Backspace,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ZeroParameter,
  keyboardKey: "Backspace",
};
/* Backspace */

/* Clear */
interface ClearButton extends OperatorButton, ButtonTypeZeroParameter {
  operator: Operator.Clear;
}

const clearButton: ClearButton = {
  label: <span>Clear</span>,
  operator: Operator.Clear,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ZeroParameter,
  keyboardKey: " ",
};
/* Clear */

/* SinusPow */
interface SinusPowButton extends OperatorButton, ButtonTypeTwoParameters {
  operator: Operator.SinusPow;
}

const sinusPowButton: SinusPowButton = {
  label: (
    <span>
      <X />
      sin<sup>-1</sup>(<Y />)
    </span>
  ),
  operator: Operator.SinusPow,
  appearance: ButtonAppearance.Light,
  type: ButtonType.TwoParameters,
  keyboardKey: "u",
};
/* SinusPow */

/* Sinus */
interface SinusButton extends OperatorButton, ButtonTypeTwoParameters {
  operator: Operator.Sinus;
}

const sinusButton: SinusButton = {
  label: (
    <span>
      <X />
      sin(
      <Y />)
    </span>
  ),
  operator: Operator.Sinus,
  appearance: ButtonAppearance.Light,
  type: ButtonType.TwoParameters,
  keyboardKey: "s",
};
/* Sinus */

/* CosinusPower */
interface CosinusPowerButton extends OperatorButton, ButtonTypeTwoParameters {
  operator: Operator.CosinusPower;
}

const cosinusPowerButton: CosinusPowerButton = {
  label: (
    <span>
      <X />
      cos<sup>-1</sup>(<Y />)
    </span>
  ),
  operator: Operator.CosinusPower,
  appearance: ButtonAppearance.Light,
  type: ButtonType.TwoParameters,
  keyboardKey: "k",
};
/* CosinusPower */

/* Seven */
interface SevenButton extends OperatorButton, ButtonTypeDigit {
  operator: Operator.Seven;
}

const sevenButton: SevenButton = {
  label: <span>7</span>,
  operator: Operator.Seven,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Seven */

/* Eight */
interface EightButton extends OperatorButton, ButtonTypeDigit {
  operator: Operator.Eight;
}

const eightButton: EightButton = {
  label: <span>8</span>,
  operator: Operator.Eight,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Eight */

/* Nine */
interface NineButton extends OperatorButton, ButtonTypeDigit {
  operator: Operator.Nine;
}

const nineButton: NineButton = {
  label: <span>9</span>,
  operator: Operator.Nine,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Nine */

/* Div */
interface DivButton extends OperatorButton, ButtonTypeTwoParameters {
  operator: Operator.Div;
}

const divButton: DivButton = {
  label: <span>÷</span>,
  operator: Operator.Div,
  appearance: ButtonAppearance.Light,
  type: ButtonType.TwoParameters,
  keyboardKey: "/",
};
/* Div */

/* PI */
interface PIButton extends OperatorButton, ButtonTypeOneParameter {
  operator: Operator.PI;
}

const piButton: PIButton = {
  label: (
    <span>
      <X />π
    </span>
  ),
  operator: Operator.PI,
  appearance: ButtonAppearance.Light,
  type: ButtonType.OneParameter,
  keyboardKey: "p",
};
/* PI */

/* Cosinus */
interface CosinusButton extends OperatorButton, ButtonTypeTwoParameters {
  operator: Operator.Cosinus;
}

const cosinusButton: CosinusButton = {
  label: (
    <span>
      <X />
      cos(
      <Y />)
    </span>
  ),
  operator: Operator.Cosinus,
  appearance: ButtonAppearance.Light,
  type: ButtonType.TwoParameters,
  keyboardKey: "c",
};
/* Cosinus */

/* Logarithm */
interface LogarithmButton extends OperatorButton, ButtonTypeTwoParameters {
  operator: Operator.Logarithm;
}

const logarithmButton: LogarithmButton = {
  label: (
    <span>
      <X />
      Log<sub>10</sub>
      <sup>
        <Y />
      </sup>
    </span>
  ),
  operator: Operator.Logarithm,
  appearance: ButtonAppearance.Light,
  type: ButtonType.TwoParameters,
  keyboardKey: "g",
};
/* Logarithm */

/* Four */
interface FourButton extends OperatorButton, ButtonTypeDigit {
  operator: Operator.Four;
}

const fourButton: FourButton = {
  label: <span>4</span>,
  operator: Operator.Four,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Four */

/* Five */
interface FiveButton extends OperatorButton, ButtonTypeDigit {
  operator: Operator.Five;
}

const fiveButton: FiveButton = {
  label: <span>5</span>,
  operator: Operator.Five,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Five */

/* Six */
interface SixButton extends OperatorButton, ButtonTypeDigit {
  operator: Operator.Six;
}

const sixButton: SixButton = {
  label: <span>6</span>,
  operator: Operator.Six,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Six */

/* Multiplier */
interface MultiplierButton extends OperatorButton, ButtonTypeTwoParameters {
  operator: Operator.Multiplier;
}

const multiplierButton: MultiplierButton = {
  label: <span>×</span>,
  operator: Operator.Multiplier,
  appearance: ButtonAppearance.Light,
  type: ButtonType.TwoParameters,
  keyboardKey: "*",
};
/* Multiplier */

/* Euler */
interface EulerButton extends OperatorButton, ButtonTypeOneParameter {
  operator: Operator.Euler;
}

const eulerButton: EulerButton = {
  label: (
    <span>
      <X />e
    </span>
  ),
  operator: Operator.Euler,
  appearance: ButtonAppearance.Light,
  type: ButtonType.OneParameter,
  keyboardKey: "e",
};
/* Euler */

/* Tangens */
interface TangensButton extends OperatorButton, ButtonTypeTwoParameters {
  operator: Operator.Tangens;
}

const tangensButton: TangensButton = {
  label: (
    <span>
      <X />
      tan(
      <Y />)
    </span>
  ),
  operator: Operator.Tangens,
  appearance: ButtonAppearance.Light,
  type: ButtonType.TwoParameters,
  keyboardKey: "t",
};
/* Tangens */

/* Root */
interface RootButton extends OperatorButton, ButtonTypeTwoParameters {
  operator: Operator.Root;
}

const rootButton: RootButton = {
  label: (
    <span>
      <X />√<Y />
    </span>
  ),
  operator: Operator.Root,
  appearance: ButtonAppearance.Light,
  type: ButtonType.TwoParameters,
  keyboardKey: "r",
};
/* Root */

/* One */
interface OneButton extends OperatorButton, ButtonTypeDigit {
  operator: Operator.One;
}

const oneButton: OneButton = {
  label: <span>1</span>,
  operator: Operator.One,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* One */

/* Two */
interface TwoButton extends OperatorButton, ButtonTypeDigit {
  operator: Operator.Two;
}

const twoButton: TwoButton = {
  label: <span>2</span>,
  operator: Operator.Two,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Two */

/* Three */
interface ThreeButton extends OperatorButton, ButtonTypeDigit {
  operator: Operator.Three;
}

const threeButton: ThreeButton = {
  label: <span>3</span>,
  operator: Operator.Three,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Three */

/* Minus */
interface MinusButton extends OperatorButton, ButtonTypeTwoParameters {
  operator: Operator.Minus;
}

const minusButton: MinusButton = {
  label: <span>-</span>,
  operator: Operator.Minus,
  appearance: ButtonAppearance.Light,
  type: ButtonType.TwoParameters,
};
/* Minus */

/* PowerTwo */
interface PowerTwoButton extends OperatorButton, ButtonTypeOneParameter {
  operator: Operator.PowerTwo;
}

const powerTwoButton: PowerTwoButton = {
  label: (
    <span>
      <X />
      <sup>2</sup>
    </span>
  ),
  operator: Operator.PowerTwo,
  appearance: ButtonAppearance.Light,
  type: ButtonType.OneParameter,
  keyboardKey: "a",
};
/* PowerTwo */

/* Exp */
interface ExpButton extends OperatorButton, ButtonTypeZeroParameter {
  operator: Operator.Exp;
}

const expButton: ExpButton = {
  label: <span>EXP</span>,
  operator: Operator.Exp,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ZeroParameter,
  keyboardKey: "v",
};
/* Exp */

/* Power */
interface PowerButton extends OperatorButton, ButtonTypeTwoParameters {
  operator: Operator.Power;
}

const powerButton: PowerButton = {
  label: (
    <span>
      <X />
      <sup>
        <Y />
      </sup>
    </span>
  ),
  operator: Operator.Power,
  appearance: ButtonAppearance.Light,
  type: ButtonType.TwoParameters,
  keyboardKey: "z",
};
/* Power */

/* Zero */
interface ZeroButton extends OperatorButton, ButtonTypeDigit {
  operator: Operator.Zero;
}

const zeroButton: ZeroButton = {
  label: <span>0</span>,
  operator: Operator.Zero,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Zero */

/* Dot */
export interface DotButton extends OperatorButton, ButtonTypeDot {
  operator: Operator.Dot;
}

const dotButton: DotButton = {
  label: <span>.</span>,
  operator: Operator.Dot,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Dot,
};
/* Dot */

/* Equal */
interface EqualButton extends OperatorButton, ButtonTypeZeroParameter {
  operator: Operator.Equal;
}

const equalButton: EqualButton = {
  label: <span>=</span>,
  operator: Operator.Equal,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ZeroParameter,
};
/* Equal */

/* Plus */
interface PlusButton extends OperatorButton, ButtonTypeTwoParameters {
  operator: Operator.Plus;
}

const plusButton: PlusButton = {
  label: <span>+</span>,
  operator: Operator.Plus,
  appearance: ButtonAppearance.Light,
  type: ButtonType.TwoParameters,
};
/* Plus */

export type ZeroParameterButton =
  | PercentButton
  | DoubleZeroButton
  | BackspaceButton
  | ClearButton
  | EqualButton
  | ExpButton;

export type OneParameterButton =
  | FactorialButton
  | PowerTenButton
  | PIButton
  | EulerButton
  | EulerPowerButton
  | PowerTwoButton;

export type TwoParametersButton =
  | SinusPowButton
  | SinusButton
  | CosinusPowerButton
  | DivButton
  | CosinusButton
  | LogarithmButton
  | MultiplierButton
  | TangensButton
  | RootButton
  | MinusButton
  | PowerButton
  | PlusButton;

export type DigitButton =
  | SevenButton
  | EightButton
  | NineButton
  | FourButton
  | FiveButton
  | SixButton
  | OneButton
  | TwoButton
  | ThreeButton
  | ZeroButton;

export type Button =
  | DotButton
  | DigitButton
  | TwoParametersButton
  | ZeroParameterButton
  | OneParameterButton;

export type Buttons = [
  FactorialButton,
  PowerTenButton,
  EulerPowerButton,
  PercentButton,
  DoubleZeroButton,
  BackspaceButton,
  ClearButton,
  SinusPowButton,
  SinusButton,
  CosinusPowerButton,
  SevenButton,
  EightButton,
  NineButton,
  DivButton,
  PIButton,
  CosinusButton,
  LogarithmButton,
  FourButton,
  FiveButton,
  SixButton,
  MultiplierButton,
  EulerButton,
  TangensButton,
  RootButton,
  OneButton,
  TwoButton,
  ThreeButton,
  MinusButton,
  PowerTwoButton,
  ExpButton,
  PowerButton,
  ZeroButton,
  DotButton,
  EqualButton,
  PlusButton
];

const buttons: Buttons = [
  factorialButton,
  powerTenButton,
  eulerPowerButton,
  percentButton,
  doubleZeroButton,
  backspaceButton,
  clearButton,
  sinusPowButton,
  sinusButton,
  cosinusPowerButton,
  sevenButton,
  eightButton,
  nineButton,
  divButton,
  piButton,
  cosinusButton,
  logarithmButton,
  fourButton,
  fiveButton,
  sixButton,
  multiplierButton,
  eulerButton,
  tangensButton,
  rootButton,
  oneButton,
  twoButton,
  threeButton,
  minusButton,
  powerTwoButton,
  expButton,
  powerButton,
  zeroButton,
  dotButton,
  equalButton,
  plusButton,
];

export default buttons;
