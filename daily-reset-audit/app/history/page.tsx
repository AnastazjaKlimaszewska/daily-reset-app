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

export default function HistoryPage() {
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);
  const [actions, setActions] = useState<CompletedAction[]>([]);

  useEffect(() => {
    const loadHistory = async () => {
      const storedCheckIns = await getAllCheckIns();
      const storedActions = await getAllCompletedActions();

      setCheckIns(storedCheckIns);
      setActions(storedActions);
    };

    loadHistory();
  }, []);

  const historyEntries = useMemo(() => {
    return checkIns.map((checkIn) => ({
      checkIn,
      action:
        actions.find((action) => action.checkInId === checkIn.id) ?? null,
    }));
  }, [checkIns, actions]);

  const completionRate =
    checkIns.length === 0
      ? 0
      : Math.round((actions.length / checkIns.length) * 100);

  const getStateStyle = (state: CheckIn["classifiedState"]) => {
    if (state === "recovery") {
      return {
        badge: "bg-[#173326] text-[#86E6B0]",
        line: "bg-[#35D07F]",
      };
    }

    if (state === "active") {
      return {
        badge: "bg-[#3A2816] text-[#FFBE6B]",
        line: "bg-[#FFB454]",
      };
    }

    return {
      badge: "bg-[#25223A] text-[#A99FFF]",
      line: "bg-[#8A7CFF]",
    };
  };

  return (
    <main className="min-h-screen bg-[#0D1016] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A7CFF]">
              History
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">
              Your previous resets
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#8E98A9]">
              A practical log of what your state looked like and whether a
              check-in turned into a completed action.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="rounded-xl border border-white/10 bg-[#151A23] px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#697384]">
                Check-ins
              </p>

              <p className="mt-1 text-xl font-black text-white">
                {checkIns.length}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#151A23] px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#697384]">
                Completed
              </p>

              <p className="mt-1 text-xl font-black text-white">
                {actions.length}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#151A23] px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#697384]">
                Rate
              </p>

              <p className="mt-1 text-xl font-black text-white">
                {completionRate}%
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[310px_1fr]">
          <aside className="h-fit rounded-2xl border border-white/10 bg-[#131820]">
            <div className="border-b border-white/10 px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6D7788]">
                Log overview
              </p>
            </div>

            <div className="p-5">
              <div className="border-l-2 border-[#35D07F] pl-4">
                <p className="text-sm font-bold text-white">
                  Check-ins are not streaks
                </p>

                <p className="mt-2 text-sm leading-6 text-[#858FA0]">
                  A saved check-in still matters even when no action was
                  completed.
                </p>
              </div>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#8D97A8]">Recovery</span>
                  <span className="h-2.5 w-10 rounded-full bg-[#35D07F]" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#8D97A8]">Balanced</span>
                  <span className="h-2.5 w-10 rounded-full bg-[#8A7CFF]" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#8D97A8]">Active</span>
                  <span className="h-2.5 w-10 rounded-full bg-[#FFB454]" />
                </div>
              </div>
            </div>
          </aside>

          <section>
            {historyEntries.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/10 bg-[#11151C] px-6 py-16 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#626C7C]">
                  No history yet
                </p>

                <h2 className="mt-3 text-2xl font-black text-white">
                  Your first reset will appear here.
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#808A9A]">
                  Complete a check-in and this page will start building your
                  local reset log.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {historyEntries.map(({ checkIn, action }, index) => {
                  const style = getStateStyle(checkIn.classifiedState);
                  const date = new Date(checkIn.createdAt);

                  return (
                    <article
                      key={checkIn.id}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-[#131820]"
                    >
                      <div className="grid md:grid-cols-[150px_1fr]">
                        <div className="border-b border-white/10 bg-[#10141B] p-5 md:border-b-0 md:border-r">
                          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#596373]">
                            #{String(historyEntries.length - index).padStart(
                              2,
                              "0"
                            )}
                          </p>

                          <p className="mt-3 text-sm font-bold text-white">
                            {date.toLocaleDateString(undefined, {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </p>

                          <p className="mt-1 text-xs text-[#727C8D]">
                            {date.toLocaleTimeString(undefined, {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>

                          <div className={`mt-5 h-1.5 w-12 rounded-full ${style.line}`} />
                        </div>

                        <div className="p-5">
                          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                            <div>
                              <span
                                className={`inline-flex rounded-lg px-3 py-1.5 text-xs font-bold capitalize ${style.badge}`}
                              >
                                {checkIn.classifiedState}
                              </span>

                              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                <div>
                                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#606A7A]">
                                    Energy
                                  </p>

                                  <p className="mt-1 text-sm font-bold capitalize text-[#D4D8E0]">
                                    {checkIn.energy}
                                  </p>
                                </div>

                                <div>
                                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#606A7A]">
                                    Mood
                                  </p>

                                  <p className="mt-1 text-sm font-bold capitalize text-[#D4D8E0]">
                                    {checkIn.mood}
                                  </p>
                                </div>

                                <div>
                                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#606A7A]">
                                    Mental load
                                  </p>

                                  <p className="mt-1 text-sm font-bold capitalize text-[#D4D8E0]">
                                    {checkIn.mentalLoad}
                                  </p>
                                </div>

                                <div>
                                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#606A7A]">
                                    Time
                                  </p>

                                  <p className="mt-1 text-sm font-bold text-[#D4D8E0]">
                                    {checkIn.availableTime} min
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="min-w-[220px] rounded-xl border border-white/10 bg-[#171C25] p-4">
                              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#626C7C]">
                                Completed action
                              </p>

                              {action ? (
                                <>
                                  <p className="mt-2 text-sm font-bold leading-6 text-white">
                                    {action.activity}
                                  </p>

                                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#778193]">
                                    {action.category}
                                  </p>
                                </>
                              ) : (
                                <p className="mt-2 text-sm leading-6 text-[#7F8999]">
                                  No action was marked as completed.
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}