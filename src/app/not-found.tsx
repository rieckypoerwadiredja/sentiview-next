"use client";

import ButtonGeneral from "@/components/elements/ButtonGeneral";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#FFF9F3]">
      {/* 404 Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-[#3A30BA] bg-clip-text text-transparent">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#102a43] mb-4">
              Oops! Page not found
            </h2>
            <p className="text-[#627d98] text-lg max-w-2xl mx-auto mb-2">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-[#627d98] text-base max-w-2xl mx-auto">
              Don't worry, it happens to the best of us. Let's get you back on
              track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/">
              <ButtonGeneral>
                <Home className="w-4 h-4" />
                Go Home
              </ButtonGeneral>
            </Link>
            <ButtonGeneral onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </ButtonGeneral>
          </div>
        </div>
      </main>
    </div>
  );
}
