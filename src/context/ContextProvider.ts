import {createContext, useContext} from "react";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {create} from "zustand";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        loadUsers: (users: IUserModel[]) => void,
        favoriteUser: IUserModel | null,
        setFavoriteUser: (obj: IUserModel) => void
    },
    postStore: {
        allPosts: IPostModel[];
    }
};

export const useStore = create<StoreType>()((set) => {
    return {
        userStore: {
            allUsers: [],
            loadUsers: (users: IUserModel[]) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        userStore: {
                            ...state.userStore,
                            allUsers: users
                        }
                    }
                })
            },
            favoriteUser: null,
            setFavoriteUser: (user: IUserModel) => {
                return set(state => {
                    return {
                        ...state,
                        userStore: {
                            ...state.userStore,
                            favoriteUser: user
                        }
                    }
                })
            }
        },
        postStore: {
            allPosts: []
        }
    }
})

