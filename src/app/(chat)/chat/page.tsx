"use client";

import React, { useEffect, useReducer, useState } from "react";
import {
  ArrowRight,
  RefreshCw,
  Lock,
  ChevronLeft,
  ChevronRight,
  Link,
} from "lucide-react";
import InputChat from "@/components/fragments/InputChat";
import { GeneralOpening } from "@/components/elements/OpeningMessege";

export default function Page() {
  return (
    <>
      {/* auto */}
      <div className="overflow-auto p-8 w-full flex flex-col gap-y-5">
        <div className="max-w-7xl mx-auto bg-white p-4 rounded-xl shadow-lg">
          <GeneralOpening />;
          <div className="flex justify-center mb-6">
            <button className="flex items-center gap-2 text-[#3a30ba] border border-[#3a30ba] py-2 px-3 rounded-4xl">
              <RefreshCw size={16} />
              <span>Regenerate response</span>
            </button>
          </div>
        </div>

        {/* convercation */}

        <div className="max-w-7xl w-full mx-auto bg-white p-4 rounded-xl shadow-lg mb-4">
          {/* <Dashboard data={convercation} id={convercation.id || index} /> */}

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

        {/* <LoadingStepAnimation
              step={[
                "Get Product Info",
                "Get Review",
                "Get Dashboard & Analyze",
              ]}
              activeStep={loadingStep} // if 1, "Get Product Info" is done
            /> */}
      </div>
    </>
  );
}
