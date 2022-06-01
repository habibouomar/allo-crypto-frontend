import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/signup.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userError, setUserError] = useState(false);
  const Navigate = useNavigate();

  const onSubmit = (data) => {
    fetch("http://localhost:3002/user", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        userName: data.username,
        aboutMe: data.bio,
        picture: data.img,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.Error === false) {
          Navigate("/signup");
          setUserError(true);
        } else {
          Navigate("/");
          console.log(json);
        }
      });
  };

  return (
    <div>
      <div>
        <img
          className="logo-signup"
          src="/img/logo-allo_crypto.png"
          alt="logo-crypto"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ overflow: "hidden", color: "gold", fontWeight: 700 }}
      >
        <h1 style={{ textAlign: "center" }}> Sign Up </h1>

        <div className="row justify-content-center">
          <div className="col-6">
            <div className="mb-3">
              <label>Username</label>
              <input
                {...register("username", { required: true })}
                placeholder="Username please"
                type="text"
                className="form-control"
                name="username"
              />
              {errors.username && (
                <span className="btn btn-dark">Username required</span>
              )}
              {userError === true && (
                <span className="btn btn-dark">Username already exists</span>
              )}
            </div>

            <div className="mb-3">
              <label>Bio</label>
              <textarea
                {...register("bio", { required: true })}
                placeholder="About you please"
                type="text"
                className="form-control"
                name="bio"
              />
              {errors.bio && (
                <span className="btn btn-dark">
                  Please give an overview about yourself
                </span>
              )}
            </div>

            {/* <div className="mb-3">
              <label>Picture</label>
              <input
                {...register("img", { required: true })}
                placeholder="profile picture please"
                type="text"
                className="form-control"
                name="img"
              />
              {errors.img && (
                <span className="btn btn-dark">
                  Please insert a profile picture
                </span>
              )}
            </div> */}

            <button
              style={{ margin: "auto", display: "block" }}
              type="submit"
              className="btn btn-warning"
            >
              Validate
            </button>

            <br />

            <div>
              <button
                style={{ margin: "auto", display: "block" }}
                className="btn btn-dark"
              >
                <Link style={{ textDecoration: "none" }} to="/">
                  Login
                </Link>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
