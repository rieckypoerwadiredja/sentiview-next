"use client";

import AppleButton from "@/components/elements/auth/AppleButton";
import FacebookButton from "@/components/elements/auth/FacebookButton";
import GoogleButton from "@/components/elements/auth/GoogleButton";
import { RoundedButton } from "@/components/elements/button/RoundedButton";
import { Input } from "@/components/elements/form/Input";
import { Label } from "@/components/elements/form/Label";
import AuthLayout from "@/components/layouts/AuthLayout";
import { useRef, useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const confirmPassword = confirmRef.current?.value || "";

    if (password !== confirmPassword) {
      setError("Password and confirmation do not match.");
      return;
    }

    // TODO: handle signup logic here
    console.log({ name, email, password });
  };

  return (
    <AuthLayout
      title="Sign up"
      subtitle="Already have an account?"
      linkHref="/login"
      linkText="Log in"
    >
      <form onSubmit={handleSignup} className="w-full max-w-md space-y-6">
        {/* Social signup buttons (skip here for brevity) */}
        <div className="space-y-3">
          <GoogleButton onClick={() => console.log("Google clicked")} />
          <FacebookButton onClick={() => console.log("Facebook clicked")} />
          <AppleButton onClick={() => console.log("Apple clicked")} />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-grow h-px bg-[#c4c4c4]" />
          <span className="text-sm text-[#666666]">Or sign up with email</span>
          <div className="flex-grow h-px bg-[#c4c4c4]" />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-[#666666] text-sm font-normal"
            >
              Full Name
            </Label>
            <Input
              ref={nameRef}
              id="name"
              type="text"
              className="h-12 border-[#c4c4c4] bg-white text-[#333333]"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-[#666666] text-sm font-normal"
            >
              Email address
            </Label>
            <Input
              ref={emailRef}
              id="email"
              type="email"
              className="h-12 border-[#c4c4c4] bg-white text-[#333333]"
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
                className="h-12 border-[#c4c4c4] bg-white text-[#333333] pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666] text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="confirmPassword"
              className="text-[#666666] text-sm font-normal"
            >
              Confirm Password
            </Label>
            <Input
              ref={confirmRef}
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              className="h-12 border-[#c4c4c4] bg-white text-[#333333] pr-12"
            />
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <RoundedButton
            type="submit"
            className="w-full h-12 bg-[#3A30BA]/80 hover:bg-[#3A30BA] text-white"
          >
            Sign up
          </RoundedButton>
        </div>
      </form>
    </AuthLayout>
  );
}
