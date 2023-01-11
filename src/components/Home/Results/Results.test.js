import React from "react";
import { render, screen } from "@testing-library/react";
import Results from "./Results";

it("result object displays properly", () => {
  const { container } = render(<Results />);

  const summaryYear = screen.getByText(1994);

  expect(summaryYear).toBeInTheDocument();
  expect(
    container.getElementsByClassName("result-card-info-label").length
  ).toBe(3);
});
