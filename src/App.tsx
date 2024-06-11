import './App.css';

import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {HeaderComponent} from "./components/HeaderComponent";
import {useStore} from "./context/ContextProvider";
import {userService} from "./services/api.service";

const App = () => {

    const {userStore, userStore: {favoriteUser}} = useStore();

    useEffect(() => {
        userService.getUsers().then(value => userStore.loadUsers(value.data))
    }, []);

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <hr/>
            {favoriteUser && <div>{favoriteUser.email}</div>}
            <hr/>

        </div>
    );
};

export default App;
