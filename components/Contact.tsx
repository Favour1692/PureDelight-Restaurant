import Form from "./Form";
import { socials, contactbg } from "@/constants";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="reservations" className="overflow-x-hidden scroll-mt-16">
      <div className="pt-10 md:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="pb-3">
            <h2 data-aos="fade-up">reserve your table</h2>
            <h3 data-aos="fade-up" data-aos-delay="100">
              Join us for an unforgettable dining experience.
            </h3>
            <p data-aos="fade-up" data-aos-delay="200">
              Whether you&apos;re planning a casual meal, a special celebration,
              or an evening with friends, we&apos;re ready to welcome you with
              great food, warm service, and a comfortable atmosphere.
            </p>
          </div>

          {/* contact form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-center">
            {/* text */}
            <div className="flex justify-center order-2 lg:order-1">
              <Form />
            </div>

            {/* image */}
            <div className="mx-auto order-1 lg:order-2">
              <Image
                src="/restaurant.webp"
                alt="a staff in office with a client"
                width={500}
                height={333}
                sizes="(max-width: 767px) 100vw, 500px"
                className="rounded-lg"
                data-aos="zoom-in-left"
                data-aos-delay="100"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 py-6 px-4" style={contactbg}>
        {/* text */}
        <div className="w-full h-full py-4 px-4 bg-graydark/40 flex flex-col justify-center items-center text-white">
          <div className="space-y-4">
            <p className="mb-3 text-lg font-semibold" data-aos="fade-up">
              Open Hours
            </p>
            <div className="flex gap-2">
              <FaClock className="text-3xl" />
              <p data-aos="fade-up" data-aos-delay="100">
                Mon - Thurs: 10:00 AM - 9:OO PM <br /> Fri - Sat: 9:00 AM -10:00
                PM <br />
                Sun: Closed
              </p>
            </div>
            <div className="flex gap-2">
              <FaPhoneAlt className="text-3xl" />
              <p data-aos="fade-up" data-aos-delay="200">
                +1 234 567 89
              </p>
            </div>
            <div className="flex gap-3">
              {socials.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  className="text-3xl text-viridian dark:text-lightfont dark:hover:text-dimviridian hover:text-dimviridian active:text-dimviridian"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  {social.logo}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
