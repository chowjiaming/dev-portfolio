import { useState, useContext, Fragment } from "react";
import ScrollContext from "../../helpers/context/scrollContext";
// import { navItems } from "../../config/navItems";
import Hamburger from "./Hamburger/Hamburger";
import "./Navbar.css";

export default function Navbar() {
  const { heroSection, aboutSection, projectSection, contactSection } =
    useContext(ScrollContext);
  const [nav, setNav] = useState({ isScrolled: false, isMobileOpen: false });

  const handleScrollTo = (ref) => {
    setNav({ isScrolled: false, isMobileOpen: false });
    window.scrollTo({
      top: ref.current.offsetTop - 40,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY >= 200) setNav({ ...nav, isScrolled: true });
    else setNav({ ...nav, isScrolled: false });
  };

  window.addEventListener("scroll", handleScroll);

  const handleToggleClick = () => {
    setNav({ ...nav, isMobileOpen: !nav.isMobileOpen });
  };

  return (
    <Fragment>
      <nav
        className={`navbar__desktop ${
          nav.isScrolled ? "navbar__desktop--scroll" : ""
        }`}
      >
        <h1
          className="navbar__logo"
          onClick={() => handleScrollTo(heroSection)}
        >
          JC
        </h1>
        <ul className="navbar__links">
          <li
            className="navbar__link"
            onClick={() => handleScrollTo(heroSection)}
          >
            Home
          </li>
          <li
            className="navbar__link"
            onClick={() => handleScrollTo(aboutSection)}
          >
            About
          </li>
          <li
            className="navbar__link"
            onClick={() => handleScrollTo(projectSection)}
          >
            Projects
          </li>
          <li
            className="navbar__link"
            onClick={() => handleScrollTo(contactSection)}
          >
            Contact
          </li>
          {/* {navItems.map((navItem) => (
            <li key={navItem + "-desktop"} className="navbar__link">
              {navItem}
            </li>
          ))} */}
        </ul>
        <Hamburger nav={nav} handleToggleClick={handleToggleClick} />
      </nav>
      <nav
        className={`mobile__navbar ${
          nav.isMobileOpen ? "mobile__navbar--open" : ""
        }`}
      >
        <ul className="navbar__links--mobile">
          <li
            className="navbar__link"
            onClick={() => handleScrollTo(heroSection)}
          >
            Home
          </li>
          <li
            className="navbar__link"
            onClick={() => handleScrollTo(aboutSection)}
          >
            About
          </li>
          <li
            className="navbar__link"
            onClick={() => handleScrollTo(projectSection)}
          >
            Projects
          </li>
          <li
            className="navbar__link"
            onClick={() => handleScrollTo(contactSection)}
          >
            Contact
          </li>
          {/* {navItems.map((navItem) => (
            <li
              key={navItem + "-mobile"}
              className="navbar__link"
              onClick={handleToggleClick}
            >
              {navItem}
            </li>
          ))} */}
        </ul>
      </nav>
    </Fragment>
  );
}
