import {
  SiTypescript,
  SiHtml5,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  // SiReactrouter,
  // SiMysql,
} from "react-icons/si";

const iconStyle = "text-primaryLight text-3xl lg:text-6xl ";
export const skills = [
  {
    title: "TypeScript",
    icon: <SiTypescript className={iconStyle} />,
  },
  { title: "NodeJS", icon: <SiNodedotjs className={iconStyle} /> },
  { title: "React", icon: <SiReact className={iconStyle} /> },
  { title: "Express", icon: <SiExpress className={iconStyle} /> },
  { title: "Redux", icon: <SiRedux className={iconStyle} /> },
  { title: "MongoDB", icon: <SiMongodb className={iconStyle} /> },
  { title: "Tailwind", icon: <SiTailwindcss className={iconStyle} /> },
  { title: "HTML/CSS", icon: <SiHtml5 className={iconStyle} /> },
  //   { title: "React-Router", icon: <SiReactrouter className={iconStyle} /> },
  //   { title: "SQL", icon: <SiMysql className={iconStyle} /> },
];
export const navLinks = [
  { title: "Home", elementId: "home" },
  { title: "Projects", elementId: "projects" },
  { title: "Articles", elementId: "articles" },
  { title: "Contact", elementId: "contact" },
];
export const projects = [
  {
    title: "Butter-fly",
    image: "https://picsum.photos/300/200",
    desciption: "Website for resturant business",
    tags: ["React", "Redux", "Tailwind", "Firebase"],
  },
  {
    title: "Yitty",
    image: "https://picsum.photos/300/200",
    desciption:
      "Browser extension to download YouTube videos. Files served from Node backend",
    tags: ["React", "NodeJS", "Express", "TypeScript"],
  },
  {
    title: "Cabo",
    image: "https://picsum.photos/300/200",
    desciption:
      "Fullstack application to book cabs. Packed with features like authentication, payment intergration, confirmation mail, location autosuggest and more ",
    tags: [
      "React",
      "Router",
      "Redux",
      "Node",
      "Express",
      "MongoDB",
      "PassportJS",
      "Razorpay",
      "Sendgrid",
    ],
  },
  {
    title: "Spring",
    image: "https://picsum.photos/300/200",
    desciption: "Get weather forcast ",
    tags: ["React", "Tailwind", "HTML"],
  },
];
