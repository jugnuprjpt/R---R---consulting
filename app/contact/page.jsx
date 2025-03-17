"use client";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import {
  FaMapMarkerAlt,
  FaPhoneSquareAlt,
  FaEnvelopeOpenText,
  FaBusinessTime,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center px-6 md:px-12"
        style={{ backgroundImage: "url('/asset/HotelLoans.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg max-w-2xl text-center"
        >
          <h3 className="text-3xl text-gray-900 mt-2 font-serif">Contact Us</h3>
          <p className="mt-4 text-lg text-gray-700">
            Get in touch with us for any inquiries or support.
          </p>
        </motion.div>
      </section>
      <motion.section
        className="py-16 bg-white text-center"
        initial={{ opacity: 0, y: 50 }} // Start below with opacity 0
        whileInView={{ opacity: 1, y: 0 }} // Animate to normal position
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }} // Animate only once
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[#AB8A62] text-base font-medium uppercase tracking-widest font-serif flex items-center justify-center gap-2">
            <span className="border-t border-[#AB8A62] w-8"></span>
            Contact
            <span className="border-t border-[#AB8A62] w-8"></span>
          </h2>
          <h3 className="text-3xl text-gray-900 mt-2 font-serif">
            Our Contact Details
          </h3>
          <p className="mt-2 text-lg text-gray-700">
            Feel free to reach out to us through the following channels.
          </p>
        </div>

        <motion.div
          className="mt-4 flex flex-col text-lg text-gray-900 space-y-4"
          initial={{ opacity: 0, y: 30 }} // Start below
          whileInView={{ opacity: 1, y: 0 }} // Animate upwards
          transition={{ duration: 1, delay: 0.3 }} // Delayed animation
          viewport={{ once: true }}
        >
          <div className="flex gap-2 justify-center">
            <IoPerson className="text-[#AB8A62] text-xl" />
            <span>Ramesh Patel</span>
          </div>
          <div className="flex gap-2 justify-center">
            <FaPhoneSquareAlt className="text-[#AB8A62] text-xl" />
            <span>+1-319-512-9039</span>
          </div>
          <div className="flex gap-2 justify-center">
            <IoPerson className="text-[#AB8A62] text-xl" />
            <span>Raj Patel</span>
          </div>
          <div className="flex gap-2 justify-center">
            <FaPhoneSquareAlt className="text-[#AB8A62] text-xl" />
            <span>+1-319-541-1027</span>
          </div>
          <div className="flex gap-2 justify-center">
            <FaEnvelopeOpenText className="text-[#AB8A62] text-xl" />
            <span>presidentialinn@gmail.com</span>
          </div>
          {/* <div className="flex gap-2 justify-center">
            <FaBusinessTime className="text-[#AB8A62] text-2xl" />
            <span>Mon - Fri, 9:00 AM - 6:00 PM</span>
          </div> */}
        </motion.div>
      </motion.section>

      {/* Contact Form */}
      {/* <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl text-gray-900 mt-2 font-serif">Send Us a Message</h3>
          <p className="mt-4 text-lg text-gray-700">We’d love to hear from you. Fill out the form below.</p>
        </div>

        <form className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="p-4 border rounded-lg w-full" required />
            <input type="email" placeholder="Your Email" className="p-4 border rounded-lg w-full" required />
          </div>
          <textarea placeholder="Your Message" className="p-4 border rounded-lg w-full mt-6" rows="5" required></textarea>
          <button type="submit" className="mt-6 px-6 py-3 bg-[#AB8A62] text-white text-lg rounded-lg hover:bg-[#8a6d48] transition">Send Message</button>
        </form>
      </section> */}

      <Footer />
    </main>
  );
}
