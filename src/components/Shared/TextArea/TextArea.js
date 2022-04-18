import { Error } from "../Error/Error";
import "./TextArea.css";

export const TextArea = ({ ...props }) => {
  return (
    <div>
      <label className="textarea__label">
        <span className="textarea__name">{props.name}</span>
        <textarea className="textarea__input" {...props} />
      </label>
      <Error>{props.error}</Error>
    </div>
  );
};
