import { render } from "@testing-library/react";
import Button, { ButtonAppearance } from "./index";
import { Operator } from "../../constants/Operators";

test("renders learn react link", () => {
  render(
    <Button
      appearance={ButtonAppearance.Light}
      disabled={false}
      label="Label"
      operator={Operator.Plus}
      onClick={jest.fn}
    />
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
