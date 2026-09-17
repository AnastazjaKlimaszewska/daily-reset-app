"use client";

import { useState } from "react";
import { clearDailyResetData } from "../../lib/storage";

export default function SettingsPage() {
  const [message, setMessage] = useState<string | null>(null);
  const [isClearing, setIsClearing] = useState(false);

  const handleClearData = async () => {
    const confirmed = window.confirm(
      "Clear all Daily Reset data stored in this browser? This cannot be undone."
    );

    if (!confirmed) {
      return;
    }

    setIsClearing(true);
    setMessage(null);

    try {
      await clearDailyResetData();
      setMessage("Local data cleared.");
    } catch {
      setMessage("Something went wrong. Your data was not cleared.");
    } finally {
      setIsClearing(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0D1016] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#35D07F]">
            Settings
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">
            App preferences
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#8E98A9]">
            Daily Reset keeps things deliberately simple. No account, no cloud
            profile and no hidden sync.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
          <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#131820]">
            <div className="border-b border-white/10 bg-[#171C25] px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6D7788]">
                Storage
              </p>

              <h2 className="mt-1 text-lg font-bold text-white">
                Local data
              </h2>
            </div>

            <div className="p-5">
              <div className="border-l-2 border-[#35D07F] pl-4">
                <p className="text-sm font-bold text-white">
                  Your reset history stays on this device.
                </p>

                <p className="mt-2 text-sm leading-6 text-[#858FA0]">
                  Check-ins and completed actions are stored locally in your
                  browser using IndexedDB.
                </p>
              </div>

              <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
                <div className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-bold text-[#D5D9E1]">
                      Account required
                    </p>

                    <p className="mt-1 text-xs text-[#707A8B]">
                      Daily Reset does not use user accounts.
                    </p>
                  </div>

                  <span className="rounded-lg bg-[#202632] px-3 py-1.5 text-xs font-bold text-[#8C96A7]">
                    No
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-bold text-[#D5D9E1]">
                      Cloud sync
                    </p>

                    <p className="mt-1 text-xs text-[#707A8B]">
                      Data is not synced to an external server.
                    </p>
                  </div>

                  <span className="rounded-lg bg-[#202632] px-3 py-1.5 text-xs font-bold text-[#8C96A7]">
                    Off
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-bold text-[#D5D9E1]">
                      Browser storage
                    </p>

                    <p className="mt-1 text-xs text-[#707A8B]">
                      IndexedDB managed through Dexie.
                    </p>
                  </div>

                  <span className="rounded-lg bg-[#173326] px-3 py-1.5 text-xs font-bold text-[#86E6B0]">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#131820]">
            <div className="border-b border-white/10 bg-[#171C25] px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6D7788]">
                Data management
              </p>

              <h2 className="mt-1 text-lg font-bold text-white">
                Reset local history
              </h2>
            </div>

            <div className="p-5">
              <div className="rounded-xl border border-[#51322B] bg-[#251816] p-5">
                <p className="text-sm font-bold text-[#FFB5A1]">
                  Clear all saved Daily Reset data
                </p>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#B89B94]">
                  This removes every saved check-in and completed action from
                  this browser. The operation cannot be undone.
                </p>

                <button
                  onClick={handleClearData}
                  disabled={isClearing}
                  className={`mt-5 rounded-xl px-5 py-3 text-sm font-black transition ${
                    isClearing
                      ? "cursor-not-allowed bg-[#342623] text-[#7D6660]"
                      : "bg-[#E86B4A] text-white hover:bg-[#F17A59]"
                  }`}
                >
                  {isClearing ? "Clearing..." : "Clear local data"}
                </button>

                {message && (
                  <div className="mt-4 border-l-2 border-[#FFB454] bg-[#2A2118] px-4 py-3">
                    <p className="text-sm font-semibold text-[#E8C69A]">
                      {message}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="border-t border-white/10 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#626C7C]">
                    What gets removed
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#A4ADBB]">
                    Check-ins, detected states and completed actions.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#626C7C]">
                    What stays
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#A4ADBB]">
                    The application itself and its default recommendation
                    rules.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#131820]">
          <div className="grid lg:grid-cols-[220px_1fr]">
            <div className="border-b border-white/10 bg-[#10141B] p-5 lg:border-b-0 lg:border-r">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#687283]">
                About
              </p>

              <p className="mt-2 text-xl font-black text-white">
                Daily Reset
              </p>

              <p className="mt-1 text-xs text-[#6F798A]">
                MVP
              </p>
            </div>

            <div className="grid gap-6 p-5 sm:grid-cols-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#626C7C]">
                  Purpose
                </p>

                <p className="mt-2 text-sm leading-6 text-[#A4ADBB]">
                  Turn a short check-in into one manageable next action.
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#626C7C]">
                  Recommendation logic
                </p>

                <p className="mt-2 text-sm leading-6 text-[#A4ADBB]">
                  Deterministic rules based on energy, mood, mental load and
                  available time.
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#626C7C]">
                  Backend
                </p>

                <p className="mt-2 text-sm leading-6 text-[#A4ADBB]">
                  No remote backend is required for the current MVP.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}