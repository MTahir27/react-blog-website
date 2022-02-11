import React from 'react';
import "./style.css";

const Post = ({ ...post }) => {
    return (
        <div>
            {post.title}
        </div>
    )
}

export default Post;