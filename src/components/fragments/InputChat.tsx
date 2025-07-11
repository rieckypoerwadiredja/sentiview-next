import React, { useState } from "react";

import { Send } from "lucide-react";

function InputChat() {
  return (
    <div className="p-4 bg-white w-full h-full border-t">
      <div className="max-w-4xl mx-auto">
        <form className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <div className="w-6 h-6 rounded-full bg-[#ffcc85] flex items-center justify-center">
              <span className="text-xs">🐶</span>
            </div>
          </div>
          <textarea
            rows={1}
            className="pl-12 pr-12 py-6 rounded-full w-full bg-white border border-gray-200"
            placeholder="What's in your mind?..."
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-[#3a30ba] hover:bg-[#4550e5] flex items-center justify-center p-0"
            >
              <Send size={18} className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputChat;
