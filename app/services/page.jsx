"use client";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { motion } from "framer-motion";

export default function VendorDirectory() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section
        className="relative h-[80vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center px-6 md:px-12"
        style={{ backgroundImage: "url('/asset/HotelLoans.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10 bg-white/80 backdrop-blur-md p-4 md:p-12 rounded-2xl shadow-lg max-w-2xl text-center"
        >
          <h3 className="text-3xl text-gray-900 mt-2 font-serif">
            Our Services
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            No matter your goals, we partner with you to craft customized
            solutions that drive measurable results. Let’s unlock your hotel’s
            full potential—contact us today to learn more.
          </p>
        </motion.div>
      </section>

      {/* Vendor Categories */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-[#AB8A62] text-base font-medium uppercase tracking-widest font-serif flex items-center justify-center gap-2">
            <span className="border-t border-[#AB8A62] w-8"></span>
            Services
            <span className="border-t border-[#AB8A62] w-8"></span>
          </h2>
          <h3 className="text-3xl text-gray-900 mt-2 font-serif">
            {" "}
            Our Services
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            At R & R Hotel Consultants, we offer a comprehensive suite of
            consulting services designed to empower your hotel’s success. With
            deep industry expertise and a personalized approach, we help you
            navigate challenges and seize opportunities in today’s competitive
            hospitality landscape. Our services include
          </p>
        </div>

        {/* Category List */}
        <div className="mt-12 space-y-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Furniture & Fixtures */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center bg-gray-100 py-6 px-4 sm:px-6 md:px-10 lg:px-12 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#AB8A62] hover:text-white"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 px-3 flex items-center justify-center bg-[#AB8A62] text-white text-lg sm:text-2xl font-bold rounded-full transition-all duration-300 group-hover:scale-110">
              01
            </div>
            <div className="md:ml-6 mt-4 md:mt-0">
              <h3 className="text-lg sm:text-xl font-semibold">
                Operational Excellence
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Streamline processes, optimize staff performance, and elevate
                efficiency to deliver seamless guest experiences.
              </p>
            </div>
          </motion.div>

          {/* Kitchen & Restaurant Equipment */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse items-center bg-gray-50 py-6 px-4 sm:px-6 md:px-10 lg:px-12 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#AB8A62] hover:text-white"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 px-3 flex items-center justify-center bg-[#AB8A62] text-white text-lg sm:text-2xl font-bold rounded-full transition-all duration-300 group-hover:scale-110">
              02
            </div>
            <div className="md:mr-6 mt-4 md:mt-0">
              <h3 className="text-lg sm:text-xl font-semibold">
                Revenue Management
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Maximize profitability with data-driven strategies, dynamic
                pricing, and market analysis tailored to your property.
              </p>
            </div>
          </motion.div>

          {/* Renovation & Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center bg-gray-100 py-6 px-4 sm:px-6 md:px-10 lg:px-12 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#AB8A62] hover:text-white"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14  flex items-center justify-center bg-[#AB8A62] text-white text-lg sm:text-2xl font-bold rounded-full transition-all duration-300 group-hover:scale-110">
              03
            </div>
            <div className="md:ml-6 mt-4 md:mt-0">
              <h3 className="text-lg sm:text-xl font-semibold">
                Guest Experience Enhancement
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Create memorable stays through innovative service design, staff
                training, and quality assurance programs.
              </p>
            </div>
          </motion.div>

          {/* Technology & Security */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse items-center bg-gray-50 py-6 px-4 sm:px-6 md:px-10 lg:px-12 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#AB8A62] hover:text-white"
          >
            <div className="w-14 h-11 sm:w-14 sm:h-14 px-4 flex items-center justify-center bg-[#AB8A62] text-white text-lg sm:text-2xl font-bold rounded-full transition-all duration-300 group-hover:scale-110">
              04
            </div>
            <div className="md:mr-2 mt-4 md:mt-0">
              <h3 className="text-lg sm:text-xl font-semibold">
                Marketing & Branding
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Build a standout identity with targeted marketing campaigns,
                digital presence optimization, and brand positioning that
                resonates with your audience.
              </p>
            </div>
          </motion.div>

          {/* Housekeeping & Cleaning Supplies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center bg-gray-100 py-6 px-4 sm:px-6 md:px-10 lg:px-12 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#AB8A62] hover:text-white"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 px-4 flex items-center justify-center bg-[#AB8A62] text-white text-lg sm:text-2xl font-bold rounded-full transition-all duration-300 group-hover:scale-110">
              05
            </div>
            <div className="md:ml-6 mt-4 md:mt-0">
              <h3 className="text-lg sm:text-xl font-semibold">
                Property Development & Launch
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                From concept to opening day, we guide you through planning,
                design, and execution for a successful debut or repositioning
              </p>
            </div>
          </motion.div>
          {/* Housekeeping & Cleaning Supplies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse items-center bg-gray-50 py-6 px-4 sm:px-6 md:px-10 lg:px-12 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#AB8A62] hover:text-white"
          >
            <div className="w-14 h-11 sm:w-14 sm:h-14 px-4 flex items-center justify-center bg-[#AB8A62] text-white text-lg sm:text-2xl font-bold rounded-full transition-all duration-300 group-hover:scale-110">
              06
            </div>
            <div className="md:mr-2 mt-4 md:mt-0">
              <h3 className="text-lg sm:text-xl font-semibold">
                Sustainability Solutions
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                Implement eco-friendly practices that reduce costs, meet guest
                expectations, and align with modern hospitality trends
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
