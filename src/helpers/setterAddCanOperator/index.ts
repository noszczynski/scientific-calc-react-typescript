import { Operator } from "../../providers/CalculatorProvider";

export const setterAddCanOperator =
  (operator: Operator) => (state: Set<Operator>) => {
    state.add(operator);
    return new Set(state);
  };
