import { Button } from "./ui/button";
import Tescarousel from "@/components/Tescarousel";
import Link from "next/link";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="pt-10 md:pt-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* text */}
          <div className="flex flex-col gap-4 items-start">
            <div>
              <h2 data-aos="fade-up">what our guests say</h2>
              <h3 data-aos="fade-up" data-aos-delay="100">
                an experience designed for every palate
              </h3>
            </div>
            <p data-aos="fade-up" data-aos-delay="200">
              We&apos;re proud to serve memorable meals and meaningful moments.
              Here&apos;s what our guests love about dining with us.
            </p>
            <div>
              Want to have a taste?{" "}
              <Link href="#reservations">
                <Button
                  className="btn-burgundry"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  make a reservation
                </Button>
              </Link>
            </div>
          </div>
          {/* carousel */}
          <div className="relative">
            <Tescarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
