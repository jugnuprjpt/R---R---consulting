"use client";
import Image from "next/image";
import Navbar from "../components/common/Navbar";
import HomeBanner from "../components/common/HomeBanner";
import Footer from "../components/common/Footer";
import { FaPlay } from "react-icons/fa";
import "flowbite";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Premium Hotel Consultancy Services | Luxury Accommodation Solutions
        </title>
        <meta
          name="description"
          content="Expert hotel consultancy specializing in luxury rooms, security systems, fitness centers, and swimming pool facilities. Enhance your hotel's guest experience."
        />
        <meta
          name="keywords"
          content="hotel consultancy, luxury suites, hotel security, fitness center consulting, swimming pool design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <HomeBanner />

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-[#AB8A62] text-lg font-medium uppercase tracking-widest font-serif flex items-center justify-center gap-2">
              <span className="border-t border-[#AB8A62] w-8"></span>
              Facilities
              <span className="border-t border-[#AB8A62] w-8"></span>
            </h2>
            <h1 className="text-5xl text-gray-900 mt-2 font-serif">
              Hotel Facilities
            </h1>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center max-w-sm"
              >
                <Image
                  src="/asset/bed.svg"
                  alt="Rooms and Suites"
                  width={60}
                  height={60}
                  className="mx-auto mb-4"
                />
                <h3 className="text-2xl font-serif text-gray-900">
                  Rooms and Suites
                </h3>
                <p className="mt-3 text-gray-600 text-lg">
                  Varied types of rooms, from standard to luxury suites,
                  equipped with essentials.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center max-w-sm"
              >
                <Image
                  src="/asset/security.svg"
                  alt="24-Hour Security"
                  width={60}
                  height={60}
                  className="mx-auto mb-4"
                />
                <h3 className="text-2xl font-serif text-gray-900">
                  24-Hour Security
                </h3>
                <p className="mt-3 text-gray-600 text-lg">
                  On-site security personnel and best surveillance, ensuring
                  safety for valuables.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center max-w-sm"
              >
                <Image
                  src="/asset/gym.svg"
                  alt="Fitness Center"
                  width={60}
                  height={60}
                  className="mx-auto mb-4"
                />
                <h3 className="text-2xl font-serif text-gray-900">
                  Fitness Center
                </h3>
                <p className="mt-3 text-gray-600 text-lg">
                  Equipped with exercise machines, offering massages, facials,
                  and treatments.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center max-w-sm"
              >
                <Image
                  src="/asset/swimming-pool.svg"
                  alt="Swimming Pool"
                  width={60}
                  height={60}
                  className="mx-auto mb-4"
                />
                <h3 className="text-2xl font-serif text-gray-900">
                  Swimming Pool
                </h3>
                <p className="mt-3 text-gray-600 text-lg">
                  Indoor or outdoor pools for leisure or exercise, with
                  additional spa services.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
            {/* Left Side - Image Box (40%) */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-[40%] flex justify-center"
            >
              <div
                className="relative rounded-full shadow-lg overflow-hidden transform transition-transform duration-500 
                          hover:scale-105 hover:outline hover:outline-4 hover:outline-[#AB8A62]"
              >
                <Image
                  src="/asset/user2.jpg"
                  alt="Luxury Hotel Room"
                  width={400}
                  height={300}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </motion.div>

            {/* Right Side - Content (60%) */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-[60%] text-center md:text-left mt-10 md:mt-0 px-6"
            >
              <h2 className="text-[#AB8A62] text-lg font-medium uppercase tracking-widest font-serif flex items-center justify-center md:justify-start gap-2">
                <span className="border-t border-[#AB8A62] w-8"></span>R & R
                Hotel Consultants
                <span className="border-t border-[#AB8A62] w-8"></span>
              </h2>
              <h3 className="text-4xl md:text-5xl text-gray-900 mt-2 font-serif">
                Welcome To R & R Hotel Consultants
              </h3>
              <p className="text-lg text-gray-700 mt-4 italic">
                "Welcome to R & R Hotel Consultants your trusted partner in
                hotel success. We specialize in transforming hospitality
                businesses through expert consulting services tailored to your
                unique needs. From boosting operational efficiency and enhancing
                guest experiences to maximizing revenue and profitability, our
                team of seasoned industry professionals is here to guide you
                every step of the way. Whether you’re launching a new property,
                revitalizing an existing one, or seeking innovative strategies
                to stay ahead, we deliver results-driven solutions that elevate
                your hotel to new heights. Let’s build your future in
                hospitality—together."
              </p>
              <h4 className="mt-4 text-xl font-bold text-gray-900">
                Ramesh Patel
              </h4>
              {/* <p className="text-gray-600">COO of Apex Solutions</p> */}
            </motion.div>
          </div>
        </section>

        <section>
          <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
            <Image
              src="/asset/video-main.jpg"
              alt="Create Section Background"
              layout="fill"
              objectFit="cover"
              className="brightness-90"
            />
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10 flex items-center justify-center w-28 h-28"
            >
              <div className="absolute w-36 h-36 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="text-circle"
                      d="M 50,50 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0"
                    />
                  </defs>
                  <text
                    fill="white"
                    fontSize="9"
                    fontWeight="bold"
                    letterSpacing="2"
                  >
                    <textPath
                      href="#text-circle"
                      startOffset="10%"
                      textAnchor="middle"
                    >
                      * Visit Our Hotel * Visit Now* Visit Our Hotel *Visit Now*
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="flex items-center justify-center w-28 h-28 bg-[rgba(165,142,109,0.8)] rounded-full cursor-pointer border-2 border-white">
                <FaPlay className="text-white text-3xl" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gray-100 text-center">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-[#AB8A62] text-lg font-medium uppercase tracking-widest font-serif flex items-center justify-center gap-2"
            >
              <span className="border-t border-[#AB8A62] w-8"></span>
              Instagram Post
              <span className="border-t border-[#AB8A62] w-8"></span>
            </motion.h2>
            <motion.h3
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl text-gray-900 mt-2 font-serif"
            >
              Instagram Post
            </motion.h3>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Static Images */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg shadow-md w-full aspect-square"
              >
                <Image
                  src="/asset/insta1.jpg"
                  alt="Instagram post 1"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white">View Post</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg shadow-md w-full aspect-square"
              >
                <Image
                  src="/asset/insta2.jpg"
                  alt="Instagram post 2"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white">View Post</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg shadow-md w-full aspect-square"
              >
                <Image
                  src="/asset/insta3.jpg"
                  alt="Instagram post 3"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white">View Post</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg shadow-md w-full aspect-square"
              >
                <Image
                  src="/asset/insta4.jpg"
                  alt="Instagram post 4"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white">View Post</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg shadow-md w-full aspect-square"
              >
                <Image
                  src="/asset/insta5.jpg"
                  alt="Instagram post 5"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white">View Post</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
