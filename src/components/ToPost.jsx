import React from "react";

function ToPost() {
    return (
        <div className="container pt-5">
            <div className="row">

                <div class="card col-7">
                
                    <div class="card-body">
                        <image></image>
                        <h5 class="card-title">Marc</h5>
                        <input type="text" className="form-control form-control-dark" placeholder="Donne ton avis" />
                        <button type="submit" class="btn btn-primary mt-3"> New Post</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ToPost