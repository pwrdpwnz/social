import React from 'react';
import PostStyles from './Post.module.scss';

const Post = (props) => {


    
    return (
        <div className={PostStyles.Post}>
            {props.message}
            <div className={PostStyles.spanContainer}>
                <span className={PostStyles.span}>♥ {props.liked}</span>
            </div>
        </div>
    );
};

export default Post;