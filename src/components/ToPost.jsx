import React from "react";
import Card from "react-bootstrap/Card";
import '../styles/home.css';


function ToPost() {
    return (

        <div className="row">
            <div className="col-11 pt-5">
                <Card>
                    <Card.Header>Hello Marc</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <div>
                                <img className="" src="https://picsum.photos/130/130?image=1027" alt="Logo"/>
                                <h5 class="card-title pt-2">The world is mine</h5>
                            </div>
                            <form>
                                <input type="text" className="form-control form-control-dark" placeholder="Give the community your tip of the day" />
                                <div className="text-end">
                                    <button type="submit" class="btn btn-primary mt-3 "> New Post</button>
                                </div>
                            </form>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}

export default ToPost