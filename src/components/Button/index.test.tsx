import {render} from "@testing-library/react";
import React from "react";
import Button, {ButtonAppearance} from "./index";

test("renders learn react link", () => {
    render(<Button label="Label" appearance={ButtonAppearance.Light} callback={jest.fn} />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});
