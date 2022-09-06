import { BsBoxArrowUpRight } from "react-icons/bs";
import { skills } from "../utils/data";
import { motion } from "framer-motion";
import {
  childVariant,
  containerVarinant,
  slideInViewVariant,
} from "../utils/animation";

function Hero() {
  return (
    <section className="grid w-full lg:grid-cols-[1.6fr_1fr]">
      {/* Left Hero */}
      <div className="flex w-full flex-col items-center justify-center border-b border-primary p-6 md:items-stretch md:p-16 lg:border-r ">
        <div className="w-full md:w-[60%] md:min-w-[480px] ">
          {/* Heading */}
          <motion.h1
            variants={containerVarinant}
            initial="initial"
            animate="animate"
            viewport={{ once: true, amount: 1 }}
            className="text-[2.8rem] font-extrabold leading-[3rem] tracking-tighter  text-primary md:text-[4rem] md:leading-[4.2rem]"
          >
            Full Stack
            <motion.span
              variants={childVariant}
              className="block text-secondary "
              style={{
                filter: "drop-shadow(.2rem .2rem .4rem #CE6868)",
              }}
            >
              Web Developer
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="initial"
            whileInView="animate"
            variants={slideInViewVariant}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-20 text-sm tracking-wider text-primary"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, nesciunt! Iusto quibusdam cupiditate vitae
          </motion.p>
          <motion.p
            initial="initial"
            whileInView="animate"
            variants={slideInViewVariant}
            viewport={{ once: true, amount: 0.3 }}
            className="my-8 text-sm tracking-wider text-primary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quisquam assumenda quam, laboriosam id eum
          </motion.p>
          {/* Resume Button */}
          <motion.a
            initial="initial"
            whileInView="animate"
            variants={slideInViewVariant}
            viewport={{ once: true, amount: 0.3 }}
            href="https://drive.google.com/file/d/133arx3uikd2BbyZrYgN7H9IgtHilrabO/view?usp=sharing"
            target={"_blank"}
            rel="noopener noreferrer"
            className=" group flex w-[85px] items-center gap-3 border-b-2 border-primary py-2 text-sm font-bold tracking-wide text-primary transition-all hover:w-[105px] "
          >
            <p className="transition-all group-hover:translate-x-[22px]">
              RESUME
            </p>
            <BsBoxArrowUpRight className="relative -top-[1px] stroke-[1.5px] transition-all group-hover:translate-x-[20px]" />
          </motion.a>
        </div>
      </div>
      {/* Right Hero */}
      <div className="flex h-full w-full justify-center border-b  border-primary px-4 py-6 lg:min-h-[576px]">
        <div className=" grid h-full w-full grid-cols-4 gap-8 lg:w-[65%] lg:min-w-[300px] lg:grid-cols-2 lg:gap-0">
          {skills.map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center "
              >
                {item.icon}
                <p className="mt-3 text-xs font-semibold -tracking-wider text-primaryLight md:text-sm">
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
