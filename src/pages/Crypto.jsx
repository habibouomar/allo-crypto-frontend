import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react'
import "../styles/crypto.css";
import Post from "../components/Post";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Settings from "../components/Settings";
import { lenContext } from "../App";



function Crypto() {

    let [listPost, setListPost] = useState([]);

   

    const [post, setPost] = useState([]);
    const [search, setSearch] = useState("bitcoin");



    useEffect(() => {
     
        axios.get(`https://api.coingecko.com/api/v3/coins/${search}`).then((response) => {
            setPost([response.data]);
            console.log(response.data)
         
        });
        fetch('http://localhost:3002/crypto')
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setListPost([json])
        })
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
                                <div className="containers">
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
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="row">
                            {listPost.map((post,index)=>{
                                return(
                                    <div className="col-11 pt-3 pb-1">
                                        {

                               post.map(content=>{
                                   console.log(content.text)
                                   return(
                                    <Card>
                                    <Card.Header>
                                        {content.ownerID.userName}
                                        <Settings />{" "}
                                    </Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                        <p>{content.text}</p>
                                        <footer className="blockquote-footer">
                                            Posted {content.createdAt}
                                            <cite title="Source Title">{}</cite>
                                        </footer>
                                        </blockquote>
                                        <div className="pt-5">
                                        <div style={{}}>
                                            <span style={{ backgroundColor: "pink" }}>
                                            
                                            </span>
                                            <span style={{ backgroundColor: 'orange' }}>{}</span>
                                        </div>
                                        </div>
                                    </Card.Body>
                                    </Card>
                                   )
                               })
                                        }
                                    </div>
                                )
                                    
                                
                            })
                           }
                    </div>
                    </div>
                    </body>
                )
            })}</h1>
        </div>
    )
}

export default Crypto