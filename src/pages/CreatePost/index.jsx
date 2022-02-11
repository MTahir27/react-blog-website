import React, { useEffect, useState } from 'react';
import "./style.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../Firebase/firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
    let navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
            navigate("/signin");
        }
    }, [])

    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");

    const postCollectionRef = collection(db, "posts");
    const createPost = async () => {
        await addDoc(postCollectionRef, { title, post, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } });
        navigate("/");
    }
    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create Post</h1>
                <div className="inputGp">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder='Title ...' onChange={(event) => { setTitle(event.target.value) }} />
                </div>
                <div className="inputGp">
                    <label htmlFor="post">Post</label>
                    <textarea name="post" id="post" placeholder='Post' onChange={(event) => { setPost(event.target.value) }}></textarea>
                </div>
                <button type="submit" onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost;