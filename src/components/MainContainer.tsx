import { IProps } from "../utils/types";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import TopNav from "./TopNav";
import { motion } from "framer-motion";
function MainContainer(props: IProps) {
  return (
    <motion.div id="home" className="flex h-full w-full flex-col md:pl-24">
      <TopNav {...props} />

      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default MainContainer;
