"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import ButtonGeneral from "@/components/elements/ButtonGeneral";
import { Switch } from "@/components/elements/Switch";

export default function Component() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    // ... import tetap sama
    <div className="min-h-screen bg-[#FFF9F3]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3A30BA] mb-4">
            Pick the price{" "}
            <span className="bg-gradient-to-r from-[#3A30BA] to-[#6b5dd3] bg-clip-text text-transparent">
              that’s right for you
            </span>
          </h1>
          <p className="text-[#5e5a87] text-lg max-w-2xl mx-auto">
            Join millions of other customers on this platform
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <span
            className={`text-sm font-medium mr-3 ${
              !isYearly ? "text-[#3A30BA]" : "text-[#A2A1B7]"
            }`}
          >
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-[#3A30BA]"
          />
          <span
            className={`text-sm font-medium ml-3 ${
              isYearly ? "text-[#3A30BA]" : "text-[#A2A1B7]"
            }`}
          >
            Yearly
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Lite Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#CFCBEA] p-8 relative">
            <div className="text-center mb-6">
              <div className="inline-block bg-[#f1edff] text-[#3A30BA] px-3 py-1 rounded-full text-sm font-medium mb-4">
                Lite
              </div>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-[#3A30BA]">
                  ${isYearly ? "70" : "7"}
                </span>
                <span className="text-[#A2A1B7] ml-1">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>
              <p className="text-[#68658c] text-sm mt-2">
                Just using this for yourself? Lite is the way to go.
              </p>
            </div>
            <ButtonGeneral>Select Lite</ButtonGeneral>
            <ul className="space-y-3 mt-6">
              {[
                "One person team",
                "Exports to files for easy client viewing",
                "2TB of data for your account",
              ].map((text, i) => (
                <li key={i} className="flex items-center text-[#3A30BA]">
                  <Check className="w-5 h-5 text-[#3A30BA] mr-3" />
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-[#3A30BA] p-8 relative transform scale-105">
            <div className="text-center mb-6">
              <div className="inline-block bg-[#ded9ff] text-[#3A30BA] px-3 py-1 rounded-full text-sm font-medium mb-4">
                Pro
              </div>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-[#3A30BA]">
                  ${isYearly ? "190" : "19"}
                </span>
                <span className="text-[#A2A1B7] ml-1">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>
              <p className="text-[#68658c] text-sm mt-2">
                More power, more features. Ideal for growing teams.
              </p>
            </div>
            <ButtonGeneral>Select Pro</ButtonGeneral>
            <ul className="space-y-3 mt-6">
              {[
                "Two person team",
                "Exports to files for easy client viewing",
                "2TB of data for your account",
              ].map((text, i) => (
                <li key={i} className="flex items-center text-[#3A30BA]">
                  <Check className="w-5 h-5 text-[#3A30BA] mr-3" />
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Team Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#CFCBEA] p-8 relative">
            <div className="text-center mb-6">
              <div className="inline-block bg-[#eae6ff] text-[#3A30BA] px-3 py-1 rounded-full text-sm font-medium mb-4">
                Team
              </div>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-[#3A30BA]">
                  ${isYearly ? "310" : "31"}
                </span>
                <span className="text-[#A2A1B7] ml-1">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>
              <p className="text-[#68658c] text-sm mt-2">
                For startups & teams needing full analysis power.
              </p>
            </div>
            <ButtonGeneral>Select Team</ButtonGeneral>
            <ul className="space-y-3 mt-6">
              {[
                "Multi person team",
                "Exports to files for easy client viewing",
                "2TB of data for your account",
              ].map((text, i) => (
                <li key={i} className="flex items-center text-[#3A30BA]">
                  <Check className="w-5 h-5 text-[#3A30BA] mr-3" />
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
