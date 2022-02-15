import React, { useEffect, useState } from 'react';
import "./style.css";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../../Firebase/firebase-config";

const Home = () => {
    const [postLists, setPostLists] = useState([]);
    const postsCollectionRef = collection(db, "posts");
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.data.id })));
        }
        getPosts();
    })

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    }

    return (
        <div className='homePage'>
            {
                postLists.map((post, index) => {
                    return (
                        <div className='post' key={`post${index}`}>
                            <div className="postHeader">
                                <div className="title"><h1>{post.title}</h1></div>
                                <div className="deletePost">
                                    <button onClick={() => { deletePost(post.id) }}>&#128465;</button>
                                </div>
                            </div>
                            <div className="postTextContainer">
                                {post.post}
                            </div>
                            <h3>{post.author.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home;