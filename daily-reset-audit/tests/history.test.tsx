import { render, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import HistoryPage from "../app/history/page";

vi.mock("../lib/storage", () => ({
  getAllCheckIns: vi.fn(),
  getAllCompletedActions: vi.fn(),
}));

import {
  getAllCheckIns,
  getAllCompletedActions,
} from "../lib/storage";

const mockedGetAllCheckIns = vi.mocked(getAllCheckIns);
const mockedGetAllCompletedActions = vi.mocked(getAllCompletedActions);

describe("History page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows an empty state when there is no history", async () => {
    mockedGetAllCheckIns.mockResolvedValue([]);
    mockedGetAllCompletedActions.mockResolvedValue([]);

    render(<HistoryPage />);

    await waitFor(() => {
      expect(document.body.textContent).toContain("No history yet");
      expect(document.body.textContent).toContain(
        "Your first reset will appear here."
      );
    });
  });

  it("shows saved check-in details", async () => {
    mockedGetAllCheckIns.mockResolvedValue([
      {
        id: "check-1",
        createdAt: "2026-09-17T10:00:00.000Z",
        energy: "medium",
        mood: "neutral",
        mentalLoad: "high",
        availableTime: 10,
        classifiedState: "recovery",
      },
    ]);

    mockedGetAllCompletedActions.mockResolvedValue([]);

    render(<HistoryPage />);

    await waitFor(() => {
      const text = document.body.textContent ?? "";

      expect(text).toContain("recovery");
      expect(text).toContain("medium");
      expect(text).toContain("neutral");
      expect(text).toContain("high");
      expect(text).toContain("10");
    });
  });

  it("shows a completed action connected to a check-in", async () => {
    mockedGetAllCheckIns.mockResolvedValue([
      {
        id: "check-1",
        createdAt: "2026-09-17T10:00:00.000Z",
        energy: "low",
        mood: "neutral",
        mentalLoad: "medium",
        availableTime: 5,
        classifiedState: "recovery",
      },
    ]);

    mockedGetAllCompletedActions.mockResolvedValue([
      {
        id: "action-1",
        checkInId: "check-1",
        activity: "Take 5 slow breaths",
        category: "recovery",
        completedAt: "2026-09-17T10:05:00.000Z",
      },
    ]);

    render(<HistoryPage />);

    await waitFor(() => {
      const text = document.body.textContent ?? "";

      expect(text).toContain("Take 5 slow breaths");
      expect(text).toContain("Completed action");
    });
  });

  it("shows when no action was completed", async () => {
    mockedGetAllCheckIns.mockResolvedValue([
      {
        id: "check-1",
        createdAt: "2026-09-17T10:00:00.000Z",
        energy: "medium",
        mood: "neutral",
        mentalLoad: "medium",
        availableTime: 10,
        classifiedState: "balanced",
      },
    ]);

    mockedGetAllCompletedActions.mockResolvedValue([]);

    render(<HistoryPage />);

    await waitFor(() => {
      expect(document.body.textContent).toContain(
        "No action was marked as completed."
      );
    });
  });

  it("calculates completion rate", async () => {
    mockedGetAllCheckIns.mockResolvedValue([
      {
        id: "check-1",
        createdAt: "2026-09-17T10:00:00.000Z",
        energy: "medium",
        mood: "neutral",
        mentalLoad: "medium",
        availableTime: 10,
        classifiedState: "balanced",
      },
      {
        id: "check-2",
        createdAt: "2026-09-16T10:00:00.000Z",
        energy: "low",
        mood: "low",
        mentalLoad: "high",
        availableTime: 5,
        classifiedState: "recovery",
      },
    ]);

    mockedGetAllCompletedActions.mockResolvedValue([
      {
        id: "action-1",
        checkInId: "check-1",
        activity: "Reset your desk",
        category: "environment",
        completedAt: "2026-09-17T10:10:00.000Z",
      },
    ]);

    render(<HistoryPage />);

    await waitFor(() => {
      expect(document.body.textContent).toContain("50%");
    });
  });
});