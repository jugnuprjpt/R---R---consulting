"use client";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { motion } from "framer-motion";

export default function LoanServices() {
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
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg max-w-2xl text-center"
        >
          <h3 className="text-3xl text-gray-900 mt-2 font-serif">
            Loan Services
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            Get the right financial support to grow your business with our loan
            services.
          </p>
        </motion.div>
      </section>

      {/* Loan Services Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-[#AB8A62] text-base font-medium uppercase tracking-widest font-serif flex items-center justify-center gap-2">
          <span className="border-t border-[#AB8A62] w-8"></span>
          Loan Services
          <span className="border-t border-[#AB8A62] w-8"></span>
        </h2>
        <h3 className="text-3xl text-gray-900 mt-2 mb-4 font-serif">Our Loan Services</h3>

        <div>
          <p className="lg:px-36">"Unlock the financial support your hotel needs to thrive. Our tailored loan services provide flexible funding solutions for hotel owners and operators, whether you're looking to renovate, expand, or manage cash flow. With competitive rates, expert guidance, and a deep understanding of the hospitality industry, we connect you with the right financing to elevate your business. Let us help you turn your vision into reality—contact us today to explore your options."</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
