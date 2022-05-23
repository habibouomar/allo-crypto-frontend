import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListComments from './ListComments'
import Settings from './Settings'
import Like from "./Like";

function Post() {
    const [postList, setList] = useState([]);
    const [filterId, setFilterId] = useState(null);
    const [isTrue, setTrue] = useState(false);
    const [check,setCheck] = useState(false)
    let [counter,setCounter] = useState(0);
    useEffect(() => {
        fetch('http://localhost:3002/post')
            .then(result => result.json())
            .then(json => {
                console.log(json)
                setList([json.result])
            })
            // setOne()

    }, [])

    const userId = localStorage.getItem('userId')

    const setOne = ()=>{
        if(counter>1){
         setCounter(0)   
         console.log(counter)
        }
    }

   
    return (

        <div className="row">
            {
                postList.map((post, key) => {
                    return (
                        <div>
                            {

                                post.map((elem, index) => {
                                    console.log(elem.text)
                                    return (
                                        <div className="col-11 pt-3 pb-1">
                                            <Card>
                                                <Card.Header>{elem.ownerID.userName}<Settings /> </Card.Header>
                                                <Card.Body>
                                                    <blockquote className="blockquote mb-0">
                                                        <p>
                                                            {elem.text}
                                                        </p>
                                                        <footer className="blockquote-footer">
                                                            Posted <cite title="Source Title">{elem.createdAt}</cite>
                                                        </footer>
                                                    </blockquote>
                                                    <div className="pt-5">
                                                        <Button variant="outline-danger" onClick={() => {
                                                            setFilterId(elem._id)
                                                            setTrue(true)
                                                            setCounter(counter +1)
                                                        }}> <FontAwesomeIcon icon="heart" /> </Button>
                                                        <button style={{padding:'none',border:'none',backgroundColor:'white'}} onClick={() => {
                                                                setFilterId(elem._id)
                                                                setCheck(true)
                                                            }}>
                                                            <ListComments filterId={filterId} likerId={userId} check={check} />
                                                        </button>
                                                        <Button variant="outline-dark">  <FontAwesomeIcon icon="trash" /> </Button>{' '}
                                                        <Button variant="outline-secondary"> <FontAwesomeIcon icon="share" /> </Button>{' '}
                                                        <div style={{}}>
                                                            <span style={{ backgroundColor: 'pink' }}>{elem.likes.length}</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>


                                    )
                                })
                            }

                        </div>)
                })
            }


            <Like filterId={filterId} likerId={userId} isTrue={isTrue} />

        </div>

    )
}

export default Post