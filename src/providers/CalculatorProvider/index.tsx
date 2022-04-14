import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as _ from "lodash";
import { setterToggleCanOperator } from "../../helpers/setterToggleCanOperator";
import { setterAddCanOperator } from "../../helpers/setterAddCanOperator";
import { setterDeleteCanOperator } from "../../helpers/setterDeleteCanOperator";

export enum RadianDegrees {
  Radian = "Rad",
  Deg = "Deg",
}

export enum Operator {
  Factorial = "x!",
  LeftBracket = "(",
  RightBracket = ")",
  Percent = "%",
  Clear = "CE",
  Inv = "Inv",
  Sinus = "sin",
  Ln = "ln",
  Seven = "7",
  Eight = "8",
  Nine = "9",
  Div = "÷",
  PI = "π",
  Cosinus = "cos",
  Logarithm = "log",
  Four = "4",
  Five = "5",
  Six = "6",
  Multiplier = "×",
  Exponent = "e",
  Tangens = "tan",
  Root = "√",
  One = "1",
  Two = "2",
  Three = "3",
  Minus = "-",
  Ans = "Ans",
  Exp = "Exp",
  Power = "pow",
  Zero = "0",
  Dot = ".",
  Equal = "=",
  Plus = "+",
}

export interface CalculatorProviderReturnProps {
  displayValue: string;
  can: Set<Operator>;
  currentMode: Mode;
  handleSetCurrentMode(mode: Mode): void;
  addOperation(operator: Operator): void;
}

export interface Calculation {
  operator: Operator;
}

const initialCan: Operator[] = [
  Operator.One,
  Operator.Two,
  Operator.Three,
  Operator.Four,
  Operator.Five,
  Operator.Six,
  Operator.Seven,
  Operator.Eight,
  Operator.Nine,
  Operator.Zero,
  Operator.Equal,
  Operator.Dot,
  Operator.Percent,
  Operator.Clear,
  Operator.RightBracket,
  Operator.LeftBracket,
  Operator.Factorial,
  Operator.Inv,
  Operator.Ln,
  Operator.Div,
  Operator.PI,
  Operator.Cosinus,
  Operator.Logarithm,
  Operator.Exponent,
  Operator.Ans,
  Operator.Power,
];

export enum Mode {
  Rad = "Rad",
  Deg = "Deg",
}

export const initialProps: CalculatorProviderReturnProps = {
  displayValue: "",
  can: new Set(),
  currentMode: Mode.Rad,
  handleSetCurrentMode: () => {
    throw Error("Function handleSetCurrentMode is used before initialize");
  },
  addOperation: () => {
    throw Error("Function addOperation is used before initialize");
  },
};

export const CalculatorContext =
  createContext<CalculatorProviderReturnProps>(initialProps);

