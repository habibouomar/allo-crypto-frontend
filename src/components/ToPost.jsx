import React from "react";
import Card from "react-bootstrap/Card";


function ToPost() {
    return (
        
            <div className="row">
                <div className="col-11 pt-5">
                    <Card>
                        <Card.Header>Marc</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <h5 class="card-title">Marc</h5>
                                <form>
                                    <input type="text" className="form-control form-control-dark" placeholder="Donne ton avis" />
                                    <button type="submit" class="btn btn-primary mt-3"> New Post</button>
                                </form>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
            </div>
     
    )
}

export default ToPost