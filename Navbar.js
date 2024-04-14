import styles from "../Components/Navbar.module.css";
import logo from "../Assets/LOGO OF CHEESECAKE.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 720);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <>
      {isOpen ? (
        <AiOutlineClose
          size={30}
          color="#523728"
          className={styles.toggle}
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <AiOutlineMenu
          size={30}
          color="#523728"
          className={styles.toggle}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className={isOpen ? styles.navmob : styles.navbar}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: isOpen ? 0 : "-100%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0, duration: 0.5 }}
              transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
            >
              <img src={logo} alt="" className={styles.brand} />

              <ul className={styles.menu}>
                <li>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className={styles.link}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className={styles.link}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="menu"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className={styles.link}
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="blogs"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className={styles.link}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className={styles.link}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <h4>
                <Link to="\" className={styles.sign}>
                  Sign Up
                </Link>
              </h4>
            </motion.nav>
          )}
        </AnimatePresence>
      )}

      {window.innerWidth >= 721 && (
        <>
          <nav className={styles.navbar}>
            <img src={logo} alt="" className={styles.brand} />

            <ul className={styles.menu}>
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className={styles.link}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className={styles.link}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="menu"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className={styles.link}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="blogs"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className={styles.link}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className={styles.link}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <h4>
              <Link to="\" className={styles.sign}>
                Sign Up
              </Link>
            </h4>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
