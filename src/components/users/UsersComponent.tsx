import React, {FC, useEffect, useState} from 'react';
import {UserComponent} from "../user/UserComponent";
import {IUserModel} from "../../models/IUserModel";
import {getAllUsers} from "../../services/jsonplaceholder.api.service";

type IUsersType = {lift?: (userId: number) => void};
const UsersComponent: FC<IUsersType> = ({lift}) => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data));
    }, []);

    return (
        <div>
            {
                users.map((user) => <UserComponent key={user.id} user={user} lift={lift}/>)
            }
        </div>
    );
};

export {UsersComponent}