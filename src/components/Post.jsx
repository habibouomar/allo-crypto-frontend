import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListComments from './ListComments'
import Settings from './Settings'
import { lenContext } from "../App";

function Post(props) {
    const [filterId, setFilterId] = useState(null);
    const [isTrue, setTrue] = useState(false);
    const [check,setCheck] = useState(false)
    let [counter,setCounter] = useState(0);
    const [color,setColor] = useState('');
    const userId = localStorage.getItem('userId')
    const post = props.content;
    const [likers,setLikers] = useState([])
    const [numbers,setNumbers] = useState('')
    const {length} = useContext(lenContext)
    const [likeCount,setLikeCount] = useState('')
    const [ownerID,setOwnerID] = useState('');
    const [share,setShare] = useState([]);
    let num ;
    const setLike = (id)=>{
        fetch('http://localhost:3002/post', {
            method: 'PUT',
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify({
                likerId: userId,
                filterId: id
            })
        }).then(result => result.json())
            .then(json => {
                console.log(json)
               props.likeFunc(json)
            //    console.log(num)
               })
           
    }

    const shareContent = (posterID,postID)=>{
        // e.preventDefault();
        fetch('http://localhost:3002/share',{
            method:'POST',
            headers:new Headers({"content-type":"application/json"}),
            body:JSON.stringify({
                posterID:posterID,
                postID:postID
            })
        }).then(result=>result.json())
            .then(json=>console.log(json))
    }

    useEffect(()=>{
        fetch('http://localhost:3002/share')
        .then(result=>result.json())
         .then(json=>{
             console.log("SHARE CONTENT",json)
             setShare(json)
         })
    },[])

    const checkit =(length)=>{
       return setLikeCount(length)
    }
   
    return (

        <div className="row">
            {
                share.map(item=>{
                    // console.log("ITEM ITEM ITEM",share.pop())
                    const lastElem = share.pop()
                    console.log('I SWEAR TO GOD',lastElem.postID.text)
                })
            }
            <div className="col-11 pt-3 pb-1" >
                <Card>
                    <Card.Header>{props.content.ownerID.userName}<Settings /> </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {props.content.text}
                            </p>
                            <footer className="blockquote-footer">
                                Posted <cite title="Source Title">{props.content.createdAt}</cite>
                            </footer>
                        </blockquote>
                        <div className="pt-5">
                            <Button variant="outline-danger" onClick={() => {
                                setLike(props.content._id)
                                setTrue(true)
                                checkit()
                                // setColor('purple')
                            }}> <FontAwesomeIcon icon="heart" style={{color:color}}/> </Button>
                            <button style={{padding:'none',border:'none',backgroundColor:'white'}} onClick={() => {
                                    setFilterId(props.content._id)
                                    setCheck(true)
                                }}>
                                <ListComments filterId={filterId} likerId={userId} check={check} checkit={checkit}/>
                            </button>
                            <Button variant="outline-dark">  <FontAwesomeIcon icon="trash" /> </Button>{' '}
                            <Button variant="outline-secondary"> <FontAwesomeIcon icon="share" onClick={()=>{
                                shareContent(userId,props.content._id)

                            }}/> </Button>{' '}
                            <div style={{}}>
                                <span style={{ backgroundColor: 'pink' }}>{props.content.likes.length}</span>
                                <span style={{ backgroundColor: 'orange' }}>{likeCount}</span>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>

        </div>

    )
}

export default Post