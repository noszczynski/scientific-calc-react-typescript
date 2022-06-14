import React, { createContext, useCallback, useMemo, useState } from "react";
import * as _ from "lodash";
import { Operator } from "../../constants/Operators";
import { useEvent } from "react-use";
import {
  Button,
  ButtonType,
  CurrentValueActionButton,
  DigitButton,
  DotButton,
  NoParameterActionButton,
  OperatorButton,
} from "../../constants/buttons";

type Memory = number | null;
type ActiveOperator = Operator | null;
type DisplayValue = string;
type History = OperatorButton;

export interface CalculatorProviderReturnProps {
  display: string;
  memory: Memory;
  activeOperator: ActiveOperator;
  history: History[];
  isShiftPressed: boolean;
  isShortcutsShown: boolean;
  clickUIButton(button: OperatorButton): void;
  saveButtonRefs(refs: HTMLButtonElement[]): void;
}

export const initialProps: CalculatorProviderReturnProps = {
  display: "",
  memory: null,
  activeOperator: null,
  history: [],
  isShiftPressed: false,
  isShortcutsShown: false,
  clickUIButton: () => {
    throw Error("Function clickUIButton is used before initialize");
  },
  saveButtonRefs: () => {
    throw Error("Function setRefs is used before initialize");
  },
};

const DISPLAY_DEFAULT_VALUE = "0";
const DISPLAY_DEFAULT_CHAR_LIMIT = 12;

const displayChecker = (value: string): { ok: boolean; value: string } => {
  if (!value.length) {
    return {
      ok: false,
      value: DISPLAY_DEFAULT_VALUE,
    };
  }

  if (value.length > DISPLAY_DEFAULT_CHAR_LIMIT) {
    return {
      ok: false,
      value: value.slice(0, DISPLAY_DEFAULT_CHAR_LIMIT),
    };
  }

  if (value.length > 1 && value.at(0) === "0") {
    return {
      ok: false,
      value: value.slice(1, value.length),
    };
  }

  return {
    ok: true,
    value,
  };
};

export const CalculatorContext =
  createContext<CalculatorProviderReturnProps>(initialProps);

