import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListComments from './ListComments'
import Settings from './Settings'

function Post() {

    return (

        <div className="row">
            <div className="col-11 pt-3 pb-1">
                <Card>
                    <Card.Header> Marc <Settings/> </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">

                            <p>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.{' '}
                            </p>

                            <footer className="blockquote-footer">
                               Posted <cite title="Source Title">25/02/2018</cite>
                            </footer>

                        </blockquote>
                        <div className="pt-5">

                            <ListComments />
                            <Button variant="outline-danger"> <FontAwesomeIcon icon="heart" /> </Button>{' '}
                            <Button variant="outline-dark">  <FontAwesomeIcon icon="trash" /> </Button>{' '}
                            <Button variant="outline-secondary"> <FontAwesomeIcon icon="share" /> </Button>{' '}

                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}

export default Post