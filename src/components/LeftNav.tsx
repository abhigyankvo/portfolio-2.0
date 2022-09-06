import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IProps } from "../utils/types";
import { Link } from "react-scroll";
import { navLinks } from "../utils/data";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "../utils/useDebounce";
import { motion } from "framer-motion";
function LeftNav({ menu, toggleMenu, topMenuRef }: IProps) {
  const [height, setHeight] = useState(window.innerHeight);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  let navRef = useRef<HTMLDivElement>(null);
  const updateWithCurrentHeight = () => {
    const temp = window.innerHeight;
    console.log(temp);
    setHeight(temp);
  };
  const debouncedUpdateFunction = useDebounce(
    updateWithCurrentHeight,
    timerRef,
    50
  );
  useEffect(() => {
    const timer = timerRef;
    window.addEventListener("resize", debouncedUpdateFunction);
    return () => {
      window.removeEventListener("resize", debouncedUpdateFunction);
      timer.current && clearTimeout(timer.current);
    };
  }, [debouncedUpdateFunction]);
  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !topMenuRef.current?.contains(event.target as Node)
      ) {
        menu && toggleMenu(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [toggleMenu, topMenuRef, menu]);

  return (
    <div ref={navRef}>
      {/* Menu button */}
      <div
        className="fixed top-7 left-7 z-50 hidden transition-all hover:scale-[115%] hover:cursor-pointer md:block"
        onClick={() => toggleMenu()}
      >
        {menu ? (
          <IoCloseOutline className="text-4xl text-primary" />
        ) : (
          <IoMenuOutline className="text-4xl text-primary" />
        )}
      </div>
      <motion.section
        initial={{ x: -181 }}
        animate={{ x: menu ? 0 : -181 }}
        transition={{
          duration: 0.2,
          repeatType: "reverse",
        }}
        className="fixed top-0 z-40 h-[100vh] border-r border-primary bg-secondary"
      >
        <div
          className={`flex w-[180px] flex-col transition-all md:w-[280px] md:flex-row`}
          style={{ height: height }}
        >
          {/* Nav Links */}
          <nav className="flex h-full flex-[2] flex-col p-5">
            <ul className="mt-0 flex flex-col md:mt-20">
              {navLinks.map((link) => {
                return (
                  <Link
                    key={link.title}
                    to={link.elementId}
                    smooth="true"
                    className="group w-full py-4 pl-3 text-base font-medium text-primary hover:cursor-pointer"
                  >
                    <p className=" relative transition-all duration-300 before:absolute before:top-3 before:-left-12 before:h-[1px] before:w-0 before:bg-primary before:transition-all before:duration-300 before:content-[''] group-hover:translate-x-10 group-hover:before:w-10">
                      {link.title}
                    </p>
                  </Link>
                );
              })}
            </ul>
          </nav>
          {/* Social Media links */}
          <div className="flex h-full flex-[1] flex-row items-end justify-center p-4 md:flex-col md:items-center md:justify-end">
            <a
              href="http://linkedin.com/in/abhigyan-kumar-verma-5815491b4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="m-3 text-2xl text-primary  transition-all hover:scale-110 hover:text-primaryLight" />
            </a>
            <a
              href="http://github.com/abhigyankvo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="m-3 text-2xl text-primary transition-all hover:scale-110 hover:text-primaryLight" />
            </a>
            <a href="mailto:abhigyankvo@gmail.com?subject=Coming from Portfolio Website">
              <HiMail className="m-3 text-2xl text-primary transition-all hover:scale-110 hover:text-primaryLight" />
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default LeftNav;
