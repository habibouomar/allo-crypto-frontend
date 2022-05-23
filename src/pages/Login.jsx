import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const Navigate = useNavigate();

  const poster = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3002/user/${user}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.ok) {
          Navigate("/");
          console.log("test");
        } else {
          Navigate("/signup");
        }
      });
  };

  const getData = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  return (
    <div className="div-form">
      <form>
        <div>
          <input type="text" name="name" onChange={getData} />
        </div>
        <div>
          <button type="submit" onClick={poster}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
