import axios, { AxiosResponse } from "axios";
import PostModel from "../models/IPostModel";
import ICommentModel from "../models/ICommentModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const getAllPosts = () : Promise<AxiosResponse<PostModel[]>> => {
    return axiosInstance.get('/posts')
};

const getAllCommentsOfSinglePost = (id: number): Promise<AxiosResponse<ICommentModel[]>> => {
    return axiosInstance.get('/comments/?postId=' + id)
};

export {getAllPosts, getAllCommentsOfSinglePost};