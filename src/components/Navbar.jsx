function Navbar() {
    return (
        <div className="w-full h-[80px] light-shade rounded-[15px] mb-[15px]">
            {/* max-lg:gap-4 max-md:flex-col  */}
            <nav
                className="flex size-full items-center justify-between poppins-light
                max-md:justify-center
            ">
                <h1 className="text-2xl max-w-[13ch] ml-[20px] max-md:text-[22px]">
                    <i>Mriganka</i>
                    <strong className="poppins-medium mx-1.5">Paul</strong>
                </h1>

                <div
                    className="poppins-regular flex flex-row gap-[44px] mr-[20px]
                    max-md:hidden
                ">
                    <button>Projects</button>
                    <button>About</button>
                    <button>Contact</button>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;