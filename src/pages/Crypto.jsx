import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react'
import "../styles/crypto.css";
import Post from "../components/Post";


function Crypto() {

    let [listPost, setListPost] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/post')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setListPost(res.result)
            })
    }, [])

    const [post, setPost] = useState([]);
    const [search, setSearch] = useState("bitcoin");



    useEffect(() => {
        // if(search === null){
        //     console.log('null')
        // }else{

        axios.get(`https://api.coingecko.com/api/v3/coins/${search}`).then((response) => {
            setPost([response.data]);
            console.log(response.data)
            //   const crypto = response.data;
            //   const name = crypto.id;
            //   const short = crypto.symbol;
        });
        // }
    }, [search]);


    const submit = (event) => {
        event.preventdefault();
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
        console.log("crypto.jsx search===null", search === null)
        console.log("crypto.jsx search", search)
        console.log("crypto.jsx event.target.value", event.target.value)
        if (!event.target.value) {
            setSearch('bitcoin')
        }
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input className="searchCrypto"
                    type="text"
                    onChange={handleChange}
                    placeholder="rechercher une monnaie..."

                />
            </form>
            <h1>{post.map(element => {
                return (
                    <body>
                        <div className="main">
                            <div className="header">
                                <div className="price">Current price {element?.name} ({element?.symbol})</div>
                                <div className="container">
                                    <div className="crypto logo"><img src={element?.image?.small} /></div>
                                    <div className="crypto name">{element?.name}</div>
                                    <div className="crypto symbol">{element?.symbol}</div>
                                    <div className="data right">€{element?.market_data?.current_price?.eur}</div>
                                    {
                                        element?.market_data?.price_change_percentage_1h_in_currency?.eur > 0 ?
                                            <div className="data hour2">{element?.market_data?.price_change_percentage_1h_in_currency?.eur?.toFixed(2)}%</div>
                                            :
                                            <div className="data hour">{element?.market_data?.price_change_percentage_1h_in_currency?.eur?.toFixed(2)}%</div>
                                    }
                                </div>
                                <div className="numbers">
                                    <div className="rank">rank: {element?.market_cap_rank}</div>
                                    {/* <div className="pourcent">{element.market_data.price_change_percentage_7d}%</div> */}
                                    {/* <div className="pourcent">{element.market_data.market_cap.eur} €</div> */}
                                </div>
                            </div>
                            <div class="stats">
                                <div class="row g-2">
                                    <div class="col-12 col-sm-6 col-md-4">
                                        <div id="cap">
                                            <div class="p-4">
                                                <p className="market">cap market</p>
                                                <p>€{element?.market_data?.market_cap?.eur}</p>
                                                {
                                                    element?.market_data?.market_cap_change_percentage_24h > 0 ?
                                                        <div className="datas hours2">{element?.market_data?.market_cap_change_percentage_24h?.toFixed(2)}%</div>
                                                        :
                                                        <div className="datas hours">{element?.market_data?.market_cap_change_percentage_24h?.toFixed(2)}%</div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4">
                                        <div id="mid">
                                            <div class="p-4">
                                                <p className="market">Lowest rate <span className="span-jsx">24h</span></p>
                                                <p>€{element?.market_data?.low_24h?.eur}</p>
                                                <p className="p">%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4">
                                        <div id="circ">
                                            <div class="p-4">
                                                <p className="market">highest rate <span className="span-jsx">24h</span></p>
                                                <p>€{element?.market_data?.high_24h?.eur}</p>
                                                {/* <p>{element.market_data.market_cap_change_percentage_24h}%</p> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                            {listPost.map(post => {

                                return (
                                    <Post content={post} ></Post>
                                )
                            })}
                        </div>
                    </body>
                )
            })}</h1>
        </div>
    )
}

export default Crypto