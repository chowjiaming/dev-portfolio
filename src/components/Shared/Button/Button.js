import "./Button.css";

export default function Button({
  children,
  onClick,
  classnames,
  type = "button",
}) {
  return (
    <button
      className={`button ${classnames}`}
      type={type}
      aria-label={children}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
