import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-50 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900">Contact Us</h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-blue-700 mt-4 mb-8"
        >
          Reach out to us at: <a href="mailto:k9carepro6@gmail.com" className="text-blue-500 underline">k9carepro6@gmail.com</a> <br />
          
        </motion.p>

        <form
          action="mailto:k9carepro.team@example.com"
          method="POST"
          encType="text/plain"
          className="bg-white p-8 rounded-2xl shadow-md space-y-6 border border-blue-200"
        >
          <div>
            <label className="block text-blue-800 font-semibold mb-1">Name</label>
            <input
              type="text"
              name="Name"
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-blue-800 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="Email"
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-blue-800 font-semibold mb-1">Message</label>
            <textarea
              name="Message"
              rows="4"
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
