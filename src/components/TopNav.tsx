import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { IProps } from "../types";
function TopNav({ menu, toggleMenu }: IProps) {
  return (
    <div className="w-full h-20 pl-10 pr-8 md:pl-16 md:pr-0 border-b border-primary flex justify-between items-center">
      <div>
        {/*TODO Add LOGO Here */}
        <p className="text-primary text-xl font-semibold tracking-wide">
          Abhigyan
        </p>
      </div>

      <button className="hidden md:flex justify-center items-center w-48 h-full bg-primary text-base text-secondary font-semibold">
        CONTACT
      </button>
      <div className="md:hidden flex" onClick={toggleMenu}>
        {menu ? (
          <IoCloseOutline className="text-primary text-4xl" />
        ) : (
          <IoMenuOutline className="text-primary text-4xl" />
        )}
      </div>
    </div>
  );
}

export default TopNav;
