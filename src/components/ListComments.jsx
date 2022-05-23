import React from "react"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Settings from './Settings'
import Comment from './Comment'
import { useForm } from "react-hook-form";

function ListComments(props) {

    const [show, setShow] = useState(false);
    const [value, setValue] = useState('')
    const [commentList, setComment] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const filterId = props.filterId;
    const likerId = props.likerId;

    const getVal = (e) => {
        e.preventDefault();
        setValue(e.target.value)
        console.log(value)
    }

    const sender = (e) => {

        fetch('http://localhost:3002/comment', {
            method: 'POST',
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify({
                ownerID: likerId,
                postID: filterId,
                text: value
            })
        }).then(result => result.json())
            .then(json => console.log(json))
        localStorage.setItem('commentBody', value)
        setValue('')
    }
    const checker = props.check;

    useEffect(() => {
        if(checker){

            fetch(`http://localhost:3002/comment/${filterId}`)
                .then(result => result.json())
                .then(json => {
                    setComment([json])
                    console.log(json)
                })
        }else{
           
        }
    }, [filterId])









    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:3002/comment', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(data)
        })       
    };


    return (
        <>
            <Button variant="outline-success" onClick={handleShow}> <FontAwesomeIcon icon="message" /> </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header>
                    <Modal.Title>Comments</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)} >

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Marie</Form.Label>
                            <Form.Control as="textarea" rows={2} value={value} onChange={getVal} />
                        </Form.Group>

                        {
                            commentList.map(comment => {
                                console.log(comment, 'ACTION BASTARD')
                                return (
                                    <div>
                                        {
                                            comment.map(elem => {
                                                console.log(elem.ownerID.userName, 'ITTITITITITITTIITTITITITIIT')
                                                return (


                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                        <div>
                                                            <h4>{elem.ownerID.userName}<Settings  /> </h4>
                                                            <p>
                                                               {elem.text}
                                                            </p>
                                                        </div>

                                                    </Form.Group>
                                                )
                                            })
                                        }
                                    </div>

                                )
                            })
                        }

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={sender}>Send</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ListComments