import { useContext } from "react";
import ScrollContext from "../../helpers/context/scrollContext";
import githubLogo from "../../assets/icons/github.svg";
import linkedinLogo from "../../assets/icons/linkedin.svg";
import heroImage from "../../assets/images/hero.png";
import Button from "../Shared/Button/Button";
import "./Hero.css";

export default function Hero() {
  const { heroSection } = useContext(ScrollContext);
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
            block="hero__button"
            modifier="button--primary"
            alt="Contact Me Button"
            text="Contact Me"
          />
          <Button
            block="hero__button"
            modifier="button--secondary"
            alt="View Projects Button"
            text="View Projects"
          />
        </div>

        <div className="hero__icons">
          <a
            className="hero__link"
            href="https://github.com/chowjiaming"
            aria-label="Visit my Github"
          >
            <img
              className="hero__icon hero__icon--github"
              src={githubLogo}
              alt="Github Logo"
              aria-hidden="true"
            />
          </a>
          <a
            className="hero__link"
            href="https://www.linkedin.com/in/chowjiaming/"
            aria-label="Visit my LinkedIn"
          >
            <img
              className="hero__icon hero__icon--linkedin"
              src={linkedinLogo}
              alt="LinkedIn Logo"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
