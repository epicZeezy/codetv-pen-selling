"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type TestimonialVideoProps = {
  src: string;
};

async function playWithSound(video: HTMLVideoElement): Promise<boolean> {
  video.muted = false;
  video.volume = 1;

  try {
    await video.play();
    return true;
  } catch {
    video.muted = true;
  }

  try {
    await video.play();
    video.muted = false;
    return true;
  } catch {
    return false;
  }
}

export function TestimonialVideo({ src }: TestimonialVideoProps) {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const video = videoRef.current;
    if (!video) return;

    let started = false;

    const enableSoundOnInteraction = () => {
      video.muted = false;
      video.volume = 1;
      void video.play();
    };

    const startPlayback = async () => {
      if (started) return;
      started = true;

      const playingWithSound = await playWithSound(video);
      if (!playingWithSound) {
        document.addEventListener("pointerdown", enableSoundOnInteraction, {
          once: true,
        });
        document.addEventListener("keydown", enableSoundOnInteraction, {
          once: true,
        });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          void startPlayback();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      document.removeEventListener("pointerdown", enableSoundOnInteraction);
      document.removeEventListener("keydown", enableSoundOnInteraction);
    };
  }, [prefersReducedMotion]);

  return (
    <Reveal delay={0.25}>
      <div className="mx-auto mt-10 max-w-3xl overflow-hidden border border-border bg-background">
        <video
          ref={videoRef}
          loop
          playsInline
          controls
          preload="auto"
          className="aspect-video w-full bg-inverse-bg"
          aria-label="Student testimonial about using a pen for note-taking"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </Reveal>
  );
}
