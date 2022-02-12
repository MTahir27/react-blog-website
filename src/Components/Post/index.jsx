import React from 'react';
import "./style.css";

const Post = ({ ...post }) => {
    return (
        <div className='post'>
            <div className="postHeader">
                <div className="title"><h1>{post.title}</h1></div>
            </div>
            <div className="postTextContainer">
                {post.post}
            </div>
            <h3>@{post.name}</h3>
        </div>
    )
}

export default Post;