import { Fragment } from 'react';
function Experience() {
    const items = [
        {
            position: "MCA at Chandigarh University",
            duration: "Current"
        },
        {
            position: "BCA at Univeristy of Engineering and Management, Kolkata",
            duration: "2019 - 2022"
        },
        {
            position: "Higher Secondary at Delhi Public School, Siliguri",
            duration: "2017 - 2019"
        },
    ];

    const renderedItems = items.map((item, index) => {
        return (
            <Fragment key={index + 1}>
                <li className="flex flex-row justify-between items-center text-[1.1rem]
                 max-lgr:flex-col max-lgr:items-start "
                    >

                    <p className="w-[65%] max-lgr:w-[90%]">{item.position}</p>
                    <time className="max-lgr:text-[#958e83]">{item.duration}</time>
                </li>
                {(index != 2) && <hr className="border border-[#62605c98] w-full" />}
            </Fragment>
        );
    });
    return (
        // <div className="dark-shade rounded-[15px] min-h-[270px] p-[30px] poppins-regular flex flex-col gap-[15px]">
        <div className="dark-shade rounded-[15px] h-auto p-[30px] poppins-regular flex flex-col gap-[15px]">
            <h3 className="poppins-regular text-[1.1rem] tracking-[3px] text-[#958e83]">EDUCATION</h3>
            <ol className="flex flex-col gap-[7px] max-lgr:gap-[15px]">
                {renderedItems}
            </ol>
        </div>
    )
}

export default Experience;