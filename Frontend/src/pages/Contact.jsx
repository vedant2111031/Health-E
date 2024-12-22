import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      console.log("Sending email with data:", formData); // Debugging
      const result = await emailjs.send(
        "service_rtdbpts", // Your service ID
        "template_b1lyz1o", // Your template ID
        formData,
        "zcdmren8ioOPY7Z2K" // Your public key
      );

      console.log("Email sent successfully:", result); // Debugging
      toast.success("Message sent successfully!", {
        position: "top-center",
      });

      setStatus(""); // Clear status
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error); // Debugging
      toast.error("Failed to send the message. Try again!", {
        position: "top-center",
      });
      setStatus(""); // Clear status even on error
    }
  };

  return (
    <section className="py-4 shadow-md">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para text-primaryColor">
          Let us know any issue faced, or want to give us feedback for better features.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="form__label">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="form__input mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="form__input mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Write your views"
              className="form__input mt-1"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
            <textarea
              rows="4"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a comment..."
              className="form__input mt-1"
              required
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
        {status && <p className="text-center mt-4">{status}</p>}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
