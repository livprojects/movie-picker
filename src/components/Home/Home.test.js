import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

it("renders welcome message", () => {
  render(<Home />);
  expect(screen.getByText("Dramatique")).toBeInTheDocument();
});
