import SkillCard from "../components/SkillCard";

function Skills () {
    const skills = ["C++", "JavaScript", "React", "NodeJs", "MongoDB", "Python", "Git", "C", "Java", "SQL"];
    return <SkillCard heading={"My Tech Stack"} content={skills} theme={"dark-shade"} />
}

export default Skills;

