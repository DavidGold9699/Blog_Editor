"use client";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React, { useState } from "react";

const ContactComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name && email && message) {
      try {
        const response = await fetch("https://formspree.io/f/xanyyjlj", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        });

        if (response.ok) {
          setModalMessage("Your message has been sent successfully.");
        } else {
          setModalMessage(
            "Failed to send your message. Please try again later."
          );
        }
      } catch (error) {
        setModalMessage("An error occurred. Please try again later.");
      }
    } else {
      setModalMessage("Please fill in all fields.");
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <div className="w-full flex flex-col items-center justify-center min-h-screen pt-[25vh] pb-[20vh]">
        <div className="text-center mb-8">
          <h3 className="text-[60px] text-[#E7E7E7] font-semibold">
            Contact Us
          </h3>
          <p className="text-[20px] text-[#737373] mt-4">
            Need to get in touch with us? Fill out the form with your inquiry or
            email us at
          </p>
        </div>
        <div className="w-full max-w-[600px] text-white px-10 py-10">
          <form className="grid grid-cols-1 gap-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-lg font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="px-4 py-2 border border-[#59B7E9] rounded-lg bg-transparent text-white placeholder-[#737373]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="px-4 py-2 border border-[#59B7E9] rounded-lg bg-transparent text-white placeholder-[#737373]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message"
                className="px-4 py-2 border border-[#59B7E9] rounded-lg bg-transparent text-white placeholder-[#737373]"
                rows="4"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-[#46464D]">
                I agree to the Terms of Use and Privacy Policy
              </span>
            </div>
            <button
              type="submit"
              className="w-[20%] h-[170%] bg-[#59B7E9] text-white rounded-lg shadow-md flex items-center justify-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>{modalMessage}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-[#59B7E9] text-white rounded-lg px-4 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default ContactComp;
