import React, { createContext, useCallback, useMemo, useState } from "react";
import * as _ from "lodash";
import { Operator } from "../../constants/Operators";
import { useEvent } from "react-use";
import { ButtonType, OperatorButton } from "../../components/Button";

export enum RadianDegrees {
  Radian = "Rad",
  Deg = "Deg",
}

type Memory = number | null;
type ActiveOperator = Operator | null;
type DisplayValue = string;
type History = OperatorButton;

export interface CalculatorProviderReturnProps {
  display: string;
  currentMode: Mode;
  memory: Memory;
  activeOperator: ActiveOperator;
  history: History[];
  isShiftPressed: boolean;
  isShortcutsShown: boolean;
  handleSetCurrentMode(mode: Mode): void;
  addOperation(button: OperatorButton): void;
  saveButtonRefs(refs: HTMLButtonElement[]): void;
}

export enum Mode {
  Rad = "Rad",
  Deg = "Deg",
}

export const initialProps: CalculatorProviderReturnProps = {
  display: "",
  currentMode: Mode.Rad,
  memory: null,
  activeOperator: null,
  history: [],
  isShiftPressed: false,
  isShortcutsShown: false,
  handleSetCurrentMode: () => {
    throw Error("Function handleSetCurrentMode is used before initialize");
  },
  addOperation: () => {
    throw Error("Function addOperation is used before initialize");
  },
  saveButtonRefs: () => {
    throw Error("Function setRefs is used before initialize");
  },
};

const DISPLAY_DEFAULT_VALUE = "0";
const DISPLAY_DEFAULT_CHAR_LIMIT = 12;

export const CalculatorContext =
  createContext<CalculatorProviderReturnProps>(initialProps);

export const CalculatorProvider: React.FC = ({ children }) => {
  const [display, setDisplay] = useState<DisplayValue>(DISPLAY_DEFAULT_VALUE);
  const [memory, setMemory] = useState<Memory>(null);
  const [activeOperator, setActiveOperator] = useState<ActiveOperator>(null);
  const [history, setHistory] = useState<History[]>([]);
  const [currentMode, setCurrentMode] = useState<Mode>(Mode.Rad);
  const [isShiftPressed, setIsShiftPressed] = useState<boolean>(false);
  const [isShortcutsShown, setIsShortcutsShown] = useState<boolean>(true);
  const [refs, setRefs] = useState<HTMLButtonElement[]>([]);

  const handleSetCurrentMode = useCallback((mode: Mode) => {
    setCurrentMode(mode);
  }, []);

  const addToDisplay = useCallback((value: string | number) => {
    setDisplay((state) => {
      if (state === DISPLAY_DEFAULT_VALUE) {
        if (value === "00") {
          return DISPLAY_DEFAULT_VALUE;
        }

        if (value !== ".") {
          return `${value}`;
        }
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

  const getResultFromAction = useCallback(
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

  const equal = useCallback(() => {
    if (activeOperator) {
      setDisplay(
        getResultFromAction(memory || 0, activeOperator, display).toString()
      );
    }

    setMemory(null);
    setHistory([]);
    setActiveOperator(null);
  }, [activeOperator, display, getResultFromAction, memory]);

  const executeCalculatorOperation = useCallback(
    (button: OperatorButton) => {
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
                return state.slice(0, -2);
              }
              return state.slice(0, -1);
            }

            if (state.length === 1) {
              return DISPLAY_DEFAULT_VALUE;
            }

            return state;
          });
          break;
        }
        default:
          throw Error("Error");
      }
    },
    [addToDisplay, clearCalculations, equal]
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

  const executeActionOperation = useCallback(
    ({ operator }: OperatorButton) => {
      switch (operator) {
        case Operator.Multiplier:
        case Operator.Div:
        case Operator.Plus:
        case Operator.Minus: {
          if (memory !== null) {
            setMemory((state) => {
              if (!activeOperator) {
                throw Error("No activeOperator");
              }

              return getResultFromAction(state || 0, activeOperator, display);
            });
            setActiveOperator(operator);
            eraseDisplay();
            break;
          }

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
    },
    [activeOperator, display, eraseDisplay, getResultFromAction, memory]
  );

  const clickUIButton = useCallback(
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
        newState.push(button);

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

          console.log(`Keyboard click not handled: ${event.key}`);
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
      addOperation: clickUIButton,
      currentMode,
      handleSetCurrentMode,
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
      currentMode,
      handleSetCurrentMode,
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
