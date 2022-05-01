import Skill from "../Skill/Skill";
import { skills } from "../../../../config/skills";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <h1 className="skills__header">My Skills:</h1>
      <div className="skills__container">
        {skills.map((skill) => {
          return <Skill key={skill} skill={skill} />;
        })}
      </div>
    </div>
  );
}
