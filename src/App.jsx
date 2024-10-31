import { useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";

import GridConatainer from "./components/GridContainer";
import Navbar from "./components/Navbar";
// import AccordionPage from "./sections/AccordianPage";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for a brief moment to ensure everything is set up
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2500); // Adjust time as needed

        // Cleanup timeout
        return () => clearTimeout(timeout);
    }, []);



    return (<>
        {loading ? <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FallingLines
                color="#d4c7b4"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
            /></div> :
            <div className="p-[15px] min-h-screen max-w-[1228px] my-0 mx-auto flex flex-col ">
                <Navbar />
                <GridConatainer />
            </div>}
    </>)
}

export default App;