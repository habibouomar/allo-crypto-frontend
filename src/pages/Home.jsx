import React from "react";
import ToPost from "../components/ToPost";
import Comments from "../components/Comments";
import Top from "../components/Top";
import '../styles/home.css';

function Home() {
    return (
        <div className="homeContainer container">
            <div className="bloc1">
                <ToPost></ToPost>
                <Comments></Comments>
                <Comments></Comments>
                <Comments></Comments>
                <Comments></Comments>
                <Comments></Comments>
            </div>

            <div className="row bloc2 position-sticky">
                <Top></Top>
                <Top></Top>

            </div>

        </div>

    )
}

export default Home