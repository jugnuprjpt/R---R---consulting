"use client";
import { useEffect } from "react";
import Image from "next/image";
import "flowbite";

export default function HeroSlider() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("flowbite").then((flowbite) => flowbite.init());
    }
  }, []);

  return (
    <div
      id="hero-carousel"
      className="relative w-full h-screen overflow-hidden"
      data-carousel="slide"
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 w-full h-full" data-carousel-item>
          <Image
            src="/asset/slide1.jpg"
            className="w-full h-full object-cover"
            alt="Luxury Hotel"
            fill
            priority
          />
          {/* Content Fixed */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 bg-black bg-opacity-50">
            <p className="text-lg md:text-xl tracking-widest mb-4">
              ✦ Welcome to our Premier Hotel Consulting Services ✦
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Elevate <br /> our Hotel Investment Strategy
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-2xl">
              Expert guidance in hotel property acquisition, financing,
              franchise terms, renovations, and operational strategy to maximize
              your ROI.
            </p>
            {/* <button className="mt-6 px-6 py-3 bg-[#AB8A62] text-white font-semibold rounded-lg shadow-md  transition">
              Discover Room
            </button> */}
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full hidden"
          data-carousel-item
        >
          <Image
            src="/asset/slide2.jpg"
            className="w-full h-full object-cover"
            alt="Luxury Stay"
            fill
            priority
          />
          {/* Content Fixed */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 bg-black bg-opacity-50">
            <p className="text-lg md:text-xl tracking-widest mb-4">
              ✦ Welcome to our Premier Hotel Consulting Services ✦
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Elevate <br /> our Hotel Investment Strategy
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-2xl">
              Expert guidance in hotel property acquisition, financing,
              franchise terms, renovations, and operational strategy to maximize
              your ROI.
            </p>
            {/* <button className="mt-6 px-6 py-3 bg-[#AB8A62] text-white font-semibold rounded-lg shadow-md transition">
              Explore Now
            </button> */}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 px-4 py-2 text-white bg-black bg-opacity-50 rounded-full"
        data-carousel-prev
      >
        ❮
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 z-30 px-4 py-2 text-white bg-black bg-opacity-50 rounded-full"
        data-carousel-next
      >
        ❯
      </button>
    </div>
  );
}
