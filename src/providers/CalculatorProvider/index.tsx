import React, { createContext, useCallback, useMemo, useState } from "react";

export enum Operator {
  Radian = "Rad",
  Deg = "Deg",
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
  Log = "log",
  Four = "4",
  Five = "5",
  Six = "6",
  X = "×",
  E = "e",
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
  addOperation(operator: Operator): void;
}

export interface Calculation {
  operator: Operator;
}

export const initialProps: CalculatorProviderReturnProps = {
  displayValue: "",
  addOperation: () => {
    throw Error("Function addOperation is used before initialize");
  },
};

export const CalculatorContext =
  createContext<CalculatorProviderReturnProps>(initialProps);

export const CalculatorProvider: React.FC = ({ children }) => {
  const [displayValue, setDisplayValue] = useState<string>("12 + 34");
  const [calculations, setCalculations] = useState<Calculation[]>([]);

  const plus = useCallback(() => {
    console.log("plus()");
  }, []);

  const minus = useCallback(() => {
    console.log("minus()");
  }, []);

  const addOperation = useCallback((operator: Operator) => {
    setCalculations((state) => {
      state.push({ operator });
      return state;
    });
  }, []);

  const value = useMemo(
    () => ({
      displayValue,
      addOperation,
    }),
    [displayValue, addOperation]
  );

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};
