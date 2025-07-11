import { cn } from "@/lib/utils/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  children: React.ReactNode;
}

export function RoundedButton({
  className,
  variant = "default",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "default" && "bg-[#a6a6a6] text-white hover:bg-[#666666]",
        variant === "outline" &&
          "border border-[#c4c4c4] bg-[#ffffff] text-[#333333] hover:bg-gray-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
