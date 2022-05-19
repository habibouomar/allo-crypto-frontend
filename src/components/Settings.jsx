import React from "react"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'


function Seetings() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>

            <Button variant="outline-ligh" onClick={handleShow}> <FontAwesomeIcon icon="fa-solid fa-ellipsis" /> </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Settings</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Edit content</Form.Label>
                            <Form.Control as="textarea" rows={2}> contenue</Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>Delete content</Button>
                    <Button variant="primary" onClick={handleClose}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Seetings