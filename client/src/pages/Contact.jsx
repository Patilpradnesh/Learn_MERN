import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {
  const [contact, setContact] = useState({
    userName: "",
    email: "",
    message: "",
  });

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setContact({
        userName: user.userName || "",
        email: user.email || "",
        message: "",
      });
    }
  }, [user]);

  const handleInput = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    // Add logic to send data to backend here
  };

  return (
    <section className="section-contact">
      <div className="container">
        <h1 >Contact Us</h1>
      </div>
      <div className="container grid grid-two-cols">
        <div className="contact-image">
          <img src="/images/regImg.jpg" alt="Contact form" />
        </div>
        <div className="contact-form">
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
                value={contact.userName}
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
                value={contact.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                required
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <section className="container" style={{ marginTop: "4rem" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7570.7743835281335!2d73.90482231597154!3d18.420721020937364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c058396c3aa3%3A0xda785dfcd808849f!2sTrinity%20Academy%20of%20Engineering!5e0!3m2!1sen!2sin!4v1750674281758!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "var(--border-radius)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </section>
  );
};
