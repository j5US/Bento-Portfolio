import { useEffect, useState } from "react";
import GridConatainer from "./components/GridContainer";
import Navbar from "./components/Navbar";
// import AccordionPage from "./sections/AccordianPage";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Event handler for load
        const handleLoad = () => {
            setTimeout(() => {
                setLoading(false);
              }, 2000);
        };

        // Add event listener for load
        window.addEventListener('load', handleLoad);

        // Cleanup function to remove event listener
        return () => {
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