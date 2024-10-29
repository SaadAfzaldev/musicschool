"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";


export function Instructor() {
  return (
      <div className="h-[40rem] flex overflow-hidden justify-center items-center relative">
      <WavyBackground className="">

      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>

      </WavyBackground>

      </div>

  );
}
