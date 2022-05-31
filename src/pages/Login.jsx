import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
// import images from "../styles/images/logo-allo_crypto.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState(false);
  const Navigate = useNavigate();

  const onSubmit = (data) => {
    fetch(`http://localhost:3002/user/${data.username}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.ok) {
          const userId = json.user._id;
          const userName = json.user.userName;
          const aboutMe = json.user.aboutMe;

          localStorage.setItem("userId", userId);
          localStorage.setItem("userName", userName);
          localStorage.setItem("bio", aboutMe);

          Navigate("/home");
        } else {
          setUser(true);
          Navigate("/");
        }
      });
  };

  return (
    <div>
      <div>
        <img
          className="logo-login"
          src="/img/logo-allo_crypto.png"
          alt="logo-crypto"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ overflow: "hidden", color: "gold", fontWeight: 700 }}
      >
        <h1 style={{ textAlign: "center" }}> Login </h1>
        <div class="row justify-content-center">
          <div class="col-6">
            <div class="mb-3">
              <label>Username</label>
              <input
                {...register("username", { required: true })}
                placeholder="Username please"
                type="text"
                class="form-control"
                name="username"
              />
              {errors.username && (
                <span class="btn btn-dark">Username required</span>
              )}
              {user && <span class="btn btn-dark">Username not exists</span>}
            </div>

            <button
              style={{ margin: "auto", display: "block" }}
              type="submit"
              class="btn btn-warning"
            >
              Validate
            </button>
            <br></br>
            <div>
              <button
                style={{ margin: "auto", display: "block" }}
                class="btn btn-dark"
              >
                <Link style={{ textDecoration: "none" }} to="/signup">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
