import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { IProps } from "../utils/types";
import { Link } from "react-scroll";
function TopNav({ menu, toggleMenu, topMenuRef }: IProps) {
  return (
    <section
      id="top-nav"
      className=" sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-primary bg-secondary pl-10 pr-8 md:pl-16 md:pr-0 "
    >
      <div>
        {/*TODO Add LOGO Here */}
        <p className="text-xl font-semibold tracking-wide text-primary">
          Abhigyan
        </p>
      </div>

      <Link
        to="contact"
        smooth="true"
        className="hidden h-full w-48 items-center justify-center bg-primary text-base font-semibold text-secondary transition-all hover:cursor-pointer hover:bg-primaryLight md:flex"
      >
        CONTACT
      </Link>
      {/* Menu for mobile devices */}
      <div
        ref={topMenuRef}
        className="flex md:hidden"
        onClick={() => toggleMenu()}
      >
        {menu ? (
          <IoCloseOutline className="text-4xl text-primary" />
        ) : (
          <IoMenuOutline className="text-4xl text-primary" />
        )}
      </div>
    </section>
  );
}

export default TopNav;
