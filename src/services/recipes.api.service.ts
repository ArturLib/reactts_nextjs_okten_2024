import axios, { AxiosResponse } from "axios";
import { IRecipeProps } from "../models/Recipe";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

const getAllRecipes = ():Promise<AxiosResponse<IRecipeProps[]>> => {
    return axiosInstance.get('/recipes')
};

export {
    getAllRecipes
};