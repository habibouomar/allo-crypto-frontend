import React from "react";
import Card from "react-bootstrap/Card";
import '../styles/home.css';
import { useForm } from "react-hook-form";


function ToPost(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:3002/post', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                // alert('You are post');
                props.onFinishPost(json);
            }) 
    };

   
    return (

        <div className="row">
            <div className="col-11 pt-5">
                <Card>
                    <Card.Header>Hello Marie</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <div>
                                <img className="" src="https://picsum.photos/130/130?image=1027" alt="Logo" />
                                <h5 class="card-title pt-2">The world is mine</h5>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" className="form-control form-control-dark" placeholder="Give the community your tip of the day" {...register("text")}/>
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