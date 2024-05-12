import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

import styles from './PostComponent.module.css';

const PostComponent: FC<IPostModel> = ({id, body, title}) => {
    return (
        <div className={styles.post_style}>
            <h3>ID - {id}</h3>
            <p>BODY - {body}</p>
            <p>TITLE - {title}</p>
        </div>
    );
};

export {PostComponent}