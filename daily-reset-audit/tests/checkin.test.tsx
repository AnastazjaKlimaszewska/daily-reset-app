import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import CheckInPage from "../app/check-in/page";

vi.mock("../lib/storage", () => ({
  saveCheckIn: vi.fn(),
  saveCompletedAction: vi.fn(),
}));

import {
  saveCheckIn,
  saveCompletedAction,
} from "../lib/storage";

const mockedSaveCheckIn = vi.mocked(saveCheckIn);
const mockedSaveCompletedAction = vi.mocked(saveCompletedAction);

function clickButton(text: string, index = 0) {
  const expectedText = text.toLowerCase();

  const buttons = screen
    .getAllByRole("button")
    .filter(
      (button) =>
        button.textContent?.trim().toLowerCase() === expectedText
    );

  expect(buttons.length).toBeGreaterThan(index);

  fireEvent.click(buttons[index]);
}

describe("Check-in page", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockedSaveCheckIn.mockResolvedValue(undefined);
    mockedSaveCompletedAction.mockResolvedValue(undefined);
  });

  it("renders the four check-in sections", () => {
    render(<CheckInPage />);

    expect(document.body.textContent).toContain("Energy");
    expect(document.body.textContent).toContain("Mood");
    expect(document.body.textContent).toContain("Mental load");
    expect(document.body.textContent).toContain("Available time");
  });

  it("starts with progress 0/4", () => {
    render(<CheckInPage />);

    expect(document.body.textContent).toContain("0/4");
  });

  it("updates progress when options are selected", () => {
    render(<CheckInPage />);

    clickButton("high", 0);
    clickButton("good");

    expect(document.body.textContent).toContain("2/4");
  });

  it("saves a complete check-in and generates recommendations", async () => {
    render(<CheckInPage />);

    // Energy
    clickButton("high", 0);

    // Mood
    clickButton("good");

    // Mental load
    // There are two "medium" buttons:
    // first belongs to Energy, second to Mental load.
    clickButton("medium", 1);

    // Available time
    clickButton("10 min");

    clickButton("Generate reset");

    await waitFor(() => {
      expect(mockedSaveCheckIn).toHaveBeenCalledTimes(1);
    });

    expect(mockedSaveCheckIn).toHaveBeenCalledWith(
      expect.objectContaining({
        energy: "high",
        mood: "good",
        mentalLoad: "medium",
        availableTime: 10,
        classifiedState: "active",
      })
    );

    await waitFor(() => {
      expect(document.body.textContent).toContain("active");
      expect(document.body.textContent).toContain("Choose one");
    });
  });

  it("saves a completed recommendation", async () => {
    render(<CheckInPage />);

    // Energy
    clickButton("low", 0);

    // Mood
    clickButton("neutral");

    // Mental load
    clickButton("medium", 1);

    // Available time
    clickButton("5 min");

    clickButton("Generate reset");

    await waitFor(() => {
      expect(mockedSaveCheckIn).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      expect(document.body.textContent).toContain("recovery");
      expect(document.body.textContent).toContain("Take 5 slow breaths");
    });

    const recommendation = screen
      .getAllByRole("button")
      .find((button) =>
        button.textContent?.includes("Take 5 slow breaths")
      );

    expect(recommendation).toBeDefined();

    fireEvent.click(recommendation!);

    const completeButton = screen.getByRole("button", {
      name: "Mark as completed",
    });

    fireEvent.click(completeButton);

    await waitFor(() => {
      expect(mockedSaveCompletedAction).toHaveBeenCalledTimes(1);
    });

    expect(mockedSaveCompletedAction).toHaveBeenCalledWith(
      expect.objectContaining({
        activity: "Take 5 slow breaths",
      })
    );

    await waitFor(() => {
      expect(document.body.textContent).toContain("Saved to history.");
    });
  });
});