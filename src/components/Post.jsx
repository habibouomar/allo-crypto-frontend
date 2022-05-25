import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListComments from "./ListComments";
import Settings from "./Settings";

function Post(props) {
  const [filterId, setFilterId] = useState(null);
  const [isTrue, setTrue] = useState(false);
  const [check, setCheck] = useState(false);
  let [counter, setCounter] = useState(0);

  const userId = localStorage.getItem("userId");

  const setLike = (id) => {
    fetch("http://localhost:3002/post", {
      method: "PUT",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        likerId: userId,
        filterId: id,
      }),
    })
      .then((result) => result.json())
      .then((json) => {
        console.log(json);
      });
  };

  return (
    <div className="row">
      <div className="col-11 pt-3 pb-1">
        <Card>
          <Card.Header>
            {props.content.ownerID.userName}
            <Settings />{" "}
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{props.content.text}</p>
              <footer className="blockquote-footer">
                Posted{" "}
                <cite title="Source Title">{props.content.createdAt}</cite>
              </footer>
            </blockquote>
            <div className="pt-5">
              <Button
                variant="outline-danger"
                onClick={() => {
                  setLike(props.content._id);
                  setTrue(true);
                  setCounter(counter + 1);
                }}
              >
                {" "}
                <FontAwesomeIcon icon="heart" />{" "}
              </Button>
              <button
                style={{
                  padding: "none",
                  border: "none",
                  backgroundColor: "white",
                }}
                onClick={() => {
                  setFilterId(props.content._id);
                  setCheck(true);
                }}
              >
                <ListComments
                  filterId={filterId}
                  likerId={userId}
                  check={check}
                />
              </button>
              <Button variant="outline-dark">
                {" "}
                <FontAwesomeIcon icon="trash" />{" "}
              </Button>{" "}
              <Button variant="outline-secondary">
                {" "}
                <FontAwesomeIcon icon="share" />{" "}
              </Button>{" "}
              <div style={{}}>
                <span style={{ backgroundColor: "pink" }}>
                  {props.content.likes.length}
                </span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Post;
