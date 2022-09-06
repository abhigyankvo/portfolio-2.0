import { BsBoxArrowUpRight } from "react-icons/bs";
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";
import { projects } from "../utils/data";
import { motion } from "framer-motion";
import { containerVarinant, slideInViewVariant } from "../utils/animation";
function Portfolio() {
  return (
    <section
      id="projects"
      className="flex h-full w-full flex-col items-center justify-center py-10 md:py-16"
    >
      <div className="h-full p-6 lg:w-[75%] lg:p-0">
        {/* Heading */}
        <motion.div className="w-[90%] pb-16 md:w-[350px]">
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={containerVarinant}
            viewport={{ once: true, amount: 1 }}
            className="text-[2.1rem] font-extrabold leading-[3.5rem] tracking-tighter text-primary md:text-[2.8rem]"
          >
            Projects
          </motion.h1>
          <motion.p
            initial="initial"
            whileInView="animate"
            variants={slideInViewVariant}
            viewport={{ once: true, amount: 1 }}
            className="my-4 text-sm tracking-wider text-primary"
          >
            Here are some of my latest projects. You can visit my github to see
            all of my works.
          </motion.p>
          <motion.a
            initial="initial"
            whileInView="animate"
            variants={slideInViewVariant}
            viewport={{ once: true, amount: 1 }}
            href="www.google.com"
            className=" group flex w-[98px] items-center gap-3 border-b-2 border-primary py-2 text-sm font-bold tracking-wide text-primary transition-all hover:w-[115px] "
          >
            <p className="transition-all group-hover:translate-x-[22px]">
              See More
            </p>
            <BsBoxArrowUpRight className="relative -top-[1px] stroke-[1.5px] transition-all group-hover:translate-x-[20px]" />
          </motion.a>
        </motion.div>
        {/* Projects */}
        <div className="h-full w-full">
          <div className="grid h-full w-full gap-16 lg:grid-cols-2">
            {/* Grid Item */}
            {projects.map((item, index) => {
              return (
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  variants={slideInViewVariant}
                  viewport={{ once: true, amount: 0.3 }}
                  key={item.title}
                  className={`h-full w-full ${
                    index % 2 === 1 ? "relative lg:-top-20" : ""
                  }`}
                >
                  <div className="flex flex-col border border-primary">
                    {/* Top */}
                    <div className="w-full border-b border-primary p-4">
                      <img
                        className="w-full object-contain"
                        src="https://picsum.photos/300/200"
                        alt="Project screenshot"
                      />
                    </div>
                    {/* Bottom */}
                    <div className="p-4 [&>*]:py-3">
                      <h1 className="text-[1.4rem] font-extrabold leading-[1.5rem] tracking-tighter text-primary ">
                        {item.title}
                      </h1>
                      <p className="text-sm tracking-wider text-primary">
                        {item.desciption}
                      </p>
                      {/* Tags */}
                      <div className="flex w-full flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <p
                            key={tag}
                            className="border border-primary px-2 py-1 text-xs tracking-widest text-primary"
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                      {/* Links */}
                      <div className="flex w-full items-center gap-x-10">
                        <a
                          href="www.google.com"
                          className="flex items-center justify-center gap-x-2 bg-primary px-6 py-3 text-secondary  transition-all hover:cursor-pointer hover:bg-primaryLight"
                        >
                          <p className="text-sm font-semibold tracking-widest">
                            DEMO
                          </p>
                          <HiOutlineExternalLink className="relative -top-[1px] stroke-[1.5px] text-lg" />
                        </a>
                        <a
                          href="www.google.com"
                          className="flex items-center justify-center gap-x-2 bg-primary px-6 py-3 text-secondary  transition-all hover:cursor-pointer hover:bg-primaryLight"
                        >
                          <p className="text-sm font-semibold tracking-widest">
                            CODE
                          </p>
                          <HiOutlineCode className="stroke-[1.5px] text-lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
