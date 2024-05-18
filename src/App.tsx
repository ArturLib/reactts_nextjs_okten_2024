import './App.css';

import React from 'react';
import {useFetch} from "./custom-hooks/useFetch";
import {UserModel} from "./models/UserModel";

const App = () => {

    const users = useFetch<UserModel[]>('/users', []);
    const posts = useFetch<{id:number, title: string, body: string}[]>('/posts', []);

    return (
        <div>
            <div>
                {users.map((item, index) => (<div key={index}>{item.id} - {item.username}</div>))}
            </div>

            <div>
                {posts.map((item, index) => (
                    <div key={index}>{item.id} - {item.title} {item.body}</div>
                ))}
            </div>
        </div>
    );
};

export default App;
