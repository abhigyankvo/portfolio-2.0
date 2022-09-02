import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IProps } from "../types";

function LeftNav({ menu, toggleMenu }: IProps) {
  return (
    <div
      // TODO-1
      className={`fixed top-0 z-40 flex h-[100vh] w-[180px] flex-col border-r border-primary bg-secondary md:w-[280px] md:flex-row ${
        menu ? "left-0" : "-left-[180px]"
      }`}
    >
      {/* Menu button */}
      <div
        className="fixed top-6 left-6 z-50 hidden md:block"
        onClick={toggleMenu}
      >
        {menu ? (
          <IoCloseOutline className="text-4xl text-primary" />
        ) : (
          <IoMenuOutline className="text-4xl text-primary" />
        )}
      </div>
      {/* Nav Links */}
      <nav className="flex h-full flex-[2] flex-col p-5">
        <ul className="mt-0 md:mt-20">
          <li className="px-2 py-5 text-lg text-primary">Home</li>
          <li className="px-2 py-5 text-lg text-primary">My Works</li>
          <li className="px-2 py-5 text-lg text-primary">Articles</li>
          <li className="px-2 py-5 text-lg text-primary">Contact</li>
        </ul>
      </nav>
      {/* Social Media links */}
      <div className="flex h-full flex-[1] flex-row items-end justify-center p-4 md:flex-col md:items-center md:justify-end">
        <FaLinkedinIn className="m-3 text-2xl text-primary " />
        <FaGithub className="m-3 text-2xl text-primary" />
        <HiMail className="m-3 text-2xl text-primary" />
      </div>
    </div>
  );
}

export default LeftNav;
