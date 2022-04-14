import { createContext, useRef } from "react";
const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const heroSection = useRef(null),
    aboutSection = useRef(null),
    projectSection = useRef(null),
    contactSection = useRef(null);
  return (
    <ScrollContext.Provider
      value={{ heroSection, aboutSection, projectSection, contactSection }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
