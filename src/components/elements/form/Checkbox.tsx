import type React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className="cursor-pointer h-4 w-4 rounded border border-[#666666] bg-[#ffffff] text-[#333333] focus:ring-2 focus:ring-[#666666] focus:ring-offset-2"
      {...props}
    />
  );
}
