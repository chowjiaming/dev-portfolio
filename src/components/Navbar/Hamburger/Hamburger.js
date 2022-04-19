import "./Hamburger.css";

export default function Hamburger({ ...props }) {
  const { nav, handleToggleClick } = props;

  return (
    <div className="hamburger-lines" onClick={handleToggleClick}>
      <span className={`line line1 ${nav.isMobileOpen ? "open" : null}`}></span>
      <span className={`line line2 ${nav.isMobileOpen ? "open" : null}`}></span>
      <span className={`line line3 ${nav.isMobileOpen ? "open" : null}`}></span>
    </div>
  );
}
