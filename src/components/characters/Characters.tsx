import React from 'react';
import {Character} from "../character/Character";

const Characters = () => {
    return (
        <div>
            <Character
                name={'Bartholomew JoJo «Bart» Simpson'}
                img={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, nam.
            </Character>
            <Character
                name={'Homer Jay Simpson'}
                img={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}
            />
            <Character
                name={'Marjorie "Marge" Simpson'}
                img={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}
            />
        </div>
    );
};

export {Characters}