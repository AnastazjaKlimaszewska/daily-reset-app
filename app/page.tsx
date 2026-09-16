"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  type CheckIn,
  type CompletedAction,
} from "../lib/db";
import {
  getAllCheckIns,
  getAllCompletedActions,
} from "../lib/storage";

export default function HomePage() {
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);
  const [actions, setActions] = useState<CompletedAction[]>([]);

  useEffect(() => {
    const loadDashboard = async () => {
      const storedCheckIns = await getAllCheckIns();
      const storedActions = await getAllCompletedActions();

      setCheckIns(storedCheckIns);
      setActions(storedActions);
    };

    loadDashboard();
  }, []);

  const latestCheckIn = checkIns[0] ?? null;
  const latestAction = actions[0] ?? null;

  const completionRate =
    checkIns.length === 0
      ? 0
      : Math.round((actions.length / checkIns.length) * 100);

  return (
    <main className="min-h-screen bg-[#0D1016] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <section className="overflow-hidden rounded-[28px] border border-white/10 bg-[#151A23]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#35D07F]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#778194]">
                  Current reset status
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl">
                One useful move
                <br />
                is enough.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#98A1B2] sm:text-lg">
                Check your energy, mood and mental load. Daily Reset gives you a
                short action that actually fits the state you are in.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/check-in"
                  className="rounded-xl bg-[#35D07F] px-6 py-3.5 font-bold text-[#0D1711] transition hover:bg-[#45DF8D]"
                >
                  Start check-in
                </Link>

                <Link
                  href="/history"
                  className="rounded-xl border border-white/10 bg-[#1B202A] px-6 py-3.5 font-bold text-white transition hover:bg-[#232A37]"
                >
                  Open history
                </Link>
              </div>
            </div>

            <div className="relative border-t border-white/10 bg-[#11151D] p-7 lg:border-l lg:border-t-0 lg:p-10">
              <div className="absolute right-0 top-0 h-24 w-24 bg-[#8A7CFF]/10 blur-3xl" />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#70798A]">
                Latest state
              </p>

              <p className="mt-3 text-4xl font-black capitalize tracking-tight text-white">
                {latestCheckIn?.classifiedState ?? "No data yet"}
              </p>

              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#70798A]">
                  Last completed action
                </p>

                <p className="mt-3 text-xl font-semibold leading-7 text-[#D8DCE4]">
                  {latestAction?.activity ?? "Nothing completed yet"}
                </p>
              </div>

              <div className="mt-8 rounded-2xl bg-[#1A202B] p-5">
                <p className="text-sm font-semibold text-[#8E98A9]">
                  Quick note
                </p>
                <p className="mt-2 text-sm leading-6 text-[#C8CED8]">
                  Your history stays local in this browser. No account is
                  required.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-[#151A23] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#70798A]">
                  Check-ins
                </p>
                <p className="mt-3 text-4xl font-black text-white">
                  {checkIns.length}
                </p>
              </div>

              <div className="h-3 w-10 rounded-full bg-[#35D07F]" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#151A23] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#70798A]">
                  Completed
                </p>
                <p className="mt-3 text-4xl font-black text-white">
                  {actions.length}
                </p>
              </div>

              <div className="h-3 w-10 rounded-full bg-[#8A7CFF]" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#151A23] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#70798A]">
                  Completion
                </p>
                <p className="mt-3 text-4xl font-black text-white">
                  {completionRate}%
                </p>
              </div>

              <div className="h-3 w-10 rounded-full bg-[#FFB454]" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#151A23] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#70798A]">
              Storage
            </p>

            <p className="mt-3 text-xl font-black text-white">
              Local only
            </p>

            <p className="mt-2 text-sm text-[#8E98A9]">
              IndexedDB / Dexie
            </p>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[24px] border border-white/10 bg-[#151A23] p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-white">
                Quick reset
              </h2>

              <span className="rounded-lg bg-[#202632] px-3 py-1 text-xs font-semibold text-[#8E98A9]">
                60 sec
              </span>
            </div>

            <p className="mt-5 text-lg font-semibold leading-7 text-[#D9DDE4]">
              Drop your shoulders. Unclench your jaw. Choose one task that
              matters next.
            </p>

            <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-[#242B37]">
              <div className="h-full w-2/3 rounded-full bg-[#35D07F]" />
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#151A23] p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#70798A]">
                  Keep moving
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-tight text-white">
                  Your next reset is one click away.
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[#8E98A9]">
                  Use the check-in when your energy or focus changes during the
                  day.
                </p>
              </div>

              <Link
                href="/check-in"
                className="shrink-0 rounded-xl bg-[#8A7CFF] px-5 py-3 font-bold text-white transition hover:bg-[#9A8CFF]"
              >
                Go to check-in
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}