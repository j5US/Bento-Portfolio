import Accordion from "../components/Accordian";

function AccordionPage() {
    const items = [
        {
            id:1,
            label: "Musica",
            content: "This is content 1"
        },
        {
            id:2,
            label: "Forkify",
            content: "This is content 2"
        },
        {
            id:3,
            label: "Natours",
            content: "This is content 3"
        },
        {
            id:4,
            label: "The Space Game",
            content: "This is content 3"
        },
        {
            id:5,
            label: "Reviews Insight",
            content: "This is content 3"
        }
    ];
    return <Accordion items={items}/>
}

export default AccordionPage;