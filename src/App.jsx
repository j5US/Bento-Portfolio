import { useEffect, useState } from "react";
import GridConatainer from "./components/GridContainer";
import Navbar from "./components/Navbar";
// import AccordionPage from "./sections/AccordianPage";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for a brief moment to ensure everything is set up
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust time as needed

        // Cleanup timeout
        return () => clearTimeout(timeout);
    }, []);



    return (<>
        {loading ? <div>loading...</div> :
            <div className="p-[15px] min-h-screen max-w-[1228px] my-0 mx-auto flex flex-col ">
                <Navbar />
                <GridConatainer />
            </div>}
    </>)
}

export default App;