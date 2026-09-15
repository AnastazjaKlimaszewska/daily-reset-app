"use client";

import { useState } from "react";
import {
  type EnergyLevel,
  type MoodLevel,
  type MentalLoadLevel,
  type CheckIn,
  type CompletedAction,
} from "../lib/db";
import {
  classifyState,
  getRecommendations,
  type Recommendation,
} from "../lib/recommendations";
import {
  saveCheckIn,
  saveCompletedAction,
} from "../lib/storage";

export default function Home() {
  const [energy, setEnergy] = useState<EnergyLevel | null>(null);
  const [mood, setMood] = useState<MoodLevel | null>(null);
  const [mentalLoad, setMentalLoad] = useState<MentalLoadLevel | null>(null);
  const [availableTime, setAvailableTime] = useState<5 | 10 | 20 | null>(null);

  const [currentCheckIn, setCurrentCheckIn] = useState<CheckIn | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [classifiedState, setClassifiedState] = useState<string | null>(null);

  const [selectedRecommendation, setSelectedRecommendation] =
    useState<Recommendation | null>(null);

  const [completed, setCompleted] = useState(false);

  const isComplete =
    energy !== null &&
    mood !== null &&
    mentalLoad !== null &&
    availableTime !== null;

  const handleSubmit = async () => {
    if (!isComplete || !energy || !mood || !mentalLoad || !availableTime) {
      return;
    }

    const input = {
      energy,
      mood,
      mentalLoad,
      availableTime,
    };

    const state = classifyState(input);

    const checkIn: CheckIn = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      energy,
      mood,
      mentalLoad,
      availableTime,
      classifiedState: state,
    };

    await saveCheckIn(checkIn);

    const generatedRecommendations = getRecommendations(input, state);

    setCurrentCheckIn(checkIn);
    setClassifiedState(state);
    setRecommendations(generatedRecommendations);
    setSelectedRecommendation(null);
    setCompleted(false);
  };

  const handleCompleteAction = async () => {
    if (!currentCheckIn || !selectedRecommendation || completed) {
      return;
    }

    const completedAction: CompletedAction = {
      id: crypto.randomUUID(),
      checkInId: currentCheckIn.id,
      activity: selectedRecommendation.activity,
      category: selectedRecommendation.category,
      completedAt: new Date().toISOString(),
    };

    await saveCompletedAction(completedAction);

    setCompleted(true);
  };

  const optionClass = (selected: boolean) =>
    `rounded-2xl border p-4 text-left transition ${
      selected
        ? "border-stone-900 bg-stone-900 text-white"
        : "border-stone-200 bg-white hover:border-stone-400"
    }`;

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="mb-2 text-sm text-stone-500">DAILY RESET</p>

          <h1 className="mb-3 text-4xl font-semibold text-stone-900">
            How are you right now?
          </h1>

          <p className="mb-8 text-stone-600">
            Complete a short check-in and get a few realistic actions for your
            current situation.
          </p>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-stone-900">
              Energy
            </h2>

            <div className="grid gap-3 sm:grid-cols-3">
              {(["low", "medium", "high"] as EnergyLevel[]).map((value) => (
                <button
                  key={value}
                  onClick={() => setEnergy(value)}
                  className={optionClass(energy === value)}
                >
                  <span className="capitalize">{value}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-stone-900">
              Mood
            </h2>

            <div className="grid gap-3 sm:grid-cols-3">
              {(["low", "neutral", "good"] as MoodLevel[]).map((value) => (
                <button
                  key={value}
                  onClick={() => setMood(value)}
                  className={optionClass(mood === value)}
                >
                  <span className="capitalize">{value}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-stone-900">
              Mental load
            </h2>

            <div className="grid gap-3 sm:grid-cols-3">
              {(["low", "medium", "high"] as MentalLoadLevel[]).map(
                (value) => (
                  <button
                    key={value}
                    onClick={() => setMentalLoad(value)}
                    className={optionClass(mentalLoad === value)}
                  >
                    <span className="capitalize">{value}</span>
                  </button>
                )
              )}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-stone-900">
              Available time
            </h2>

            <div className="grid gap-3 sm:grid-cols-3">
              {([5, 10, 20] as const).map((value) => (
                <button
                  key={value}
                  onClick={() => setAvailableTime(value)}
                  className={optionClass(availableTime === value)}
                >
                  {value} minutes
                </button>
              ))}
            </div>
          </section>

          <button
            onClick={handleSubmit}
            disabled={!isComplete}
            className={`w-full rounded-2xl px-5 py-4 font-medium transition ${
              isComplete
                ? "bg-stone-900 text-white hover:bg-stone-800"
                : "cursor-not-allowed bg-stone-200 text-stone-400"
            }`}
          >
            Get recommendations
          </button>

          {classifiedState && recommendations.length > 0 && (
            <section className="mt-10 border-t border-stone-200 pt-8">
              <p className="mb-2 text-sm text-stone-500">
                CURRENT STATE
              </p>

              <h2 className="mb-5 text-2xl font-semibold capitalize text-stone-900">
                {classifiedState}
              </h2>

              <div className="space-y-3">
                {recommendations.map((recommendation) => {
                  const selected =
                    selectedRecommendation?.activity === recommendation.activity;

                  return (
                    <button
                      key={recommendation.activity}
                      onClick={() => {
                        if (!completed) {
                          setSelectedRecommendation(recommendation);
                        }
                      }}
                      className={`w-full rounded-2xl border p-4 text-left transition ${
                        selected
                          ? "border-stone-900 bg-stone-900 text-white"
                          : "border-stone-200 bg-stone-50 hover:border-stone-400"
                      }`}
                    >
                      <p className="font-medium">
                        {recommendation.activity}
                      </p>

                      <p
                        className={`mt-1 text-sm capitalize ${
                          selected ? "text-stone-300" : "text-stone-500"
                        }`}
                      >
                        {recommendation.category}
                      </p>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleCompleteAction}
                disabled={!selectedRecommendation || completed}
                className={`mt-5 w-full rounded-2xl px-5 py-4 font-medium transition ${
                  selectedRecommendation && !completed
                    ? "bg-stone-900 text-white hover:bg-stone-800"
                    : "cursor-not-allowed bg-stone-200 text-stone-400"
                }`}
              >
                {completed ? "Action completed" : "Mark as completed"}
              </button>

              {completed && (
                <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-4">
                  <p className="font-medium text-green-800">
                    Your completed action has been saved.
                  </p>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </main>
  );
}