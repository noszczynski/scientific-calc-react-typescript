import React from "react";
import { render } from "@testing-library/react";
import Button, { ButtonAppearance } from "./index";
import { Operator } from "../../providers/CalculatorProvider";

test("renders learn react link", () => {
  render(
    <Button
      operator={Operator.Plus}
      label="Label"
      appearance={ButtonAppearance.Light}
      onClick={jest.fn}
    />
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
