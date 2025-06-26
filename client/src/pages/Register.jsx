import { useState } from "react";
import { useNavigate } from "react-router-dom";
const URI ="http://localhost:5000/api/auth/register";
export const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  // handling the input values

  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name; // user target the filed here for type
    let value = e.target.value; // user write or pass the value to field

    // its our updated function it use to update the values that came from target values into user field useState
    setUser({
      ...user, // use of spreed operator  it means if already filed values are remain same if changes in one input field
      [name]: value, // for dynamic selection of type of name
    });
  };

  //   handling the form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(user);
    console.log(user);

    try {
      const response = await fetch(URI, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setUser({
          userName: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login")
      }

      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/regImg.jpg"
                  alt="register-form "
                  width="400"
                  height="250"
                />
              </div>
              <div className="registration-page">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="userName">userName</label>
                    <input
                      type="text"
                      name="userName"
                      id="userName"
                      placeholder="Enter your userName"
                      required
                      autoComplete="off"
                      value={user.userName}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
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
                    <label htmlFor="phone">phone</label>
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
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password "
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />

                  <button type="submit" className="btn-btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
