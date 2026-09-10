"use client";

import { useEffect, useState } from "react";

type HistoryEntry = {
  date: string;
  mood: string;
  activity: string;
};

export default function Home() {
  const [mood, setMood] = useState<string | null>(null);
  const [completedActivity, setCompletedActivity] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const activities = {
    low: [
      "Drink a glass of water",
      "Take 5 slow breaths",
      "Stretch for 2 minutes",
    ],
    medium: [
      "Go for a 10 minute walk",
      "Tidy one small area",
      "Write down 3 priorities",
    ],
    high: [
      "Do a 20 minute workout",
      "Work on an important task",
      "Plan something for tomorrow",
    ],
  };

  useEffect(() => {
    const savedHistory = localStorage.getItem("dailyResetHistory");

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const selectMood = (newMood: string) => {
    setMood(newMood);
    setCompletedActivity(null);
  };

  const completeActivity = (activity: string) => {
    if (!mood) return;

    setCompletedActivity(activity);

    const newEntry: HistoryEntry = {
      date: new Date().toLocaleDateString(),
      mood,
      activity,
    };

    const updatedHistory = [newEntry, ...history];

    setHistory(updatedHistory);

    localStorage.setItem(
      "dailyResetHistory",
      JSON.stringify(updatedHistory)
    );
  };

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-10">
      <div className="mx-auto w-full max-w-xl">
        <div className="bg-white rounded-3xl shadow-sm p-8">
          <p className="text-sm text-stone-500 mb-2">DAILY RESET</p>

          <h1 className="text-4xl font-semibold text-stone-900 mb-3">
            How are you feeling today?
          </h1>

          <p className="text-stone-600 mb-8">
            Choose the option that best matches your energy right now.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => selectMood("low")}
              className={`rounded-2xl border p-5 text-left transition ${
                mood === "low"
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-200 hover:border-stone-400"
              }`}
            >
              <span className="text-2xl block mb-2">😴</span>
              <span className="font-medium">Low</span>
              <span className="text-sm block mt-1 opacity-70">
                I need something easy
              </span>
            </button>

            <button
              onClick={() => selectMood("medium")}
              className={`rounded-2xl border p-5 text-left transition ${
                mood === "medium"
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-200 hover:border-stone-400"
              }`}
            >
              <span className="text-2xl block mb-2">🙂</span>
              <span className="font-medium">Medium</span>
              <span className="text-sm block mt-1 opacity-70">
                I can do a little
              </span>
            </button>

            <button
              onClick={() => selectMood("high")}
              className={`rounded-2xl border p-5 text-left transition ${
                mood === "high"
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-200 hover:border-stone-400"
              }`}
            >
              <span className="text-2xl block mb-2">⚡</span>
              <span className="font-medium">High</span>
              <span className="text-sm block mt-1 opacity-70">
                I have energy
              </span>
            </button>
          </div>

          {mood && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-stone-900 mb-4">
                Suggested activities
              </h2>

              <div className="space-y-3">
                {activities[mood as keyof typeof activities].map((activity) => (
                  <button
                    key={activity}
                    onClick={() => completeActivity(activity)}
                    className={`w-full text-left rounded-2xl border p-4 transition ${
                      completedActivity === activity
                        ? "bg-green-100 border-green-300"
                        : "bg-stone-50 border-stone-200 hover:border-stone-400"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span>{activity}</span>

                      {completedActivity === activity && (
                        <span className="text-green-700 font-medium">
                          ✓ Done
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 bg-white rounded-3xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-stone-900 mb-5">
            Your history
          </h2>

          {history.length === 0 ? (
            <p className="text-stone-500">
              No completed activities yet.
            </p>
          ) : (
            <div className="space-y-3">
              {history.slice(0, 5).map((entry, index) => (
                <div
                  key={`${entry.date}-${entry.activity}-${index}`}
                  className="rounded-2xl border border-stone-200 p-4"
                >
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="font-medium text-stone-900">
                        {entry.activity}
                      </p>
                      <p className="text-sm text-stone-500 capitalize">
                        Energy: {entry.mood}
                      </p>
                    </div>

                    <span className="text-sm text-stone-400">
                      {entry.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}