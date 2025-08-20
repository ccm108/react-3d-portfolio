import React, { useRef } from "react";
import { Particles } from "../components/Particles";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t2p1gb7",   //EmailJS service ID
        "template_84lnk5y",  //EmailJS template ID
        formRef.current,
        "GE8WO3sJT95AjmVv-"  //EmailJS public key
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Something went wrong, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center c-space section-spacing min-h-screen"
    >
      {/* Particle Background */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Contact Form Container */}
      <div className="flex flex-col items-center justify-center w-full max-w-md sm:w-[600px] sm:h-[400px] p-8 mx-auto border border-white/10 rounded-2xl bg-primary backdrop-blur-md">
        {/* Section Title */}
        <h2 className="text-heading text-3xl font-bold mb-4">Contact Me</h2>

        {/* Email Form */}
        <form ref={formRef} onSubmit={sendEmail} className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="field-input"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="field-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="field-input"
            rows="4"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-3 text-lg font-medium text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
