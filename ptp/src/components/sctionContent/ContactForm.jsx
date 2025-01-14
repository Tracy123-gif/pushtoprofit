import React, { useState } from "react";
import axios from "axios";
import SubmitMessageBtn from "../buttons/SubmitMessageBtn";



const ContactForm = () => {



const url = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // State to manage feedback to the user
  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setIsLoading(true); // Show loading spinner or disable the button

    try {
      const response = await axios.post( url, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      );
      console.log(url);
      

      setResponseMessage(response.data.message); // Success message
      setFormData({ fullName: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setResponseMessage(
        error.response?.data?.error || "Something went wrong. Please try again.", url
      );
      console.log(url);
      
    } finally {
      setIsLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="contact-form bg-gray-200 p-9 w-1/2 max-sm:w-full max-sm:p-5 ">
      <h2 className="text-4xl text-yellow-700 my-5 ">Contact Us</h2>
      <form className="flex flex-col gap-7" onSubmit={handleSubmit} >
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          <div>
            <input
              className="outline-none bg-white rounded-md formInput w-full p-2"
              placeholder="Your full name"
              type="text"
              name="fullName" // Updated name attribute
              value={formData.fullName} // Matches the formData key
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className="outline-none bg-white rounded-md formInput w-full p-2"
              placeholder="Email address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <textarea
            className="outline-none bg-white rounded-md formInput w-full "
            placeholder="Write your message here..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <SubmitMessageBtn isLoading={isLoading} setIsLoading={setIsLoading}   />
      </form>
      {responseMessage && <p className="mt-5">{responseMessage}</p>}
    </div>
  );
};

export default ContactForm;
