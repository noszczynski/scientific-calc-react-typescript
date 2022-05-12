import { setterDeleteCanOperator } from "./index";
import { Operator } from "../../constants/Operators";

test("setterDeleteCanOperator correct works with adding", () => {
  expect(setterDeleteCanOperator(Operator.One)(new Set())).toEqual(new Set());
});

test("setterDeleteCanOperator correct works with deleting, but element is not in the set", () => {
  expect(
    setterDeleteCanOperator(Operator.One)(new Set([Operator.One]))
  ).toEqual(new Set());
});
