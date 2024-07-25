import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard'

const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://def6768784d8e5a0.mokky.dev/users/1')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="users-container">
        <ProfileCard user={user} />
    </div>
  );
};

export default Profile;