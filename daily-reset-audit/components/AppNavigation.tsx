"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Dashboard", href: "/" },
  { label: "Check-in", href: "/check-in" },
  { label: "History", href: "/history" },
  { label: "Insights", href: "/insights" },
  { label: "Settings", href: "/settings" },
];

export default function AppNavigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#11141B]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-[#1D2330]">
            <div className="absolute left-0 top-0 h-full w-2 bg-[#35D07F]" />
            <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-[#8A7CFF]" />
          </div>

          <div className="leading-none">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7E8797]">
              Daily Reset
            </p>
            <p className="mt-1 text-lg font-bold tracking-tight text-white">
              reset your next move
            </p>
          </div>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-2xl bg-[#181D27] p-1 md:flex"
        >
          {items.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "bg-[#2A3140] text-white"
                    : "text-[#8E98A9] hover:bg-[#202633] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/check-in"
          className="rounded-xl bg-[#35D07F] px-4 py-2.5 text-sm font-bold text-[#0E1712] transition hover:bg-[#45DF8D]"
        >
          Start reset
        </Link>
      </div>

      <div className="border-t border-white/5 bg-[#151922] md:hidden">
        <nav className="mx-auto flex max-w-[1400px] gap-2 overflow-x-auto px-4 py-3">
          {items.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 rounded-lg px-3 py-2 text-sm font-semibold ${
                  active
                    ? "bg-[#2A3140] text-white"
                    : "text-[#8E98A9]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}