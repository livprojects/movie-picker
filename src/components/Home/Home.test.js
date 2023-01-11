import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Home from "./Home";

import { rest } from "msw";
import { setupServer } from "msw/node";

// declare which API requests to mock
const server = setupServer(
  // capture "GET /greeting" requests
  rest.get(
    `https://${process.env.REACT_APP_API_BASE_URL}/*`,
    (req, res, ctx) => {
      // respond using a mocked JSON body
      return res(
        ctx.json({
          adult: false,
          id: 8587,
          original_language: "en",
          original_title: "The Lion King",
          overview:
            "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?",
          poster_path: "/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
          release_date: "1994-06-23",
          title: "The Lion King",
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("renders language selector", () => {
  server.use(
    rest.get(`https://${process.env.REACT_APP_API_BASE_URL}/*`, (req, res, ctx) => {
      return res(ctx.json({
        adult: false,
        id: 8587,
        original_language: "en",
        original_title: "The Lion King",
        overview:
          "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?",
        poster_path: "/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        release_date: "1994-06-23",
        title: "The Lion King",
      }));
    })
  );

  render(<Home />);
  screen.debug();

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
