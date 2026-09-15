import Dexie, { type Table } from "dexie";

export type EnergyLevel = "low" | "medium" | "high";
export type MoodLevel = "low" | "neutral" | "good";
export type MentalLoadLevel = "low" | "medium" | "high";
export type ClassifiedState = "recovery" | "balanced" | "active";

export interface CheckIn {
  id: string;
  createdAt: string;
  energy: EnergyLevel;
  mood: MoodLevel;
  mentalLoad: MentalLoadLevel;
  availableTime: 5 | 10 | 20;
  classifiedState: ClassifiedState;
}

export interface CompletedAction {
  id: string;
  checkInId: string;
  activity: string;
  category: string;
  completedAt: string;
}

class DailyResetDatabase extends Dexie {
  checkIns!: Table<CheckIn, string>;
  completedActions!: Table<CompletedAction, string>;

  constructor() {
    super("DailyResetDB");

    this.version(1).stores({
      checkIns: "id, createdAt, energy, mood, mentalLoad, classifiedState",
      completedActions: "id, checkInId, completedAt, category",
    });
  }
}

export const db = new DailyResetDatabase();