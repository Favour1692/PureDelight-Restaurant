import { menuCard } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <section
      id="menu"
      className="pt-10 md:pt-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <h2 data-aos="fade-up">menu highlights</h2>
        <h3 data-aos="fade-up" data-aos-delay="100">
          Discover the flavors our guests love most
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 py-6">
          {menuCard.map((data) => (
            <Card
              key={data.id}
              className="h-full bg-light dark:bg-darkfont hover:bg-graylight dark:hover:bg-graydark shadow-lg shadow-graydark dark:shadow-none hover:text-ivory flex flex-col justify-center items-center py-3"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <CardContent className="flex flex-col gap-2">
                <div className="relative h-48 w-full">
                  <Image
                    src={data.image}
                    alt="people working together in an office"
                    fill
                    className="object-cover"
                  ></Image>
                </div>
                <h2 className="text-base text-viridian dark:text-viridian capitalize text-left">
                  {data.title}
                </h2>
                <p>{data.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Link href="#reservations">
          <Button className="btn-burgundry">Book a table</Button>
        </Link>
      </div>
    </section>
  );
};

export default Menu;
