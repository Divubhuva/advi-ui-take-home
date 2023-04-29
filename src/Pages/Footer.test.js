import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  it("renders the footer text", () => {
    render(<Footer />);
    const footerText = screen.getByText(/News App/i);
    expect(footerText).toBeInTheDocument();
  });
});
