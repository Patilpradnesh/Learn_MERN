import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from "react-hot-toast"
const URI = `${import.meta.env.VITE_API_URL}/api/auth/login`;

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { storeTokenInLS,userAuthentication } = useAuth();

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); // in squear brakets dynamic data is use which chnage as per the input value 
  };

  const handleSubmits = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URI, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
       toast.success("Login successful");
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        await userAuthentication(res_data.token);
        navigate("/");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.log("login", error);
    }
  };

  return (
    <section className="section-login">
      <div className="container grid grid-two-cols">
        <div className="login-image">
         <img src="/images/Login.jpg" alt="Login Img" />
        </div>
        <div className="login-form">
          <h1>Login Form</h1>
          <form onSubmit={handleSubmits}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};
