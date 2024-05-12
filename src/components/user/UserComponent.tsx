import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";

import styles from './UserComponent.module.css'

interface IProps {
    user: IUserModel;
}

type IPropsType = IProps & {children?: React.ReactNode} & {lift?: (userId: number) => void};

const UserComponent: FC<IPropsType> = ({user, lift}) => {
    const onClickHandler = () => {
        if (lift) {
            lift(user.id)
        }
    };

    return (
        <div className={styles.user_style}>
            <h2>Name - {user.name}</h2>
            <h2>User name - {user.username}</h2>
            <p>EMAIL: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <div className={styles.address_style}>
                <h3>ADDRESS:</h3>
                <p>City {user.address.city}</p>
                <p>Street: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
                <p>{user.address.zipcode}</p>
            </div>
            <div>
                <h3>COMPANY</h3>
                <p>Company name: {user.company.name}</p>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
            </div>
            <button className={styles.button_style} onClick={onClickHandler}>show user posts</button>
        </div>
    );
};

export {UserComponent}