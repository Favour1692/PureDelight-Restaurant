import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { section } from "motion/react-client";
import { image1 } from "@/constants";

const Story = () => {
  return (
    <section
      id="story"
      className="pt-10 md:pt-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-10 items-center">
          {/* image */}
          <div className="w-full h-[333px]" style={image1}>
            <div className="w-full h-full bg-black/40"></div>
          </div>

          {/* text */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            data-aos="fade-right"
          >
            <h2 data-aos="fade-up" data-aos-delay="100">
              Our Story
            </h2>
            <div className="flex flex-col gap-2">
              <h3 data-aos="fade-up" data-aos-delay="200">
                Our journey, your table
              </h3>
              <p data-aos="fade-up" data-aos-delay="300">
                Our restaurant was born from a simple idea: bring people
                together over good food and great drinks. What started as a love
                for cooking and hosting has grown into a space where flavors,
                conversations, and memories come naturally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
