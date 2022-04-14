import "./Input.css";

export default function Input(props) {
  const { name, label, placeholder, type, value, onChange, variant } = props;
  return (
    <input
      name={name}
      label={label}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className={`form__input ${variant}`}
    />
  );
}
