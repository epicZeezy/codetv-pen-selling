"use client";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "framer-motion";

type BackgroundVideoProps = {
  src: string;
  className?: string;
  overlayClassName?: string;
};

export function BackgroundVideo({
  src,
  className,
  overlayClassName,
}: BackgroundVideoProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div
        aria-hidden
        className={cn("absolute inset-0 bg-inverse-bg", className)}
      />
    );
  }

  return (
    <div aria-hidden className={cn("absolute inset-0 overflow-hidden", className)}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        className={cn(
          "absolute inset-0 bg-inverse-bg/55",
          overlayClassName,
        )}
      />
    </div>
  );
}
