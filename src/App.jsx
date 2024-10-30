import { useEffect, useState } from "react";
import GridConatainer from "./components/GridContainer";
import Navbar from "./components/Navbar";
// import AccordionPage from "./sections/AccordianPage";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Event handler for beforeunload
        const handleBeforeUnload = () => {
            setLoading(true); // Set loading state when the user tries to leave
        };

        // Event handler for load
        const handleLoad = () => {
            setLoading(false); // Set loading state to false when the page is fully loaded
        };

        // Add event listeners
        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('load', handleLoad);

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (<>
        {loading ? (
            <div>Loading</div>
        ) : (
            <div className="p-[15px] min-h-screen max-w-[1228px] my-0 mx-auto flex flex-col ">
                <Navbar />
                <GridConatainer />
            </div>
        )}

    </>
    )
}

export default App;