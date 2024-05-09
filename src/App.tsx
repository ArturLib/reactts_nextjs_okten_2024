import './App.css';

import React, { useState } from 'react';
import { PostsComponent } from './components/posts/PostsComponent';
import { CommentsComponent } from './components/comments/CommentsComponent';
import { getAllCommentsOfSinglePost } from './services/jsonplaceholder.api.service';
import ICommentModel from './models/ICommentModel';

const App = () => {

    const [comments, setComments] = useState<ICommentModel[]>([])

    const lift = (postId: number) => {
        getAllCommentsOfSinglePost(postId).then(({data}) => {
            setComments(data);
        })
    };

  return (
      <div className={'App'}>
          <div className={'posts'}>
              <PostsComponent lift={lift}/>
          </div>
          <div className={'comments'}>
              <CommentsComponent comments={comments}/>
          </div>
      </div>
  );
};

export default App;