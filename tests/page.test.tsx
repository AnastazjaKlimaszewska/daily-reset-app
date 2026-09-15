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
import {
  saveCheckIn,
  saveCompletedAction,
  getAllCheckIns,
  getAllCompletedActions,
  clearDailyResetData,
} from "../lib/storage";

vi.mock("../lib/storage", () => ({
  saveCheckIn: vi.fn().mockResolvedValue(undefined),
  saveCompletedAction: vi.fn().mockResolvedValue(undefined),
  getAllCheckIns: vi.fn().mockResolvedValue([]),
  getAllCompletedActions: vi.fn().mockResolvedValue([]),
  clearDailyResetData: vi.fn().mockResolvedValue(undefined),
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

    vi.mocked(getAllCheckIns).mockResolvedValue([]);
    vi.mocked(getAllCompletedActions).mockResolvedValue([]);
  });

  test("shows the complete daily check-in and empty history", async () => {
    render(<Home />);

    expect(screen.getByText("Energy")).toBeInTheDocument();
    expect(screen.getByText("Mood")).toBeInTheDocument();
    expect(screen.getByText("Mental load")).toBeInTheDocument();
    expect(screen.getByText("Available time")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Get recommendations" })
    ).toBeDisabled();

    expect(
      await screen.findByText(
        "No history yet. Complete your first check-in to see it here."
      )
    ).toBeInTheDocument();
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

  test("shows stored check-in history with its completed action", async () => {
    vi.mocked(getAllCheckIns).mockResolvedValue([
      {
        id: "check-in-1",
        createdAt: "2026-09-15T20:00:00.000Z",
        energy: "low",
        mood: "neutral",
        mentalLoad: "high",
        availableTime: 10,
        classifiedState: "recovery",
      },
    ]);

    vi.mocked(getAllCompletedActions).mockResolvedValue([
      {
        id: "action-1",
        checkInId: "check-in-1",
        activity: "Take a 10 minute walk",
        category: "movement",
        completedAt: "2026-09-15T20:10:00.000Z",
      },
    ]);

    render(<Home />);

    expect(
      await screen.findByText("Take a 10 minute walk")
    ).toBeInTheDocument();

    expect(screen.getByText("Completed action")).toBeInTheDocument();
    expect(screen.getAllByText("recovery").length).toBeGreaterThan(0);
  });

  test("shows statistics based on stored history", async () => {
    vi.mocked(getAllCheckIns).mockResolvedValue([
      {
        id: "check-in-1",
        createdAt: "2026-09-15T20:00:00.000Z",
        energy: "low",
        mood: "neutral",
        mentalLoad: "high",
        availableTime: 10,
        classifiedState: "recovery",
      },
      {
        id: "check-in-2",
        createdAt: "2026-09-15T21:00:00.000Z",
        energy: "medium",
        mood: "good",
        mentalLoad: "medium",
        availableTime: 20,
        classifiedState: "balanced",
      },
      {
        id: "check-in-3",
        createdAt: "2026-09-15T22:00:00.000Z",
        energy: "low",
        mood: "low",
        mentalLoad: "high",
        availableTime: 5,
        classifiedState: "recovery",
      },
    ]);

    vi.mocked(getAllCompletedActions).mockResolvedValue([
      {
        id: "action-1",
        checkInId: "check-in-1",
        activity: "Take a 10 minute walk",
        category: "movement",
        completedAt: "2026-09-15T20:10:00.000Z",
      },
      {
        id: "action-2",
        checkInId: "check-in-2",
        activity: "Work on one important task",
        category: "focus",
        completedAt: "2026-09-15T21:10:00.000Z",
      },
    ]);

    render(<Home />);

    expect(
      await screen.findByText("Your reset summary")
    ).toBeInTheDocument();

    expect(screen.getByText("Check-ins")).toBeInTheDocument();
    expect(screen.getByText("Completed actions")).toBeInTheDocument();
    expect(screen.getByText("Completion rate")).toBeInTheDocument();
    expect(screen.getByText("Most common state")).toBeInTheDocument();

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("67%")).toBeInTheDocument();

    expect(screen.getAllByText("recovery").length).toBeGreaterThan(0);
  });

  test("does not clear data when deletion is cancelled", async () => {
    const confirmMock = vi
      .spyOn(window, "confirm")
      .mockReturnValue(false);

    render(<Home />);

    fireEvent.click(
      screen.getByRole("button", { name: "Clear all local data" })
    );

    expect(confirmMock).toHaveBeenCalledTimes(1);
    expect(clearDailyResetData).not.toHaveBeenCalled();

    confirmMock.mockRestore();
  });

  test("clears local data after confirmation", async () => {
    const confirmMock = vi
      .spyOn(window, "confirm")
      .mockReturnValue(true);

    render(<Home />);

    fireEvent.click(
      screen.getByRole("button", { name: "Clear all local data" })
    );

    await waitFor(() => {
      expect(clearDailyResetData).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      expect(getAllCheckIns).toHaveBeenCalled();
      expect(getAllCompletedActions).toHaveBeenCalled();
    });

    confirmMock.mockRestore();
  });
});