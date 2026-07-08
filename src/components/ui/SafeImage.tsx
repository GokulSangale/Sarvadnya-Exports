"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Drop-in replacement for next/image. If the remote image fails to load (dead link,
 * rate-limited hotlink, offline placeholder host, etc.) it swaps to a branded gradient
 * fallback instead of leaving a broken image icon — this is placeholder photography,
 * so a graceful miss matters more here than it would for real, self-hosted assets.
 */
export default function SafeImage({ alt, className, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-gradient-to-br from-pomegranate/15 via-blush to-gold/15 text-pomegranate/40",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <ImageOff size={28} />
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
