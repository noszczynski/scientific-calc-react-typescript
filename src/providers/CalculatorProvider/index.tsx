import React, { createContext, useCallback, useMemo, useState } from "react";
import * as _ from "lodash";
import { Operator } from "../../constants/Operators";
import { useEvent } from "react-use";
import { ButtonType, OperatorButton } from "../../components/Button";

export enum RadianDegrees {
  Radian = "Rad",
  Deg = "Deg",
}

type Memory = number;

type ActiveOperator = Operator | null;

type DisplayValue = string;

export interface CalculatorProviderReturnProps {
  displayValue: string;
  currentMode: Mode;
  result: Memory;
  activeOperator: ActiveOperator;
  handleSetCurrentMode(mode: Mode): void;
  addOperation(button: OperatorButton): void;
}

export interface History {
  button: OperatorButton;
}

export enum Mode {
  Rad = "Rad",
  Deg = "Deg",
}

export const initialProps: CalculatorProviderReturnProps = {
  displayValue: "",
  currentMode: Mode.Rad,
  result: 0,
  activeOperator: null,
  handleSetCurrentMode: () => {
    throw Error("Function handleSetCurrentMode is used before initialize");
  },
  addOperation: () => {
    throw Error("Function addOperation is used before initialize");
  },
};

const DISPLAY_DEFAULT_VALUE = "0";

export const CalculatorContext =
  createContext<CalculatorProviderReturnProps>(initialProps);

export const CalculatorProvider: React.FC = ({ children }) => {
  const [display, setDisplay] = useState<DisplayValue>(DISPLAY_DEFAULT_VALUE);
  const [memory, setMemory] = useState<Memory>(0);
  const [activeOperator, setActiveOperator] = useState<ActiveOperator>(null);
  const [history, setHistory] = useState<History[]>([]);
  const [currentMode, setCurrentMode] = useState<Mode>(Mode.Rad);

  const handleSetCurrentMode = useCallback((mode: Mode) => {
    setCurrentMode(mode);
  }, []);

  const addToDisplay = useCallback((value: string | number) => {
    setDisplay((state) => {
      if (state === DISPLAY_DEFAULT_VALUE) {
        return `${value}`;
      }

      return `${state}${value}`;
    });
  }, []);

  const eraseDisplay = useCallback(() => {
    setDisplay(DISPLAY_DEFAULT_VALUE);
  }, []);

  const clearCalculations = useCallback(() => {
    setHistory([]);
    eraseDisplay();
  }, [eraseDisplay]);

  const executeAction = useCallback(
    (
      left: number | string,
      operator: Operator,
      right?: number | string
    ): number => {
      switch (operator) {
        case Operator.Multiplier: {
          return Number(left) * Number(right);
        }
        case Operator.Div: {
          return Number(left) / Number(right);
        }
        case Operator.Plus: {
          return Number(left) + Number(right);
        }
        case Operator.Minus: {
          return Number(left) - Number(right);
        }
        default:
          throw Error("Error");
      }
    },
    []
  );

  const equal = useCallback(
    ({ operator }: OperatorButton) => {
      setDisplay(executeAction(memory, activeOperator!, display).toString());
      setMemory(0);
      setHistory([]);
      setActiveOperator(null);
    },
    [activeOperator, display, executeAction, memory]
  );

  const executeCalculatorOperation = useCallback(
    (button: OperatorButton) => {
      switch (button.operator) {
        case Operator.Clear: {
          clearCalculations();
          break;
        }
        case Operator.Equal: {
          equal(button);
          break;
        }
        default:
          throw Error("Error");
      }
    },
    [clearCalculations, equal]
  );

  const executeDigitOperation = useCallback(
    ({ operator, type }: OperatorButton) => {
      if (type !== ButtonType.Digit) {
        throw Error("Error");
      }

      addToDisplay(operator);
    },
    [addToDisplay]
  );

  const executeDotOperation = useCallback(
    ({ operator, type }: OperatorButton) => {
      if (operator !== Operator.Dot || type !== ButtonType.Dot) {
        throw Error("Error");
      }

      if (!display.includes(".")) {
        addToDisplay(".");
      }
    },
    [display, addToDisplay]
  );

  const executeActionOperation = useCallback(({ operator }: OperatorButton) => {
    switch (operator) {
      case Operator.Multiplier:
      case Operator.Div:
      case Operator.Plus:
      case Operator.Minus: {
        setActiveOperator(operator);
        setDisplay((state) => {
          setMemory(Number(state));
          return DISPLAY_DEFAULT_VALUE;
        });
        break;
      }
      default:
        throw Error("Error");
    }
  }, []);

  const addOperation = useCallback(
    (button: OperatorButton) => {
      switch (button.type) {
        case ButtonType.Calculator: {
          executeCalculatorOperation(button);
          break;
        }
        case ButtonType.Digit: {
          executeDigitOperation(button);
          break;
        }
        case ButtonType.Dot: {
          executeDotOperation(button);
          break;
        }
        case ButtonType.Action: {
          executeActionOperation(button);
          break;
        }
        default:
          throw Error(`Unexpected button type: ${button.type}`);
      }
      setHistory((state: History[]) => {
        const newState = _.cloneDeep(state);
        newState.push({ button });

        return newState;
      });
    },
    [
      executeActionOperation,
      executeCalculatorOperation,
      executeDigitOperation,
      executeDotOperation,
    ]
  );

  /*
  const executeOperationByOperator = useCallback(
    (operator: Operator) => {
      switch (operator) {
        case Operator.Equal: {
          equal();
          setActiveOperator(Operator.Equal);
          break;
        }
        case Operator.Clear: {
          clearCalculations();
          setActiveOperator(null);
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
          setDisplay((state) => `${state}${operator}`);
          break;
        }
        case Operator.Multiplier:
        case Operator.Div:
        case Operator.Plus:
        case Operator.Minus: {
          // setResult(Number(displayValue));
          setActiveOperator(operator);
          setDisplay("");
          break;
        }
        default: {
          throw Error(`Unexpected Operator: ${operator}`);
        }
      }
    },
    [clearCalculations, equal]
  );
*/

  const handleKeyDownEvent = useCallback(({ key }: KeyboardEvent) => {
    switch (key) {
      case DISPLAY_DEFAULT_VALUE:
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        setDisplay((state) => `${state}${key}`);
        break;
      }
      default:
    }
  }, []);

  useEvent("keydown", handleKeyDownEvent);

  const value: CalculatorProviderReturnProps = useMemo(
    () => ({
      displayValue: display,
      addOperation,
      currentMode,
      handleSetCurrentMode,
      result: memory,
      activeOperator,
    }),
    [
      display,
      addOperation,
      currentMode,
      handleSetCurrentMode,
      memory,
      activeOperator,
    ]
  );

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};
