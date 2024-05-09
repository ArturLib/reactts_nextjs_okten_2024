import React, { FC } from 'react';
import style from './UsersComponent.module.css'

let users = [
    {name: 'Vasya', age: 31, status: false},
    {name: 'Petya', age: 30, status: true},
    {name: 'Kolya', age: 29, status: true},
    {name: 'Olya', age: 28, status: false},
    {name: 'Max', age: 30, status: true},
    {name: 'Anya', age: 31, status: false},
    {name: 'Oleg', age: 28, status: false},
    {name: 'Andrey', age: 29, status: true},
    {name: 'Masha', age: 30, status: true},
    {name: 'Olya', age: 31, status: false},
    {name: 'Max', age: 31, status: true},
]

const UsersComponent:FC<any> = ({liftProp}) => {

    console.log(liftProp);

    return (
        <div className={style.users}>
            {
                users.map((user, index) =>
                    (<div
                        key={index}>{user.name}, age - {user.age}
                        <button onClick={() => {
                            liftProp({user})
                        }}>info</button>
                    </div>))
            }
        </div>
    );
};

export {UsersComponent}