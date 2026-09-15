import { beforeEach, describe, expect, test, vi } from "vitest";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Home from "../app/page";
import { saveCheckIn, saveCompletedAction } from "../lib/storage";

vi.mock("../lib/storage", () => ({
  saveCheckIn: vi.fn().mockResolvedValue(undefined),
  saveCompletedAction: vi.fn().mockResolvedValue(undefined),
}));

function completeCheckIn() {
  const energySection = screen.getByText("Energy").closest("section");
  const moodSection = screen.getByText("Mood").closest("section");
  const mentalLoadSection = screen.getByText("Mental load").closest("section");
  const timeSection = screen.getByText("Available time").closest("section");

  if (!energySection || !moodSection || !mentalLoadSection || !timeSection) {
    throw new Error("Check-in section not found");
  }

  fireEvent.click(
    within(energySection).getByRole("button", { name: "high" })
  );

  fireEvent.click(
    within(moodSection).getByRole("button", { name: "good" })
  );

  fireEvent.click(
    within(mentalLoadSection).getByRole("button", { name: "medium" })
  );

  fireEvent.click(
    within(timeSection).getByRole("button", { name: "10 minutes" })
  );
}

describe("Daily Reset", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("shows the complete daily check-in", () => {
    render(<Home />);

    expect(screen.getByText("Energy")).toBeInTheDocument();
    expect(screen.getByText("Mood")).toBeInTheDocument();
    expect(screen.getByText("Mental load")).toBeInTheDocument();
    expect(screen.getByText("Available time")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Get recommendations" })
    ).toBeDisabled();
  });

  test("generates recommendations after completing the check-in", async () => {
    render(<Home />);

    completeCheckIn();

    fireEvent.click(
      screen.getByRole("button", { name: "Get recommendations" })
    );

    await waitFor(() => {
      expect(saveCheckIn).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByText("active")).toBeInTheDocument();
    expect(
      screen.getByText("Work on one important task")
    ).toBeInTheDocument();
    expect(screen.getByText("Do a short workout")).toBeInTheDocument();
    expect(
      screen.getByText("Plan the next part of your day")
    ).toBeInTheDocument();
  });

  test("stores a selected completed action", async () => {
    render(<Home />);

    completeCheckIn();

    fireEvent.click(
      screen.getByRole("button", { name: "Get recommendations" })
    );

    await screen.findByText("Do a short workout");

    fireEvent.click(
      screen.getByRole("button", { name: /Do a short workout/i })
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Mark as completed" })
    );

    await waitFor(() => {
      expect(saveCompletedAction).toHaveBeenCalledTimes(1);
    });

    expect(saveCompletedAction).toHaveBeenCalledWith(
      expect.objectContaining({
        checkInId: expect.any(String),
        activity: "Do a short workout",
        category: "movement",
        completedAt: expect.any(String),
      })
    );

    expect(
      screen.getByText("Your completed action has been saved.")
    ).toBeInTheDocument();
  });
});