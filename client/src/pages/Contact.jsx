import { useState } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {
  const [contact, setContact] = useState({
    userName: "",
    email: "",
    message: "",
  });

  const [userData,setUserData]= useState(true);

  const {user}= useAuth();
  if(userData && user){
    setContact({
      userName:user.userName,
      email:user.email,
      message:"",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-contact">
            <div className="contact-content container">
              <h1 className="mai-heading mb-3">Contact Us </h1>
              <br />
            </div>
            <div className="container grid grid-two-cols">
              <div className="contact-image">
                <img
                  src="/images/regImg.jpg"
                  alt="Contact form "
                  width="400"
                  height="350"
                />
              </div>
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="userName">userName</label>
                    <input
                      type="userName"
                      name="userName"
                      id="userName"
                      placeholder="Enter you userName"
                      required
                      autocomplete="off"
                      value={contact.userName}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter you Email"
                      required
                      autocomplete="off"
                      value={contact.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="message">message</label>
                    <textarea
                      type="message"
                      name="message"
                      id="message"
                      placeholder="Enter your message"
                      required
                      autocomplete="off"
                      value={contact.message}
                      onChange={handleInput}
                      cols="30"
                      rows="6"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn-btn-submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <section className="mb-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7570.7743835281335!2d73.90482231597154!3d18.420721020937364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c058396c3aa3%3A0xda785dfcd808849f!2sTrinity%20Academy%20of%20Engineering!5e0!3m2!1sen!2sin!4v1750674281758!5m2!1sen!2sin"
              width="1000"
              height="450"
              allowfullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </main>
      </section>
    </>
  );
};
