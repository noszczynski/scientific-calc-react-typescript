import { Operator } from "../Operators";

export enum ButtonAppearance {
  Light,
  Dark,
  Special,
}

export enum ButtonType {
  Digit = "Digit",
  Dot = "Dot",
  CurrentValueAction = "CurrentValueAction",
  ParameterAction = "ParameterAction",
  NoParameterAction = "NoParameterAction",
}

export interface OperatorButton {
  label: string | Operator | JSX.Element;
  keyboardKey?: string;
}

/* Factorial */
interface FactorialButton extends OperatorButton {
  operator: Operator.Factorial;
  appearance: ButtonAppearance.Light;
  type: ButtonType.NoParameterAction;
}

const factorialButton: FactorialButton = {
  label: "x!",
  operator: Operator.Factorial,
  appearance: ButtonAppearance.Light,
  type: ButtonType.NoParameterAction,
  keyboardKey: "!",
};
/* Factorial */

/* PowerTen */
interface PowerTenButton extends OperatorButton {
  label: JSX.Element;
  operator: Operator.PowerTen;
  appearance: ButtonAppearance.Light;
  type: ButtonType.CurrentValueAction;
}

const powerTenButton: PowerTenButton = {
  label: (
    <span>
      10<sup>x</sup>
    </span>
  ),
  operator: Operator.PowerTen,
  appearance: ButtonAppearance.Light,
  type: ButtonType.CurrentValueAction,
  keyboardKey: "y",
};
/* PowerTen */

/* EulerPower */
interface EulerPowerButton extends OperatorButton {
  operator: Operator.EulerPower;
  appearance: ButtonAppearance.Light;
  type: ButtonType.CurrentValueAction;
}

const eulerPowerButton: EulerPowerButton = {
  label: (
    <span>
      e<sup>x</sup>
    </span>
  ),
  operator: Operator.EulerPower,
  appearance: ButtonAppearance.Light,
  type: ButtonType.CurrentValueAction,
  keyboardKey: "w",
};
/* EulerPower */

/* Percent */
interface PercentButton extends OperatorButton {
  operator: Operator.Percent;
  appearance: ButtonAppearance.Light;
  type: ButtonType.NoParameterAction;
}

const percentButton: PercentButton = {
  label: "%",
  operator: Operator.Percent,
  appearance: ButtonAppearance.Light,
  type: ButtonType.NoParameterAction,
};
/* Percent */

/* DoubleZero */
interface DoubleZeroButton extends OperatorButton {
  operator: Operator.DoubleZero;
  appearance: ButtonAppearance.Light;
  type: ButtonType.NoParameterAction;
}

const doubleZeroButton: DoubleZeroButton = {
  label: "00",
  operator: Operator.DoubleZero,
  appearance: ButtonAppearance.Light,
  type: ButtonType.NoParameterAction,
  keyboardKey: "o",
};
/* DoubleZero */

/* Backspace */
interface BackspaceButton extends OperatorButton {
  operator: Operator.Backspace;
  appearance: ButtonAppearance.Light;
  type: ButtonType.NoParameterAction;
}

const backspaceButton: BackspaceButton = {
  label: "←",
  operator: Operator.Backspace,
  appearance: ButtonAppearance.Light,
  type: ButtonType.NoParameterAction,
  keyboardKey: "Backspace",
};
/* Backspace */

/* Clear */
interface ClearButton extends OperatorButton {
  operator: Operator.Clear;
  appearance: ButtonAppearance.Light;
  type: ButtonType.NoParameterAction;
}

const clearButton: ClearButton = {
  label: "Clear",
  operator: Operator.Clear,
  appearance: ButtonAppearance.Light,
  type: ButtonType.NoParameterAction,
  keyboardKey: " ",
};
/* Clear */

/* SinusPow */
interface SinusPowButton extends OperatorButton {
  operator: Operator.SinusPow;
  appearance: ButtonAppearance.Light;
  type: ButtonType.ParameterAction;
}

const sinusPowButton: SinusPowButton = {
  label: (
    <span>
      sin<sup>-1</sup>
    </span>
  ),
  operator: Operator.SinusPow,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ParameterAction,
  keyboardKey: "u",
};
/* SinusPow */

/* Sinus */
interface SinusButton extends OperatorButton {
  operator: Operator.Sinus;
  appearance: ButtonAppearance.Light;
  type: ButtonType.ParameterAction;
}

const sinusButton: SinusButton = {
  label: "sin",
  operator: Operator.Sinus,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ParameterAction,
  keyboardKey: "s",
};
/* Sinus */

/* CosinusPower */
interface CosinusPowerButton extends OperatorButton {
  operator: Operator.CosinusPower;
  appearance: ButtonAppearance.Light;
  type: ButtonType.ParameterAction;
}

