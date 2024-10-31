"use client"


import React from "react";

import { Spotlight } from "@/app/component/ui/Spotlight";
import { useRouter } from "next/navigation";


export default function Hero () {

    const router = useRouter()

    return (
        <>
            <div className="flex justify-center item-center h-screen w-screen">
                <div className="h-screen w-screen rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                    <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20 mt-20"
                    fill="white"
                    />
                    <div className=" p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0 mt-20">
                        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            Master the Art of Music
                        </h1>
                        <p className="mt-4 font-semi-bold text-base text-neutral-300 max-w-lg text-center mx-auto pt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium at dolorum explicabo consectetur iure, atque vel suscipit officia, quae enim nisi reiciendis a quisquam maxime qui omnis, itaque odit?         
                        </p>
                        <div className="flex justify-center mt-5">
                        <button 
                        onClick={() => router.push('/allcourse')}
                 className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" >
                     <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                     <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
                        Explore Our Courses
                     </span>
                 </button>
                        </div>  
                    </div>
                </div>
            </div>    
        </>
    )
}