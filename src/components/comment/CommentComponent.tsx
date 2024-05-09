import React, { FC } from 'react';
import ICommentModel from '../../models/ICommentModel';

const CommentComponent: FC<ICommentModel> = ({body, name, email, postId}) => {
    return (
        <div>
            <li>
                {body}
            </li>
            <p>{name}</p>
            <p>{email}</p>
            <hr/>
        </div>
    );
};

export {CommentComponent}