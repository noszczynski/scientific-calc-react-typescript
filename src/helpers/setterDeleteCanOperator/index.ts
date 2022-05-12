import { Operator } from "../../constants/Operators";

export const setterDeleteCanOperator =
  (operator: Operator) => (state: Set<Operator>) => {
    state.delete(operator);
    return new Set(state);
  };
