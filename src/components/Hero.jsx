import { motion } from "framer-motion";

import { instagram } from "../assets";
import { linkedin } from "../assets";
import { github } from "../assets";
import { youtube } from "../assets";
import { arrow } from "../assets";

import { styles } from "../styles";
import { resume } from "../assets";
import { ComputersCanvas } from "./canvas";

import { social } from "../constants";

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Pranav Waykar.pdf";
    link.click();
  };
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#D71313]">Pranav</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            style={{ fontSize: "1.5rem" }}>
            I'm a Software Developer, <br className="sm:block hidden" />& a
            Content Creator
          </p>
          <div style={{ marginTop: "20px" }}>
            <button
              type="button"
              onClick={handleDownloadResume}
              className="bg-purple-700 hover:bg-purple-800 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
              Download Resume
            </button>
          </div>
          <div className="mt-5 flex flex-wrap gap-5 ">
            {social.map((social, index) => (
              <a
                key={social.title}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  transition: "transform 0.3s ease", // Add a transition effect for smooth animation
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)"; // Increase the scale on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)"; // Reset the scale when not hovered
                }}>
                {index === 0 && (
                  <img
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: "50px" }}
                  />
                )}
                {index === 1 && (
                  <img
                    src={instagram}
                    alt="instagram"
                    style={{ width: "50px" }}
                  />
                )}
                {index === 2 && (
                  <img src={github} alt="github" style={{ width: "50px" }} />
                )}
                {index === 3 && (
                  <img src={youtube} alt="youtube" style={{ width: "50px" }} />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 w-20`}>
        <img class="arrow animate-bounce" src={arrow} alt="Arrow" />
      </div>
    </section>
  );
};

export default Hero;
