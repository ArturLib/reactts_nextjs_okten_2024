import React, {FC} from 'react';
import {PostComponent} from "../post/PostComponent";
import {IPostModel} from "../../models/IPostModel";

interface IProps {
    posts: IPostModel[];
}

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post) => <PostComponent key={post.id} body={post.body} title={post.title} id={post.id}/>)
            }
        </div>
    );
};

export {PostsComponent}