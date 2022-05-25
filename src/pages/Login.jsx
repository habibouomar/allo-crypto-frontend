import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
          Navigate("/login");
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ color: "gold", fontWeight: 700 }}
      >
        <h1 style={{ paddingTop: "22vh", textAlign: "center" }}> LOGIN </h1>
        <div
          style={{ padding: "25px", marginLeft: "55vh", marginRight: "55vh" }}
        >
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
          </div>

          <button
            style={{ margin: "auto", display: "block" }}
            type="submit"
            class="btn btn-warning"
          >
            LOGIN
          </button>
          <br></br>
          <div>
            <button
              style={{ margin: "auto", display: "block" }}
              class="btn btn-dark"
            >
              <Link style={{ textDecoration: "none" }} to="/">
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
