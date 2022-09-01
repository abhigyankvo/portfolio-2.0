import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IProps } from "../types";

function LeftNav({ menu, toggleMenu }: IProps) {
  return (
    <div
      // TODO-1
      className={`w-[192px] md:w-72 h-[100vh] border-r border-primary bg-secondary md:flex fixed z-40 top-0 ${
        menu ? "left-0" : "-left-[192px]"
      }`}
    >
      {/* Menu button */}
      <div
        className="hidden md:block fixed top-6 left-6 z-50"
        onClick={toggleMenu}
      >
        {menu ? (
          <IoCloseOutline className="text-primary text-4xl" />
        ) : (
          <IoMenuOutline className="text-primary text-4xl" />
        )}
      </div>
      {/* Nav Links */}
      <nav className="w-full md:w-2/3 h-full flex flex-col p-5">
        <ul className="mt-0 md:mt-20">
          <li className="text-primary text-lg px-2 py-5">Home</li>
          <li className="text-primary text-lg px-2 py-5">My Works</li>
          <li className="text-primary text-lg px-2 py-5">Articles</li>
          <li className="text-primary text-lg px-2 py-5">Contact</li>
        </ul>
      </nav>
      {/* Social Media links */}
      <div className="w-1/3 h-full hidden md:flex flex-col justify-end items-center p-5">
        <FaLinkedinIn className="text-primary text-2xl m-3 " />
        <FaGithub className="text-primary text-2xl m-3" />
        <HiMail className="text-primary text-2xl m-3" />
      </div>
    </div>
  );
}

export default LeftNav;
