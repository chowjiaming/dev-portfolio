import { Error } from "../Error/Error";
import "./Input.css";

export default function Input({ ...props }) {
  return (
    <div>
      <label className="input__label">
        <span className="input__name">{props.name}</span>
        <input className="input__input" {...props} />
      </label>
      <Error>{props.error}</Error>
    </div>
  );
}
