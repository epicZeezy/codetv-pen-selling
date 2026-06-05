import { site } from "@/content/site";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  onDark?: boolean;
};

export function BrandLogo({ className, imageClassName, onDark }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        onDark && "rounded-sm bg-[#faf8f3] px-2.5 py-1.5 shadow-sm",
        className,
      )}
    >
      <img
        src={assetPath("/thinkink-logo.png")}
        alt={`${site.brandName} — ${site.tagline}`}
        className={cn("h-8 w-auto md:h-9", imageClassName)}
        width={180}
        height={48}
      />
    </span>
  );
}
