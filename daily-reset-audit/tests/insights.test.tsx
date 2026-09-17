import { render, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import InsightsPage from "../app/insights/page";

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

describe("Insights page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows empty-state statistics when there is no data", async () => {
    mockedGetAllCheckIns.mockResolvedValue([]);
    mockedGetAllCompletedActions.mockResolvedValue([]);

    render(<InsightsPage />);

    await waitFor(() => {
      expect(document.body.textContent).toContain("Check-ins");
      expect(document.body.textContent).toContain("Completed actions");
      expect(document.body.textContent).toContain("0%");
      expect(document.body.textContent).toContain("No data yet");
    });
  });

  it("calculates completion rate", async () => {
    mockedGetAllCheckIns.mockResolvedValue([
      {
        id: "check-1",
        createdAt: "2026-09-17T10:00:00.000Z",
        energy: "high",
        mood: "good",
        mentalLoad: "low",
        availableTime: 20,
        classifiedState: "active",
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
        activity: "Do one important task",
        category: "focus",
        completedAt: "2026-09-17T10:20:00.000Z",
      },
    ]);

    render(<InsightsPage />);

    await waitFor(() => {
      expect(document.body.textContent).toContain("50%");
    });
  });

  it("shows state distribution", async () => {
    mockedGetAllCheckIns.mockResolvedValue([
      {
        id: "check-1",
        createdAt: "2026-09-17T10:00:00.000Z",
        energy: "low",
        mood: "low",
        mentalLoad: "high",
        availableTime: 5,
        classifiedState: "recovery",
      },
      {
        id: "check-2",
        createdAt: "2026-09-16T10:00:00.000Z",
        energy: "medium",
        mood: "neutral",
        mentalLoad: "medium",
        availableTime: 10,
        classifiedState: "balanced",
      },
      {
        id: "check-3",
        createdAt: "2026-09-15T10:00:00.000Z",
        energy: "high",
        mood: "good",
        mentalLoad: "low",
        availableTime: 20,
        classifiedState: "active",
      },
    ]);

    mockedGetAllCompletedActions.mockResolvedValue([]);

    render(<InsightsPage />);

    await waitFor(() => {
      expect(document.body.textContent).toContain("Recovery");
      expect(document.body.textContent).toContain("Balanced");
      expect(document.body.textContent).toContain("Active");
    });
  });

  it("shows the most common state", async () => {
    mockedGetAllCheckIns.mockResolvedValue([
      {
        id: "check-1",
        createdAt: "2026-09-17T10:00:00.000Z",
        energy: "low",
        mood: "neutral",
        mentalLoad: "high",
        availableTime: 5,
        classifiedState: "recovery",
      },
      {
        id: "check-2",
        createdAt: "2026-09-16T10:00:00.000Z",
        energy: "low",
        mood: "low",
        mentalLoad: "high",
        availableTime: 10,
        classifiedState: "recovery",
      },
      {
        id: "check-3",
        createdAt: "2026-09-15T10:00:00.000Z",
        energy: "medium",
        mood: "neutral",
        mentalLoad: "medium",
        availableTime: 10,
        classifiedState: "balanced",
      },
    ]);

    mockedGetAllCompletedActions.mockResolvedValue([]);

    render(<InsightsPage />);

    await waitFor(() => {
      expect(document.body.textContent).toContain("Most common state");
      expect(document.body.textContent).toContain("recovery");
    });
  });

  it("shows completed action categories", async () => {
    mockedGetAllCheckIns.mockResolvedValue([
      {
        id: "check-1",
        createdAt: "2026-09-17T10:00:00.000Z",
        energy: "high",
        mood: "good",
        mentalLoad: "low",
        availableTime: 20,
        classifiedState: "active",
      },
      {
        id: "check-2",
        createdAt: "2026-09-16T10:00:00.000Z",
        energy: "medium",
        mood: "neutral",
        mentalLoad: "medium",
        availableTime: 10,
        classifiedState: "balanced",
      },
    ]);

    mockedGetAllCompletedActions.mockResolvedValue([
      {
        id: "action-1",
        checkInId: "check-1",
        activity: "Do one important task",
        category: "focus",
        completedAt: "2026-09-17T10:20:00.000Z",
      },
      {
        id: "action-2",
        checkInId: "check-2",
        activity: "Plan the next part of the day",
        category: "planning",
        completedAt: "2026-09-16T10:20:00.000Z",
      },
    ]);

    render(<InsightsPage />);

    await waitFor(() => {
      expect(document.body.textContent).toContain("focus");
      expect(document.body.textContent).toContain("planning");
    });
  });
});