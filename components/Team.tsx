import Image from "next/image";

const Team = () => {
  return (
    <section className="pt-10 md:pt-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* text */}
          <div className="flex flex-col items-start">
            <div>
              <h2 data-aos="fade-up">meet our chefs</h2>
              <h3 data-aos="fade-up" data-aos-delay="100">
                the passion behind every plate
              </h3>
            </div>
            <p className="mt-4" data-aos="fade-up" data-aos-delay="200">
              Our culinary team blends creativity, skill, and years of
              experience to craft dishes that are both comforting and
              unforgettable. Every recipe is prepared with attention to detail,
              fresh ingredients, and a love for bringing people together through
              food.
            </p>
          </div>
          {/* image */}
          <div className="mx-auto lg:mx-0">
            <Image
              src="/team.webp"
              alt="team posing in an office"
              width={500}
              height={333}
              sizes="(max-width: 767px) 100vw, 500px"
              className="rounded-lg"
              data-aos="zoom-in-left"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
