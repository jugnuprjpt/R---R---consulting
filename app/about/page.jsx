"use client";
import Image from "next/image";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center px-6 md:px-12"
        style={{ backgroundImage: "url('/asset/slide1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10 bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-lg max-w-lg text-center"
        >
          <h3 className="text-3xl text-gray-900 mt-2 font-serif">About Us</h3>
          <p className="mt-4 text-lg text-gray-700">
            Welcome to our hotel. We offer luxury and comfort with exceptional
            services.
          </p>
        </motion.div>
      </section>
      <section className="relative py-16 md:py-10 px-6 md:px-6">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative  right-0"
            >
              <Image
                src="/asset/about-1.jpg"
                width={600}
                height={100}
                alt="Luxury Bedroom"
                className="rounded-lg "
              />
              <div className="absolute top-[-30px] right-[-15px] md:right-[-5px] lg:right-[-15px] w-[230px] sm:w-[300px]">
                <Image
                  src="/asset/about-2.jpg"
                  width={300}
                  height={200}
                  alt="Small Bedroom"
                  className="rounded-2xl shadow-lg border-4 border-white"
                />
              </div>
              <div className="absolute bottom-[-40px] left-[-20px] bg-white shadow-lg rounded-xl p-4 flex items-center gap-4">
                <div className="bg-[#F8F3ED] p-3 rounded-full">
                  <FaUsers className="text-2xl text-[#9B855A]" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[#252525]">50+</p>
                  <p className="text-gray-600 text-sm">Experience Staff</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#AB8A62] text-base font-medium uppercase tracking-widest font-serif flex items-center justify-start gap-2 mt-6">
                <span className="border-t border-[#AB8A62] w-8"></span>
                About Us
                <span className="border-t border-[#AB8A62] w-8"></span>
              </h2>
              <h3 className="text-3xl text-gray-900 mt-2 font-serif">
                Welcome To Our <br /> R & R Hotel Consulting{" "}
              </h3>
              <p className="text-gray-600 mt-4">
                At R & R Hotel Consultants, we’re passionate about shaping the
                future of hospitality. Founded by a team of seasoned hotel
                industry experts, we bring decades of hands-on experience to
                every project, blending innovative thinking with proven
                strategies. Our mission? To empower hoteliers like you with the
                tools, insights, and solutions needed to thrive in an
                ever-evolving market. We’ve worked with boutique properties,
                luxury resorts, and everything in between, helping our clients
                boost profitability, enhance guest satisfaction, and achieve
                operational excellence. What sets us apart is our commitment to
                partnership—we don’t just consult, we collaborate. Your vision
                becomes ours, and together, we turn challenges into
                opportunities. With a global perspective and a local touch, we
                tailor our approach to fit your unique needs, delivering results
                that matter. At [Company Name], your success is our legacy.
                Let’s create something extraordinary—together."
              </p>
              {/* <button className="mt-6 bg-[#9B855A] text-white py-2 px-6 rounded-full shadow-lg hover:bg-[#7a6b4a]">
              Learn More
            </button> */}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl text-gray-900 mt-2 font-serif">Our Team</h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
            >
              <Image
                src="/asset/user2.jpg"
                alt="Team Member 1"
                width={150}
                height={150}
                className="rounded-full mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Raj Patel
              </h3>
              <p className="mt-2 text-gray-600">Partner</p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.4,
              }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
            >
              <Image
                src="/asset/user2.jpg"
                alt="Team Member 2"
                width={150}
                height={150}
                className="rounded-full mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Ramesh Patel
              </h3>
              <p className="mt-2 text-gray-600">CEO</p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.6,
              }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
            >
              <Image
                src="/asset/user2.jpg"
                alt="Team Member 3"
                width={150}
                height={150}
                className="rounded-full mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Kirit Patel
              </h3>
              <p className="mt-2 text-gray-600">Partner</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
