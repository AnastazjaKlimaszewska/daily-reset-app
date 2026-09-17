"use client";

import { useState } from "react";
import {
  type EnergyLevel,
  type MoodLevel,
  type MentalLoadLevel,
  type CheckIn,
  type CompletedAction,
} from "../../lib/db";
import {
  classifyState,
  getRecommendations,
  type Recommendation,
} from "../../lib/recommendations";
import {
  saveCheckIn,
  saveCompletedAction,
} from "../../lib/storage";

export default function CheckInPage() {
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

  const optionClass = (selected: boolean) =>
    `w-full rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${
      selected
        ? "border-[#35D07F] bg-[#173326] text-[#CFF6DF]"
        : "border-white/10 bg-[#171C25] text-[#A7B0BF] hover:border-white/20 hover:bg-[#1C222D] hover:text-white"
    }`;

  const handleSubmit = async () => {
    if (!energy || !mood || !mentalLoad || !availableTime) {
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

    setCurrentCheckIn(checkIn);
    setClassifiedState(state);
    setRecommendations(getRecommendations(input, state));
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

  const selectedCount = [
    energy,
    mood,
    mentalLoad,
    availableTime,
  ].filter(Boolean).length;

  return (
    <main className="min-h-screen bg-[#0D1016] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#35D07F]">
              Check-in
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">
              What is your current state?
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#8E98A9]">
              Four quick inputs. No scoring and no profile setup. The result is
              used only to choose a realistic action for right now.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#697384]">
              Progress
            </span>

            <span className="rounded-lg border border-white/10 bg-[#151A23] px-3 py-2 text-sm font-bold text-white">
              {selectedCount}/4
            </span>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#131820]">
            <div className="border-b border-white/10 bg-[#171C25] px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6F798A]">
                    Input
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-white">
                    Current conditions
                  </h2>
                </div>

                <div className="flex gap-1.5">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`h-1.5 w-8 rounded-full ${
                        step <= selectedCount
                          ? "bg-[#35D07F]"
                          : "bg-[#2A313D]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="divide-y divide-white/10">
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">Energy</p>
                    <p className="mt-1 text-xs text-[#778193]">
                      How much physical energy do you have?
                    </p>
                  </div>

                  <span className="text-xs font-bold text-[#4E5868]">01</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
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
              </div>

              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">Mood</p>
                    <p className="mt-1 text-xs text-[#778193]">
                      How does the day feel emotionally?
                    </p>
                  </div>

                  <span className="text-xs font-bold text-[#4E5868]">02</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
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
              </div>

              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">Mental load</p>
                    <p className="mt-1 text-xs text-[#778193]">
                      How crowded does your head feel?
                    </p>
                  </div>

                  <span className="text-xs font-bold text-[#4E5868]">03</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
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
              </div>

              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">
                      Available time
                    </p>
                    <p className="mt-1 text-xs text-[#778193]">
                      How much time can you realistically give this?
                    </p>
                  </div>

                  <span className="text-xs font-bold text-[#4E5868]">04</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {([5, 10, 20] as const).map((value) => (
                    <button
                      key={value}
                      onClick={() => setAvailableTime(value)}
                      className={optionClass(availableTime === value)}
                    >
                      {value} min
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-[#10141B] p-5">
              <button
                onClick={handleSubmit}
                disabled={!isComplete}
                className={`w-full rounded-xl px-5 py-3.5 text-sm font-black transition ${
                  isComplete
                    ? "bg-[#35D07F] text-[#0B1610] hover:bg-[#45DF8D]"
                    : "cursor-not-allowed bg-[#202632] text-[#596373]"
                }`}
              >
                Generate reset
              </button>
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#131820]">
            <div className="border-b border-white/10 bg-[#171C25] px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6F798A]">
                Result
              </p>

              <h2 className="mt-1 text-lg font-bold text-white">
                Suggested next move
              </h2>
            </div>

            {!classifiedState ? (
              <div className="flex min-h-[590px] items-center justify-center p-8">
                <div className="max-w-sm">
                  <div className="mb-5 h-1 w-16 bg-[#35D07F]" />

                  <h3 className="text-2xl font-black tracking-tight text-white">
                    Waiting for your check-in
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#858FA0]">
                    Complete all four inputs. The recommendation panel will
                    appear here without leaving this screen.
                  </p>

                  <div className="mt-8 space-y-3">
                    <div className="h-14 rounded-xl border border-white/5 bg-[#171C24]" />
                    <div className="h-14 rounded-xl border border-white/5 bg-[#171C24]" />
                    <div className="h-14 rounded-xl border border-white/5 bg-[#171C24]" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5">
                <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#727C8D]">
                      State detected
                    </p>

                    <p className="mt-1 text-3xl font-black capitalize text-white">
                      {classifiedState}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#202632] px-4 py-3">
                    <p className="text-xs text-[#747F90]">Time window</p>
                    <p className="mt-1 font-bold text-white">
                      {availableTime} min
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#727C8D]">
                    Choose one
                  </p>

                  <div className="space-y-3">
                    {recommendations.map((recommendation, index) => {
                      const selected =
                        selectedRecommendation?.activity ===
                        recommendation.activity;

                      return (
                        <button
                          key={recommendation.activity}
                          onClick={() => {
                            if (!completed) {
                              setSelectedRecommendation(recommendation);
                            }
                          }}
                          className={`group flex w-full items-start gap-4 rounded-xl border p-4 text-left transition ${
                            selected
                              ? "border-[#8A7CFF] bg-[#242238]"
                              : "border-white/10 bg-[#171C25] hover:border-white/20 hover:bg-[#1C222D]"
                          }`}
                        >
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black ${
                              selected
                                ? "bg-[#8A7CFF] text-white"
                                : "bg-[#232A36] text-[#7D8798]"
                            }`}
                          >
                            {index + 1}
                          </span>

                          <div>
                            <p
                              className={`font-bold ${
                                selected ? "text-white" : "text-[#D6DAE2]"
                              }`}
                            >
                              {recommendation.activity}
                            </p>

                            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#707A8B]">
                              {recommendation.category}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={handleCompleteAction}
                  disabled={!selectedRecommendation || completed}
                  className={`mt-5 w-full rounded-xl px-5 py-3.5 text-sm font-black transition ${
                    selectedRecommendation && !completed
                      ? "bg-[#8A7CFF] text-white hover:bg-[#9B8EFF]"
                      : "cursor-not-allowed bg-[#202632] text-[#596373]"
                  }`}
                >
                  {completed ? "Action completed" : "Mark as completed"}
                </button>

                {completed && (
                  <div className="mt-4 border-l-2 border-[#35D07F] bg-[#14271D] px-4 py-3">
                    <p className="text-sm font-semibold text-[#BDEBD0]">
                      Saved to history.
                    </p>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}