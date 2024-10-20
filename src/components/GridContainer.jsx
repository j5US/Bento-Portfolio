import About from "../sections/About";
import Contact from "../sections/Contact";
import Intro from "../sections/Intro";
import ProfileImage from "../sections/ProfileImage";
import Social from "../sections/Socials";
import Work from "../sections/Work";
function GridConatainer() {
    return (
        <div
            // className="min-h-[612.6px] grid grid-cols-15 grid-rows-7 gap-[15px] 
            className="flex-grow grid grid-cols-15 grid-rows-7 gap-[15px] 
            max-lg:grid-cols-10 max-lg:grid-rows-none max-lg:h-auto
            max-md:grid-cols-6 max-md:grid-rows-none max-md:h-auto

        ">
            {/* <div className="light-shade rounded-[15px] row-span-4 col-span-6 max-lg:col-span-6 max-lg:min-h-[350px] max-md:col-span-full">Content 1</div> */}
            {/* <div className="dark-shade rounded-[15px] row-span-4 col-span-4 max-lg:col-span-4 max-lg:min-h-[350px] max-md:col-span-full">Content 2</div> */}
            {/* <div className="hidden max-lg:block light-shade rounded-[15px] row-span-3 col-span-5 max-lg:col-span-5 max-lg:h-[350px] max-md:col-span-full">Content 4</div> */}
            {/* <div className="hidden max-lg:block max-md:hidden dark-shade rounded-[15px] row-span-3 col-span-5 max-lg:col-span-5 max-lg:h-[350px] max-md:col-span-full">Content 5</div> */}
            {/* <div className="light-shade rounded-[15px] row-span-6 col-span-5 max-lg:col-span-full max-lg:min-h-[600px] max-md:col-span-full">Content 3</div> */}
            {/* <div className="max-lg:hidden block light-shade rounded-[15px] row-span-3 col-span-5 max-lg:col-span-5 max-lg:h-[350px] max-md:col-span-full">Content 4</div> */}
            {/* <div className="max-lg:hidden block max-md:block dark-shade rounded-[15px] row-span-3 col-span-5 max-lg:col-span-5 max-lg:h-[350px] max-md:col-span-full">Content 5</div> */}
            {/* <div className="light-shade rounded-[15px] row-span-1 col-span-5 max-lg:col-span-full max-lg:h-[80px]">Content 6</div> */}

            <Intro className="max-lg:col-span-6 max-lg:min-h-auto max-md:col-span-full"/>
            <ProfileImage className="max-lg:col-span-4 max-lg:min-h-[400px] max-md:col-span-full"/>

            <About className="hidden max-lg:block max-lg:col-span-5 max-lg:h-[350px] max-lg:h-auto max-md:col-span-full"/>
            <Contact className="hidden max-lg:block max-md:hidden max-lg:col-span-5 max-lg:h-[350px]"/>
            
            <Work className="max-lg:col-span-full max-lg:min-h-[500px] max-md:col-span-full "/>

            <About className="max-lg:hidden block"/>
            <Contact className="max-lg:hidden block max-md:block max-md:h-[300px] max-md:col-span-full"/>
            

            <Social className="max-lg:col-span-full max-lg:h-[60px]"/>
        </div>
    );
}

export default GridConatainer;