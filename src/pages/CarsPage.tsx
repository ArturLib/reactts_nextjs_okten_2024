import React, {useEffect, useState} from 'react';
import {authService, carService} from "../services/api.service";
import {CarsComponent} from "../components/CarsComponent";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {PaginationComponent} from "../components/PaginationComponent";
import {useNavigate, useSearchParams} from "react-router-dom";
import {AxiosError} from "axios";

const CarsPage = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useSearchParams();
    const [carsPaginatedObj, setCarsPaginatedObj] =
        useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    });

    useEffect(() => {
        const getCarsData = async () => {
            try {
                const response = await carService.getAllCars(query.get('page') || '1');
                if (response) {
                    setCarsPaginatedObj(response);
                }
            } catch (e) {
                const axiosError = e as AxiosError;
                if (axiosError && axiosError?.response?.status === 401) {
                    try {
                        await authService.refresh();
                    } catch (e) {
                        return navigate('/')
                    }
                    const response = await carService.getAllCars(query.get('page') || '1');
                    if (response) {
                        setCarsPaginatedObj(response
                        )
                    }
                }
            }
        }
        getCarsData();
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