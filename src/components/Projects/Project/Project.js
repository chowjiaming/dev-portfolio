import { useState, Fragment } from "react";
import "./Project.css";

export default function Project(props) {
  const { name, screenshot, shortDescription, longDescription } = props.project;
  const [detailView, setDetailView] = useState(false);

  const handleDetailToggle = () => {
    setDetailView(!detailView);
  };

  return (
    <article className="project__container">
      <img
        className="project__screenshot"
        src={Object.values(screenshot)[0]}
        alt={name}
      />
      <h2 className="project__heading">{name}</h2>
      <p className="project__description project__description--short">
        {shortDescription}
      </p>
      {!detailView ? (
        <p className="project__toggle--expand" onClick={handleDetailToggle}>
          Read More
        </p>
      ) : (
        <Fragment>
          <p className="project__description project__description--long">
            {longDescription}
          </p>
          <p className="project__toggle--shrink" onClick={handleDetailToggle}>
            Read Less
          </p>
        </Fragment>
      )}
    </article>
  );
}
