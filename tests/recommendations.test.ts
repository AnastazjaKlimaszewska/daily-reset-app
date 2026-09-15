import { describe, expect, test } from "vitest";
import {
  classifyState,
  getRecommendations,
} from "../lib/recommendations";

describe("Daily Reset recommendation logic", () => {
  test("classifies low energy as recovery", () => {
    const state = classifyState({
      energy: "low",
      mood: "neutral",
      mentalLoad: "medium",
      availableTime: 10,
    });

    expect(state).toBe("recovery");
  });

  test("classifies high energy and good mood as active", () => {
    const state = classifyState({
      energy: "high",
      mood: "good",
      mentalLoad: "low",
      availableTime: 20,
    });

    expect(state).toBe("active");
  });

  test("classifies moderate input as balanced", () => {
    const state = classifyState({
      energy: "medium",
      mood: "neutral",
      mentalLoad: "medium",
      availableTime: 10,
    });

    expect(state).toBe("balanced");
  });

  test("returns three recommendations", () => {
    const input = {
      energy: "low" as const,
      mood: "neutral" as const,
      mentalLoad: "high" as const,
      availableTime: 5 as const,
    };

    const state = classifyState(input);
    const recommendations = getRecommendations(input, state);

    expect(recommendations).toHaveLength(3);
  });

  test("recommendations respect available time and state", () => {
    const input = {
      energy: "high" as const,
      mood: "good" as const,
      mentalLoad: "low" as const,
      availableTime: 20 as const,
    };

    const state = classifyState(input);
    const recommendations = getRecommendations(input, state);

    expect(state).toBe("active");
    expect(recommendations[0].activity).toContain("20 minute");
  });
});