export const CalculatorProvider: React.FC = ({ children }) => {
  const [display, setDisplay] = useState<DisplayValue>(DISPLAY_DEFAULT_VALUE);
  const [memory, setMemory] = useState<Memory>(null);
  const [activeOperator, setActiveOperator] = useState<ActiveOperator>(null);
  const [history, setHistory] = useState<History[]>([]);
  const [isShiftPressed, setIsShiftPressed] = useState<boolean>(false);
  const [isShortcutsShown, setIsShortcutsShown] = useState<boolean>(true);
  const [refs, setRefs] = useState<HTMLButtonElement[]>([]);

  const addToDisplay = useCallback((value: string | number) => {
    setDisplay((state) => {
      if (state === DISPLAY_DEFAULT_VALUE) {
        if (value === "00") {
          return displayChecker(DISPLAY_DEFAULT_VALUE).value;
        }

        if (value !== ".") {
          return displayChecker(`${value}`).value;
        }
      }

      return displayChecker(`${state}${value}`).value;
    });
  }, []);

  const eraseDisplay = useCallback(() => {
    setDisplay(displayChecker(DISPLAY_DEFAULT_VALUE).value);
  }, []);

  const clearCalculations = useCallback(() => {
    setHistory([]);
    setActiveOperator(null);
    setMemory(null);
    eraseDisplay();
  }, [eraseDisplay]);

  const getResultFromAction = useCallback(
    (
      left: number | string,
      operator: Operator,
      right?: number | string
    ): number => {
      const leftArgument = Number(left);
      const rightArgument = Number(right);

      switch (operator) {
        case Operator.Multiplier: {
          return leftArgument * rightArgument;
        }
        case Operator.Div: {
          return leftArgument / rightArgument;
        }
        case Operator.Plus: {
          return leftArgument + rightArgument;
        }
        case Operator.Minus: {
          return leftArgument - rightArgument;
        }
        case Operator.Cosinus: {
          return leftArgument * Math.cos(rightArgument);
        }
        case Operator.Sinus: {
          return leftArgument * Math.sin(rightArgument);
        }
        case Operator.Tangens: {
          return leftArgument * Math.tan(rightArgument);
        }
        case Operator.CosinusPower: {
          return leftArgument * Math.acos(rightArgument);
        }
        case Operator.Exp: {
          return leftArgument * 10 ** rightArgument;
        }
        case Operator.EulerPower: {
          return leftArgument * Math.E ** rightArgument;
        }
        case Operator.PowerTen: {
          // TODO
          return 0;
        }
        case Operator.SinusPow: {
          // TODO
          return 0;
        }
        case Operator.Logarithm: {
          // TODO
          return 0;
        }
        case Operator.Root: {
          // TODO
          return 0;
        }
        case Operator.PowerTwo: {
          // TODO
          return 0;
        }
        case Operator.Power: {
          // TODO
          return 0;
        }
        default:
          console.error(`Unexpected operator: ${operator}`);
          return 0;
      }
    },
    []
  );

  const equal = useCallback(() => {
    if (activeOperator) {
      setDisplay(
        displayChecker(
          getResultFromAction(memory || 0, activeOperator, display).toString()
        ).value
      );
    }

    setMemory(null);
    setHistory([]);
    setActiveOperator(null);
  }, [activeOperator, display, getResultFromAction, memory]);

  const executeCalculatorOperation = useCallback(
    (button: NoParameterActionButton) => {
      switch (button.operator) {
        case Operator.Clear: {
          clearCalculations();
          break;
        }
        case Operator.Equal: {
          equal();
          break;
        }
        case Operator.DoubleZero: {
          addToDisplay("00");
          break;
        }
        case Operator.Backspace: {
          setDisplay((state) => {
            if (state.length >= 2) {
              if (state.at(-2) === ".") {
                return displayChecker(state.slice(0, -2)).value;
              }
              return displayChecker(state.slice(0, -1)).value;
            }

            if (state.length === 1) {
              return displayChecker(DISPLAY_DEFAULT_VALUE).value;
            }

            return displayChecker(state).value;
          });
          break;
        }
        case Operator.Percent: {
          setDisplay((state) => {
            const num = Number(state) / 100;
            return displayChecker(num.toString()).value;
          });
          break;
        }
        case Operator.Factorial: {
          setDisplay((state) => {
            const factorial = (n: number): number => {
              if (n < 0) return -1;
              else if (n == 0) return 1;
              else {
                return n * factorial(n - 1);
              }
            };

            const num = factorial(Number(state));

            return displayChecker(num.toString()).value;
          });
          break;
        }
        default:
          break;
      }
    },
    [addToDisplay, clearCalculations, equal]
  );

  const executeDigitOperation = useCallback(
    (button: DigitButton) => {
      if (button.type !== ButtonType.Digit) {
        throw Error("Error");
      }

      addToDisplay(button.operator);
    },
    [addToDisplay]
  );

  const executeDotOperation = useCallback(
    (button: DotButton) => {
      if (button.operator !== Operator.Dot || button.type !== ButtonType.Dot) {
        throw Error("Error");
      }

      if (!display.includes(".")) {
        addToDisplay(".");
      }
    },
    [display, addToDisplay]
  );

  const executeActionOperation = useCallback(
    (button: Button) => {
      if (memory !== null) {
        setMemory((state) => {
          if (!activeOperator) {
            throw Error("No activeOperator");
          }

          return getResultFromAction(state || 0, activeOperator, display);
        });
        setActiveOperator(button.operator);
        eraseDisplay();
        return;
      }

      setActiveOperator(button.operator);
      setDisplay((state) => {
        setMemory(Number(state));
        return displayChecker(DISPLAY_DEFAULT_VALUE).value;
      });
    },
    [activeOperator, display, eraseDisplay, getResultFromAction, memory]
  );

  const executeCurrentValueAction = useCallback(
    (button: CurrentValueActionButton) => {
      switch (button.operator) {
        case Operator.PowerTen:
          break;
        case Operator.PI:
          break;
        case Operator.Euler:
          break;

        default:
          break;
      }
    },
    []
  );

  const clickUIButton = useCallback(
    (button: Button) => {
      switch (button.type) {
        case ButtonType.NoParameterAction: {
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
        case ButtonType.ParameterAction: {
          executeActionOperation(button);
          break;
        }
        case ButtonType.CurrentValueAction: {
          executeCurrentValueAction(button);
          break;
        }
        default:
          break;
      }

      setHistory((state: History[]) => {
        const newState = _.cloneDeep(state);
        newState.push(button);

        return newState;
      });
    },
    [
      executeActionOperation,
      executeCalculatorOperation,
      executeCurrentValueAction,
      executeDigitOperation,
      executeDotOperation,
    ]
  );

  const handleKeyDownEvent = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "Enter": {
          equal();
          break;
        }
        case "Shift": {
          setIsShiftPressed(true);
          break;
        }
        case "h": {
          setIsShortcutsShown(true);
          break;
        }
        default: {
          const clickedElement = refs.find((ref) => {
            const keyboardKey = ref.dataset.keyboardKey as string;
            return event.key.toLowerCase() === keyboardKey?.toLowerCase();
          });

          if (clickedElement) {
            clickedElement?.click();
            break;
          }

          // eslint-disable-next-line no-console
          console.debug(`Keyboard click not handled: ${event.key}`);
          break;
        }
      }
    },
    [equal, refs]
  );

  const handleKeyUpEvent = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case "Shift": {
        setIsShiftPressed(false);
        break;
      }
      case "h": {
        setIsShortcutsShown(false);
        break;
      }
      default:
        break;
    }
  }, []);

  useEvent("keydown", handleKeyDownEvent);
  useEvent("keyup", handleKeyUpEvent);

  const saveButtonRefs = useCallback((value: HTMLButtonElement[]) => {
    setRefs(value);
  }, []);

  const value: CalculatorProviderReturnProps = useMemo(
    () => ({
      display,
      clickUIButton,
      memory,
      activeOperator,
      history,
      isShiftPressed,
      saveButtonRefs,
      isShortcutsShown,
    }),
    [
      history,
      display,
      clickUIButton,
      memory,
      activeOperator,
      isShiftPressed,
      saveButtonRefs,
      isShortcutsShown,
    ]
  );

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};
