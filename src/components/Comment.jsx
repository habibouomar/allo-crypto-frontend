import React from "react";
import Form from "react-bootstrap/Form";
import Settings from './Settings'

function Comment() {

    return (
        <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <div>
                    <h4> Marc  <Settings /> </h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </div>
            </Form.Group>
        </>
    )
}

export default Comment