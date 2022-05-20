import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

function TopUserLike() {
    return (
   
        <div className="col-12 pt-5">
            <Card>
                <Card.Header>Top User Like</Card.Header>

                <Card.Body>
                    <ListGroup as="ol" numbered>

                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">

                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Marie</div>
                               <p>The world is mine</p> 
                            </div>

                            <Badge bg="danger" pill> 14 </Badge>

                        </ListGroup.Item>

                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">

                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Julie</div>
                                <p>Binance compagny</p> 
                            </div>

                            <Badge bg="danger" pill> 10 </Badge>

                        </ListGroup.Item>

                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">

                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Joel</div>
                                <p>Yeah</p> 
                            </div>

                           <Badge bg="danger" pill> 6 </Badge>

                        </ListGroup.Item>

                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
  
    )
}

export default TopUserLike