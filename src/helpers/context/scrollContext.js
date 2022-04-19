import { createContext, useState, useRef } from "react";
const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
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

  const heroSection = useRef(null),
    aboutSection = useRef(null),
    projectSection = useRef(null),
    contactSection = useRef(null);

  return (
    <ScrollContext.Provider
      value={{
        nav,
        setNav,
        heroSection,
        aboutSection,
        projectSection,
        contactSection,
        handleScrollTo,
        handleScroll,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
