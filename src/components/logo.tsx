import Link from 'next/link';
import { cn } from '@/lib/utils';
import { COMPANY_NAME } from '@/lib/constants';

function NewLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0, -10)">
        {/* Monitor screen */}
        <rect x="125" y="30" width="150" height="90" rx="10" stroke="currentColor" strokeWidth="5" fill="none" />
        
        {/* Monitor stand */}
        <line x1="200" y1="120" x2="200" y2="150" stroke="currentColor" strokeWidth="5" />
        <line x1="160" y1="150" x2="240" y2="150" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />

        {/* Globe icon inside monitor */}
        <circle cx="200" cy="75" r="25" stroke="currentColor" strokeWidth="4" fill="none" />
        <line x1="200" y1="50" x2="200" y2="100" stroke="currentColor" strokeWidth="4" />
        <line x1="175" y1="75" x2="225" y2="75" stroke="currentColor" strokeWidth="4" />
        <ellipse cx="200" cy="75" rx="15" ry="25" stroke="currentColor" strokeWidth="4" fill="none" />
      </g>

      <text x="50%" y="170" dominantBaseline="middle" textAnchor="middle" fontFamily="serif" fontSize="16" fontWeight="bold">{COMPANY_NAME}</text>
      <text x="50%" y="188" dominantBaseline="middle" textAnchor="middle" fontFamily="serif" fontSize="10" fontStyle="italic">House Of Quality Prints & Services</text>
      <line x1="80" y1="178" x2="120" y2="178" stroke="currentColor" strokeWidth="1" />
      <line x1="280" y1="178" x2="320" y2="178" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}


export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('flex items-center text-primary', className)}
      aria-label="Back to homepage"
    >
      <NewLogoIcon className="h-24 w-auto" />
    </Link>
  );
}
