import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Header from "./Header";

describe("Header component", () => {
    it("renders logo", () => {
        render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        );
        const logo = screen.getByAltText("Logo");
        expect(logo).toBeInTheDocument();
      });

  it("renders category menu", () => {
    render( <BrowserRouter>
        <Header />
      </BrowserRouter>);
    const categoryMenu = screen.getByRole("list");
    expect(categoryMenu).toBeInTheDocument();
  });

  it("renders search bar", () => {
    render( <BrowserRouter>
        <Header />
      </BrowserRouter>);
    const searchBar = screen.getByPlaceholderText("Search Here...");
    expect(searchBar).toBeInTheDocument();
  });
});
