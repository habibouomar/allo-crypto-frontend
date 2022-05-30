import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListComments from "./ListComments";
import Settings from "./Settings";
import { lenContext } from "../App";
import Badge from "react-bootstrap/Badge";

function Post(props) {

  const [filterId, setFilterId] = useState(null);
  const [check, setCheck] = useState(false);
  const userId = localStorage.getItem('userId')
  const [likeCount, setLikeCount] = useState('')

  const setLike = (id) => {

    fetch('http://localhost:3002/post', {
      method: 'PUT',
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        likerId: userId,
        filterId: id,
        ownerID: props.content.ownerID._id
      })
    }).then(result => result.json())
      .then(json => {
        console.log(json)
        props.likeFunc(json)
      })
  }

  const shareContent = (posterID, postID) => {

    fetch('http://localhost:3002/share', {
      method: 'POST',
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        posterID: posterID,
        postID: postID
      })
    }).then(result => result.json())
      .then(json => console.log(json))
  }

  const checkit = (length) => {
    return setLikeCount(length)

  }


  return (
    <div className="row">
      <div className="col-11 pt-3 pb-1">
        <Card>
          <Card.Header>
            {props.content.ownerID.userName}
            <Settings value={props.content.text} />{" "}
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
                  checkit()
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
                  checkit={checkit}
                />
              </button>

              <Button variant="outline-secondary">
                {" "}
                <FontAwesomeIcon icon="share" onClick={() => {
                  shareContent(userId, props.content._id)
                }} />{" "}
              </Button>{" "}

              <div>
                <Badge className="ms-2 me-4" bg="danger" pill>  {props.content.likes.length}</Badge>
                <Badge bg="success" pill>  {likeCount} </Badge>
              </div>

            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Post;
