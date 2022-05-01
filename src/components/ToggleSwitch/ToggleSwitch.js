import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import sunIcon from "../../assets/icons/sun.svg";
import moonIcon from "../../assets/icons/moon.svg";
import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  const { theme, handleToggleClick } = useContext(ThemeContext);
  return (
    <div className="toggleswitch" onClick={handleToggleClick}>
      <img
        className={`toggleswitch__icon ${
          theme === "dark"
            ? "toggleswitch__icon--light"
            : "toggleswitch__icon--dark"
        }`}
        src={theme === "dark" ? sunIcon : moonIcon}
        alt={theme === "dark" ? "Light mode icon" : "Dark mode icon"}
      />
      <div
        className={`toggleswitch__knob ${
          theme === "dark"
            ? "toggleswitch__knob--light"
            : "toggleswitch__knob--dark"
        }`}
      />
    </div>
  );
}
