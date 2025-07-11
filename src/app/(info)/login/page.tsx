"use client";

import AppleButton from "@/components/elements/auth/AppleButton";
import FacebookButton from "@/components/elements/auth/FacebookButton";
import GoogleButton from "@/components/elements/auth/GoogleButton";
import { RoundedButton } from "@/components/elements/button/RoundedButton";
import Checkbox from "@/components/elements/form/Checkbox";
import { Input } from "@/components/elements/form/Input";
import { Label } from "@/components/elements/form/Label";
import AuthLayout from "@/components/layouts/AuthLayout";
import { signIn } from "next-auth/react";
import Link from "next/link";

import { useRef, useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      // callbackUrl: "/",
    });

    if (res?.error) console.error("Login gagal");
    if (res) console.dir(res);
  };

  return (
    <AuthLayout
      title="Log in"
      subtitle="Don't have an account?"
      linkHref="/signup"
      linkText="Sign up"
    >
      {/* Social Login Buttons */}
      <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
        <div className="space-y-3">
          <GoogleButton onClick={() => console.log("Google clicked")} />
          <FacebookButton onClick={() => console.log("Facebook clicked")} />
          <AppleButton onClick={() => console.log("Apple clicked")} />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-grow h-px bg-[#c4c4c4]" />
          <span className="text-sm text-[#666666]">Or continue with email</span>
          <div className="flex-grow h-px bg-[#c4c4c4]" />
        </div>

        {/* Email Form */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-[#666666] text-sm font-normal"
            >
              Email address or user name
            </Label>
            <Input
              ref={emailRef}
              id="email"
              type="email"
              className="h-12 border-[#c4c4c4] bg-[#ffffff] text-[#333333]"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-[#666666] text-sm font-normal"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                ref={passwordRef}
                id="password"
                type={showPassword ? "text" : "password"}
                className="h-12 border-[#c4c4c4] bg-[#ffffff] text-[#333333] pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-[#666666] text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-[#666666] text-sm underline"
            >
              Forget your password
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="remember" className="border-[#666666]" />
            <Label
              htmlFor="remember"
              className="text-[#333333] text-sm font-normal"
            >
              Remember me
            </Label>
          </div>

          <RoundedButton
            type="submit"
            className="w-full mt-4 h-12 bg-[#3A30BA]/80 hover:bg-[#3A30BA] text-white"
          >
            Log in
          </RoundedButton>
        </div>
      </form>
    </AuthLayout>
  );
}
