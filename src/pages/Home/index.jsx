import React, { useEffect, useState } from 'react';
import "./style.css";
import Post from '../../Components/Post';
import { collection, getDocs } from "firebase/firestore";
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

    return (
        <div className='homePage'>
            {
                postLists.map((post, index) => {
                    return (
                        <Post {...post} key={index} />
                    )
                })
            }
        </div>
    )
}

export default Home;