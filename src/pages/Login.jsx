import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
          Navigate("");
        }
      });
  };

  const getData = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  return (
    <div>
      <form style={{ color: "gold", fontWeight: 700 }}>
        <h1 style={{ textAlign: "center" }}> LOGIN </h1>
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

          <button type="submit" onClick={poster} class="btn btn-warning">
            LOGIN
          </button>
          <br></br>
          <div>
            <button class="btn btn-dark">
              <Link style={{ textDecoration: "none" }} to="/signup">
                {" "}
                S'inscrire{" "}
              </Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
