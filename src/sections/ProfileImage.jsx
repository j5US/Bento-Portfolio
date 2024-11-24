import React from "react";

const ProfileImage = React.forwardRef(({ className,visiblity  }, ref) => {
    return (
        <div className={`overflow-hidden rounded-[15px] row-span-4 col-span-4 ${className}`}>
            <div ref={ref} className={`${visiblity} postloader light-shade profile-image size-full max-lg:aspect-[3/4] max-md:aspect-[4/5]`} />
        </div>
    );
});

// function ProfileImage({className}) {
//     return (
//         <div className={`overflow-hidden rounded-[15px] row-span-4 col-span-4 ${className}`}>
//             <div className="postloader light-shade opacity-1 profile-image size-full max-lg:aspect-[3/4] max-md:aspect-[4/5]" />
//         </div>
//     );
// }

ProfileImage.displayName = 'ProfileImage';

export default ProfileImage;