import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import { Power4 } from "gsap/all";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="w-full h-[150vh] sm:h-[250vh] text-white relative font-regular tracking-tighter overflow-hidden">
      <div className="image h-full w-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="h-full w-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>

      <div className="absolute top-0 h-full px-5 sm:px-20">
        <div className="para mt-[25rem] sm:text-2xl sm:leading-7">
          {[
            "Global digital design studio partnering with",
            "brands and businesses that create exceptional",
            "experiences where people live, work, and unwind.",
          ].map((item, index) => (
            <p key={index} className="overflow-hidden">
              <motion.span
                className="inline-block origin-left "
                initial={{ rotate: 30, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: "0%", opacity: 1 }}
                transition={{
                  ease: Power4.easeInOut,
                  duration: 1.5,
                  delay: index * 0.1,
                }}
              >
                {item}
              </motion.span>
            </p>
          ))}
        </div>

        <div className="heading sm:text-[14.5rem] text-7xl sm:font-light sm:my-[5rem] my-[2rem] tracking-tighter sm:leading-[12rem] leading-[4rem]">
          {["Digital", "Design", "Experience"].map((item, index) => (
            <h1 key={index} className="">
              <motion.span
                className="inline-block origin-left "
                initial={{ rotate: 10, y: "100%", opacity: 0 }}
                whileInView={{ rotate: 0, y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  ease: Power4.easeInOut,
                  duration: 1.5,
                  delay: index * 0.1,
                }}
              >
                {item}
              </motion.span>
            </h1>
          ))}
        </div>

        <FaArrowDown className="text-[#ffffffc5]" />
        <p className="para2 mt-12 sm:w-1/2 sm:text-2xl sm:leading-7">
          We help experience-driven companies thrive by making their audience
          feel the refined intricacies of their brand and product in the digital
          space. Unforgettable journeys start with a click.
        </p>

        <div className="studio">
          <a
            href=""
            className="font-semibold sm:text-lg text-sm border-b-[.1px] border-[0.5] mt-7 inline-block"
          >
            The Studio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
