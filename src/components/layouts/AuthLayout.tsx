// components/layouts/AuthLayout.tsx
import Link from "next/link";

export default function AuthLayout({
  title,
  subtitle,
  linkHref,
  linkText,
  children,
}: {
  title: string;
  subtitle: string;
  linkHref: string;
  linkText: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FFF9F3] flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-medium text-[#333333]">{title}</h1>
            <p className="text-[#666666] text-sm">
              {subtitle}{" "}
              <Link href={linkHref} className="text-[#333333] underline">
                {linkText}
              </Link>
            </p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
