import GridConatainer from "./components/GridContainer";
import Navbar from "./components/Navbar";
// import AccordionPage from "./sections/AccordianPage";

function App() {
    return (
        <div className="p-[15px] min-h-screen max-w-[1228px] my-0 mx-auto flex flex-col ">
            <Navbar/>
            <GridConatainer/>
        </div>
    )
}

export default App;