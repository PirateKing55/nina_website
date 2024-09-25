import React from "react";
import Layout from "./Layout";
import Heading from "./Heading";
import InvisibleButton from "./InvisibleButton";

const AboutSection: React.FC = () => {
  return (
    <div id="about">
      <br />
      <br />
      <br />
      <br />
      <Layout id="n-about" className="myAbout">
        <InvisibleButton top="208.5%" left="23.3%" width="90px" height="37px" link="https://nsliforyouth.org/" target="_blank" backgroundColor="transparent" />
        <InvisibleButton top="208.5%" left="47.5%" width="90px" height="37px" link="https://clscholarship.org/" target="_blank" backgroundColor="transparent" />

        <section className="flex flex-col gap-8 bg-background" style={{ visibility: "hidden" }}>
          <Heading heading="About Me" />

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side - Highlighted Achievements */}
            <div className="md:w-1/2 flex flex-col items-start p-8 bg-primary text-background rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Highlighted Achievements:</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  2015 US Department of State{" "}
                  <a className="underline" href="https://www.nsliforyouth.org/" target="_blank">
                    NSLIY
                  </a>
                </li>
                <li>
                  2018 US Department of State{" "}
                  <a className="underline" href="https://clscholarship.org/" target="_blank">
                    CLS
                  </a>
                </li>
                <li>5+ years experience in the education industry</li>
              </ul>
            </div>

            {/* Right Side - Vision and Goals */}
            <div className="md:w-1/2 flex flex-col gap-6 p-8">
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-2">Vision:</h2>
                <p className="text-secondary">To impact the most number of pre-K and K-12 students worldwide with our Ed-Tech platform.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary mb-2">Future Goals:</h2>
                <p className="text-secondary">I see Happy Plum capturing the US market and would like to expand to asia and europe, and be the global leader in language learning solutions.</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default AboutSection;
