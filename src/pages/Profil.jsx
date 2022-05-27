import "../styles/profil.css"
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListComments from "../components/ListComments";
import Settings from "../components/Settings";
import TopCrypto from "../components/TopCrypto";
import Header from "../components/Header";
import { useParams } from 'react-router-dom'


function Profil() {

    const [name, setName] = useState('Marie')
    const [postBorder, setBorder] = useState('2px solid white')
    const [commentBorder, setCBorder] = useState('2px solid white')
    const [shareBorder, setShBorder] = useState('2px solid white')
    const [posts, setPost] = useState([])
    const [currentUser, setUser] = useState('')
    let userId = localStorage.getItem('userId')
    const [opacity, setOpacity] = useState('')
    const [current, setCurrent] = useState('')

    const [newName, setNewName] = useState(localStorage.getItem('userName'))
    const [newBio, setNewBio] = useState(localStorage.getItem('bio'))


    let { id } = useParams()

    useEffect(() => {

        if (id) {
            userId = id;
            setNewName(localStorage.getItem('searchUser'));
            setNewBio(localStorage.getItem('searchBio'));

        }
        fetch(`http://localhost:3002/post/profil/${userId}`)
            .then(result => result.json())
            .then(json => {
                setPost(json)
                setCurrent('post')
            })
    }, [])

    const Updater = (result) => {
        fetch(`http://localhost:3002/post/profil/${userId}`)
            .then(result => result.json())
            .then(json => {
                setPost(json)

            })
    }
    const getPost = (e) => {
        if (id) {
            userId = id;
        }
        e.preventDefault()
        fetch(`http://localhost:3002/post/profil/${userId}`)
            .then(result => result.json())
            .then(json => {
                setPost(json)
                setCurrent('post')
                setOpacity('visible')
            })
        setBorder('2px solid blue')
        setCBorder('2px solid white')
        setShBorder('2px solid white')
    }

    const getComment = (e) => {
        if (id) {
            userId = id;
        }
        e.preventDefault()
        fetch(`http://localhost:3002/comment/profil/${userId}`)
            .then(result => result.json())
            .then(json => {
                setPost(json)
                setCurrent('comment')
                setOpacity('hidden')
            })
        setCBorder('2px solid blue')
        setBorder('2px solid white')
        setShBorder('2px solid white')
    }

    const getShares = (e) => {
        if (id) {
            userId = id;
        }
        e.preventDefault()
        fetch(`http://localhost:3002/share/profil/${userId}`)
            .then(result => result.json())
            .then(json => {
                setPost(json)
                setCurrent('share')
            })
        setShBorder('2px solid blue')
        setBorder('2px solid white')
        setCBorder('2px solid white')
    }

    const setLike = (id) => {
        fetch('http://localhost:3002/post', {
            method: 'PUT',
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify({
                likerId: userId,
                filterId: id
            })
        }).then(result => result.json())
            .then(json => {
                Updater()
            })
    }


    return (
        <div>
            <Header></Header>

            <div className="main-div">
                <div className="background-photo">
                    <img src="https://picsum.photos/130/130?image=1027" className="image" alt="..." />
                </div>
                <div className="profile-content">
                    <div className="name-div">
                        <div>
                            <span className="first-span">{newName}</span>
                        </div>
                        <div>
                            <span className="second-span">{newBio}</span>
                        </div>
                        <div className="icons-div">
                            <FaTwitter className="icons" style={{ color: '#1DA1F2' }} /><FaLinkedinIn className="icons" style={{ color: '#0072b1' }} /><FaInstagram className="icons" style={{ color: '#8a3ab9' }} />
                        </div>
                    </div>
                    <div className="btns-div">
                        <button style={{ borderBottom: postBorder }} onClick={getPost}>Posts</button>
                        <button style={{ borderLeft: '0.5px solid grey', borderBottom: commentBorder }} onClick={getComment}>Comments</button>
                        <button style={{ borderLeft: '0.5px solid grey', borderBottom: shareBorder }} onClick={getShares}>Shared By {name}</button>
                    </div>
                </div>
                <div className="feed-div">

                    <div className="post-profil">
                        {
                            posts.map(post => {

                                return (
                                    <div className="col-11 pt-3 pb-1">

                                        <Card>
                                            {current === 'share' ? <Card.Header>
                                                {post.posterID.userName}
                                                <Settings />{" "}
                                            </Card.Header> : <Card.Header>
                                                {post.ownerID.userName}
                                                <Settings />{" "}
                                            </Card.Header>}

                                            <Card.Body>
                                                <blockquote className="blockquote mb-0">
                                                    {current === 'share' ? <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{post.postID?.ownerID.userName} <span style={{ fontSize: '10px', fontWeight: 'lighter', color: 'violet' }}>created this post on {post.postID?.createdAt}</span></span> : <p></p>}
                                                    {current === 'share' ? <p>{post.postID?.text}</p> : <p>{post.text}</p>}
                                                    {current === 'comment' ? <footer className="blockquote-footer">
                                                        Commented on {post.postID?.ownerID.userName + "'s "}post
                                                        <cite title="Source Title">{ }</cite>
                                                    </footer> : current === 'post' ? <footer className="blockquote-footer">
                                                        Posted-{post.createdAt}
                                                        <cite title="Source Title">{ }</cite>
                                                    </footer> : <footer className="blockquote-footer">
                                                        {post.posterID.userName} shared this post
                                                        <cite title="Source Title">{ }</cite>
                                                    </footer>}
                                                </blockquote>
                                                <div className="pt-5" style={{ visibility: opacity }}>

                                                    <Button variant="outline-danger" onClick={() => { setLike(post._id); }} > {" "}
                                                        <FontAwesomeIcon icon="heart" />{" "}
                                                    </Button>

                                                    <button style={{ padding: "none", border: "none", backgroundColor: "white" }} onClick={() => { }} >
                                                        <ListComments />
                                                    </button>

                                                    <Button variant="outline-secondary">
                                                        <FontAwesomeIcon icon="share" onClick={() => { }} />{" "}
                                                    </Button>{" "}

                                                    <div style={{}}>
                                                        <span style={{ backgroundColor: "pink", visibility: opacity }}>
                                                            {current === "share" ? post.postID?.likes.length : current === 'post' ? post.likes?.length : <p></p>}
                                                        </span>
                                                        <span style={{ backgroundColor: 'orange', visibility: opacity }}>{ }</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="comment-profil"></div>
                    <div className="share-profile"></div>

                    <TopCrypto />
                </div>
            </div>
        </div>
    )
}

export default Profil