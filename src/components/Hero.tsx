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
const iconStyle = "text-primaryLight text-3xl lg:text-6xl ";
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
  { title: "Tailwind", icon: <SiTailwindcss className={iconStyle} /> },
  { title: "HTML/CSS", icon: <SiHtml5 className={iconStyle} /> },
  //   { title: "React-Router", icon: <SiReactrouter className={iconStyle} /> },
  //   { title: "SQL", icon: <SiMysql className={iconStyle} /> },
];

function Hero() {
  return (
    <section className="grid w-full lg:grid-cols-[1.6fr_1fr]">
      {/* Left Hero */}
      <div className="flex w-full flex-col items-center justify-center border-b border-primary p-6 md:items-stretch md:p-16 lg:border-r ">
        <div className="w-full md:w-[60%] md:min-w-[540px] ">
          {/* Heading */}
          <h1 className="text-[2.8rem] font-extrabold leading-[3rem] tracking-tighter  text-primary md:text-[4rem] md:leading-[4.2rem]">
            Full Stack
            <span className="block text-secondary [filter:drop-shadow(0.2rem_0.2rem_0.4rem_#CE6868)]">
              Web Developer
            </span>
          </h1>
          {/* Description */}
          <p className="mt-20 text-sm tracking-wider text-primary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, nesciunt! Iusto quibusdam cupiditate vitae
          </p>
          <p className="my-8 text-sm tracking-wide text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quisquam assumenda quam, laboriosam id eum
          </p>
          {/* Resume Button */}
          <a
            href="www.google.com"
            className=" group flex w-[85px] items-center gap-3 border-b-2 border-primary py-2 text-sm font-bold tracking-wide text-primary transition-all hover:w-[105px] "
          >
            <p className="transition-all group-hover:translate-x-[22px]">
              RESUME
            </p>
            <BsBoxArrowUpRight className="relative -top-[1px] stroke-[1.5px] transition-all group-hover:translate-x-[20px]" />
          </a>
        </div>
      </div>
      {/* Right Hero */}
      <div className="flex h-full w-full justify-center border-b  border-primary px-4 py-6 lg:min-h-[576px]">
        <div className=" grid h-full w-full grid-cols-4 gap-8 lg:w-[60%] lg:min-w-[300px] lg:grid-cols-2 lg:gap-0">
          {data.map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center "
              >
                {item.icon}
                <p className="mt-3 text-xs font-semibold tracking-wide text-primaryLight md:text-sm">
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
