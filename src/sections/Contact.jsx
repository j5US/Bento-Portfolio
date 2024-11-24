import { GoArrowUpRight } from "react-icons/go";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";
import useYoyoEffect from "../hooks/useYoyoEffect";

function Contact({ className }) {
    const { elementRef, handleMouseEnter, handleMouseLeave } = useYoyoEffect();
    // const yoyoLink = useRef([]);
    // const { contextSafe } = useGSAP({ scope: yoyoLink });

    // const handleMouseEnter = contextSafe((index) => {
    //     gsap.to(yoyoLink.current[index], {
    //         xPercent:20,
    //         yPercent: -20,
    //         duration: 0.5,
    //         yoyo: true,
    //         repeat: -1
    //     });
    // });
    // const handleMouseLeave = contextSafe((index) => {
    //     gsap.killTweensOf(yoyoLink.current[index])
    //     gsap.to(yoyoLink.current[index], {
    //         xPercent:0,
    //         yPercent:0
    //     })
    // });

    return (
        <div
            className={`dark-shade cursor-pointer rounded-[15px] row-span-3 col-span-5 ${className}`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
        >
            <div className="flex size-full flex-col justify-between gap-1 p-[20px]">
                <div className="flex flex-row justify-between items-center">
                    <p className="text-[13px] leading-[120%] poppins-light max-w-[10ch]">Have some questions?</p>
                    {/* <small className="text-xl">🡥</small> */}
                    <span ref={(el) => (elementRef.current[0] = el)}><GoArrowUpRight className="text-2xl" /></span>
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