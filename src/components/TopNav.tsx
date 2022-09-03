import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { IProps } from "../utils/types";
function TopNav({ menu, toggleMenu }: IProps) {
  return (
    <section
      id="top-nav"
      className="flex h-20 w-full items-center justify-between border-b border-primary pl-10 pr-8 md:pl-16 md:pr-0"
    >
      <div>
        {/*TODO Add LOGO Here */}
        <p className="text-xl font-semibold tracking-wide text-primary">
          Abhigyan
        </p>
      </div>

      <button className="hidden h-full w-48 items-center justify-center bg-primary text-base font-semibold text-secondary md:flex">
        CONTACT
      </button>
      <div className="flex md:hidden" onClick={toggleMenu}>
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
