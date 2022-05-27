import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from 'react'



function TopCrypto() {

    const [post, setPost] = useState([]);


    useEffect(() => {


        axios.get('https://api.coingecko.com/api/v3/search/trending').then((response) => {
            setPost(response.data.coins);
            console.log(response.data.coins)

        });
        // }
    }, []);
    return (

        <div className="col-5 pt-3">
            <Card>
                <Card.Header>Top Crypto</Card.Header>

                <Card.Body>
                    <ListGroup as="ol" numbered>


                            {post.map((element) => {
                                return (
                                    <ListGroup.Item as="li" >
                                    <img src={element?.item?.small} className="topCrypto-img" />
                                    {element.item.symbol}
                        </ListGroup.Item>

                                )
                            })}


                    </ListGroup>
                </Card.Body>
            </Card>
        </div>

    )
}

export default TopCrypto