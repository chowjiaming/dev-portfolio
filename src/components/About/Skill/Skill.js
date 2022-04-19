import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiJest, SiExpress, SiMongodb } from "react-icons/si";
import "./Skill.css";

export default function Skill({ ...props }) {
  const { skill } = props;
  const setSkillIcon = (skill) => {
    switch (skill) {
      case "HTML":
        return <FaHtml5 className="skill__icon" size={60} />;
      case "CSS":
        return <FaCss3Alt className="skill__icon" size={60} />;
      case "JavaScript":
        return <SiJavascript className="skill__icon" size={60} />;
      case "React":
        return <FaReact className="skill__icon" size={60} />;
      case "Jest":
        return <SiJest className="skill__icon" size={60} />;
      case "NodeJS":
        return <FaNodeJs className="skill__icon" size={60} />;
      case "ExpressJS":
        return <SiExpress className="skill__icon" size={60} />;
      case "MongoDB":
        return <SiMongodb className="skill__icon" size={60} />;
      default:
        return null;
    }
  };

  return (
    <article className="skill">
      {setSkillIcon(skill)}
      <h2 className="skill__name">{skill}</h2>
    </article>
  );
}
