import SkillCard from "../components/SkillCard";

function Skills () {
    const tools = ["Windows", "VSCode", "Postman", "NetBeans", "Adobe Photoshop", "Linux"]


    return <SkillCard heading={"Tools I Use"} content={tools} theme={"light-shade"} />

}

export default Skills;

