import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function useLoader (){
    const box = useRef(null);
    const animatedBox = useRef(null);

    useGSAP(() => {
        const rect = box.current.getBoundingClientRect();
        const tl = gsap.timeline();


        tl
            .to(".loader", { opacity: 1 })
            .to(".loader", { width: "2%", duration: 0.2, ease: "power4.out", }, ">")
            .to(".loader", {
                width: "100%", duration: 1, ease: "power4.inOut",

                onComplete: () => {
                    gsap.to(".loader", { opacity: 0, display: "none", ease: "power3.inOut", })
                }
            }, ">")
            .to(animatedBox.current, {
                height: rect.height + "px",
                width: rect.width + "px",
                duration: 0.4, // Duration for resizing
                ease: "power1.inOut",
                onComplete: () => {
                    const animatedRect = animatedBox.current.getBoundingClientRect();

                    const scrollX = window.scrollX;
                    const scrollY = window.scrollY;

                    // Once resizing is done, animate the position
                    gsap.to(animatedBox.current, {
                        x: rect.left - animatedRect.left + scrollX,
                        y: rect.top - animatedRect.top + scrollY,
                        duration: 0.3, // Duration for moving
                        ease: "power1.inOut",
                    });
                    gsap.to(box.current, {
                        delay: 0.2,
                        opacity: 1,
                        ease: "power1.inOut",
                    });
                },
            }, ">")
            // .to(box.current, { opacity: 1}, ">+0.3")
            // .to(animatedBox.current)
            .to(".container", { opacity: 1 }, "<-0.2")
            .from(".header", { scale: 0, duration: 0.5, transformOrigin: "bottom", ease: "power4.inOut" }, ">+0.1")
            .from(".intro", { x: 100, y: 50, scale: 0, transformOrigin: "right", duration: 0.5, ease: "power2.inOut" }, "<")
            .from(".work", { x: -100, y: 30, scale: 0, transformOrigin: "left", duration: 0.5, ease: "power2.inOut" }, "<")
            .from(".about", { x: 70, y: -50, scale: 0, transformOrigin: "top right", duration: 0.4, ease: "power2.inOut" }, "<+0.1")
            .from(".contact", { x: 30, y: -50, scale: 0, transformOrigin: "top ", duration: 0.4, ease: "power2.inOut" }, "<")
            .from(".social", { x: -100, y: -100, scale: 0, transformOrigin: "left top", duration: 0.4, ease: "power2.inOut" }, "<")
            .to(animatedBox.current, { 
                opacity: 0, display: "none", ease: "power3.inOut" ,
                onComplete: () => {
                    gsap.to(document.body,{
                        overflowY: "auto",
                        delay: 1,
                    } );
                }
            }, ">")
            .from(".logo, .contact p", { x: -10, opacity: 0 }, "<-0.05")
            .from(".nav-links, .contact span, .work span", { x: 10, opacity: 0 }, "<")
            .from(".intro h1, .contact h2", { opacity: 0, y: 10, delay: 0.05, ease: "power3.inOut" }, "<")
            .from(".intro img", { opacity: 0, rotation: 180, delay: 0.1, duration: 0.9 }, "<")
            .from(".about p", { opacity: 0, y: 10, delay: 0.05, ease: "power3.inOut" }, "<+0.03")
            .from(".about img", { opacity: 0, rotation: -180, delay: 0.1, duration: 0.9 }, "<")
            .from(".work .work-img", { opacity: 0, ease: "power2.out" }, "<-0.1")
            .fromTo(".work hr", { width: 0 }, { width: "100%", stagger: 0.1 }, "<")
            .fromTo(".social .link, .work .work-title",
                { y: 10, display: "block", opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, ease: "power4.inOut" }, "<-0.1")
    }, []);

    const loader = <>
        <div className="loader absolute top-0 h-[3px] w-[0%] light-shade opacity-0"/>
            <div ref={animatedBox}
                className="light-shade preloader profile-image absolute-center z-30 aspect[400/450] h-[33vw]  w-[25vw]
                2xl:h-[500px] 2xl:w-[400px]
                max-2xl:h-[33vw]  max-2xl:w-[25vw]
                max-md:h-[30vh] max-md:w-[50vw]"
            />
    </>

    return {
        box,
        loader
    }
}

export default useLoader;