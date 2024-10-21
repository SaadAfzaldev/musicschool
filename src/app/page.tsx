
import Hero from "./component/ui/hero";
import Feauterdcourses from "./component/ui/Feautredcourses";
import ChooseUs from "./component/ui/whychooseus";
import { InfiniteMovingCards } from "./component/ui/infinite-moving-cards";
import testimonials from  "../../data/testimonials.json"
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero/>
      <Feauterdcourses/>
      <ChooseUs/>
        <InfiniteMovingCards items={testimonials}/>
    </main>

  );
}
