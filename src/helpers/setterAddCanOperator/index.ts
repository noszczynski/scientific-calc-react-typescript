import { Operator } from "../../constants/Operators";

export const setterAddCanOperator =
  (operator: Operator) => (state: Set<Operator>) => {
    state.add(operator);
    return new Set(state);
  };
