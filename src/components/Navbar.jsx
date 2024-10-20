import { CgMenu } from "react-icons/cg";
function Navbar() {
    return (
        <div className="w-full h-[80px] light-shade rounded-[15px] mb-[15px]">
            <nav
                className="flex size-full items-center justify-between poppins-light
                max-md:justify-center
            ">
                <h1 className="text-2xl max-w-[13ch] ml-[20px] max-md:ml-[0px] max-md:text-[23px]">
                    <i>Mriganka</i>
                    <strong className="poppins-medium mx-1.5 max-md:mr-[0px]">Paul</strong>
                </h1>

                <div
                    className="poppins-regular flex flex-row gap-[44px] mr-[20px]
                    max-md:hidden 
                ">
                    <button>Projects</button>
                    <button>About</button>
                    <button>Contact</button>
                </div>

                <button className="absolute right-8 hidden text-2xl max-md:block ">
                    <CgMenu />
                </button>
            </nav>

        </div>
    )
}

export default Navbar;