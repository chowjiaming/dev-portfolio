import { useContext } from "react";
import ScrollContext from "../../../context/scrollContext";
import ThemeContext from "../../../context/themeContext";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import heroImage from "../../../assets/images/hero.png";
import Button from "../../Shared/Button/Button";
import "./Hero.css";

export default function Hero() {
  const { handleScrollTo, heroSection, contactSection, projectSection } =
    useContext(ScrollContext);
  const { theme } = useContext(ThemeContext);
  return (
    <section className="hero" ref={heroSection}>
      <img
        className="hero__image"
        src={heroImage}
        alt="Joseph Chow Frontend Developer"
      />
      <div className="hero__container">
        <h1 className="hero__heading">
          HELLO! I'M{" "}
          <span className="hero__heading hero__heading--alt">Joseph</span>
        </h1>
        <h2 className="hero__subheading">
          I AM A{" "}
          <span className="hero__subheading hero__subheading--alt">
            FRONTEND
          </span>{" "}
          DEVELOPER.
        </h2>
        <div className="hero__buttons">
          <Button
            classnames="hero__button button--primary"
            handleClick={handleScrollTo}
            sectionRef={contactSection}
          >
            Contact Me
          </Button>
          <Button
            classnames="hero__button button--secondary"
            handleClick={handleScrollTo}
            sectionRef={projectSection}
          >
            View Projects
          </Button>
        </div>

        <div className="hero__icons">
          <a
            className="hero__link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/chowjiaming"
            aria-label="Visit my Github"
          >
            <FaGithub
              className={`hero__icon hero__icon--github ${
                theme === "dark" ? "hero__icon--dark" : "hero__icon--light"
              }`}
              aria-hidden="true"
            />
          </a>
          <a
            className="hero__link"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/chowjiaming/"
            aria-label="Visit my LinkedIn"
          >
            <FaLinkedinIn
              className={`hero__icon hero__icon--linkedin ${
                theme === "dark" ? "hero__icon--dark" : "hero__icon--light"
              }`}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
