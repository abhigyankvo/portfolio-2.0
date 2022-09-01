import { IProps } from "../types";
import TopNav from "./TopNav";

function MainContainer(props: IProps) {
  return (
    <div className="w-full h-full md:pl-24 flex flex-col">
      <TopNav {...props} />
    </div>
  );
}

export default MainContainer;
