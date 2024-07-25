import React, {useState} from 'react';
import Button from './Button'

const ProfileCard = ({ user }) => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div className="profile_card">
            <div className="image-container">
            {isLoading && <div>Загрузка...</div>} 
            <img
            src={user.profile_img}
            alt={`${user.profile_fname}'s profile`}
            onLoad={() => setIsLoading(false)} 
            onError={(e) => { e.target.src = dimg; setIsLoading(false); }} 
            style={{ display: isLoading ? 'none' : 'block' }} 
            />
            </div>
            <p>First name:{user.profile_fname}</p>
            <p>Last name:{user.profile_lname}</p>
            <Button onClick="">Edit Profile</Button>
        </div>
    );
};

export default ProfileCard;
