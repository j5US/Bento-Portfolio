import { useState, useEffect } from "react";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    useEffect(() => {
        // Set state to true when the component mounts
        setExpandedIndex(0);
    }, []);

    const handleClick = (nxtindex) => {
        setExpandedIndex((currentIndex) => {
            if (currentIndex === nxtindex) {
                return -1;
            } else {
                return nxtindex;
            }
        })
    };

    const renderedItems = items.map((item, index, arr) => {
        const isExpanded = index === expandedIndex;
        // const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>

        return (
            <div key={item.id}>
                <div className={`max-lg:text-[1.5rem] poppins-regular text-[1.3rem] flex justify-between items-center cursor-pointer mb-[15px]`} onClick={() => handleClick(index)}>
                    {item.label}
                    {<small className={`text-xl ${isExpanded ? "block" : "hidden" }`}>🡥</small>}
                </div>
                {isExpanded && <div className="dark-shade mb-[15px] aspect-video max-w-full rounded-[15px] "></div>}
                <hr className={`max-w-full border border-[#4c4c44b0] mb-[20px] ${(index === arr.length-1) ? "hidden": "block"}`}/>
            </div>
        );
    });
    return <div>{renderedItems}</div>
}

export default Accordion;