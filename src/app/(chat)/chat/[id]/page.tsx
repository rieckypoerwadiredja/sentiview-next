"use client";

import React from "react";
import { RefreshCw } from "lucide-react";
import {
  BestbuyOpening,
  ShopeeOpening,
  TokopediaOpening,
  TwitterOpening,
  YoutubeOpening,
} from "@/components/elements/OpeningMessege";
import { useParams } from "next/navigation";
import { defaultConversations, userConversations } from "@/data/user";

function getTypeById(id: string): string | undefined {
  const all = [...defaultConversations, ...userConversations];
  const match = all.find((item) => item.id === id);
  return match?.type;
}

function renderOpeningComponent(type: string | undefined) {
  switch (type) {
    case "bestbuy":
      return <BestbuyOpening />;
    case "youtube":
      return <YoutubeOpening />;
    case "twitter":
      return <TwitterOpening />;
    case "shopee":
      return <ShopeeOpening />;
    case "tokopedia":
      return <TokopediaOpening />;
    default:
      return <p className="text-gray-500 italic">Unknown conversation type.</p>;
  }
}

export default function Page() {
  const params = useParams();
  const roomId = params.id?.toString();
  const type = getTypeById(roomId || "");

  return (
    <>
      {/* auto */}
      <div className="overflow-auto p-8 w-full flex flex-col gap-y-5">
        <div className="max-w-7xl mx-auto bg-white p-4 rounded-xl shadow-lg">
          {renderOpeningComponent(type)}
          <div className="flex justify-center mb-6">
            <button className="flex items-center gap-2 text-[#3a30ba] border border-[#3a30ba] py-2 px-3 rounded-4xl">
              <RefreshCw size={16} />
              <span>Regenerate response</span>
            </button>
          </div>
        </div>

        {/* convercation */}

        <div className="max-w-7xl w-full mx-auto bg-white p-4 rounded-xl shadow-lg mb-4">
          <div className="flex justify-center mt-4">
            <button className="flex items-center gap-2 text-[#3a30ba] border border-[#3a30ba] py-2 px-3 rounded-4xl">
              <RefreshCw size={16} />
              <span>Regenerate response</span>
            </button>
          </div>
        </div>

        <div className="max-w-4xl w-full mx-auto mb-4">
          <p className="text-right">convercation</p>
        </div>
      </div>
    </>
  );
}
