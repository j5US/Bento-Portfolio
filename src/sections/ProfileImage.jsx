// import profile from "../images/profile2.jpg"
function ProfileImage({className}) {
    return (
        <div className={`overflow-hidden dark-shade rounded-[15px] row-span-4 col-span-4 ${className}`} >
            <div className="profile-image size-full max-lg:aspect-[3/4] max-md:aspect-[4/5]"></div>
        </div>
    );
}

export default ProfileImage;