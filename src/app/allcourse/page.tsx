
import React from 'react'
import coursesData from "../../../data/courses.json"
import { CardBody, CardContainer, CardItem } from "../component/ui/3d-card";
import Image from 'next/image';

function page() {
  return (
   <div className='bg-black min-h-screen flex flex-col items-center justify-center pt-40'>
        <div className='text-white text-6xl font-extrabold'>
                All Courses 
        </div>
        <div className='text-white mt-10 flex flex-wrap gap-5 justify-center'>
            {coursesData.courses.map((course) => (


            <CardContainer className="inter-var" key={course.id}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
            >
                {course.title}
            </CardItem>
            <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
                {course.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
                <Image
                src={course.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={course.instructor}
                />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
                
                
            </div>
            </CardBody>
            </CardContainer>


            ))}
        </div>
   </div>
  )
}

export default page