import "./Button.css";

export default function Button({
  children,
  handleClick,
  sectionRef,
  classnames,
  type = "button",
}) {
  return (
    <button
      className={`button ${classnames}`}
      type={type}
      aria-label={children}
      onClick={() => handleClick(sectionRef)}
    >
      {children}
    </button>
  );
}
