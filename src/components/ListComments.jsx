import React from "react"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Settings from './Settings'

function ListComments() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button variant="outline-success" onClick={handleShow}> <FontAwesomeIcon icon="message" /> </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Comments</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Marc</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <div>
                                <h4> Marc  <Settings /> </h4>
                                <p>
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                    consectetur ac, vestibulum at eros.
                                </p>
                            </div>

                            <div>
                                <h4> Loic  <Settings /> </h4>
                                <p>
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                    consectetur ac, vestibulum at eros.
                                </p>
                            </div>

                        </Form.Group>

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