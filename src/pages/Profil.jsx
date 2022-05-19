import React, { useState } from "react";
import "../styles/profil.css"

function Profil() {

    const [state, setState] = useState({
        name: "",
        bio: ""
    });

    const [name, setName] = useState('Marie')
    const [newName, setNewName] = useState('')

    const [bio, setBio] = useState('The world is mine')
    const [newBio, setNewBio] = useState('')
    
    function handleChange(evt) {
        const value = evt.target.value;
        setNewName(value)
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    const changeBio = (e) => {
        console.log(e.target.value)
        setNewBio(e.target.value)
    }
    const modalSubmit = (e) => {
        setName(newName)
        setBio(newBio)
    }

    return (
        <body>

            <div className="background-photo">
                <div className="pic">
                    <img src="https://picsum.photos/130/130?image=1027" className="rounded-circle float-start" alt="..." />
                    <button type="button" className="btn btn-dark rounded-pill border-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Modifier profil</button>
                </div>
            </div>

            <div className="user">
                <h2 className="username">{name}</h2>
            </div>

            <div className="bio">
                <p>{bio}</p>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <h5 className="modal-title" id="exampleModalLabel">Modifier le profil</h5>

                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Username</label>
                                <input class="form-control"
                                    onChange={handleChange}
                                    value={state.name}
                                    type="text"
                                    name="name"
                                    maxLength="10" />
                            </div>

                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Bio</label>
                                <input class="form-control"
                                    onChange={changeBio}
                                    type="text"
                                    name="bio"
                                    maxLength="32"
                                />
                            </div>

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-white border-dark" data-bs-dismiss="modal">Fermer</button>
                            <button type="button" className="btn btn-dark" onClick={modalSubmit}>Enregistrer</button>
                        </div>
                        
                    </div>
                </div>
            </div>

        </body>
    )
}

export default Profil