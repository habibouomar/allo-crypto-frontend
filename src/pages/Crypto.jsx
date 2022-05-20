import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react'
import "../styles/crypto.css"

function Crypto() {
    const [post, setPost] = useState([]);


    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin').then((response) => {
            setPost([response.data]);
            console.log(response.data)
            //   const crypto = response.data;
            //   const name = crypto.id;
            //   const short = crypto.symbol;
        });
    }, []);

    return (
        <div>
            <h1>{post.map(element => {
                return (
                    <body>
                        <div className="crypto">
                            <p className="name">{element.name}</p>
                            <p className="symbol">{element.symbol}</p>
                            <div className="item">
                                <p className="logo"><img src={element.image.small} /></p>
                            </div>
                        </div>
                    </body>
                )
            })}</h1>
        </div>
    )
}

export default Crypto