import React, { useId, useState } from "react";
import "../styles/profil.css"
import { FaTwitter,FaLinkedinIn,FaInstagram } from "react-icons/fa";
// import { post } from "../../../Allo_crypto/Router/post.router";
function Profil() {

    let [listPost, setListPost] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/post')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setListPost(res.result)
            })
    }, [])

    const [state, setState] = useState({
        name: "",
        bio: ""
    });

    const [name, setName] = useState('Marie')
    const [newName, setNewName] = useState('')
    const [postBorder,setBorder] = useState('2px solid white')
    const [commentBorder,setCBorder] = useState('2px solid white')
    const [shareBorder,setShBorder] = useState('2px solid white')
    const[posts,setPost] = useState([])
    const [comments,setComment] = useState([])
    const [shares,setShares] = useState([])
    const bio = localStorage.getItem('bio')
    const userId = localStorage.getItem('userId')
    const [newBio, setNewBio] = useState('')
// console.log(userId,'USERID')
    function handleChange(evt) {
        const value = evt.target.value;
        setNewName(value)
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    const changeBio = (e) => {
        console.log(e.target.value)
        setNewBio(e.target.value)
    }
    const modalSubmit = (e) => {
        setName(newName)
    }


    const getPost=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:3002/post/profil/${userId}`)
        .then(result=>result.json())
        .then(json=>{
            console.log("POST RESULT",json)
            setPost(json)
        })
        setBorder('2px solid blue')
        setCBorder('2px solid white')
        setShBorder('2px solid white')
    }

    const getComment=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:3002/comment/profil/${userId}`)
        .then(result=>result.json())
        .then(json=>{
            console.log("COMMENST RESULT",json)
            setComment(json)
        })
        setCBorder('2px solid blue')
        setBorder('2px solid white')
        setShBorder('2px solid white')
    }

    const getShares=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:3002/share/profil/${userId}`)
        .then(result=>result.json())
        .then(json=>{
            console.log('SHARES RESULT',json)
            setShares(json)
        })
        setShBorder('2px solid blue')
        setBorder('2px solid white')
        setCBorder('2px solid white')
    }


    return (
        <div className="main-div">
            {
                // comments.map(comment=)
            }
            <div className="background-photo">
                <img src="https://picsum.photos/130/130?image=1027" className="image" alt="..." />
            </div>
            <div className="profile-content">
                <div className="name-div">
                    <div>
                        <span className="first-span">{name}</span>
                    </div>
                    <div>
                        <span className="second-span">{bio}</span>
                    </div>
                    <div className="icons-div">
                        <FaTwitter className="icons"/><FaLinkedinIn className="icons"/><FaInstagram className="icons"/>
                    </div>
                </div>
                <div className="btns-div">
                    <button style={{borderBottom:postBorder}} onClick={getPost}>Posts</button>
                    <button style={{borderLeft:'0.5px solid grey',borderBottom:commentBorder}} onClick={getComment}>Comments</button>
                    <button style={{borderLeft:'0.5px solid grey',borderBottom:shareBorder}} onClick={getShares}>Sahred By {name}</button>
                </div>
            </div>
        </div>
    )
}

export default Profil