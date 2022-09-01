import { useState } from "react";
import { MainContainer } from "./components";
import LeftNav from "./components/LeftNav";

function App() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="w-full h-[2000px] bg-secondary">
      <LeftNav menu={menu} toggleMenu={toggleMenu} />
      <MainContainer menu={menu} toggleMenu={toggleMenu} />
    </div>
  );
}

export default App;
