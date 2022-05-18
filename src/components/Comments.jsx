import React from "react";
import Card from "react-bootstrap/Card";


function Comments() {
    return (

            <div className="row">
                <div className="col-11 pt-3 pb-1">
                    <Card>
                        <Card.Header>Marc</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
            </div>
  
    )
}

export default Comments