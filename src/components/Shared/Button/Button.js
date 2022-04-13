import "./Button.css";

export default function Button(props) {
  const { block, modifier, alt, text } = props;
  return (
    <button className={`button ${block} ${modifier}`} alt={alt}>
      {text}
    </button>
  );
}
