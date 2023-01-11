import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

it("renders language selector", () => {
  render(<Home />);

  const navBarEnglish = screen.getByText("English");
  const navBarGerman = screen.getByText("Deutsch");
  const navBarJapanese = screen.getByText("Japonais");
  const navBarSpanish = screen.getByText("Español");

  expect(navBarEnglish).toBeInTheDocument();
  expect(navBarGerman).toBeInTheDocument();
  expect(navBarJapanese).toBeInTheDocument();
  expect(navBarSpanish).toBeInTheDocument();
});

it("renders genre selector", () => {
  render(<Home />);

  const actionSelector = screen.getByText("Action");
  const animationSelector = screen.getByText("Animation");
  const comedySelector = screen.getByText("Comédie");
  const crimeSelector = screen.getByText("Crime");

  expect(actionSelector).toBeInTheDocument();
  expect(animationSelector).toBeInTheDocument();
  expect(comedySelector).toBeInTheDocument();
  expect(crimeSelector).toBeInTheDocument();
});

it("renders movie picker navbar", () => {
  render(<Home />);

  const genreSelector = screen.getByText("Genre ?");
  const languageSelector = screen.getByText("Langue d'origine ?");

  expect(genreSelector).toBeInTheDocument();
  expect(languageSelector).toBeInTheDocument();
});