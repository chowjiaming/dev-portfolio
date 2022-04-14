import "./Skill.css";

export default function Skill(props) {
  const { skill } = props;

  return <article className="skill__container">{skill}</article>;
}
