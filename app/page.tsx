"use client";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const reasons = useMemo(
    () => [
      "You make hard things feel approachable.",
      "You ship with clarity and calm.",
      "You raise the bar for everyone around you.",
      "You’re generous with your time and knowledge.",
      "You turn ideas into momentum.",
      "You keep things simple without cutting corners.",
      "You’re the kind of leader people trust.",
      "You make learning genuinely fun.",
    ],
    [],
  );

  const [idx, setIdx] = useState(0);
  const [dateText, setDateText] = useState<string>("");

  useEffect(() => {
    setIdx(Math.floor(Math.random() * reasons.length));
    setDateText(
      new Date().toLocaleDateString(undefined, {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    );
  }, [reasons.length]);

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-zinc-50 px-6 py-16 font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(900px_circle_at_20%_20%,rgba(99,102,241,0.20),transparent_50%),radial-gradient(800px_circle_at_80%_30%,rgba(236,72,153,0.18),transparent_45%),radial-gradient(900px_circle_at_50%_85%,rgba(34,197,94,0.14),transparent_55%)]"
      />

      <main className="relative w-full max-w-3xl rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-12">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Today’s vibe: celebrate Kirat
            </div>
            <div className="text-sm tabular-nums text-zinc-500 dark:text-zinc-400">
              {dateText || "\u00A0"}
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Happy Birthday, <span className="text-indigo-600 dark:text-indigo-400">Kirat</span>!
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              Wishing you a year full of health, wins, and the kind of momentum that makes big goals
              feel inevitable. Thanks for inspiring so many of us to learn, build, and ship.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                A quick birthday note
              </div>
              <div className="mt-3 text-xl font-semibold leading-8">
                May your coffee be strong and your deploys be smooth.
              </div>
              <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                From all of us in the{" "}
                <span className="font-medium text-zinc-900 dark:text-zinc-100">Cohort 3.0</span> gang.
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                  Reason you’re awesome
                </div>
                <button
                  type="button"
                  onClick={() => setIdx((i) => (i + 1) % reasons.length)}
                  className="inline-flex h-9 items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:ring-offset-black"
                >
                  Shuffle
                </button>
              </div>
              <div className="mt-4 text-lg leading-8 text-zinc-800 dark:text-zinc-200">
                “{reasons[idx]}”
              </div>
              <div className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                Tip: hit Shuffle a few times.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              Want this at a dedicated URL? Create a route like `app/kirat/page.tsx`.
            </div>
            <button
              type="button"
              onClick={() => {
                const text = `Happy Birthday, Kirat! 🎉\n\nWishing you a year full of health, wins, and unstoppable momentum. Thanks for inspiring so many of us to learn and build.\n\n— Cohort 3.0 gang`;
                void navigator.clipboard.writeText(text);
              }}
              className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10 dark:focus-visible:ring-offset-black"
            >
              Copy wish text
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
