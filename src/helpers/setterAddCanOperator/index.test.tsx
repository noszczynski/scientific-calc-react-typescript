import { setterAddCanOperator } from "./index";
import { Operator } from "../../providers/CalculatorProvider";

test("setterAddCanOperator correct works with adding", () => {
  expect(setterAddCanOperator(Operator.One)(new Set())).toEqual(
    new Set([Operator.One])
  );
});

test("setterAddCanOperator correct works with adding, but element is in the set", () => {
  expect(setterAddCanOperator(Operator.One)(new Set([Operator.One]))).toEqual(
    new Set([Operator.One])
  );
});
