function Social({ className }) {
    return (
        <div className={`light-shade rounded-[15px] row-span-1 col-span-5 ${className}`} >
            <div
                className="flex size-full items-center justify-evenly gap-2 text-[16px] poppins-regular
                max-lg:text-[1.3rem]
                max-md:text-[1rem]
            ">
                <div className="link">Github</div>
                <div className="link">LinkedIn</div>
                <div className="link">Twitter</div>
            </div>
        </div>
    );
}

export default Social;