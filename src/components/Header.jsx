import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from 'react-router-dom';




function Header() {

    const [value, setValue] = useState('')
    let navigate = useNavigate();

    const getValue= (e) => {
        setValue(e.target.value)
        console.log(e.target.value);
    }

    const checkUser = (e) =>{
        
        e.preventDefault()  
        console.log("search user value", value);

        fetch(`http://localhost:3002/user/${value}`)
        .then(res => res.json())
        .then(user => {
            console.log("resultat du user", user["user"]);
            if (user.ok) {
                localStorage.setItem("searchUser", user["user"].userName);
                localStorage.setItem("searchBio", user["user"].aboutMe);
                navigate(`/profil/${user["user"]._id}`)
            }
            else{
                alert("user not find, please try again")
            }
        })
    }

    return (
        <>
            <header className="p-3 bg-dark text-white">
                <div className="container">

                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <nav className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            <NavLink className="nav-link px-2 text-secondary" to="/profil">Profil</NavLink>
                            <NavLink className="nav-link px-2 text-white" to="/cryptomonaie">Cryptomonaie</NavLink>
                        </nav>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">

                            <input type="search"  onClick={checkUser} className="form-control form-control-dark" placeholder="Search User..." aria-label="Search" onChange={getValue} />
                            
                            {/* <button className="btn btn-warning" onClick={checkUser}>Go</button> */}
                            
                        </form>

                        <button type="button" className="btn btn-warning">Log Out</button>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header