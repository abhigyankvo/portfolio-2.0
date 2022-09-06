import { useState, useCallback, useRef } from "react";
import { MainContainer } from "./components";
import LeftNav from "./components/LeftNav";

function App() {
  const [menu, setMenu] = useState(false);
  const topMenuRef = useRef<HTMLDivElement>(null);
  const toggleMenu = useCallback((val?: boolean) => {
    val !== undefined ? setMenu(val) : setMenu((prev) => !prev);
  }, []);
  return (
    <div className="h-full w-full bg-secondary">
      <LeftNav menu={menu} toggleMenu={toggleMenu} topMenuRef={topMenuRef} />
      <MainContainer
        menu={menu}
        toggleMenu={toggleMenu}
        topMenuRef={topMenuRef}
      />
    </div>
  );
}

export default App;
