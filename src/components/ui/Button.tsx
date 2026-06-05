import { cn } from "@/lib/cn";
import Link from "next/link";
import { forwardRef } from "react";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> & {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const variantStyles = {
  primary:
    "bg-accent text-inverse-text hover:bg-accent/90 border border-accent",
  secondary:
    "bg-transparent text-text border border-text hover:bg-text hover:text-inverse-text",
  ghost:
    "bg-transparent text-inverse-text border border-inverse-text/30 hover:border-inverse-text hover:bg-inverse-text/10",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", href, children, onClick, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center px-6 py-3 font-mono text-sm tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50",
      variantStyles[variant],
      className,
    );

    if (href && !props.disabled) {
      if (href.startsWith("/")) {
        return (
          <Link href={href} className={classes} onClick={onClick}>
            {children}
          </Link>
        );
      }

      return (
        <a href={href} className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
