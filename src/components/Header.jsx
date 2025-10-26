import React from "react";
import { Globe, User, Settings, Star } from "lucide-react";

const languages = [
  { code: "en", label: "English" },
  { code: "tn", label: "Setswana" },
  { code: "sg", label: "Sekgalagadi" },
  { code: "sr", label: "Sesarwa" },
  { code: "sy", label: "Shiyeyi" },
  { code: "kl", label: "Kalanga" },
];

export default function Header() {
  const [lang, setLang] = React.useState("en");

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 grid place-items-center text-white shadow-md">
            <Star className="h-5 w-5" />
          </div>
          <div>
            <p className="font-bold tracking-tight text-lg">ThutoQuest</p>
            <p className="text-xs text-gray-500 -mt-1">Learn. Play. Grow.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-gray-600">
            <Globe className="h-4 w-4" />
            <select
              className="bg-white border border-gray-200 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              aria-label="Language selector"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>

          <button className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50">
            <Settings className="h-4 w-4" />
            Settings
          </button>

          <button className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50">
            <User className="h-4 w-4" />
            Profile
          </button>
        </div>
      </div>
    </header>
  );
}
