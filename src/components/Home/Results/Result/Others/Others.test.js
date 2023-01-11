import React from "react";
import { render } from "@testing-library/react";
import Others from "./Others";

it("renders button", () => {
  const { container } = render(<Others />);
  expect(container.firstChild).toHaveClass("others");
});

it("renders additional info blocks", () => {
  const { container } = render(<Others />);
  expect(container.getElementsByClassName("others-block").length).toBe(2);
});
