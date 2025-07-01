import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const URI = "http://localhost:5000/api/auth/login";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  
  const {storeTokenInLS}=useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmits = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(URI, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("login", response);


      if (response.ok) {

        alert("Login successfully");

        const res_data= await response.json();
        console.log(res_data);
        storeTokenInLS(res_data.token);
        
        setUser({
          email: "",
          password: "",
        });

        navigate("/");

      } else {
        alert("Invalid credential");
      }
    } catch (error) {
      console.log("login", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/regImg.jpg"
                  alt="Login image"
                  width="400"
                  height="250"
                />
              </div>
              <div className="login page">
                <h1 className="main-heading mb-3">Login Form</h1>
                <form onSubmit={handleSubmits}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter the Email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div> 
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter the password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
