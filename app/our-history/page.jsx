"use client";

import { useEffect } from "react";
import "flowbite";
// import {
//   Accordion,
//   AccordionPanel,
//   AccordionTitle,
//   AccordionContent,
// } from "flowbite-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import {
  FaTools,
  FaClipboardCheck,
  FaBell,
  FaCalendarCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function MaintenanceScheduler() {
  useEffect(() => {
    import("flowbite").then(() => {
      console.log("Flowbite Initialized");
    });
  }, []);

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
            Our history
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            Plan, track, and manage your hotel's maintenance tasks efficiently.
          </p>
        </motion.div>
      </section>
      <section className="py-16 bg-gray-200 flex flex-col items-center">
        <div className="max-w-5xl text-center px-6">
          <h2 className="text-[#AB8A62] text-base font-medium uppercase tracking-widest font-serif flex items-center justify-center gap-2">
            <span className="border-t border-[#AB8A62] w-8"></span>
            history
            <span className="border-t border-[#AB8A62] w-8"></span>
          </h2>
          <h3 className="text-3xl text-gray-900 mt-2 font-serif">
            Our history
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            Keep your hotel facilities in top condition with a well-organized
            Our history.
          </p>
        </div>

        <div className="mt-12 w-3/4">
          {/* <Accordion collapseAll> */}
          {/* 1st Item */}
          {/* <AccordionPanel> */}
          <div className="bg-[#8B6F4A] text-white p-5">
            <div className="flex items-center gap-3">
              <FaClipboardCheck /> Our history Detail
            </div>
          </div>
          <div className="bg-white p-5 border border-gray-300">
            <p className="text-gray-700 leading-7 space-y-4 p-5">
              S & S Hotels, Inc. is a multi-generational hospitality company
              with a legacy that began in 1987 under the vision of Bachubhai P.
              Patel. That year, Bachubhai embarked on a journey to secure a
              brighter future for himself and his family. Leaving a small
              village in India with his eldest daughter, Rekha Patel, he arrived
              in Chicago, Illinois, where he was welcomed by his brother,
              Ishwar, who provided temporary lodging. With limited resources,
              Bachubhai secured employment in a factory, enduring challenging
              working conditions to support his family.
            </p>
            <p className="text-gray-700 leading-7 space-y-4 p-5">
              In 1988, after diligent saving, Bachubhai reunited with his wife,
              Kamla, and their two sons, bringing them from India to a modest
              apartment on Springfield and Avery in Chicago. The family shared
              the space with extended relatives, and both Bachubhai and Kamla
              took factory jobs, commuting over an hour each way via multiple
              buses. Language barriers occasionally led to navigational
              challenges, but their determination remained unwavering. Over four
              years, earning an average of $3.40 per hour combined, they saved
              enough to purchase their first home—a modest 1,200-square-foot
              residence in the suburbs. While proximity to key landmarks was an
              advantage, urban life posed challenges for their sons, prompting
              Bachubhai and Kamla to seek a fresh start.
            </p>
            <p className="text-gray-700 leading-7 space-y-4 p-5">
              In 2001, the family made a pivotal investment by acquiring The
              Cooper Motel in Tuscola, Illinois. This acquisition marked the
              inception of their business and provided a healthier environment
              for the family. Initially resistant, sons Ray and Raj eventually
              embraced their parents’ vision. After inheriting the motel, they
              dedicated themselves to its improvement—overseeing renovations,
              enhancing sales, and prioritizing exceptional customer service.
              Through resourceful negotiations with other hotels, they acquired
              updated furnishings, elevating the motel’s appeal.
            </p>
            <p className="text-gray-700 leading-7 space-y-4 p-5">
              In 2006, Raj expanded the family portfolio by purchasing a
              shuttered hotel in West Branch, Iowa. This milestone was
              overshadowed by the tragic passing of Bachubhai later that year, a
              loss attributed to years of labor in harsh factory conditions.
              Following a period of mourning, Raj and Ray channeled their energy
              into revitalizing the West Branch property. Within three months of
              reopening, occupancy soared from negligible to 100%. The addition
              of a basement lounge boosted revenue and fostered customer
              loyalty, while its strategic location off Interstate 80 attracted
              travelers. Over the years, extensive renovations—including a
              modernized front desk, revamped guest bathrooms, and updated
              bedrooms—transformed the property into a source of family pride.
            </p>
            <p className="text-gray-700 leading-7 space-y-4 p-5">
              Between 2011 and 2013, the brothers acquired three Wyndham-branded
              hotels, applying their proven formula of renovation, revenue
              growth, and guest retention. By forging corporate partnerships in
              Muscatine, they secured sustained business through repeat
              clientele. In 2014, they purchased the Baymont Inn and Suites in
              Iowa City/Coralville, a property in a bustling college town
              requiring significant upgrades. Committing to 12-hour workdays,
              seven days a week, Raj managed operations and front desk duties,
              while Ray oversaw finances and renovation design. Their efforts
              included room refurbishments and a $250,000 remodel of the
              breakfast area and lobby, enhancing the hotel’s marketability.
            </p>
            <p className="text-gray-700 leading-7 space-y-4 p-5">
              The end of 2017 marked a significant milestone with the
              acquisition of their first Radisson hotel, thrusting the company
              into the upscale hospitality sector. The brothers adeptly reduced
              operational costs while maintaining quality. In 2018, they
              expanded further with a hotel in Lincoln, Nebraska, followed by
              two additional properties in the Quad Cities later that year.
              Today, Raj and Ray remain committed to their family-oriented
              business model, focusing on operational excellence, guest
              satisfaction, and continued growth.
            </p>
            <p className="text-gray-700 leading-7 space-y-4 p-5">
              S & S Hotels, Inc. stands as a testament to resilience, hard work,
              and a steadfast dedication to building a legacy of hospitality.
            </p>
          </div>

          {/* </AccordionPanel> */}
          {/* </Accordion> */}
        </div>
      </section>

      <Footer />
    </main>
  );
}
