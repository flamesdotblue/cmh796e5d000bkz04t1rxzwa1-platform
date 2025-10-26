import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SubjectGrid from "./components/SubjectGrid";
import ProgressDashboard from "./components/ProgressDashboard";

export default function App() {
  const subjects = [
    {
      id: "science",
      title: "Science",
      description: "Explore physics, biology, earth & space through quests.",
      icon: "Rocket",
      color: "from-emerald-500 to-teal-600",
      progress: 42,
    },
    {
      id: "mathematics",
      title: "Mathematics",
      description: "Master arithmetic, algebra, geometry and statistics.",
      icon: "Calculator",
      color: "from-indigo-500 to-blue-600",
      progress: 28,
    },
    {
      id: "technology",
      title: "Technology",
      description: "Learn coding, AI basics and build simple apps.",
      icon: "Cpu",
      color: "from-fuchsia-500 to-purple-600",
      progress: 10,
    },
    {
      id: "engineering",
      title: "Engineering",
      description: "Mechanics, circuits and renewable energy challenges.",
      icon: "Wrench",
      color: "from-amber-500 to-orange-600",
      progress: 16,
    },
    {
      id: "arts",
      title: "Arts & Creativity",
      description: "Music, drawing, storytelling and dance activities.",
      icon: "Palette",
      color: "from-rose-500 to-pink-600",
      progress: 55,
    },
    {
      id: "recreation",
      title: "Recreational",
      description: "DIY experiments, puzzles and robotics challenges.",
      icon: "Puzzle",
      color: "from-lime-500 to-green-600",
      progress: 33,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-gray-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <ProgressDashboard />
        <SubjectGrid subjects={subjects} />
      </main>
      <footer className="mt-16 border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ThutoQuest · Made for young explorers across Africa and the world
      </footer>
    </div>
  );
}
