import { InfiniteMovingCards} from "./infinite-moving-cards";
import testimonialsData from  "../../../../data/testimonials.json"

export default function Testimonials () {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-5xl font-bold text-center mb-8 z-10 text-white">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                    items={testimonialsData}
                    direction="right"
                    speed="slow"
          />
                </div>
            </div>
        </div>
    )    
}