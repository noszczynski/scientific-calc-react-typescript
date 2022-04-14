import { Operator } from "../../providers/CalculatorProvider";

export const setterToggleCanOperator =
  (operator: Operator) => (state: Set<Operator>) => {
    if (state.has(operator)) {
      state.delete(operator);
    } else {
      state.add(operator);
    }

    return new Set(state);
  };
