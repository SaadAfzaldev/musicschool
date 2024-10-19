import Image from "next/image";
import Hero from "./component/ui/hero";
import Feautredcourses from "./component/ui/Feautredcourses";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero/>
      <Feautredcourses/>
    </main>

  );
}
