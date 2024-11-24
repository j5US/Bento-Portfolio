import Navbar from "../sections/Navbar";
import Intro from "../sections/Intro";
import ProfileImage from "../sections/ProfileImage";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Work from "../sections/Work";
import Social from "../sections/Socials";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function HomePage({ setRoute }) {

    useGSAP(() => {
        const tl = gsap.timeline();

        tl
        .fromTo(".section-holder, .header", {
            y: 20,
            opacity: 0
        },{
            y:0,
            opacity: 1,
        })
    }, [])

    return (
        <div className="home-container opacity-1 max-md:overflow-x-hidden p-[15px] min-h-screen max-w-[1228px] my-0 mx-auto flex flex-col ">
            <Navbar setRoute={setRoute} />

            <div className="section-holder flex-grow grid grid-cols-15 grid-rows-7 gap-[15px] 
            max-lg:grid-cols-10 max-lg:grid-rows-none max-lg:h-auto
            max-md:grid-cols-6 max-md:grid-rows-none max-md:h-auto
            ">
                <Intro className="max-lg:col-span-6 max-lg:min-h-auto max-md:col-span-full" />
                <ProfileImage ref={null} visiblity="opacity-1" className="max-lg:col-span-4 max-lg:min-h-[400px] max-md:col-span-full" />

                <About className="about  hidden max-lg:block max-lg:col-span-5 max-lg:h-auto max-md:h-auto max-md:col-span-full" />
                <Contact className="contact z-10 hidden max-lg:block max-md:hidden max-lg:col-span-5 max-lg:h-auto" />

                <Work className="work max-lg:col-span-full max-lg:min-h-[500px] max-md:col-span-full " />

                <About className="about max-lg:hidden block" />
                <Contact className="contact z-10 max-lg:hidden block max-md:block max-md:h-[300px] max-md:col-span-full" />


                <Social className="social z-[-1] max-lg:col-span-full max-lg:h-[60px]" />

            </div>
        </div>
    );
}

export default HomePage;