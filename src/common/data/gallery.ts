import img1 from "../../assets/images/small/img-1.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img7 from "../../assets/images/small/img-7.jpg";
import img8 from "../../assets/images/small/pexels-photo-546819.jpg";
import img9 from "../../assets/images/small/pexels-photo-5215017.png";
import img10 from "../../assets/images/small/pexels-photo-1108101.jpg";
import img11 from "../../assets/images/small/pexels-photo-3194518.jpeg";
import img12 from "../../assets/images/small/pexels-photo-210990.jpg";
import img13 from "../../assets/images/small/pexels-photo-3862384.png";
import img14 from "../../assets/images/small/pexels-photo-4098368.png";
import img15 from "../../assets/images/small/pexels-photo-3825527.png";
import img16 from "../../assets/images/small/pexels-photo-256381.jpg";
import img17 from "../../assets/images/small/pexels-photo-3761508.png";
import img18 from "../../assets/images/small/circuit-circuit-board-resistor-c.png";
import img19 from "../../assets/images/small/pexels-photo-5212339.png";

interface GalleryProps {
  id: number;
  title: string;
  author: string;
  category: Array<any>;
  image: string;
}

const GalleryData: Array<GalleryProps> = [
  {
    id: 1,
    title: "Software Development",
    author:
      "Software developers design, code, and test computer software applications and systems. They create the programs that run on various devices, from mobile phones to desktop computers.",
    category: ["sciences_and_technology", "engineering"],
    image: img8,
  },
  {
    id: 2,
    title: "Registered Nurse",
    author:
      "Registered nurses provide medical care and support to patients in hospitals, clinics, and other healthcare settings. They assess patients' health, administer medications, and educate them about managing their conditions.",
    category: ["health"],
    image: img9,
  },
  {
    id: 3,
    title: "Mechanical Engineering",
    author:
      "Mechanical engineers design and develop mechanical systems and products. They work on everything from machines and engines to consumer products and manufacturing processes.",
    category: ["engineering"],
    image: img10,
  },
  {
    id: 4,
    title: "Marketing",
    author:
      "Marketing managers plan and execute marketing campaigns to promote products or services. They analyze market trends, identify target audiences, and manage advertising and promotional activities.",
    category: ["project", "designing"],
    image: img11,
  },
  {
    id: 5,
    title: "Financial science",
    author:
      "Accountants manage financial records, prepare tax returns, and ensure that businesses and organizations comply with financial regulations. They play a crucial role in financial planning and analysis.",
    category: ["project", "designing"],
    image: img12,
  },
  {
    id: 6,
    title: "Civil Engineering",
    author:
      "Civil engineers design and oversee the construction of infrastructure projects such as roads, bridges, buildings, and water supply systems. They ensure that these projects meet safety and environmental standards.",
    category: ["engineering"],
    image: img13,
  },
  {
    id: 6,
    title: "Psychologist",
    author:
      "Psychologists study human behavior and mental processes. They provide therapy, conduct research, and work in various settings, including schools, clinics, and private practices.",
    category: ["health"],
    image: img14,
  },
  {
    id: 7,
    title: "Environmental Scientist",
    author:
      "Environmental scientists study the environment and its impact on human health. They conduct research, analyze data, and develop strategies to address environmental issues such as pollution and climate change.",
    category: ["sciences_and_technology", "health"],
    image: img15,
  },
  {
    id: 8,
    title: "Biomedical Engineering",
    author:
      "Environmental scientists study the environment and its impact on human health. They conduct research, analyze data, and develop strategies to address environmental issues such as pollution and climate change.",
    category: ["engineering"],
    image: img16,
  },
  {
    id: 9,
    title: "Architect",
    author:
      "Architects design and plan the construction of buildings and structures. They consider functionality, aesthetics, and safety in their designs and work closely with clients and construction teams.",
    category: ["photography"],
    image: img17,
  },
  {
    id: 10,
    title: "Eletric Engineering",
    author:
      "Accountants manage financial records, prepare tax returns, and ensure that businesses and organizations comply with financial regulations. They play a crucial role in financial planning and analysis.",
    category: ["engineering"],
    image: img18,
  },
  {
    id: 11,
    title: "Pedagogical education",
    author:
      "Accountants manage financial records, prepare tax returns, and ensure that businesses and organizations comply with financial regulations. They play a crucial role in financial planning and analysis.",
    category: ["photography"],
    image: img19,
  },
];

const GalleryDataPending: Array<GalleryProps> = [
  {
    id: 1,
    title: "Software Development",
    author:
      "Software developers design, code, and test computer software applications and systems. They create the programs that run on various devices, from mobile phones to desktop computers.",
    category: ["sciences_and_technology", "engineering"],
    image: img8,
  },
  {
    id: 2,
    title: "Registered Nurse",
    author:
      "Registered nurses provide medical care and support to patients in hospitals, clinics, and other healthcare settings. They assess patients' health, administer medications, and educate them about managing their conditions.",
    category: ["health"],
    image: img9,
  },
];

export { GalleryData, GalleryDataPending };
