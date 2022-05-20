import React from "react";
import ToPost from "../components/ToPost";
import Post from "../components/Post";
import TopUserLike from "../components/TopUserLike";
import TopUserComment from "../components/TopUserComment";
import '../styles/home.css';
import { useState, useEffect } from "react";

function Home() {

    let [listPost, setListPost] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/post')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setListPost(res.result)
            })
    }, [])

    const onFinishPost = (resultJson) => {
        console.log(resultJson);
        fetch('http://localhost:3002/post')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setListPost(res.result)
            })
    }
    return (
        <div className="homeContainer container">
            <div className="bloc1">
                <ToPost onFinishPost={onFinishPost} ></ToPost>

                <div>
                    {listPost.map(post => {

                        return (
                             <Post content={post} ></Post>
                        )
                    })}
                </div>
                
            </div>

            <div className="row bloc2 position-sticky">
                <TopUserLike></TopUserLike>
                <TopUserComment></TopUserComment>
            </div>
        </div>
    )
}

export default Home