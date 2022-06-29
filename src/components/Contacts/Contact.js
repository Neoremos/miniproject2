import React, { useState, useEffect, useRef } from "react";
import "./contacts.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const retrieveInfo = localStorage.getItem("informations")
  ? JSON.parse(localStorage.getItem("informations"))
  : [];

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.782056431878!2d121.04276141440681!3d14.554452182108914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8fa00b4306d%3A0x6f1a2c10154fb6b0!2s2nd%20Ave%20%26%2031st%20Street%2C%20Taguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1656126427954!5m2!1sen!2sph" width="1000" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  const notify = () =>
    toast(
      "Your message was delivered. We'll get in touch with you as soon as possible!"
    );

  const form = useRef();

  const handleReset = () => {
    setName("");
    setMessage("");
    setEmail("");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [allInfo, setAllInfo] = useState([retrieveInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const information = { name, email, message };
    setAllInfo([...allInfo, information]);
    if (email !== "" && message !== "") {
      notify(true);
      handleReset(true);
    }
    emailjs
      .sendForm(
        "service_yd8q3rm",
        "template_xrj80ki",
        form.current,
        "E9kt4kXLs3e8i9DU0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    localStorage.setItem("informations", JSON.stringify(allInfo));
  }, [allInfo]);

  return (
    <div>
      <section id="contact" className="contacts padding">
        <div className="container shadow flex">
          <div className="left row">
            <iframe title="map" src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p>
              I want to receive commercial communications and marketing
              information from Intellias by electronic means of communication
              (including Phone and e-mail).
            </p>
            <div className="items grid2">
              <div className="box">
                <h4>Address:</h4>
                <p>31st St cor 2nd Ave BGC, Taguig</p>
              </div>
              <div className="box">
                <h4>Email:</h4>
                <p>inquire@dotdesign.com</p>
              </div>
              <div className="box">
                <h4>Phone:</h4>
                <p>08-123-4567</p>
              </div>
            </div>

            <form
              ref={form}
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="flex">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <textarea
                name="message"
                col="30"
                rows="10"
                placeholder="Tell us more about the project"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <button className="contact-btn" type="submit">
                Send Message
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
