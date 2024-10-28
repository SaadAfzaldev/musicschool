"use client"
import React from 'react'
import { BackgroundGradient } from "../ui/background-gradient";
import BorderButton from './button';
import Link from 'next/link';
import courseData from "../../../../data/courses.json"

export default function Feautredcourses() {
    const filterdCourse = courseData.courses.filter((course) => course.isFeatured === true)
  return (
    <div className='py-12 bg-gray-950'>
        <div className='flex justify-center items-center text-white text-3xl text-blue-500'>
            Feautred Courses
        </div>
        <div className='flex justify-center items-center text-white text-6xl pt-5 font-bold pl-5'> 
            Learn With Best
        </div>
        <div className="mt-10 mx-8 pt-15">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {filterdCourse.map((course)=> (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`} className='text-white'>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex justify-center items-center mt-20'>
            <Link href={'/soon'}>
            <BorderButton/>    
            </Link>
        </div>
    </div>
  )
}
