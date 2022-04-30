import Error from "../Error/Error";
import "./Input.css";

export default function Input({ ...props }) {
  return (
    <div className="input">
      <label className="input__label">{props.name} </label>
      <input className="input__input" {...props} />
      <Error>{props.error}</Error>
    </div>
  );
}
