import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

function PrinterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 40V56H52V40"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 48H4V24C4 21.7909 5.79086 20 8 20H56C58.2091 20 60 21.7909 60 24V48H52"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="12" y="8" width="40" height="12" fill="currentColor" />
      <rect x="20" y="28" width="4" height="8" fill="#3B82F6" />
      <rect x="26" y="28" width="4" height="16" fill="#10B981" />
      <rect x="32" y="28" width="4" height="20" fill="#FBBF24" />
      <rect x="38" y="28" width="4" height="12" fill="#F59E0B" />
      <rect x="44" y="28" width="4" height="18" fill="#EF4444" />
    </svg>
  );
}


export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 text-lg font-bold font-headline text-primary",
        className
      )}
    >
      <div className="text-primary rounded-md h-8 w-8 flex items-center justify-center">
        <PrinterIcon className="h-8 w-8" />
      </div>
      <span>{APP_NAME}</span>
    </Link>
  );
}
