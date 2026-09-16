import { render, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import HomePage from "../app/page";

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

describe("Dashboard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the main dashboard", async () => {
    mockedGetAllCheckIns.mockResolvedValue([]);
    mockedGetAllCompletedActions.mockResolvedValue([]);

    render(<HomePage />);

    await waitFor(() => {
      expect(document.body.textContent).toContain("One useful move");
      expect(document.body.textContent).toContain("is enough.");
      expect(document.body.textContent).toContain("Current reset status");
    });
  });

  it("shows empty state when there is no saved data", async () => {
    mockedGetAllCheckIns.mockResolvedValue([]);
    mockedGetAllCompletedActions.mockResolvedValue([]);

    render(<HomePage />);

    await waitFor(() => {
      expect(document.body.textContent).toContain("No data yet");
      expect(document.body.textContent).toContain("Nothing completed yet");
    });
  });

  it("shows saved check-in data", async () => {
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

    mockedGetAllCompletedActions.mockResolvedValue([]);

    render(<HomePage />);

    await waitFor(() => {
      expect(document.body.textContent).toContain("Check-ins");
      expect(document.body.textContent).toContain("2");
      expect(document.body.textContent).toContain("balanced");
    });
  });

  it("shows the latest classified state", async () => {
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
    ]);

    mockedGetAllCompletedActions.mockResolvedValue([]);

    render(<HomePage />);

    await waitFor(() => {
      expect(document.body.textContent).toContain("Latest state");
      expect(document.body.textContent).toContain("active");
    });
  });

  it("shows the latest completed action", async () => {
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

    mockedGetAllCompletedActions.mockResolvedValue([
      {
        id: "action-1",
        checkInId: "check-1",
        activity: "Take a short walk",
        category: "movement",
        completedAt: "2026-09-17T10:10:00.000Z",
      },
    ]);

    render(<HomePage />);

    await waitFor(() => {
      expect(document.body.textContent).toContain("Last completed action");
      expect(document.body.textContent).toContain("Take a short walk");
    });
  });

  it("calculates the completion rate", async () => {
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
        activity: "Take a short walk",
        category: "movement",
        completedAt: "2026-09-17T10:10:00.000Z",
      },
    ]);

    render(<HomePage />);

    await waitFor(() => {
      expect(document.body.textContent).toContain("Completion");
      expect(document.body.textContent).toContain("50%");
    });
  });

  it("contains working links to check-in and history", async () => {
    mockedGetAllCheckIns.mockResolvedValue([]);
    mockedGetAllCompletedActions.mockResolvedValue([]);

    const { container } = render(<HomePage />);

    await waitFor(() => {
      const checkInLink = container.querySelector('a[href="/check-in"]');
      const historyLink = container.querySelector('a[href="/history"]');

      expect(checkInLink).not.toBeNull();
      expect(historyLink).not.toBeNull();
    });
  });
});