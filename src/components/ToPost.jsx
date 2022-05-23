import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import '../styles/home.css';
import { useForm } from "react-hook-form";


function ToPost() {
    const [userName,setName] = useState('')
    const [bio,setBio] = useState('')

    useEffect(()=>{
        const userName = localStorage.getItem('userName')
        const bio = localStorage.getItem('bio')
        setName(userName)
        setBio(bio)
    })


    //added after clone
    const [value,setValue] = useState('')
    const userId = localStorage.getItem('userId')
    const sender = (e) =>{
        e.preventDefault()
        fetch('http://localhost:3002/post',{
            method:'POST',
            headers:new Headers({"content-type":"application/json"}),
            body:JSON.stringify({
                text:value,
                ownerID:userId
            })
        }).then(result=>result.json())
            .then(json=>{
                localStorage.setItem('postfrontId', JSON.stringify(json.postId))
                console.log(json.postId)
            })
    }
    const changer = (e)=>{
     setValue(e.target.value)
    }
    //clone end
    return (

        <div className="row">
            <div className="col-11 pt-5">
                <Card>
                    <Card.Header>{userName}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <div>
                                <img className="" src="https://picsum.photos/130/130?image=1027" alt="Logo"/>
                                <h5 class="card-title pt-2">{bio}</h5>
                            </div>
                            <form>
                                                                                                                                            {/* {ONCHNAGE added after Clone} */}
                                <input type="text" className="form-control form-control-dark" placeholder="Give the community your tip of the day" onChange={changer}/>
                                <div className="text-end">
                                                                                {/* {ONCLICK added after Clone} */}
                                    <button type="submit" class="btn btn-primary mt-3 " onClick={sender}> New Post</button>
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