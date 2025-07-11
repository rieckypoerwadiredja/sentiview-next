"use client";

import { useState } from "react";
import Link from "next/link";
import CardPlan from "@/components/elements/card/CardPlan";

export default function Component() {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const plans = {
    monthly: [
      {
        name: "Free",
        price: "0",
        oldPrice: null,
        benefits: [
          { name: "Analyze up to 50 reviews/month", status: "check" },
          { name: "Basic sentiment detection", status: "check" },
          { name: "Limited product features", status: "check" },
          { name: "Export to Excel", status: "check" },
          { name: "PowerPoint export", status: "x" },
          { name: "AI-driven keyword analysis", status: "x" },
          { name: "Priority support", status: "x" },
          { name: "Data storage for 7 days", status: "check" },
          { name: "API Access", status: "x" },
        ] as const,
      },
      {
        name: "Standard",
        price: "99.000",
        oldPrice: null,
        benefits: [
          { name: "Analyze up to 1,000 reviews/month", status: "check" },
          { name: "Advanced sentiment detection", status: "check" },
          { name: "Export to Excel & PowerPoint", status: "check" },
          { name: "AI keyword analysis & topic clustering", status: "check" },
          { name: "Save and reload projects", status: "check" },
          { name: "Data storage for 30 days", status: "check" },
          { name: "Email support", status: "check" },
          { name: "API Access", status: "x" },
        ] as const,
      },
      {
        name: "Pro",
        price: "249.000",
        oldPrice: "299.000",
        benefits: [
          { name: "Analyze up to 5,000 reviews/month", status: "check" },
          { name: "All features from Standard plan", status: "check" },
          { name: "Export in Excel, PPT, and PNG", status: "check" },
          { name: "Smart report generation", status: "check" },
          { name: "Unlimited project history", status: "check" },
          { name: "Data storage for 90 days", status: "check" },
          { name: "Priority email & chat support", status: "check" },
          { name: "API Access (limited)", status: "check" },
        ] as const,
      },
    ],

    yearly: [
      {
        name: "Free",
        price: "0",
        oldPrice: null,
        benefits: [
          { name: "Analyze up to 50 reviews/month", status: "check" },
          { name: "Basic sentiment detection", status: "check" },
          { name: "Limited product features", status: "check" },
          { name: "Export to Excel", status: "check" },
          { name: "PowerPoint export", status: "x" },
          { name: "AI-driven keyword analysis", status: "x" },
          { name: "Priority support", status: "x" },
          { name: "Data storage for 7 days", status: "check" },
          { name: "API Access", status: "x" },
        ] as const,
      },
      {
        name: "Standard",
        price: "948.000", // 99.000 x 12 - 20%
        oldPrice: "1.188.000",
        benefits: [
          { name: "Analyze up to 1,000 reviews/month", status: "check" },
          { name: "Advanced sentiment detection", status: "check" },
          { name: "Export to Excel & PowerPoint", status: "check" },
          { name: "AI keyword analysis & topic clustering", status: "check" },
          { name: "Save and reload projects", status: "check" },
          { name: "Data storage for 30 days", status: "check" },
          { name: "Email support", status: "check" },
          { name: "API Access", status: "x" },
        ] as const,
      },
      {
        name: "Pro",
        price: "2.388.000", // 249.000 x 12 - 20%
        oldPrice: "2.988.000",
        benefits: [
          { name: "Analyze up to 5,000 reviews/month", status: "check" },
          { name: "All features from Standard plan", status: "check" },
          { name: "Export in Excel, PPT, and PNG", status: "check" },
          { name: "Smart report generation", status: "check" },
          { name: "Unlimited project history", status: "check" },
          { name: "Data storage for 90 days", status: "check" },
          { name: "Priority email & chat support", status: "check" },
          { name: "API Access (limited)", status: "check" },
        ] as const,
      },
    ],
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="text-center pt-16 bg-[#FFF9F3]">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3A30BA] mb-4">
          Pick the price{" "}
          <span className="bg-gradient-to-r from-[#3A30BA] to-[#6b5dd3] bg-clip-text text-transparent">
            that&apos;s right for you
          </span>
        </h1>
        <p className="text-[#5e5a87] text-lg max-w-2xl mx-auto">
          Join millions of other customers on this platform
        </p>
      </section>

      {/* Payment Plans Section */}
      <section className="px-8 py-16 bg-[#FFF9F3]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Payment Plans
          </h2>

          {/* Toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md overflow-hidden border border-[#3A30BA]">
              <button
                onClick={() => setSelectedPlan("monthly")}
                className={`${
                  selectedPlan === "monthly" && "bg-[#3A30BA] !text-[#fdfdfd]"
                }  text-black px-6 py-2 cursor-pointer`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelectedPlan("yearly")}
                className={`${
                  selectedPlan === "yearly" && "bg-[#3A30BA] !text-[#fdfdfd]"
                } text-black px-6 py-2 cursor-pointer`}
              >
                Yearly
              </button>
              <div className="bg-yellow-400 px-4 py-2 flex-none flex items-center text-sm font-medium">
                Save 20%
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {selectedPlan === "monthly" && (
              <>
                {plans.monthly.map((plan) => (
                  <CardPlan key={plan.name} plan={plan} />
                ))}
              </>
            )}

            {selectedPlan === "yearly" && (
              <>
                {plans.yearly.map((plan) => (
                  <CardPlan key={plan.name} plan={plan} />
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      <section className="pt-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Affordable Access to Insightful Data
          </h2>
          <p className="text-gray-600 text-center leading-relaxed">
            At Sentiview, we believe every business—big or small—deserves access
            to powerful review analytics without financial barriers. Whether
            you&apos;re just getting started or scaling fast, our platform is
            designed to be accessible and impactful. We handle the heavy
            lifting—data processing, sentiment analysis, and smart summaries—so
            you can focus on what matters: making better product and customer
            decisions.
          </p>
        </div>
      </section>

      {/* Financial Assistance Section */}
      <section className="py-16 my-16 px-8 text-center sm:text-left bg-[#3a30ba] w-[85%] mb-10 mx-auto">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Flexible Support & Funding Options
          </h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            Tight budgets shouldn’t limit access to strategic insights. Our team
            is ready to help you explore flexible pricing, early-stage support,
            or academic and community discounts. Whether you need insights for a
            one-time launch or long-term growth, we&apos;re here to guide you
            toward smarter, more affordable data-driven decisions—together.
          </p>
          <Link
            href="https://www.whatsapp.com/"
            target="_blank"
            className="bg-white font-semibold cursor-pointer text-black px-6 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
