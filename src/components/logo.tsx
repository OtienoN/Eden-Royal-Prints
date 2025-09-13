import Link from "next/link";
import { Brush } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 text-lg font-bold font-headline text-primary",
        className
      )}
    >
      <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
        <Brush className="h-5 w-5" />
      </div>
      <span>{APP_NAME}</span>
    </Link>
  );
}
