import React from 'react';
import { useSelector } from "react-redux";

import "./style.css";

export const Profile = () => {
    const { profile } = useSelector((state) => state.profile);
    
    const profileName = !!profile && !!profile.name && profile.name.length > 0 ? profile.name : 'Імя не вказано!';
    const profileLastName = !!profile && !!profile.lastName && profile.lastName.length > 0 ? profile.lastName : 'Фамілія не вказана!'; 

    return (
        <div className="profile">
            {!!profile ? (
                <div>
                    <h3>{profileName} {profileLastName}</h3>
                </div>
            ) : <h1>Даних немає</h1>}
        </div>
    )
}