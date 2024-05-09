import React, { FC } from 'react';
import { CommentComponent } from '../comment/CommentComponent'
import ICommentModel from '../../models/ICommentModel';

interface IProps {
    comments: ICommentModel[];
}

const CommentsComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map((comment, index) => (
                    <CommentComponent key={index} body={comment.body} postId={comment.postId} name={comment.name}
                                      email={comment.email}/>)
                )
            }
        </div>
    );
};

export {CommentsComponent}