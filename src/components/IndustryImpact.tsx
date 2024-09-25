import React from "react";
import Layout from "./Layout";
import Heading from "./Heading";
import happyPlumLogo from "../assets/images/happyPlumLogo.jpeg";

interface Blog {
  id: number;
  title: string;
  image: string;
  link: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Cheverus diver overcomes the odds to lead her team",
    image: happyPlumLogo,
    link: "https://wgme.com/sports/content/cheverus-diver-overcomes-the-odds-to-lead-her-team",
  },
  {
    id: 2,
    title: "Nina Greenwood - 2017-18 - Women's Swimming and Diving",
    image: happyPlumLogo,
    link: "https://wheatoncollegelyons.com/sports/womens-swimming-and-diving/roster/nina-greenwood/4221",
  },
];

const MediaSection: React.FC = () => {
  return (
    <Layout id="n-industry-impact" className="myIndustryImpact">
      <section className="w-full flex flex-col items-center" style={{ visibility: "hidden" }}>
        {/* Page Heading */}
        <Heading heading="Media" />

        {/* Content Section */}
        <div className="flex flex-col gap-8 w-full md:w-3/5 mt-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col sm:flex-row items-center rounded-lg shadow-xl p-4 gap-2 bg-primary w-full">
              {/* Image Section */}
              <div className="flex justify-center items-center flex-shrink-0">
                <img src={blog.image} alt={blog.title} className="h-28 sm:h-40 object-cover rounded-md mb-4 md:mb-0 md:mr-4" />
              </div>

              {/* Text Section */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-sm font-medium sm:text-base sm:font-semibold text-background mb-4">{blog.title}</h3>
                <a href={blog.link} target="_blank" rel="noopener noreferrer" style={{ border: "1px solid #fff" }} className="px-2 py-1 bg-background text-primary font-semibold rounded-md hover:bg-primary hover:text-background transition duration-300">
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default MediaSection;
