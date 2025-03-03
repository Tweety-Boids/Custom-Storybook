import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Book from "./Book";

// tests to write:
// that the component renders the correct title

describe("Book Component", () => {
  it("renders the component with the correct title", () => {
    const { getByText } = render(<Book title="Book Title" />);
    expect(getByText("Book Title")).toBeInTheDocument();
  });
});