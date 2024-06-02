import React, {FC} from 'react';
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";
import {CarComponent} from "./CarComponent";

interface IProps {
    cars: ICarWithAuthModel[]
}

const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map(car => (
                    <CarComponent key={car.id}
                                  id={car.id}
                                  brand={car.brand}
                                  price={car.price}
                                  year={car.year}
                                  photo={car.photo}/>))
            }
        </div>
    );
};

export {CarsComponent}