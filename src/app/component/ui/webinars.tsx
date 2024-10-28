import React from "react"
import { HoverEffect } from "../ui/card-hover-effect";

export default function Webinars() {


const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

  



    return (
        <>

            <div className="flex justify-center items-center bg-gray-900 flex-col">
                <div className="text-white text-3xl mt-10 font-bold">
                    FEATURED WEBINARS
                </div>
                <div className="text-white text-3xl md:text-6xl mt-10 font-bold">
                    Enhance Your Musical Journey
                </div>
                <HoverEffect items={featuredWebinars.map(webinar => (
                    {
                        title: webinar.title,
                        description : webinar.description,
                        link : ""
                        
                    }
                ))}/>
            </div>

        </>
    )
}