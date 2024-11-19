import { Dot } from 'lucide-react'
import React from 'react'

const SellerProfile = ({ property, ownerData }) => {
    const createdOn = property?.createdAt;

    // Function to calculate time difference
    const timeElapsed = (date) => {
        const now = new Date();
        const createdDate = new Date(date);
        const diff = now - createdDate; // Difference in milliseconds

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
        if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
        if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    };

    return (
        <div className='flex gap-5 items-center'>
            <img
                className='w-10 h-10 rounded-full'
                src='https://media.licdn.com/dms/image/v2/D5603AQEvhR-oclWlDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725570376005?e=1736380800&v=beta&t=8AvIwEEfanwKjsvLwfbM7bSN55COnJaSmpyDrPOw0tQ'
                alt='Seller profile'
            />
            <div className='flex flex-col gap-[3px]'>
                <div className='text-sm font-semibold'>
                    Listed by {ownerData?.firstName} {ownerData?.lastName}
                </div>
                <div className='flex text-xs text-[#6A6A6A] items-center'>
                    <div>{property?.listedBy}</div>
                    <Dot size={14} />
                    <div>{timeElapsed(createdOn)}</div>
                </div>
            </div>
        </div>
    );
};

export default SellerProfile;
