import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Story />
      <Services />
      <Menu />
      <Team />
      <Testimonials />
      <Contact />
      <FAQ />
    </div>
  );
};

export default page;
