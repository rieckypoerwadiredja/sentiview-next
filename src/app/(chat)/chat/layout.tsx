"use client";
import "../../globals.css";
import InputChat from "@/components/fragments/InputChat";
import SideNav from "@/components/fragments/SideNav";

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
