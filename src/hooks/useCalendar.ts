import { useContext } from "react";
import { CalculatorContext } from "../providers/CalculatorProvider";

export const useCalculator = () => useContext(CalculatorContext);
