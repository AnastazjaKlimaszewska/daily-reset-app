"use client";

import { useEffect, useMemo, useState } from "react";
import {
  type CheckIn,
  type CompletedAction,
} from "../../lib/db";
import {
  getAllCheckIns,
  getAllCompletedActions,
} from "../../lib/storage";

export default function InsightsPage() {
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);
  const [actions, setActions] = useState<CompletedAction[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const storedCheckIns = await getAllCheckIns();
      const storedActions = await getAllCompletedActions();

      setCheckIns(storedCheckIns);
      setActions(storedActions);
    };

    loadData();
  }, []);

  const completionRate =
    checkIns.length === 0
      ? 0
      : Math.round((actions.length / checkIns.length) * 100);

  const stateCounts = useMemo(() => {
    return checkIns.reduce(
      (result, checkIn) => {
        result[checkIn.classifiedState] += 1;
        return result;
      },
      {
        recovery: 0,
        balanced: 0,
        active: 0,
      }
    );
  }, [checkIns]);

  const mostCommonState = useMemo(() => {
    if (checkIns.length === 0) {
      return null;
    }

    const states = Object.entries(stateCounts) as Array<
      ["recovery" | "balanced" | "active", number]
    >;

    states.sort((a, b) => b[1] - a[1]);

    return states[0][0];
  }, [checkIns.length, stateCounts]);

  const categoryCounts = useMemo(() => {
    return actions.reduce<Record<string, number>>((result, action) => {
      result[action.category] = (result[action.category] ?? 0) + 1;
      return result;
    }, {});
  }, [actions]);

  const categories = Object.entries(categoryCounts).sort(
    (a, b) => b[1] - a[1]
  );

  const maxStateCount = Math.max(
    stateCounts.recovery,
    stateCounts.balanced,
    stateCounts.active,
    1
  );

  const latestCheckIn = checkIns[0] ?? null;

  return (
    <main className="min-h-screen bg-[#0D1016] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFB454]">
              Insights
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">
              Your reset patterns
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#8E98A9]">
              A simple overview of your saved check-ins and completed actions.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#151A23] px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#697384]">
              Latest state
            </p>

            <p className="mt-1 text-lg font-black capitalize text-white">
              {latestCheckIn?.classifiedState ?? "No data"}
            </p>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#151A23] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#677182]">
              Check-ins
            </p>

            <p className="mt-3 text-5xl font-black text-white">
              {checkIns.length}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#151A23] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#677182]">
              Completed actions
            </p>

            <p className="mt-3 text-5xl font-black text-white">
              {actions.length}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#151A23] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#677182]">
              Completion rate
            </p>

            <p className="mt-3 text-5xl font-black text-white">
              {completionRate}%
            </p>
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-[#131820]">
            <div className="border-b border-white/10 px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6D7788]">
                State distribution
              </p>
            </div>

            <div className="space-y-6 p-5">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#D6DAE2]">
                    Recovery
                  </span>

                  <span className="text-sm font-black text-white">
                    {stateCounts.recovery}
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-[#202632]">
                  <div
                    className="h-full bg-[#35D07F]"
                    style={{
                      width: `${
                        (stateCounts.recovery / maxStateCount) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#D6DAE2]">
                    Balanced
                  </span>

                  <span className="text-sm font-black text-white">
                    {stateCounts.balanced}
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-[#202632]">
                  <div
                    className="h-full bg-[#8A7CFF]"
                    style={{
                      width: `${
                        (stateCounts.balanced / maxStateCount) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#D6DAE2]">
                    Active
                  </span>

                  <span className="text-sm font-black text-white">
                    {stateCounts.active}
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-[#202632]">
                  <div
                    className="h-full bg-[#FFB454]"
                    style={{
                      width: `${
                        (stateCounts.active / maxStateCount) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#636D7D]">
                  Most common state
                </p>

                <p className="mt-2 text-2xl font-black capitalize text-white">
                  {mostCommonState ?? "No data yet"}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#131820]">
            <div className="border-b border-white/10 px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6D7788]">
                Completed action types
              </p>
            </div>

            <div className="p-5">
              {categories.length === 0 ? (
                <div className="py-10">
                  <p className="text-sm font-bold text-white">
                    No completed actions yet.
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#818B9B]">
                    Categories will appear here after you complete actions.
                  </p>
                </div>
              ) : (
                <div>
                  {categories.map(([category, count], index) => (
                    <div
                      key={category}
                      className="flex items-center justify-between border-b border-white/10 py-4 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black text-[#667080]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm font-bold capitalize text-[#D6DAE2]">
                          {category}
                        </span>
                      </div>

                      <span className="text-lg font-black text-white">
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}