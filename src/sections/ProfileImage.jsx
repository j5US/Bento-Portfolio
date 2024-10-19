// import profile from "../images/profile2.jpg"
function ProfileImage({className}) {
    return (
        <div className={`flex overflow-hidden dark-shade rounded-[15px] row-span-4 col-span-4 ${className}`} >
            <div className="profile-image size-full"></div>
        </div>
    );
}

export default ProfileImage;