import { useState, Fragment } from "react";
import { navItems } from "../../config/navItems";
import "./Navbar.css";

export default function Navbar() {
  const [nav, setNav] = useState({ isScrolled: false, isMobileOpen: false });

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
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
        <h1 className="navbar__logo" onClick={handleScrollToTop}>
          JC
        </h1>
        <ul className="navbar__links">
          {navItems.map((navItem) => (
            <li key={navItem + "-desktop"} className="navbar__link">
              {navItem}
            </li>
          ))}
        </ul>
        {nav.isMobileOpen ? (
          <p className="mobile__icon--close" onClick={handleToggleClick}>
            Close
          </p>
        ) : (
          <p className="mobile__icon--open" onClick={handleToggleClick}>
            Open
          </p>
        )}
      </nav>
      <nav
        className={`mobile__navbar ${
          nav.isMobileOpen ? "mobile__navbar--open" : ""
        }`}
      >
        <ul className="navbar__links--mobile">
          {navItems.map((navItem) => (
            <li
              key={navItem + "-mobile"}
              className="navbar__link"
              onClick={handleToggleClick}
            >
              {navItem}
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
}
