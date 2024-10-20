import { GoArrowUpRight } from "react-icons/go";
function Contact({ className }) {
    return (
        <div className={`dark-shade rounded-[15px] row-span-3 col-span-5 ${className}`} >
             <div className="flex size-full flex-col justify-between gap-1 p-[20px]">
                <div className="flex flex-row justify-between items-center">
                    <p className="text-[13px] leading-[120%] poppins-light max-w-[10ch]">Have some questions?</p>
                    {/* <small className="text-xl">🡥</small> */}
                    <GoArrowUpRight className="text-2xl"/>
                </div>

                <h2
                    className=" max-w-[10ch] poppins-regular pb-3 font-heading text-[2.3rem] leading-[100%]
                    max-lg:w-[25ch] max-lg:text-[2.7rem] 
                    max-md:w-[25ch] max-md:text-[2.5rem] 
                    ">
                    Contact me
                </h2>
            </div> 
        </div>
    );
}

export default Contact;