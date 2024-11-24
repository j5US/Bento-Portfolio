function AboutMe() {
    return <div className="light-shade poppins-regular h-[580px] rounded-[15px] p-[30px] flex flex-col gap-[0.7rem]
    max-lgr:h-auto
    ">

        <h1 className="poppins-medium text-[2rem] max-md:text-[1.5rem]">What I&apos;m about?</h1>
        <hr className="border border-[#a1a18877] w-full" />
        <div className="flex flex-col gap-[2rem]">
            <div>
                <h3 className="poppins-medium text-[#737366] tracking-[1.5px] py-[0.5rem]">MY STORY</h3>
                <p className="text-[1.2rem] break-words  w-[38ch] leading-[145%]
            max-lgr:w-[90%] max-lg:text-[1.1rem] max-lg:w-full">
                    I was born and raised in Siliguri, India, where my curiosity for technology sparked my
                    interest in programming. From learning C++ and Java to exploring full-stack development
                    with Node.js and React, I&apos;ve enjoyed building applications and expanding my skills.
                    I&apos;m passionate about learning new tech and creating solutions that have a positive impact.
                </p>
            </div>

            <div>
                <h3 className="poppins-medium py-[0.5rem] text-[#737366] tracking-[1.5px]">WHAT I DO NOW</h3>
                <p className="text-[1.2rem] break-words  w-[38ch] leading-[145%]
            max-lgr:w-[90%] max-lg:text-[1.1rem] max-md:w-full">
                    Now I&apos;m a sophomore at Chandigarh University, focusing on full-stack
                    dev and working on projects to enhance my skills.
                </p>
            </div>
        </div>
    </div>

}

export default AboutMe;