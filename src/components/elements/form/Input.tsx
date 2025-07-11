import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className="flex h-12 w-full rounded-lg border border-[#c4c4c4] bg-[#ffffff] px-3 py-2 text-sm text-[#333333] placeholder:text-[#a6a6a6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#666666] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
