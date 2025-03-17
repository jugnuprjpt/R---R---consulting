"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import Image from "next/image";

export default function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 xl:px-3 xxl:px-4">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/asset/logo.png"
              alt="S&S Logo"
              width={130} // Set appropriate width
              height={130} // Set appropriate height
              className="w-auto h-auto"
            />
          </Link>
          <div className="hidden lg:flex space-x-3 xl:space-x-4  items-center">
            <NavLinks />
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"
          } lg:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-3`}
      >
        <NavLinks />
      </div>
    </nav>
  );
}

function NavLinks() {
  return (
    <>
      <Link
        href="/about"
        className="block text-center  text-gray-700 hover:text-[#AB8A62] text-sm font-medium "
      >
        About Us
      </Link>
      <Link
        href="/services"
        className="block text-center  text-gray-700 hover:text-[#AB8A62] text-sm font-medium "
      >
        Our Services
      </Link>
      <Link
        href="/loan-services"
        className="block text-center  text-gray-700 hover:text-[#AB8A62] text-sm font-medium "
      >
        Loan Services
      </Link>
      <Link
        href="/our-history"
        className="block text-center  text-gray-700 hover:text-[#AB8A62] text-sm font-medium ">
        Our history
      </Link>
      <Link
        href="/contact"
        className="block text-center  bg-[#AB8A62] text-white py-2 rounded-md text-sm font-medium lg:inline-block lg:px-4 lg:py-2"
      >
        Contact Us
      </Link>
    </>
  );
}
