import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/signup.css";

const Signup = () => {
  const [user, setUser] = useState("");
  const [bio, setBio] = useState("");
  const [img, setImg] = useState("");

  const Navigate = useNavigate();

  const poster = (e) => {
    e.preventDefault();
    fetch("http://localhost:3002/user", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        userName: user,
        aboutMe: bio,
        picture: img,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        Navigate("/login");
      });
  };

  const getData = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  const getBio = (e) => {
    e.preventDefault();
    setBio(e.target.value);
  };

  const getPicture = (e) => {
    e.preventDefault();
    setImg(e.target.value);
  };

  return (
    <div>
      <form style={{ color: "gold", fontWeight: 700 }}>
        <h1 style={{ paddingTop: "13vh", textAlign: "center" }}> SIGNUP </h1>
        <div
          style={{ padding: "25px", marginLeft: "55vh", marginRight: "55vh" }}
        >
          <div class="mb-3">
            <label>User Name</label>
            <input
              type="text"
              onChange={getData}
              class="form-control"
              name="username"
            />
          </div>

          <div class="mb-3">
            <label>Bio</label>
            <textarea
              type="text"
              onChange={getBio}
              class="form-control"
              name="bio"
            />
          </div>

          <div class="mb-3">
            <label>Picture</label>
            <input
              type="text"
              onChange={getPicture}
              class="form-control"
              name="img"
            />
          </div>
          <button
            style={{ margin: "auto", display: "block" }}
            type="submit"
            onClick={poster}
            class="btn btn-warning"
          >
            SIGNUP
          </button>
          <br></br>
          <div>
            <button
              style={{ margin: "auto", display: "block" }}
              class="btn btn-dark"
            >
              <Link style={{ textDecoration: "none" }} to="/login">
                {" "}
                Se connecter{" "}
              </Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
