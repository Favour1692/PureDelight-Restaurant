import { herobg, herotexture } from "@/constants";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen bg-left md:bg-center"
      style={herobg}
    >
      <div className="w-full h-full flex flex-col justify-center items-center bg-charcoal/60">
        <div className="text-center p-8">
          <h1 className="text-graylight capitalize">Pure Delight</h1>
          <p className="text-light">
            The intersection of fine cuisine and crafted cocktails
          </p>
          <div className="flex gap-3 justify-center mt-4">
            <Link href="#reservations">
              <Button variant="default" className="btn-primary text-graylight">
                Reserve a Table
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
