import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import bitCoin from '../styles/images/Bitcoin.jpg'
import dogeCoin from '../styles/images/dogeCoin.jpg'
import lite from '../styles/images/litcoin.png'
import eth from '../styles/images/secCoin.jpeg'
import { motion } from "framer-motion";
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
      <div className="imgs-animate">
        <motion.img className="child-one" src={bitCoin} alt="bitcoin image"  
        whileTap={{scale:0.9}}
        drag={true}
        whileDrag={{boxShadow: "0px 10px 16px gold"}}
        initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0,transition:{type:'spring',duration:2,bounce:0.5},}}
        />
        <motion.img className="child-two" src={dogeCoin} alt="bitcoin image" 
        whileTap={{scale:0.7}}
        drag={true}
        whileDrag={{boxShadow: "0px 10px 16px gold"}}
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0,transition:{type:'spring',duration:2,bounce:0.5},}}
        />
        <motion.img className="child-three" src={eth} alt="bitcoin image"  
        whileTap={{scale:0.8}}
        drag={true}
        whileDrag={{boxShadow: "0px 10px 16px silver"}}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0,transition:{type:'spring',duration:2,bounce:0.5},}}/>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ overflow: "hidden", color: "gold", fontWeight: 700 }}
      >
        <h1 style={{ paddingTop: "28vh", textAlign: "center" }}> LOGIN </h1>
        <div class="row justify-content-center">
          <div class="col-6">
            <div class="mb-3">
              <label>User Name</label>
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

            <motion.button
              whileHover={{scale:1.2}}
              whileTap={{scale:0.95,background:'black',color:'gold'}}
              style={{ margin: "auto", display: "block" }}
              type="submit"
              class="btn btn-warning"
            >
              LOGIN
            </motion.button>
            <br></br>
            <div>
              <button
                style={{ margin: "auto", display: "block" }}
                class="btn btn-dark"
              >
                <Link style={{ textDecoration: "none" }} to="/signup">
                  {" "}
                  S'inscrire{" "}
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
