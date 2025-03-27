"use client";
import Image from "next/image";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-5 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Newsletter Section */}
        {/* <div className="bg-gray-100 shadow-lg p-6 rounded-lg max-w-3xl w-full mb-10">
          <h3 className="text-3xl text-gray-900 mt-2 font-serif">
            Join Our Newsletter
          </h3>
          <p className="text-gray-600 mt-2">
            Stay updated with our latest news and offers.
          </p>
          <form className="mt-4 flex flex-col sm:flex-row items-center justify-center w-full">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 rounded-t-md sm:rounded-l-md sm:rounded-t-none border border-gray-300 w-full sm:max-w-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#AB8A62] text-white px-5 py-3 rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-[#8b6f4d] transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div> */}

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left pb-10 w-full justify-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-center">
            <Image
              src="/asset/logo.png"
              width={250}
              height={250}
              alt="Footer Logo"
            />
            <p className="text-gray-600 mt-4 text-center">
              Elevating Hospitality, Maximizing Success
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-center">
            <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
            <ul className="mt-3 text-gray-600 space-y-1">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Loan Services</li>
              <li>Our history</li>
            </ul>
          </div>

          {/* Guest Services */}
          {/* <div className="flex flex-col items-center lg:items-center">
            <h4 className="text-lg font-semibold text-gray-900">
              Guest Service
            </h4>
            <ul className="mt-3 text-gray-600 space-y-1">
              <li>24/7 Front Desk</li>
              <li>Parking</li>
              <li>Room Service</li>
              <li>Free Wi-Fi</li>
              <li>Concierge Service</li>
            </ul>
          </div> */}

          {/* Contact Section */}
          <div className="flex flex-col items-center lg:items-center">
            <h4 className="text-lg font-semibold text-gray-900">Contact Us</h4>
            <p className="text-gray-600 mt-3 flex  justify-center">
              <FaPhone className="mr-2" /> +1-319-512-9039
            </p>

            <p className="text-gray-600 mt-3 flex  justify-center">
              <FaPhone className="mr-2" /> +1-319-541-1027
            </p>

            <p className="text-gray-600 flex items-center justify-center p-3">
              <FaEnvelope className="mr-2" /> presidentialinn@gmail.com
            </p>
            {/* <p className="text-gray-600 flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2" /> M5T 2L9 Toronto, Canada
            </p> */}
            {/* <div className="flex space-x-4 mt-4">
              <FaFacebook className="text-gray-600 hover:text-[#AB8A62] cursor-pointer" />
              <FaLinkedin className="text-gray-600 hover:text-[#AB8A62] cursor-pointer" />
              <FaTwitter className="text-gray-600 hover:text-[#AB8A62] cursor-pointer" />
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
