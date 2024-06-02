import React, {FC} from 'react';
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

const CarComponent: FC<ICarWithAuthModel> = ({id, brand, price, year}) => {
    return (
        <div>
            <div>ID- {id}</div>
            <div>BRAND: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <hr/>
        </div>
    );
};

export {CarComponent}