import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const ContactUs = () => {
  // EmailJS removed — using mailto fallback

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fallback: open user's email client with prefilled content
    const subject = encodeURIComponent(
      formData.subject || "Contact from website"
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const mailto = `mailto:your-email@gmail.com?subject=${subject}&body=${body}`;

    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-base-100 to-base-200 p-6">
      <motion.div
        className="w-full max-w-2xl bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-6 text-sm text-base-content/70">
          Send us a message and we'll get back to you shortly.
        </p>

        {submitted && (
          <div className="alert alert-success mb-4">
            <FaCheckCircle /> <span>Message sent successfully.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="input input-bordered w-full"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="input input-bordered w-full"
            required
          />
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="textarea textarea-bordered w-full"
            required
          />

          <button
            type="submit"
            className="btn btn-primary w-full flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? "Sending…" : "Send Message"}
            <FaPaperPlane />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
