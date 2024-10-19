function Social({ className }) {
    return (
        <div className={`light-shade rounded-[15px] row-span-1 col-span-5 ${className}`} >
            <div
                className="flex size-full items-center justify-evenly gap-2 text-[15px] poppins-regular
                max-lg:text-[1.3rem]
                max-md:text-[1rem]
            ">
                <div>GITHUB</div>
                <div>LINKEDIN</div>
                <div>TWITTER</div>
            </div>
        </div>
    );
}

export default Social;