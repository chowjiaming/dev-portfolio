import { useState, Fragment } from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import "./Project.css";

export default function Project({ ...props }) {
  const { name, screenshot, github, link, shortDesc, longDesc } = props;
  const [detailView, setDetailView] = useState(false);

  const handleDetailToggle = () => {
    setDetailView(!detailView);
  };

  return (
    <article className="project">
      <div className="project__container">
        <img
          className="project__screenshot"
          src={Object.values(screenshot)[0]}
          alt={name}
        />
        <div className="project__links">
          <a
            className="project__link"
            target="_blank"
            rel="noreferrer"
            href={github}
            aria-label="Visit the project github"
          >
            <FaGithub className="project__icon project__icon--github" />
          </a>
          <a
            className="project__link"
            target="_blank"
            rel="noreferrer"
            href={link}
            aria-label="Visit the project website"
          >
            <FaEye className="project__icon project__icon--website" />
          </a>
        </div>
      </div>
      <h2 className="project__heading">{name}</h2>
      <p className="project__description project__description--short">
        {shortDesc}
      </p>
      {!detailView ? (
        <p
          className="project__toggle project__toggle--expand"
          onClick={handleDetailToggle}
        >
          Read More
        </p>
      ) : (
        <Fragment>
          <p className="project__description project__description--long">
            {longDesc}
          </p>
          <p
            className="project__toggle project__toggle--shrink"
            onClick={handleDetailToggle}
          >
            Read Less
          </p>
        </Fragment>
      )}
    </article>
  );
}
