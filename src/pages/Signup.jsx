import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/signup.css";

const Signup = () => {
  const [user, setUser] = useState("");
  const [bio, setBio] = useState("");
  const [img, setImg] = useState("");

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
      .then((res) => res.json(res))
      .then((json) => console.log(json));
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
    <div className="div-form">
      <form>
        <div>
          <input type="text" name="name" onChange={getData} />
        </div>
        <div>
          <textarea name="bio" onChange={getBio} />
        </div>
        <div>
          <input className="ii" type="text" name="img" onChange={getPicture} />
        </div>
        <div>
          <button type="submit" onClick={poster}>
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
