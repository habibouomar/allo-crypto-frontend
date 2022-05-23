import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListComments from "./ListComments";
import Settings from "./Settings";

function Post(props) {
  return (
    <div className="row">
      <div className="col-11 pt-3 pb-1">
        <Card>
          <Card.Header>
            {" "}
            Marie <Settings />{" "}
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p> {props.content.text} </p>

              <footer className="blockquote-footer">
                {/* Posted <cite title="Source Title"> {props.content.updatedAt.substr(0, 10)} / {props.content.updatedAt.substr(11, 8)} </cite> */}
              </footer>
            </blockquote>
            <div className="pt-5">
              <ListComments />
              <Button variant="outline-danger">
                {" "}
                <FontAwesomeIcon icon="heart" />{" "}
              </Button>{" "}
              <Button variant="outline-dark">
                {" "}
                <FontAwesomeIcon icon="trash" />{" "}
              </Button>{" "}
              <Button variant="outline-secondary">
                {" "}
                <FontAwesomeIcon icon="share" />{" "}
              </Button>{" "}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Post;
