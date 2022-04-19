import "./Button.css";

export default function Button({
  children,
  onClick,
  sectionRef,
  classnames,
  type = "button",
}) {
  return (
    <button
      className={`button ${classnames}`}
      type={type}
      aria-label={children}
      onClick={() => onClick(sectionRef)}
    >
      {children}
    </button>
  );
}
