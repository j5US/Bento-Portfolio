import disc from "../images/about-icon.svg";
function About({ className }) {
    return (
        <div className={`light-shade rounded-[15px] row-span-3 col-span-5 ${className}`} >
            <div className="flex size-full flex-col justify-between gap-1 p-[20px]">
                
                <div className="size-[2.5rem] max-md:mb-20 max-lg:size-[3rem]">
                    <img className="size-full" src={disc} alt="about icon" />
                </div>

                <p
                    className="break-words about-text max-w-[30ch] pb-2 poppins-regular leading-[123%]
                    max-lg:w-[25ch] max-lg:text-[1.2rem] max-lg:leading-[120%]
                    max-md:w-[25ch] max-md:text-[1.2rem] max-md:leading-[110%]
                ">
                    Mriganka Paul is an aspiring full stack developer based in Chandigarh. He
                    combines technology and creativity to build engaging web
                    apps and is passionate about learning new skills with consistency.
                </p>
            </div>
        </div>
    );
}

export default About;