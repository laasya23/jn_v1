"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function Hero() {
  // Correct syntax for useRef in a .jsx file
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays on load
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/assets/images/hero-poster.jpg"
        >
          {/* <source src="/assets/videos/hero-background.mp4" type="video/mp4" /> */}
          <source
            src="https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              High-Speed Internet for Sangareddy
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Experience lightning-fast internet with unlimited data and
              exceptional service quality.
            </p>
          </div>
          <div className="space-x-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
            >
              <Link href="/#plans">
                View Plans <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
            >
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
