import { useContext } from "react";
import ScrollContext from "../../helpers/context/scrollContext";
import Skills from "./Skills/Skills";
import aboutImage from "../../assets/images/about.png";
import "./About.css";

export default function About() {
  const { aboutSection } = useContext(ScrollContext);
  return (
    <section className="about" ref={aboutSection}>
      <h1 className="about__header">About Me</h1>
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__subheader">Who is Joseph?</h2>
          <img className="about__image" src={aboutImage} alt="About Me" />
        </div>
        <div className="about__content">
          <p className="about__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Skills />
        </div>
      </div>
    </section>
  );
}
