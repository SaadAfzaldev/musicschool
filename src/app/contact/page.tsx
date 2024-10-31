

"use client";
import React from "react";
import { BackgroundBeams } from "../component/ui/backgroundBeams";

export default function BackgroundBeamsDemo() {
    const [email, setEmail] = React.useState("");
    const [message,setMessage] = React.useState("");

    return (
        <div className="h-screen w-full bg-gray-900 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="mb-10 relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Contact Us
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-center relative z-10 text-2xl">
                    We&apos;re here to help with any questions about our courses,
                    programs, or events. Reach out and let us know how we can assist you
                    in your musical journey.
                </p>
                <input
                    value={email}
                    type="text"
                    placeholder="your email address"
                    className="rounded-sm border border-neutral-800 w-full relative z-10 mt-4  bg-black placeholder:text-white p-2 text-white"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    value={message}
                    placeholder={"your message"}
                    rows={5}
                    className={"w-full mt-10 bg-black placeholder:text-white relative z-10 p-2 rounded-sm text-white"}
                    onChange={(e) => setMessage(e.target.value)}
                >

                </textarea>
                <div className={"flex justify-center"}>
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 mt-5 cursor-pointer relative z-10"
                    >
                        Send Message
                    </button>
                </div>

            </div>
            <BackgroundBeams/>
        </div>
    );
}
