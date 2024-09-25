import React from "react";
import Layout from "./Layout";
import Heading from "./Heading";
import happyPlumLogo from "../assets/images/happyPlumLogo.jpeg";
import InvisibleButton from "./InvisibleButton.jsx";

const Projects: React.FC = () => {
  return (
    <Layout className="myProjects">
      <InvisibleButton top="337%" left="40.5%" width="245px" height="60px" link="https://www.happy-plum.com" target="_blank" />
      <section className="w-full flex flex-col items-center" style={{ visibility: "hidden" }}>
        {/* Page Heading */}
        <Heading heading="Projects" />

        {/* Content Section */}
        <div className=" flex flex-col md:flex-row items-center justify-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center rounded-3xl shadow-custom max-w-sm md:max-w-md">
            <a href="https://happy-plum.com" target="_blank" rel="noopener noreferrer" className="p-0 w-full h-full">
              <img src={happyPlumLogo} alt="Happy Plum Logo" className="object-cover w-full h-auto rounded-3xl cursor-pointer hover:scale-[1.02] transition-transform duration-300" />
            </a>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-4" id="projects">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 text-center" id="projects">
              Happy Plum
            </h2>
            <p className="text-secondary text-lg md:text-xl mb-4">Happy Plum is a gen AI-powered ed-tech platform focused on transforming language learning for pre-K to K-12 students by connecting the student, the parent, and the teacher in the learning process. Our mission is to create engaging, personalized learning experiences that foster a love for languages from an early age.</p>
          </div>
        </div>

        {/* Industry Impact Section */}
        <div className="mt-12 w-full flex flex-col items-center">
          <Heading heading="Industry Impact" />
          <div className="mt-8 flex flex-col gap-8 text-secondary text-lg md:text-xl max-w-2xl">
            <p>
              <strong>AI-Driven Personalization:</strong> While many EdTech platforms offer standardized content, Happy Plum leverages generative AI to provide a truly personalized learning experience. This goes beyond simple adaptive learning by creating unique content that resonates with each student, fostering deeper engagement and better outcomes.
            </p>
            <p>
              <strong>Cultural Competency:</strong> In a globalized world, cultural understanding is as important as language proficiency. Happy Plum integrates cultural education into language learning, filling a gap in the EdTech market where cultural nuance is often overlooked. This makes our platform not just a language tool but a bridge to global citizenship.
            </p>
            <p>
              <strong>Scalability and Accessibility:</strong> Happy Plum is designed to scale, making high-quality language education accessible to students everywhere, regardless of their background. This positions us as a leader in the democratization of education, a key trend in the EdTech industry.
            </p>
            <p>
              <strong>Home-School Synergy:</strong> EdTech solutions often focus on either classroom or home learning. Happy Plum uniquely bridges this gap, creating a seamless experience that supports continuous learning across environments. This integration is increasingly important as hybrid and remote learning models become more prevalent.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
