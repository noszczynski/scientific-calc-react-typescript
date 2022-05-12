import { setterToggleCanOperator } from "./index";
import { Operator } from "../../constants/Operators";

test("setterToggleCanOperator correct works with adding", () => {
  expect(setterToggleCanOperator(Operator.One)(new Set())).toEqual(
    new Set([Operator.One])
  );
});

test("setterToggleCanOperator correct works with deleting", () => {
  expect(
    setterToggleCanOperator(Operator.One)(new Set([Operator.One]))
  ).toEqual(new Set());
});
