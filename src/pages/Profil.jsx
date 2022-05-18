import React from "react";
import css from "../styles/profil.css"

function Profil() {
    return (
        <body>

            <div className="background-photo">
                <div className="pic">
                    <img src="https://picsum.photos/130/130?image=1027" class="rounded-circle float-start" alt="..." />
                    <button type="button" class="btn btn-dark rounded-pill border-white">Modifier profil</button>


                </div>
            </div>
            <div className="user">
            <h2 className="username">Omar</h2>
            </div>
        </body>
    )
}

export default Profil