import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
import AboutMe from "../sections/AboutMe";
import Experience from "../sections/Experience";
import ContactMe from "../sections/ContactMe";
import LocationMe from "../sections/LocationMe";
import { Link } from "react-router-dom";
import Skills from "../sections/Skills";
import Tools from "../sections/Tools";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function AboutPage({ setRoute }) {
    useEffect(() => {
        setRoute();
    });

    useGSAP(() => {
        const tl = gsap.timeline();

        tl
            .fromTo(".about-holder, .close-btn", {
                y: 25,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.2
            })
    }, [])

    return (
        <>
            <div className=" p-[15px] min-h-screen max-w-[1228px] my-0 mx-auto flex flex-col ">
                <button className="close-btn mt-[50px] hover:bg-[#2d2d2b] poppins-regular my-0 mx-auto border-2 border-[#4c4c44] h-[50px] w-[50px] flex justify-center items-center rounded-[50%]" >
                    <Link to="/" className=" size-full flex">
                        <IoMdClose className="my-auto mx-auto text-xl text-[#d4c7b4]" />
                    </Link>
                </button>

                <div className="about-holder pt-[100px] pb-[40px] max-md:pb-[0px] w-[92%] my-0 mx-auto 
                grid grid-cols-2 gap-[15px] max-md:grid-cols-1 max-md:grid-rows-auto max-xs:w-full
                ">
                    <div className="grid grid-cols-1 grid-rows-auto gap-[15px]">
                        <AboutMe />
                        <Experience />
                    </div>

                    <div className="grid grid-cols-1 grid-rows-[auto,auto,1fr] gap-[15px]">
                        <Skills />
                        <Tools />

                        <div className="grid grid-cols-2 gap-[15px] max-lgr:grid-cols-1 max-lgr:grid-rows-auto ">
                            <LocationMe />
                            <ContactMe />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default AboutPage;