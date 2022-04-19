import { useContext } from "react";
import ThemeContext from "../../../helpers/context/themeContext";
import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  const { theme, handleToggleClick } = useContext(ThemeContext);
  return (
    <div className="toggleswitch" onClick={handleToggleClick}>
      <div
        className={`toggleswitch__knob ${
          theme === "light" ? "toggleswitch__knob--light" : ""
        }`}
      />
    </div>
  );
}
