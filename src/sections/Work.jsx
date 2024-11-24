import PropTypes from 'prop-types';
import AccordionPage from "../pages/AccordianPage";

function Work({className}) {
    return (
        <div className={`light-shade rounded-[15px] overflow-y-auto row-span-6 col-span-5 ${className}`} >
            <div className="p-[20px] size-full overflow-y-auto max-lg:h-auto flex flex-col">
                <AccordionPage/>
            </div>
        </div>
    );
}

Work.propTypes = {
    className: PropTypes.string,
};

export default Work;