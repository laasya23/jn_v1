"use client";

import { useEffect, useRef } from "react";

export function LogoVideo() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative w-full bg-black/95 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 flex items-center justify-center">
        <div className="relative w-full max-w-[400px] aspect-square rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110"
          >
            <source src="/assets/videos/j-networks-logo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}
