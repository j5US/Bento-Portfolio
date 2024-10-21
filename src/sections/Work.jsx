import AccordionPage from "./AccordianPage";

function Work({className}) {
    return (
        <div className={`light-shade rounded-[15px] overflow-y-auto row-span-6 col-span-5 ${className}`} >
            <div className="p-[20px] size-full overflow-y-auto max-lg:h-auto">
                <AccordionPage/>
            </div>
        </div>
    );
}

export default Work;