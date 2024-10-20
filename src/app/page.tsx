import Image from "next/image";
import Hero from "./component/ui/hero";
import Feautredcourses from "./component/ui/Feautredcourses";
import ChoooseUs from "./component/ui/whychooseus";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero/>
      <Feautredcourses/>
      <ChoooseUs/>
    </main>

  );
}
