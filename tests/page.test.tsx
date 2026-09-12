import { beforeEach, describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Home from "../app/page";

describe("Daily Reset", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("shows activity recommendations after selecting energy level", () => {
    render(<Home />);

    fireEvent.click(screen.getByText("Low"));

    expect(
      screen.getByText("Drink a glass of water")
    ).toBeInTheDocument();
  });

  test("marks an activity as completed", () => {
    render(<Home />);

    fireEvent.click(screen.getByText("Low"));
    fireEvent.click(screen.getByText("Drink a glass of water"));

    expect(screen.getByText("✓ Done")).toBeInTheDocument();
  });

  test("creates a history entry after completing an activity", () => {
    render(<Home />);

    fireEvent.click(screen.getByText("Medium"));
    fireEvent.click(screen.getByText("Go for a 10 minute walk"));

    expect(screen.getByText("Energy: medium")).toBeInTheDocument();
  });
});