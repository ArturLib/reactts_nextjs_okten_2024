import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'users'}>Users page</Link></li>
                <li><Link to={'posts'}>Posts page</Link></li>
                <li><Link to={'userPosts'}>User with posts page</Link></li>
            </ul>
        </div>
    );
};

export {HeaderComponent}