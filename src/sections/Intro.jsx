import introIcon from "../images/intro-icon.svg";

function Intro({ className }) {
    // https://bentolio.vercel.app/icons/intro-icon.svg
    return (
        <div className={`light-shade rounded-[15px] row-span-4 col-span-6 ${className}`} >

            <div className="flex size-full flex-col justify-between gap-1 p-[20px]">
                <div className="ml-auto size-[7rem]">
                    <img src={introIcon} alt="intro icon" />
                </div>

                <h1
                    className="break-words poppins-semibold max-w-[17ch] mb-8 font-heading text-[2.2rem] font-normal leading-10
                    max-lg:w-[16ch] max-lg:text-[2.5rem] max-lg:leading-[120%]
                    max-md:w-[10ch] max-md:text-[2.4rem] max-md:leading-[110%]
                ">
                    Techie Redefining <br />
                    <i className="poppins-light-italic mr-2">Applications</i>
                    with Modern Strategies
                </h1>
            </div>
        </div>
    );
}

export default Intro;