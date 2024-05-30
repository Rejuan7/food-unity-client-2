import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const displayName = form.get("name");
    const photoURL = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    if (password.length < 6) {
      toast("Password should be at least 6 characters or longer ");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error(
        "Your password should have at least one upper case character."
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error(
        "Your password should have at least one lower case character."
      );
      return;
    }

    try {
      const result = await createUser(email, password, displayName, photoURL);
      console.log(result.user);
      e.target.reset();
      // Display success message using Toastify
      toast.success("Registration successful!");
      setTimeout(function () {
        navigate("/");
        location.reload();
      }, 2000);
    } catch (error) {
      console.error(error);
      // Display error message using Toastify
      toast.error(error.message);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-bold mt-5 mb-5">
        Please Register
      </h2>
      <Helmet>
        <title>Food Unity | Register</title>
      </Helmet>
      <form
        onSubmit={handleRegister}
        className=" border-2 border-purple-500 rounded-xl p-8  animate__animated animate__bounceInDown md:w-3/4 lg:w-1/2 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <span
            className="absolute top-12 right-4 animate__animated animate__bounceInDown text-2xl "
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
          </span>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-xl text-center mt-5 mb-5">
        You already have an account? Please{" "}
        <Link className="text-blue-600" to="/login">
          Login
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Register;
