import React from 'react';
import styleCss from './Profile.module.scss';

interface User {
    name: string,
    photo: string,
    bio: string,
    phone: [],
    email: string,
    whatsapp: string,
    telegram: string
}

function Profile(props: { user: any; }) {
    let user = props.user

    return (
        <div className={styleCss.profile}>
            <img src={user.photo} alt={user.name} />
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
        </div>
    );
}

export default Profile;