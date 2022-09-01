import {
  SiTypescript,
  SiHtml5,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiReactrouter,
} from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { icons } from "react-icons";

const iconStyle = "text-primaryLight text-6xl ";
const data = [
  {
    title: "TypeScript",
    icon: <SiTypescript className={iconStyle} />,
  },
  { title: "NodeJS", icon: <SiNodedotjs className={iconStyle} /> },
  { title: "React", icon: <SiReact className={iconStyle} /> },
  { title: "Express", icon: <SiExpress className={iconStyle} /> },
  { title: "Redux", icon: <SiRedux className={iconStyle} /> },
  { title: "MongoDB", icon: <SiMongodb className={iconStyle} /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss className={iconStyle} /> },
  { title: "HTML/CSS", icon: <SiHtml5 className={iconStyle} /> },
  //   { title: "React-Router", icon: <SiReactrouter className={iconStyle} /> },
  //   { title: "SQL", icon: <SiMysql className={iconStyle} /> },
];

function Hero() {
  return (
    <section className="w-full grid lg:grid-cols-[1.6fr_1fr] border-b border-primary">
      {/* Left Hero */}
      <div className="w-full p-6 md:p-16 flex flex-col justify-center items-center md:items-stretch border-r border-primary ">
        <div className="md:min-w-[540px] w-full md:w-[60%] ">
          {/* Heading */}
          <h1 className="text-[2.8rem] md:text-[4rem] leading-[3rem] md:leading-[4.2rem] text-primary  tracking-wide font-extrabold">
            Full Stack
            <span className="block text-secondary [filter:drop-shadow(0.2rem_0.2rem_0.4rem_#CE6868)]">
              Web Developer
            </span>
          </h1>
          {/* Description */}
          <p className="mt-20 text-primary text-sm tracking-wider">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, nesciunt! Iusto quibusdam cupiditate vitae
          </p>
          <p className="my-8 text-primary text-sm tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quisquam assumenda quam, laboriosam id eum
          </p>
          {/* Resume Button */}
          <a
            href="www.google.com"
            className=" py-2 border-b-2 w-[85px] border-primary text-primary text-sm font-semibold tracking-wide flex items-center gap-3 group hover:w-[105px] transition-all "
          >
            <p className="transition-all group-hover:translate-x-[22px]">
              RESUME
            </p>
            <BsBoxArrowUpRight className="stroke-1 relative -top-[1px] transition-all group-hover:translate-x-[20px]" />
          </a>
        </div>
      </div>
      {/* Right Hero */}
      <div className="hidden w-full min-h-[576px] h-full lg:flex justify-center">
        <div className=" min-w-[300px] w-[60%] h-full grid grid-cols-2">
          {data.map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center "
              >
                {item.icon}
                <p className="text-primaryLight text-sm font-semibold tracking-wide mt-3">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
