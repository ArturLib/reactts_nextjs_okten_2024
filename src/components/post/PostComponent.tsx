import React, { FC } from 'react';
import PostModel from '../../models/IPostModel';

interface IProps {
    post: PostModel;
};

type IPropsType = IProps & {children?: React.ReactNode} & {lift?: (postId: number) => void};

const PostComponent: FC<IPropsType> = ({post, lift}) => {

    const onClickHandler = () => {
        if (lift) {
            lift(post.id)
        }
    };

    return (
        <div>
            <h2>
                {post.id} - {post.title}
            </h2>
            <h3>
                {post.body}
            </h3>
            <div>
                <button onClick={onClickHandler}>show comments to post</button>
            </div>
            <hr/>
        </div>
    );
};

export {PostComponent}