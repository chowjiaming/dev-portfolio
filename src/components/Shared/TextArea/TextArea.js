import Error from "../Error/Error";
import "./TextArea.css";

export default function TextArea({ ...props }) {
  return (
    <div className="textarea">
      <label className="textarea__label">{props.name}</label>
      <textarea className="textarea__input" {...props} />
      <Error>{props.error}</Error>
    </div>
  );
}
