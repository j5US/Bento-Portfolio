import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import useYoyoEffect from "../hooks/useYoyoEffect";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const { elementRef, handleMouseEnter, handleMouseLeave } = useYoyoEffect();

    const handleClick = (nxtindex) => {
        setExpandedIndex(() => nxtindex);
    };

    const renderedItems = items.map((item, index, arr) => {
        const isExpanded = index === expandedIndex;

        return (
            <div key={item.id}>
                <div
                    className={`overflow-hidden poppins-regular text-[1.25rem] flex justify-between items-center
                    max-md:text-xl max-lg:text-[1.5rem] ${isExpanded ? "" : "cursor-pointer"} mb-[15px]`}
                    onClick={() => handleClick(index)}>

                    <p className="work-title">{item.label}</p>

                    <span ref={(el) => (elementRef.current[index] = el)}>
                        {<GoArrowUpRight className={`text-2xl ${isExpanded ? "block" : "hidden"}`} />}
                    </span>

                </div>

                {isExpanded &&
                    <div className="work-img dark-shade mb-[15px] aspect-video max-w-full rounded-[15px] cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}>
                    </div>}

                <hr className={`max-w-full w-[100%] border border-[#4c4c44b0] mb-[20px] ${(index === arr.length - 1) ? "hidden" : "block"}`} />
            </div>
        );
    });
    // max-lg:overflow-y-visible max-lg:max-h-auto max-h-[calc(100vh-260px)]
    return (
        <div className="h-[calc(100vh-260px)] min-h-[400px] max-lg:h-auto overflow-y-auto scrollbar-hide">
            {renderedItems}
        </div>)
}

export default Accordion;