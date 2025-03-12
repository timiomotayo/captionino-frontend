"use client";

export default function Loading() {

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 animate-pulse rounded-full bg-primary/70"></div>
          <h1 className="text-2xl font-bold text-primary">Captionino</h1>
        </div>
    </div>
)
}