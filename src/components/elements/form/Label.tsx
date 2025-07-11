import type React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export function Label({ children, ...props }: LabelProps) {
  return (
    <label
      className="text-sm font-normal text-[#666666] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      {...props}
    >
      {children}
    </label>
  );
}
