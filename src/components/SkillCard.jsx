function SkillCard({ theme, heading, content }) {
    // const content = ["C++", "JavaScript", "React", "NodeJs", "MongoDB", "Python", "Git", "C", "Java", "SQL"];
    const secondaryColor = (theme === "dark-shade") ? "light-shade" : "dark-shade";

    const renderedContent = content.map((item, index) => {
        return (
            <li className={`${secondaryColor}
            py-[5px] px-[10px] rounded-[10px] poppins-regular flex min-w-[55px] justify-center
            text-[1.1rem] max-lg:text[1rem] max-lg:py-[3px] max-md:lg-[6px]
            `}
                key={index + 1} >
                {item}
            </li>
        );
    });

    return (
        // <div className={`${theme} h-[282.5px] rounded-[15px] p-[30px] flex flex-col gap-[20px]`}>
        <div
            className={`${theme} poppins-regular h-[282.5px] rounded-[15px] p-[30px] flex flex-col gap-[10px]
            max-lgr:h-[auto]
        `}>

            <h2 className="text-[1.7rem] max-lg:text-[1.5rem] ">
                {heading}
            </h2>

            <ul className="flex flex-row gap-[10px] flex-wrap w-[85%] py-[12px]
            max-lgr:w-full
            ">
                {renderedContent}
            </ul>
        </div>
    );

}

export default SkillCard;