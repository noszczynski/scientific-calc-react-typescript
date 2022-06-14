import { render } from "@testing-library/react";
import Button from "./index";
import { Operator } from "../../constants/Operators";
import { ButtonAppearance, ButtonType } from "../../constants/buttons";

test("renders learn react link", () => {
  render(
    <Button
      appearance={ButtonAppearance.Light}
      disabled={false}
      label="Label"
      operator={Operator.Plus}
      setRef={jest.fn}
      type={ButtonType.Digit}
      onClick={jest.fn}
    />
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
