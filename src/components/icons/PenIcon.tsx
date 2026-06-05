import { cn } from "@/lib/cn";

type PenIconProps = {
  className?: string;
};

export function PenIcon({ className }: PenIconProps) {
  return (
    <svg
      viewBox="0 0 120 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden
    >
      <path
        d="M60 10 L95 45 L55 285 L25 295 L35 55 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="var(--surface)"
      />
      <path
        d="M25 295 L55 285 L60 310 L30 320 Z"
        fill="currentColor"
      />
      <line
        x1="60"
        y1="10"
        x2="60"
        y2="280"
        stroke="var(--highlight)"
        strokeWidth="1"
        opacity="0.5"
      />
      <circle cx="60" cy="18" r="4" fill="var(--accent)" />
    </svg>
  );
}
