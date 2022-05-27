import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import '../styles/home.css';
import axios from "axios";

function ToPost(props) {

    const [userName, setName] = useState('')
    const [bio, setBio] = useState('')
    const [post, setPost] = useState([
       ' Bitcoin',
        'Ethereum',
        'USD Coin',
        'Tether',
        'BNB',
        'XRP',
        'Cardano',
        'Binance USD',
        'Solana',
        'Dogecoin',
        'Polkadot',
       ' Wrapped Bitcoin',
        'TRON',
        'Lido Staked Ether',
        'Avalanche',
        'Shiba Inu',
        'Dai',
        'LEO Token',
        'Litecoin',
        'Cronos',
        'Polygon',
        'FTX Token',
        'NEAR Protocol',
        'Monero',
        'Bitcoin Cash',
        'OKB',
        'Stellar',
        'Chainlink',
        'Ethereum Classic',
        'Cosmos Hub',
        'Algorand',
        'Flow',
        'Uniswap',
        'VeChain',
        'ApeCoin',
        'Hedera',
        'Theta Fuel',
        'Chain',
        'Elrond',
        'Internet Computer',
        'Tezos',
        'Filecoin',
        'The Sandbox',
        'Axie Infinity',
        'KuCoin Token',
        'Decentraland',
        'Frax',
        'cETH',
        'Aave',
        'DeFiChain',]);
        
    const lit = 'Bitcoin';
    const [crypto,setCrypto] = useState('crypto')
    
    useEffect(() => {
        const userName = localStorage.getItem('userName')
        const bio = localStorage.getItem('bio')
        setName(userName)
        setBio(bio)
        
    })
    
    const [value, setValue] = useState('')
    const userId = localStorage.getItem('userId')
    
    const sender = (e) => {
        e.preventDefault()           
        let valer;
             fetch('http://localhost:3002/post', {
                method: 'POST',
                headers: new Headers({ "content-type": "application/json" }),
                body: JSON.stringify({
                text: value,
                ownerID: userId
             })
             }).then(result => result.json())
                .then(json => {
                localStorage.setItem('postfrontId', JSON.stringify(json.postId))
                console.log("json.postID", json.postId)
                props.onFinishPost(json);
            })
    }

    const cryptoSender = (e)=>{
        e.preventDefault()
        fetch(`http://localhost:3002/${crypto}`,{
            method:'POST',
            headers:new Headers({"content-type":"application/json"}),
            body:JSON.stringify({
                text:value,
                ownerID:userId
            })
        }).then(result=>result.json())
         .then(json=>{
            console.log(json)
        })
    }


    const changer = (e) => {
        setValue(e.target.value)
    }

    return (

        <div className="row">
            <div className="col-11 pt-5">
                <Card>
                    <Card.Header>{userName}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <div>
                                <img className="" src="https://picsum.photos/130/130?image=1027" alt="Logo" />
                                <h5 class="card-title pt-2">{bio}</h5>
                            </div>
                            <form>

                                <input type="text" className="form-control form-control-dark" placeholder="Give the community your tip of the day" onChange={changer} />
                                <div className="text-end">

                                  { 
                                   value.includes('#')? <button type="submit" class="btn btn-primary mt-3 " onClick={cryptoSender}> New Post</button> :
                                  <button type="submit" class="btn btn-primary mt-3 " onClick={sender}> New Post</button>
                                  }
                                </div>
                            </form>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}

export default ToPost