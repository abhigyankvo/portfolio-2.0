import { BsBoxArrowUpRight } from "react-icons/bs";

function Portfolio() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center">
      <div className="h-full lg:w-[70%]">
        {/* Description */}
        <div className="md:w-[350px]">
          <h1 className="text-[2.8rem] font-bold leading-[3rem] tracking-tight text-primary">
            Projects
          </h1>
          <p className="my-4 text-sm text-primary">
            Here are some of my latest projects. You can visit my github to see
            all of my works.
          </p>
          <a
            href="www.google.com"
            className=" group flex w-[95px] items-center gap-3 border-b-2 border-primary py-2 text-sm font-bold tracking-wide text-primary transition-all hover:w-[115px] "
          >
            <p className="transition-all group-hover:translate-x-[22px]">
              See More
            </p>
            <BsBoxArrowUpRight className="relative -top-[1px] stroke-[1.5px] transition-all group-hover:translate-x-[20px]" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
