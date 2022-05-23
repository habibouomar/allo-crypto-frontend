import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react'
import "../styles/crypto.css"

function Crypto() {
    const [post, setPost] = useState([]);


    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/ethereum').then((response) => {
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
                        <div className="main">
                            <div className="header">
                                <div className="price">Prix du {element.name} ({element.symbol})</div>
                                <div className="container">
                                    <div className="crypto logo"><img src={element.image.small} /></div>
                                    <div className="crypto name">{element.name}</div>
                                    <div className="crypto symbol">{element.symbol}</div>
                                    <div className="data right">€{element.market_data.current_price.eur}</div>
                                    <div className="data hour">{element.market_data.price_change_percentage_1h_in_currency.eur}%</div>
                                    {/* <div className="data">{element.market_data.market_cap.eur} €</div> */}
                                </div>
                                <div className="numbers">
                                    <div className="rank">Classement: {element.market_cap_rank}</div>
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
                                                <p>€{element.market_data.market_cap.eur}</p>
                                                <p>{element.market_data.market_cap_change_percentage_24h}%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4">
                                        <div id="css">
                                            <div class="p-4">
                                                <p className="market">cap market</p>
                                                <p>€{element.market_data.market_cap.eur}</p>
                                                <p>{element.market_data.market_cap_change_percentage_24h}%</p>
                                            </div>                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4">
                                        <div id="circ">
                                        <div class="p-4">
                                                <p className="market">cap market</p>
                                                <p>€{element.market_data.market_cap.eur}</p>
                                                <p>{element.market_data.market_cap_change_percentage_24h}%</p>
                                            </div>                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </body>
                )
            })}</h1>
        </div>
    )
}

export default Crypto