export const CalculatorProvider: React.FC = ({ children }) => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [calculations, setCalculations] = useState<Calculation[]>([]);
  const [can, setCan] = useState<Set<Operator>>(new Set(initialCan));
  const [currentMode, setCurrentMode] = useState<Mode>(Mode.Rad);

  const handleSetCurrentMode = useCallback((mode: Mode) => {
    setCurrentMode(mode);
  }, []);

  const clearCalculations = useCallback(() => {
    setCalculations([]);
  }, []);

  const toggleCanOperator = useCallback((operator: Operator) => {
    setCan(setterToggleCanOperator(operator));
  }, []);

  const addCanOperator = useCallback((operator: Operator) => {
    setCan(setterAddCanOperator(operator));
  }, []);

  const deleteCanOperator = useCallback((operator: Operator) => {
    setCan(setterDeleteCanOperator(operator));
  }, []);

  const plus = useCallback(() => {
    setDisplayValue((state) => state + "+");
  }, []);

  const minus = useCallback(() => {
    setDisplayValue((state) => state + "-");
  }, []);

  const sinus = useCallback(() => {
    setDisplayValue((state) => `sin(${state})`);
  }, []);

  const cosinus = useCallback(() => {
    setDisplayValue((state) => `cos(${state})`);
  }, []);

  const tangens = useCallback(() => {
    setDisplayValue((state) => `tan(${state})`);
  }, []);

  // const cotangens = useCallback(() => {
  //   console.log("cotangens()");
  // }, []);

  const digit = useCallback((n: number) => {
    setDisplayValue((state) => `${state}${n}`);
  }, []);

  const factorial = useCallback(() => {
    // silnia
    console.log("factorial()");
    setDisplayValue((state) => state + "!");
  }, []);

  const dot = useCallback(() => {
    setDisplayValue((state) => state + ".");
  }, []);

  const divide = useCallback(() => {
    setDisplayValue((state) => state + "");
  }, []);

  const logarithm = useCallback(() => {
    console.log("logarithm()");
    setDisplayValue((state) => `log(${state})`);
  }, []);

  const addBracket = useCallback((bracket: "(" | ")") => {
    setDisplayValue((state) => state + bracket);
  }, []);

  const multiplication = useCallback(() => {
    console.log("multiplication()");
  }, []);

  const power = useCallback(() => {
    console.log("power()");
  }, []);

  const percent = useCallback(() => {
    console.log("percent()");
  }, []);

  const pi = useCallback(() => {
    console.log("pi()");
  }, []);

  const equal = useCallback(() => {
    clearCalculations();
  }, [clearCalculations]);

  const addOperation = useCallback((operator: Operator) => {
    setCalculations((state: Calculation[]) => {
      const newState = _.cloneDeep(state);
      newState.push({ operator });

      return newState;
    });
  }, []);

  // todo change name
  const executeOperationByOperator = useCallback(
    (operator: Operator) => {
      switch (operator) {
        case Operator.Equal: {
          equal();
          break;
        }
        case Operator.Ans: {
          break;
        }
        case Operator.Clear: {
          clearCalculations();
          break;
        }
        case Operator.Cosinus: {
          cosinus();
          break;
        }
        case Operator.Div: {
          divide();
          break;
        }
        case Operator.Dot: {
          dot();
          break;
        }
        case Operator.Exponent: {
          break;
        }
        case Operator.One:
        case Operator.Two:
        case Operator.Three:
        case Operator.Four:
        case Operator.Five:
        case Operator.Six:
        case Operator.Seven:
        case Operator.Eight:
        case Operator.Nine:
        case Operator.Zero: {
          digit(Number(operator));
          break;
        }
        case Operator.Exp: {
          break;
        }
        case Operator.Factorial: {
          factorial();
          break;
        }
        case Operator.Inv: {
          break;
        }
        case Operator.LeftBracket:
        case Operator.RightBracket: {
          addBracket(operator);
          break;
        }
        case Operator.Ln: {
          break;
        }
        case Operator.Logarithm: {
          logarithm();
          break;
        }
        case Operator.Minus: {
          minus();
          break;
        }
        case Operator.Percent: {
          percent();
          break;
        }
        case Operator.PI: {
          pi();
          break;
        }
        case Operator.Plus: {
          plus();
          break;
        }
        case Operator.Power: {
          power();
          break;
        }
        case Operator.Root: {
          break;
        }
        case Operator.Sinus: {
          sinus();
          break;
        }
        case Operator.Tangens: {
          tangens();
          break;
        }
        case Operator.Multiplier: {
          multiplication();
          break;
        }
        default: {
          throw Error(`Unexpected Operator: ${operator}`);
        }
      }
    },
    [
      addBracket,
      clearCalculations,
      cosinus,
      digit,
      divide,
      dot,
      equal,
      factorial,
      logarithm,
      minus,
      multiplication,
      percent,
      pi,
      plus,
      power,
      sinus,
      tangens,
    ]
  );

  useEffect(() => {
    const current = calculations.at(-1);

    if (current) {
      executeOperationByOperator(current.operator);
    }
  }, [calculations, executeOperationByOperator]);

  const value: CalculatorProviderReturnProps = useMemo(
    () => ({
      can,
      displayValue,
      addOperation,
      currentMode,
      handleSetCurrentMode,
    }),
    [can, displayValue, addOperation, currentMode, handleSetCurrentMode]
  );

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};
