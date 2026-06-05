import { cn } from "@/lib/cn";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-mono text-xs uppercase tracking-[0.2em] text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
