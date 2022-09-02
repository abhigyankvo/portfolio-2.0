import { IProps } from "../types";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import TopNav from "./TopNav";

function MainContainer(props: IProps) {
  return (
    <div className="flex h-full w-full flex-col md:pl-24">
      <TopNav {...props} />
      <Hero />
      <Portfolio />
    </div>
  );
}

export default MainContainer;
