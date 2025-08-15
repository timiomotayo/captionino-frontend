"use client";
import {
  Video as VideoIcon,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { useRef, useState } from "react";

export function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Format time to mm:ss
  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Reset state when dialog closes
  const handleOpenChange = (open) => {
    if (!open) {
      setIsPlaying(false);
      setIsMuted(false);
      setDuration(0);
      setCurrentTime(0);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    } else {
      // Give time for metadata to load
      setTimeout(() => {
        if (videoRef.current && videoRef.current.duration) {
          setDuration(videoRef.current.duration);
        }
      }, 100);
    }
  };

  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-lexend text-3xl font-medium tracking-tight text-slate-900 dark:text-text sm:text-7xl">
        Generate{" "}
        <span className="relative whitespace-nowrap text-pink-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-pink-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">Perfect Captions</span>
        </span>{" "}
        for Your Images.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 dark:text-gray-400">
        Captionino uses AI to create engaging, personalized captions for your
        social media posts, product descriptions, and more.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/auth" color="slate">
          Try 5 Free Captions
        </Button>

        <Dialog onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <Button variant="outline" className="cursor-pointer">
              <svg
                aria-hidden="true"
                className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
              >
                <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
              </svg>
              <span className="ml-3">Watch video</span>
            </Button>
          </DialogTrigger>

          <DialogTitle className="hidden">Demo Video</DialogTitle>

          {/* Overlay */}
          {/* <DialogOverlay className="fixed inset-0 bg-black/70 backdrop-blur-sm data-[state=open]:animate-fadeIn" /> */}

          {/* Lightbox */}
          <DialogContent className="bg-transparent border-none shadow-none p-0 max-h-[90vh] w-full max-w-[90vw] sm:max-w-[80vw] lg:max-w-[40vw] flex items-center justify-center">
            <div className="relative w-full max-w-4xl aspect-video">
              <video
                ref={videoRef}
                src="/videos/video1.mp4"
                className="rounded-lg object-fill"
                controls={false}
                onLoadedMetadata={() => {
                  if (videoRef.current) {
                    setDuration(videoRef.current.duration || 0);
                  }
                }}
                onTimeUpdate={() => {
                  if (videoRef.current) {
                    setCurrentTime(videoRef.current.currentTime || 0);
                  }
                }}
                onEnded={() => setIsPlaying(false)}
              />
              {/* Big Play/Pause Button */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center text-white"
                >
                  <Play size={80} className="drop-shadow-lg" fill="white" />
                </button>
              )}
              {isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition"
                >
                  <Pause size={80} className="drop-shadow-lg" fill="white" />
                </button>
              )}
              {/* Bottom Controls */}
              <div className="absolute bottom-4 left-0 w-full flex items-center justify-between px-4 text-white">
                {/* Time Countdown */}
                <span className="text-lg font-semibold bg-black/50 px-2 py-1 rounded">
                  {formatTime(duration - currentTime)}
                </span>

                {/* Mute/Unmute */}
                <button
                  onClick={toggleMute}
                  className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                >
                  {isMuted ? <VolumeX size={25} /> : <Volume2 size={25} />}
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* <Button
          // href="https://tinyurl.com/captionino-demo"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button> */}
      </div>
    </Container>
  );
}
