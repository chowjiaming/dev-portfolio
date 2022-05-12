import { useContext } from "react";
import ScrollContext from "../../../context/scrollContext";
import Skills from "./Skills/Skills";
import aboutImage from "../../../assets/images/about.png";
import { aboutBlurb } from "../../../config/about";
import "./About.css";

export default function About() {
  const { aboutSection } = useContext(ScrollContext);
  return (
    <section className="about" ref={aboutSection}>
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__subheader">Who am I?</h2>
          <img className="about__image" src={aboutImage} alt="About Me" />
        </div>
        <div className="about__content">
          <p className="about__paragraph">{aboutBlurb.paragraphOne}</p>
          <p className="about__paragraph">{aboutBlurb.paragraphTwo}</p>
          <Skills />
        </div>
      </div>
    </section>
  );
}
