import type {
  EnergyLevel,
  MoodLevel,
  MentalLoadLevel,
  ClassifiedState,
} from "./db";

export interface CheckInInput {
  energy: EnergyLevel;
  mood: MoodLevel;
  mentalLoad: MentalLoadLevel;
  availableTime: 5 | 10 | 20;
}

export interface Recommendation {
  activity: string;
  category: "rest" | "movement" | "focus" | "environment";
}

export function classifyState(input: CheckInInput): ClassifiedState {
  if (
    input.energy === "low" ||
    input.mood === "low" ||
    input.mentalLoad === "high"
  ) {
    return "recovery";
  }

  if (
  input.energy === "high" &&
  input.mood === "good"
) {
  return "active";
}

  return "balanced";
}

export function getRecommendations(
  input: CheckInInput,
  state: ClassifiedState
): Recommendation[] {
  if (state === "recovery") {
    if (input.availableTime === 5) {
      return [
        { activity: "Take 5 slow breaths", category: "rest" },
        { activity: "Drink a glass of water", category: "rest" },
        { activity: "Stretch for 2 minutes", category: "movement" },
      ];
    }

    if (input.availableTime === 10) {
      return [
        { activity: "Take a 10 minute walk", category: "movement" },
        { activity: "Sit quietly without your phone", category: "rest" },
        { activity: "Tidy one small area", category: "environment" },
      ];
    }

    return [
      { activity: "Take a gentle 20 minute walk", category: "movement" },
      { activity: "Rest without screens for 20 minutes", category: "rest" },
      { activity: "Reset one part of your environment", category: "environment" },
    ];
  }

  if (state === "active") {
    if (input.availableTime === 5) {
      return [
        { activity: "Write down your top priority", category: "focus" },
        { activity: "Do a short mobility routine", category: "movement" },
        { activity: "Prepare your next task", category: "focus" },
      ];
    }

    if (input.availableTime === 10) {
      return [
        { activity: "Work on one important task", category: "focus" },
        { activity: "Do a short workout", category: "movement" },
        { activity: "Plan the next part of your day", category: "focus" },
      ];
    }

    return [
      { activity: "Do a focused 20 minute work session", category: "focus" },
      { activity: "Complete a 20 minute workout", category: "movement" },
      { activity: "Organize your workspace and plan ahead", category: "environment" },
    ];
  }

  if (input.availableTime === 5) {
    return [
      { activity: "Stretch for 5 minutes", category: "movement" },
      { activity: "Write down one next step", category: "focus" },
      { activity: "Clear one small surface", category: "environment" },
    ];
  }

  if (input.availableTime === 10) {
    return [
      { activity: "Go for a short walk", category: "movement" },
      { activity: "Complete one small task", category: "focus" },
      { activity: "Reset your desk or room", category: "environment" },
    ];
  }

  return [
    { activity: "Take a 20 minute walk", category: "movement" },
    { activity: "Do one focused task for 20 minutes", category: "focus" },
    { activity: "Organize one part of your environment", category: "environment" },
  ];
}