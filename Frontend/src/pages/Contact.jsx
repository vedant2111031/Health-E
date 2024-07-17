import React, { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

     
        setStatus("Message sent successfully!");
        setFormData({ email: "", subject: "", message: "" });
      
      
      
    } 
  
  

  return (
    <section className="py-4 shadow-md">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Let us know any issue faced. Or want to give us feedback for better features.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
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
    </section>
  );
};

export default Contact;
