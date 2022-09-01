import { IProps } from "../types";
import Hero from "./Hero";
import TopNav from "./TopNav";

function MainContainer(props: IProps) {
  return (
    <div className="w-full h-full md:pl-24 flex flex-col">
      <TopNav {...props} />
      <Hero />
    </div>
  );
}

export default MainContainer;
