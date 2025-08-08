import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-hot-toast";
const URI = `${import.meta.env.VITE_API_URL}/api/auth/register`;

export const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URI, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
       
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
         toast.success("Registration successful");
        navigate("/login");
        
      } else {
        console.error("Registration failed:", await response.text());
        toast.error("Registration failed.");
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <section className="section-registration">
      <div className="container grid grid-two-cols">
        <div className="registration-image">
          <img src="/images/regImg.jpg" alt="register-form" />
        </div>
        <div className="registration-form">
          <h1>Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter your username"
                required
                autoComplete="off"
                value={user.userName}
                onChange={handleInput}
              />
            </div>
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
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                required
                autoComplete="off"
                value={user.phone}
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
            <button type="submit">Register Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};
