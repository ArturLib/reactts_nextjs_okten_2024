import './App.css';

import React, {useState} from 'react';
import {UsersComponent} from "./components/users/UsersComponent";
import {PostsComponent} from "./components/posts/PostsComponent";
import {IPostModel} from "./models/IPostModel";
import {getAllPostsOfCurrentUser} from "./services/jsonplaceholder.api.service";

const App = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    const lift = (userId: number) => {
        getAllPostsOfCurrentUser(userId).then(({data}) => setPosts(data))
    };

  return (
      <div className={'main_style'}>
          <div className={'users_style'}>
              <UsersComponent lift={lift}/>
          </div>
          <div className={'posts_style'}>
              <PostsComponent posts={posts}/>
          </div>
      </div>
  );
};

export default App;