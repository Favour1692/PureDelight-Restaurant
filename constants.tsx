import {
  Nav,
  Social,
  background,
  overlay,
  services,
  menu,
  testimonial,
  faq,
} from "./type";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";
import { PiHouseLineBold } from "react-icons/pi";
import { BiDrink } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

export const navdata: Nav[] = [
  {
    id: 1,
    href: "#home",
    title: "Home",
  },
  {
    id: 2,
    href: "#story",
    title: "Our Story",
  },
  {
    id: 3,
    href: "#menu",
    title: "Menu",
  },
  {
    id: 4,
    href: "#reservations",
    title: "Reservations",
  },
  {
    id: 5,
    href: "#gallery",
    title: "Gallery",
  },
];

export const socials: Social[] = [
  {
    id: 1,
    logo: <FaLinkedinIn />,
    href: "#",
  },
  {
    id: 2,
    logo: <FaSquareXTwitter />,
    href: "#",
  },
  {
    id: 3,
    logo: <FaInstagramSquare />,
    href: "#",
  },
  {
    id: 4,
    logo: <FaFacebook />,
    href: "#",
  },
];

export const herobg: background = {
  backgroundImage: "url('/herobg.webp')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export const image1: background = {
  backgroundImage: "url('/image1.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

export const contactbg: background = {
  backgroundImage: "url('/turkish.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

export const herotexture: overlay = {
  backgroundImage: "url('/dark-geometric.png')",
  backgroundBlendMode: "overlay",
  backgroundRepeat: "repeat",
};
export const formtexture: overlay = {
  backgroundImage: "url('/dark-stripes.png')",
  backgroundBlendMode: "overlay",
  backgroundRepeat: "repeat",
};

export const serviceCard: services[] = [
  {
    id: 1,
    icon: <LuLeaf />,
    title: "Locally sourced ingredients",
  },
  {
    id: 2,
    icon: <GoTrophy />,
    title: "Award-winning chefs",
  },
  {
    id: 3,
    icon: <PiHouseLineBold />,
    title: "Cozy ambiance",
  },
  {
    id: 4,
    icon: <BiDrink />,
    title: "Signature drinks",
  },
  {
    id: 5,
    icon: <FaRegStar />,
    title: "Exceptional service",
  },
  {
    id: 6,
    icon: <FaRegHeart />,
    title: "Dietary options",
  },
];

export const menuCard: menu[] = [
  {
    id: 1,
    image: "/menu1.webp",
    title: "grilled ribeye steak",
    description:
      "Juicy, flame-grilled beef seasoned to perfection and served with a rich savory finish.",
  },
  {
    id: 2,
    image: "/menu2.webp",
    title: "creamy garlic pasta",
    description:
      "Tender pasta tossed in a smooth garlic cream sauce with herbs and a touch of parmesan.",
  },
  {
    id: 3,
    image: "/menu3.webp",
    title: "citrus glazed salmon",
    description:
      "Fresh salmon fillet glazed with a light citrus sauce for a bright, balanced flavor.",
  },
  {
    id: 4,
    image: "/menu4.webp",
    title: "margherita pizza",
    description:
      "A classic combination of tomato, mozzarella, and fresh basil on a perfectly baked crust.",
  },
];

export const testimonials: testimonial[] = [
  {
    id: 1,
    text: "The atmosphere was warm and inviting, and every dish arrived beautifully presented and absolutely full of flavor.",
    client: "__Emily Carter",
  },
  {
    id: 2,
    text: "Service was attentive without feeling rushed, and the meals here always tasted fresh, balanced, and thoughtfully prepared.",
    client: "__Daniel Okafor",
  },
  {
    id: 3,
    text: "We loved the relaxed setting, the friendly staff, and the consistent quality that made everything truly memorable.",
    client: "__Olivia Bennett",
  },
  {
    id: 4,
    text: "From the first bite to the last, each course felt carefully crafted and meant savoring slowly tonight.",
    client: "__Tunde Adeyemi",
  },
];

export const FAQs: faq[] = [
  {
    value: "item-1",
    question: "Do I need a reservation?",
    answer:
      "We recommend reserving in advance, especially on weekends, to secure your preferred time and table.",
  },
  {
    value: "item-2",
    question: "Can I place takeout or delivery orders?",
    answer:
      "Yes! You can call us directly to place your takeout or delivery orders.",
  },
  {
    value: "item-3",
    question: "Are children welcome?",
    answer:
      "Absolutely! We offer a family-friendly environment and kid-friendly menu options.",
  },
  {
    value: "item-4",
    question: "Is there parking available?",
    answer: "Yes, we have complimentary parking on-site for all guests.",
  },
];
