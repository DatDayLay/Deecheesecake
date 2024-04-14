import AboutUs from "./Components/AboutUs";
import BlogList from "./Components/BlogList";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import "./Landing.module.css";

const Landing = ({ cakes, blogs, isMobile }) => {
  return (
    <>
      <Navbar isMobile={isMobile} />
      <Home />
      <AboutUs />
      <Menu cakes={cakes} isMobile={isMobile} />
      <BlogList blogs={blogs} isMobile={isMobile} />
      <Contact />
    </>
  );
};

export default Landing;
