import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar({setRoute}) {
    const [isToggled, setIsToggled] = useState(false);

    const toggleButton = () => {
        setIsToggled(prevState => !prevState);
    };

    return (
        <div className="w-full h-[80px]  rounded-[15px] mb-[15px]">
            <nav
                className="header light-shade rounded-[15px] relative flex size-full items-center justify-between poppins-light
                max-md:justify-center
            ">
                <h1 className={`logo text-2xl max-w-[13ch] ml-[20px] 
                    max-md:ml-[0px] max-md:text-[23px] ${isToggled ? "block max-md:hidden": ""}`}
                >
                    <i>Mriganka</i>
                    <strong className="poppins-medium mx-1.5 max-md:mr-[0px]">Paul</strong>
                </h1>

                <div
                    className={`nav-links poppins-regular flex flex-row gap-[3rem] mr-[20px]
                    ${isToggled ? "max-md:flex max-md:gap-[1.4rem] max-md:justify-between max-md:mr-[0px]": "max-md:hidden"}
                `}>
                    {/* <button className="max-md:mr-[5px]">Projects</button>
                    <button className="max-md:mr-[5px]">About</button> */}
                    <button >Projects</button>
                    <button >
                    <Link to="/about" onClick={setRoute}>About</Link>
                    </button>
                    <button>Contact</button>
                </div>

                <button
                    className="absolute right-4 hidden text-2xl max-md:block "
                    onClick={toggleButton}
                >
                    {isToggled ? <IoMdClose/>  : <CgMenu />}
                    
                </button>
            </nav>

        </div>
    )
}

export default Navbar;