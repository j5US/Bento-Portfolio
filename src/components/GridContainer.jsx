function GridConatainer() {
    return (
        // <div className="h-[612.6px] grid grid-cols-15 grid-rows-7 gap-[15px] max-lg:grid-cols-10">
        <div className="min-h-[612.6px] grid grid-cols-15 grid-rows-7 gap-[15px] max-lg:grid-cols-10 max-lg:h-auto">
            <div className=" light-shade rounded-[15px] row-span-4 col-span-6 max-lg:col-span-6 max-lg:300px"> </div>
            <div className=" dark-shade rounded-[15px] row-span-4 col-span-4 max-lg:col-span-4"> </div>
            <div className=" light-shade rounded-[15px] row-span-6 col-span-5 max-lg:col-span-full"> </div>

            <div className=" light-shade rounded-[15px] row-span-3 col-span-5 max-lg:col-span-5 max-lg:row-span-3"> </div>
            <div className=" dark-shade rounded-[15px] row-span-3 col-span-5 max-lg:col-span-5 max-lg:row-span-3"> </div>
            <div className=" light-shade rounded-[15px] row-span-1 col-span-5 max-lg:col-span-5"> </div>
        </div>
    );
}

export default GridConatainer;