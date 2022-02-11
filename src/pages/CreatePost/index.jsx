import React from 'react';
import "./style.css";

const CreatePost = () => {
    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create Post</h1>
                <div className="inputGp">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder='Title ...' />
                </div>
                <div className="inputGp">
                    <label htmlFor="post">Post</label>
                    <textarea name="post" id="post" placeholder='Post'></textarea>
                </div>
                <button type="submit">Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost;