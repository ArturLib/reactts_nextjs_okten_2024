import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const getAllUsers = (): Promise<AxiosResponse<IUserModel[]>> => {
    return axiosInstance.get('/users')
};

const getAllPostsOfCurrentUser = (id: number): Promise<AxiosResponse<IPostModel[]>> => {
    return axiosInstance.get(`/users/${id}/posts`)
};

export {
    getAllUsers,
    getAllPostsOfCurrentUser
}