import React from "react";
import { Rocket, Calculator, Cpu, Wrench, Palette, Puzzle } from "lucide-react";

const iconMap = {
  Rocket,
  Calculator,
  Cpu,
  Wrench,
  Palette,
  Puzzle,
};

export default function SubjectGrid({ subjects }) {
  return (
    <section className="mt-8">
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-2xl font-bold">Choose a Subject</h2>
        <button className="text-sm text-emerald-700 hover:underline">View all quests</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {subjects.map((s) => {
          const Icon = iconMap[s.icon] ?? Rocket;
          return (
            <article
              key={s.id}
              className="relative rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className={`h-2 bg-gradient-to-r ${s.color}`} />
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-100 grid place-items-center text-gray-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-xs text-gray-500">Progress: {s.progress}%</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">{s.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <button className="text-sm px-3 py-1.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">
                    Play Mini-game
                  </button>
                  <button className="text-sm px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50">
                    Review Lessons
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
