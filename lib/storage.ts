import { db, type CheckIn, type CompletedAction } from "./db";

export async function saveCheckIn(checkIn: CheckIn) {
  await db.checkIns.put(checkIn);
}

export async function saveCompletedAction(action: CompletedAction) {
  await db.completedActions.put(action);
}

export async function getAllCheckIns() {
  return db.checkIns.orderBy("createdAt").reverse().toArray();
}

export async function getAllCompletedActions() {
  return db.completedActions.orderBy("completedAt").reverse().toArray();
}

export async function getCompletedActionsForCheckIn(checkInId: string) {
  return db.completedActions
    .where("checkInId")
    .equals(checkInId)
    .toArray();
}

export async function clearDailyResetData() {
  await db.transaction(
    "rw",
    db.checkIns,
    db.completedActions,
    async () => {
      await db.checkIns.clear();
      await db.completedActions.clear();
    }
  );
}