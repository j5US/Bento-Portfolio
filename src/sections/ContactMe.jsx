import { MdOutlineMailOutline } from "react-icons/md";
function ContactMe() {

    return <div className="light-shade rounded-[15px] p-[30px] poppins-regular flex flex-col max-md:h-[250px]">
        <div className="w-full my-auto flex flex-col gap-[20px] max-lg:gap-[30px]">
            <h3 className="text-2xl">Have a project in mind?</h3>
            <button className="dark-shade text-xl flex justify-center items-center rounded-[15px] p-[20px]">
                Contact Me &nbsp; <MdOutlineMailOutline className="text-2xl"/>
            </button>
        </div>
    </div>
}

export default ContactMe;