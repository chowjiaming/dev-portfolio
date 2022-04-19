import { useContext, Fragment } from "react";
import ScrollContext from "../../helpers/context/scrollContext";
import { navItems } from "../../config/navItems";
import NavItem from "./NavItem/NavItem";
import Hamburger from "./Hamburger/Hamburger";
import "./Navbar.css";

export default function Navbar() {
  const {
    nav,
    setNav,
    heroSection,
    aboutSection,
    projectSection,
    contactSection,
    handleScrollTo,
    handleScroll,
  } = useContext(ScrollContext);

  window.addEventListener("scroll", handleScroll);

  const handleToggleClick = () => {
    setNav({ ...nav, isMobileOpen: !nav.isMobileOpen });
  };

  const assignRef = (navItem) => {
    switch (navItem) {
      case "Home":
        return heroSection;
      case "About":
        return aboutSection;
      case "Projects":
        return projectSection;
      case "Contact":
        return contactSection;
      default:
        return null;
    }
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
          {navItems.map((navItem) => (
            <NavItem
              key={`desktop-${navItem}`}
              classname="navbar__link"
              onClick={handleScrollTo}
              sectionRef={assignRef(navItem)}
            >
              {navItem}
            </NavItem>
          ))}
        </ul>
        <Hamburger nav={nav} handleToggleClick={handleToggleClick} />
      </nav>
      <nav
        className={`mobile__navbar ${
          nav.isMobileOpen ? "mobile__navbar--open" : ""
        }`}
      >
        <ul className="navbar__links--mobile">
          {navItems.map((navItem) => (
            <NavItem
              key={`mobile-${navItem}`}
              classname="navbar__link"
              onClick={handleScrollTo}
              sectionRef={assignRef(navItem)}
            >
              {navItem}
            </NavItem>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
}
