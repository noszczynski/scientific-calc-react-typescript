import {render} from "@testing-library/react";
import React from "react";
import Button from "./index";

test("renders learn react link", () => {
    render(<Button />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});
