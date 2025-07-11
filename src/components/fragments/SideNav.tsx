"use client";
import { defaultConversations, userConversations } from "@/data/user";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
function SideNav() {
  const [fullSideBar, setFullSideBar] = useState(true);

  return (
    <div
      className={`relative ${
        fullSideBar ? "w-64" : "w-20 items-center"
      } border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out h-screen bg-white`}
    >
      {/* Logo */}
      <Link href="/" className="p-4 flex gap-x-2 items-center">
        <div className="w-8 h-8">
          <Image className="max-w-8" src="/logo/sentiview.png" alt="Logo" />
        </div>
        {fullSideBar && (
          <span className="text-lg font-semibold text-gray-800">Sentiview</span>
        )}
      </Link>

      {/* New Chat Button */}
      <div className="px-4 py-2">
        <button className="w-full p-2 rounded-xl cursor-pointer bg-[#3a30ba] hover:bg-[#4550e5] text-white flex items-center gap-2">
          <Lock size={18} />
          {fullSideBar && <span>New chat</span>}
        </button>
      </div>

      {/* Conversations Header */}
      {fullSideBar && (
        <div className="flex justify-between items-center px-4 py-2 text-sm">
          <span className="text-gray-500">Your conversations</span>
          <button className="text-[#3a30ba] text-xs cursor-pointer">
            Clear All
          </button>
        </div>
      )}

      {/* Conversation List */}
      <div className="flex-1 overflow-auto">
        <div className="px-4 py-2">
          <div className="flex-1 overflow-auto">
            {/* Default conversations */}
            <div className="px-4 py-2">
              <h3 className="text-xs font-semibold text-gray-500 mb-2">
                Fast Response
              </h3>
              {defaultConversations.map((item) => (
                <Link
                  key={item.id}
                  href={`/chat/${item.id}`}
                  className="flex items-center gap-2 p-2 rounded-xl hover:bg-[#EFF0F1] cursor-pointer"
                >
                  {item.icon && <item.icon className="w-5 h-5 text-gray-700" />}

                  {fullSideBar && (
                    <span className="text-sm text-gray-700">{item.name}</span>
                  )}
                </Link>
              ))}
            </div>

            {/* User-created conversations */}
            <div className="px-4 py-2">
              <h3 className="text-xs font-semibold text-gray-500 mb-2">
                My Conversations
              </h3>
              {userConversations.map((item) => (
                <Link
                  key={item.id}
                  href={`/chat/${item.id}`}
                  className="flex items-center gap-2 p-2 rounded-xl hover:bg-[#EFF0F1] cursor-pointer"
                >
                  <div className="w-5 h-5 flex items-center justify-center bg-gray-200 text-xs rounded-full">
                    #
                  </div>
                  {fullSideBar && (
                    <span className="text-sm text-gray-700">{item.name}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Settings & User */}
      <div className="mt-auto">
        <div className="px-4 py-3 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-gray-500">⚙️</span>
          </div>
          {fullSideBar && (
            <span className="text-sm text-gray-700">Settings</span>
          )}
        </div>

        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="User avatar"
                width={32}
                height={32}
              />
            </div>
            {fullSideBar && (
              <span className="text-sm text-gray-700">Andrew Neilson</span>
            )}
          </div>
          {fullSideBar && (
            <button className="w-6 h-6 rounded-full bg-[#d9d9d9] flex items-center justify-center text-gray-600">
              <span className="text-xs">↪</span>
            </button>
          )}
        </div>
      </div>
      {/* Toggle Button */}
      <div className="absolute top-4 -right-4 z-10">
        <button
          className="w-8 h-8 cursor-pointer rounded-full bg-[#3a30ba] flex items-center justify-center text-white"
          onClick={() => setFullSideBar(!fullSideBar)}
        >
          {fullSideBar ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>
    </div>
  );
}

export default SideNav;
