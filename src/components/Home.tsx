import React from "react";
import nina from "../assets/images/nina.jpg";
import Layout from "./Layout";
import InvisibleButton from "./InvisibleButton.jsx";

const HomeSection: React.FC = () => {
  return (
    <Layout id="home" className="myHome">
      <InvisibleButton top="64%" left="42.1%" width="135px" height="50px" link="#about" />
      <InvisibleButton top="64%" left="52.2%" width="135px" height="50px" link="#projects" />
      <section className="flex flex-col gap-5 md:flex-row items-center justify-center h-screen bg-background" style={{ visibility: "hidden" }}>
        {/* Image Section */}
        <div className="flex-shrink-0 md:w-1/2 rounded-3xl shadow-custom">
          <img src={nina} alt="Nina Greenwood" className="object-cover w-full h-auto rounded-3xl" />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col items-start p-4">
          <h1 className="text-4xl md:text-8xl font-petemoss text-primary mb-2">Nina Greenwood</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-secondary mb-4">Founder & CEO of Happy Plum</h2>
          <p className="text-secondary text-lg md:text-xl mb-8">I am a lifelong educator and passionate teacher and entrepreneur whos worked with students of all ages ranging from 1- high school.</p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a href="#about" className="inline-block px-6 py-3 bg-primary text-background font-semibold rounded-full shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              About Me
            </a>
            <a href="#projects" className="inline-block px-6 py-3 bg-primary text-background font-semibold rounded-full shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              My Work
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomeSection;
