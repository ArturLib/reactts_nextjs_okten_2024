import React, { FC, useEffect, useState } from 'react';
import { PostComponent } from '../post/PostComponent';
import PostModel from '../../models/IPostModel';
import { getAllPosts } from '../../services/jsonplaceholder.api.service';

type IPostsType = {lift?: (postId: number) => void};

const PostsComponent: FC<IPostsType> = ({lift}) => {

    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        getAllPosts().then(({data}) => setPosts(data));
    }, []);

    return (
        <div>
            {
                posts.map((post) => (<PostComponent key={post.id} post={post} lift={lift}/>))
            }
        </div>
    );
};

export {PostsComponent}