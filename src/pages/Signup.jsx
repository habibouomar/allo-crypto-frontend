import React from 'react'
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
  const uploadedImage = React.useRef(null)
  const imageUploader = React.useRef(null)
  const [image, setImage] = useState('')
  const [opacity,setOpacity] = useState('')
  const [border,setBorder] = useState('0.5px solid gold')
  const imageChanger = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  }
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

        <div class="row justify-content-center">
          <div class="col-6">
            <div 
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
            >
              <input type="file" accept='/image*' ref={imageUploader} onChange={imageChanger} style={{display:'none'}}/>
              <div
                style={{
                  height: "110px",
                  width: "110px",
                }}
                onClick={() =>{ 
                  imageUploader.current.click()
                  setOpacity('hidden')
                  setBorder('none')
                }}
              >
                <img
                  ref={uploadedImage}
                  style={{
                    width: "9%",
                    height: "16%",
                    position: "absolute",
                    left:'45.5%',
                    backgroundColor:'transparent',
                    border:border,
                    marginTop:'20px'
                  }}
                />
                <span style={{position:'absolute', fontSize:'50px', color:'gold',top:'31.9%',left:'49%',fontWeight:'lighter',cursor:'pointer',visibility:opacity}}>+</span>
                <span style={{position:'absolute',top:'46.5%',left:'46.5%'}}>Upload your image</span>
              </div>
            </div>
            <div class="mb-3" style={{marginTop:'80px'}}>
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
              {userError === true && (
                <span class="btn btn-dark">Username already exists</span>
              )}
            </div>

            <div class="mb-3">
              <label>Bio</label>
              <textarea
                {...register("bio", { required: true })}
                placeholder="About you please"
                type="text"
                class="form-control"
                name="bio"
              />
              {errors.bio && (
                <span class="btn btn-dark">
                  Please give an overview about yourself
                </span>
              )}
            </div>

            {/* <div class="mb-3">
              <label>Picture</label>
              <input
                {...register("img", { required: true })}
                placeholder="profile picture please"
                type="text"
                class="form-control"
                name="img"
              />
              {errors.img && (
                <span class="btn btn-dark">
                  Please insert a profile picture
                </span>
              )}
            </div> */}

            <button
              style={{ margin: "auto", display: "block" }}
              type="submit"
              class="btn btn-warning"
            >
              Validate
            </button>

            <br />

            <div>
              <button
                style={{ margin: "auto", display: "block" }}
                class="btn btn-dark"
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
