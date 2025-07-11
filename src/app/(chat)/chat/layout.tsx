"use client";
import "../../globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";
import InputChat from "@/components/fragments/InputChat";
import SideNav from "@/components/fragments/SideNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex h-screen w-full bg-[#fff9f3] overflow-x-hidden">
      <SideNav />

      {/* Chat Bottom */}
      <div className="relative h-full w-full flex flex-col">
        <div className="h-4/5 overflow-y-scroll">{children}</div>
        <div className="h-1/5 flex flex-col">
          {/* Footer area atau input chat */}
          <InputChat />
        </div>
      </div>
    </div>
  );
}
