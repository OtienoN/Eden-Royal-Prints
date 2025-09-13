import Link from 'next/link';
import { cn } from '@/lib/utils';
import { COMPANY_NAME } from '@/lib/constants';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'text-2xl font-bold text-primary hover:text-primary/90 transition-colors',
        className
      )}
      aria-label="Back to homepage"
    >
      {COMPANY_NAME}
    </Link>
  );
}

    