const cosinusPowerButton: CosinusPowerButton = {
  label: (
    <span>
      cos<sup>-1</sup>
    </span>
  ),
  operator: Operator.CosinusPower,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ParameterAction,
  keyboardKey: "k",
};
/* CosinusPower */

/* Seven */
interface SevenButton extends OperatorButton {
  operator: Operator.Seven;
  appearance: ButtonAppearance.Dark;
  type: ButtonType.Digit;
}

const sevenButton: SevenButton = {
  label: "7",
  operator: Operator.Seven,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Seven */

/* Eight */
interface EightButton extends OperatorButton {
  operator: Operator.Eight;
  appearance: ButtonAppearance.Dark;
  type: ButtonType.Digit;
}

const eightButton: EightButton = {
  label: "8",
  operator: Operator.Eight,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Eight */

/* Nine */
interface NineButton extends OperatorButton {
  operator: Operator.Nine;
  appearance: ButtonAppearance.Dark;
  type: ButtonType.Digit;
}

const nineButton: NineButton = {
  label: "9",
  operator: Operator.Nine,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Nine */

/* Div */
interface DivButton extends OperatorButton {
  operator: Operator.Div;
  appearance: ButtonAppearance.Light;
  type: ButtonType.ParameterAction;
}

const divButton: DivButton = {
  label: "÷",
  operator: Operator.Div,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ParameterAction,
  keyboardKey: "/",
};
/* Div */

/* PI */
interface PIButton extends OperatorButton {
  operator: Operator.PI;
  appearance: ButtonAppearance.Light;
  type: ButtonType.CurrentValueAction;
}

const piButton: PIButton = {
  label: "π",
  operator: Operator.PI,
  appearance: ButtonAppearance.Light,
  type: ButtonType.CurrentValueAction,
  keyboardKey: "p",
};
/* PI */

/* Cosinus */
interface CosinusButton extends OperatorButton {
  operator: Operator.Cosinus;
  appearance: ButtonAppearance.Light;
  type: ButtonType.ParameterAction;
}

const cosinusButton: CosinusButton = {
  label: "cos",
  operator: Operator.Cosinus,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ParameterAction,
  keyboardKey: "c",
};
/* Cosinus */

/* Logarithm */
interface LogarithmButton extends OperatorButton {
  operator: Operator.Logarithm;
  appearance: ButtonAppearance.Light;
  type: ButtonType.ParameterAction;
}

const logarithmButton: LogarithmButton = {
  label: "log",
  operator: Operator.Logarithm,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ParameterAction,
  keyboardKey: "g",
};
/* Logarithm */

/* Four */
interface FourButton extends OperatorButton {
  operator: Operator.Four;
  appearance: ButtonAppearance.Dark;
  type: ButtonType.Digit;
}

const fourButton: FourButton = {
  label: "4",
  operator: Operator.Four,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Four */

/* Five */
interface FiveButton extends OperatorButton {
  operator: Operator.Five;
  appearance: ButtonAppearance.Dark;
  type: ButtonType.Digit;
}

const fiveButton: FiveButton = {
  label: "5",
  operator: Operator.Five,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Five */

/* Six */
interface SixButton extends OperatorButton {
  operator: Operator.Six;
  appearance: ButtonAppearance.Dark;
  type: ButtonType.Digit;
}

const sixButton: SixButton = {
  label: "6",
  operator: Operator.Six,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Six */

/* Multiplier */
interface MultiplierButton extends OperatorButton {
  operator: Operator.Multiplier;
  appearance: ButtonAppearance.Light;
  type: ButtonType.ParameterAction;
}

const multiplierButton: MultiplierButton = {
  label: "×",
  operator: Operator.Multiplier,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ParameterAction,
  keyboardKey: "*",
};
/* Multiplier */

/* Euler */
interface EulerButton extends OperatorButton {
  operator: Operator.Euler;
  appearance: ButtonAppearance.Light;
  type: ButtonType.CurrentValueAction;
}

const eulerButton: EulerButton = {
  label: "e",
  operator: Operator.Euler,
  appearance: ButtonAppearance.Light,
  type: ButtonType.CurrentValueAction,
  keyboardKey: "e",
};
/* Euler */

/* Tangens */
interface TangensButton extends OperatorButton {
  operator: Operator.Tangens;
  appearance: ButtonAppearance.Light;
  type: ButtonType.ParameterAction;
}

const tangensButton: TangensButton = {
  label: "tan",
  operator: Operator.Tangens,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ParameterAction,
  keyboardKey: "t",
};
/* Tangens */

/* Root */
interface RootButton extends OperatorButton {
  operator: Operator.Root;
  appearance: ButtonAppearance.Light;
  type: ButtonType.ParameterAction;
}

const rootButton: RootButton = {
  label: "√",
  operator: Operator.Root,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ParameterAction,
  keyboardKey: "r",
};
/* Root */

/* One */
interface OneButton extends OperatorButton {
  operator: Operator.One;
  appearance: ButtonAppearance.Dark;
  type: ButtonType.Digit;
}

const oneButton: OneButton = {
  label: "1",
  operator: Operator.One,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* One */

/* Two */
interface TwoButton extends OperatorButton {
  label: "2";
  operator: Operator.Two;
  appearance: ButtonAppearance.Dark;
  type: ButtonType.Digit;
}

const twoButton: TwoButton = {
  label: "2",
  operator: Operator.Two,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Two */

/* Three */
interface ThreeButton extends OperatorButton {
  operator: Operator.Three;
  appearance: ButtonAppearance.Dark;
  type: ButtonType.Digit;
}

const threeButton: ThreeButton = {
  label: "3",
  operator: Operator.Three,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Three */

/* Minus */
interface MinusButton extends OperatorButton {
  operator: Operator.Minus;
  appearance: ButtonAppearance.Light;
  type: ButtonType.ParameterAction;
}

const minusButton: MinusButton = {
  label: "-",
  operator: Operator.Minus,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ParameterAction,
};
/* Minus */

/* PowerTwo */
interface PowerTwoButton extends OperatorButton {
  operator: Operator.PowerTwo;
  appearance: ButtonAppearance.Light;
  type: ButtonType.ParameterAction;
}

const powerTwoButton: PowerTwoButton = {
  label: (
    <span>
      x<sup>2</sup>
    </span>
  ),
  operator: Operator.PowerTwo,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ParameterAction,
  keyboardKey: "a",
};
/* PowerTwo */

/* Exp */
interface ExpButton extends OperatorButton {
  operator: Operator.Exp;
  appearance: ButtonAppearance.Light;
  type: ButtonType.ParameterAction;
}

const expButton: ExpButton = {
  label: "EXP",
  operator: Operator.Exp,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ParameterAction,
  keyboardKey: "v",
};
/* Exp */

/* Power */
interface PowerButton extends OperatorButton {
  operator: Operator.Power;
  appearance: ButtonAppearance.Light;
  type: ButtonType.ParameterAction;
}

const powerButton: PowerButton = {
  label: (
    <span>
      x<sup>y</sup>
    </span>
  ),
  operator: Operator.Power,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ParameterAction,
  keyboardKey: "z",
};
/* Power */

/* Zero */
interface ZeroButton extends OperatorButton {
  operator: Operator.Zero;
  appearance: ButtonAppearance.Dark;
  type: ButtonType.Digit;
}

const zeroButton: ZeroButton = {
  label: "0",
  operator: Operator.Zero,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Digit,
};
/* Zero */

/* Dot */
interface DotButton extends OperatorButton {
  operator: Operator.Dot;
  appearance: ButtonAppearance.Dark;
  type: ButtonType.Dot;
}

const dotButton: DotButton = {
  label: ".",
  operator: Operator.Dot,
  appearance: ButtonAppearance.Dark,
  type: ButtonType.Dot,
};
/* Dot */

/* Equal */
interface EqualButton extends OperatorButton {
  operator: Operator.Equal;
  appearance: ButtonAppearance.Special;
  type: ButtonType.NoParameterAction;
}

const equalButton: EqualButton = {
  label: "=",
  operator: Operator.Equal,
  appearance: ButtonAppearance.Special,
  type: ButtonType.NoParameterAction,
};
/* Equal */

/* Plus */
interface PlusButton extends OperatorButton {
  operator: Operator.Plus;
  appearance: ButtonAppearance.Light;
  type: ButtonType.ParameterAction;
}

const plusButton: PlusButton = {
  label: "+",
  operator: Operator.Plus,
  appearance: ButtonAppearance.Light,
  type: ButtonType.ParameterAction,
};
/* Plus */

export type Button =
  | FactorialButton
  | PowerTenButton
  | EulerPowerButton
  | PercentButton
  | DoubleZeroButton
  | BackspaceButton
  | ClearButton
  | SinusPowButton
  | SinusButton
  | CosinusPowerButton
  | SevenButton
  | EightButton
  | NineButton
  | DivButton
  | PIButton
  | CosinusButton
  | LogarithmButton
  | FourButton
  | FiveButton
  | SixButton
  | MultiplierButton
  | EulerButton
  | TangensButton
  | RootButton
  | OneButton
  | TwoButton
  | ThreeButton
  | MinusButton
  | PowerTwoButton
  | ExpButton
  | PowerButton
  | ZeroButton
  | DotButton
  | EqualButton
  | PlusButton;

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
