
import Hero from "./component/ui/hero";
import Feauterdcourses from "./component/ui/Feautredcourses";
import ChooseUs from "./component/ui/whychooseus";
import Testimonials from "./component/ui/musicshcool-testimonials";
import Webinars from "./component/ui/webinars";
import { Instructor } from "./component/ui/Instructor";
import Footer from "./component/ui/footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero/>
      <Feauterdcourses/>
      <ChooseUs/>
      <Testimonials/>
      <Webinars/>
      <Instructor/>
      <Footer/>
    </main>

  );
}
