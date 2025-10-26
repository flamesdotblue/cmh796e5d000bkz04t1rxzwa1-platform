import React from "react";
import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-10 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Gamified learning inspired by Africa’s stories and nature
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            ThutoQuest makes learning fun for ages 9–13 with quests, mini-games and
            multilingual support designed for offline-first, low-power Android devices.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white shadow hover:bg-emerald-700 transition">
              <Rocket className="h-4 w-4" /> Start a Quest
            </button>
            <button className="px-5 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50">
              Explore Subjects
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            Works offline • Child-friendly • Teacher tools included
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-100 via-white to-teal-100 border border-emerald-200 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Quests", value: 24 },
                { label: "Badges", value: 9 },
                { label: "XP", value: 1450 },
                { label: "Streak", value: "7 days" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-white border border-gray-100 p-4 shadow-sm">
                  <p className="text-sm text-gray-500">{s.label}</p>
                  <p className="text-2xl font-bold mt-1">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-white border border-gray-100 p-5">
              <p className="text-sm font-medium text-gray-700">Today’s Mission</p>
              <p className="text-gray-600 mt-1">
                Build a solar oven prototype and calculate temperature changes.
              </p>
              <div className="mt-3 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
