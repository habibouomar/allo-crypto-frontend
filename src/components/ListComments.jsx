import React from "react"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Settings from './Settings'
import Comment from './Comment'
import { useForm } from "react-hook-form";

function ListComments() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <Form.Control as="textarea" rows={2} placeholder="Your opinion" {...register("text")}/>
                        </Form.Group>

                        <Comment></Comment>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Send</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ListComments