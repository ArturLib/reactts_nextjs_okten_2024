import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import {CarsComponent} from "../components/CarsComponent";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {PaginationComponent} from "../components/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const CarsPage = () => {

    const [query, setQuery] = useSearchParams();

    const [carsPaginatedObj, setCarsPaginatedObj] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    });

    useEffect(() => {
        carService.getAllCars(query.get('page') || '1').then(value => {
            if (value) {
                setCarsPaginatedObj(value)
            }
        });
    }, [query]);

    const changePage = (action: string) => {
        switch (action) {
            case 'prev':
                setQuery({...carsPaginatedObj.prev});
                break;
            case 'next':
                setQuery({...carsPaginatedObj.next});
                break;
        }
    };

    return (
        <div>
            <CarsComponent cars={carsPaginatedObj.items}/>
            <PaginationComponent changePage={changePage} prev={carsPaginatedObj.prev} next={carsPaginatedObj.next}/>
        </div>
    );
};

export {CarsPage}