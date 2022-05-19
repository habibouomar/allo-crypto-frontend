import React from "react";
import ToPost from "../components/ToPost";
import Post from "../components/Post";
import TopUserLike from "../components/TopUserLike";
import TopUserComment from "../components/TopUserComment";
import '../styles/home.css';
import { useState, useEffect } from "react";

function Home() {

    let [content, setContent] = useState([]);

    useEffect(() => {


    }, []);
    
    return (
        <div className="homeContainer container">
            <div className="bloc1">
                <ToPost></ToPost>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>

            <div className="row bloc2 position-sticky">
               <TopUserLike></TopUserLike>
               <TopUserComment></TopUserComment>
            </div>

        </div>

    )
}

export default Home