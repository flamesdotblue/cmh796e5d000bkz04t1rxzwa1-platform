import React from "react";
import { Trophy, Star } from "lucide-react";

export default function ProgressDashboard() {
  const badges = [
    { id: 1, name: "Solar Tinkerer", color: "bg-amber-100 text-amber-700" },
    { id: 2, name: "Math Explorer", color: "bg-indigo-100 text-indigo-700" },
    { id: 3, name: "Code Starter", color: "bg-fuchsia-100 text-fuchsia-700" },
  ];

  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 grid place-items-center">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total XP</p>
              <p className="text-2xl font-bold">1,450</p>
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-3/5" />
          </div>
          <p className="mt-2 text-xs text-gray-500">Level 6 • 60% to Level 7</p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Badges</h3>
            <button className="text-sm text-emerald-700 hover:underline">See all</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b.id}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm ${b.color} border border-black/5`}
              >
                <Star className="h-4 w-4" /> {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
