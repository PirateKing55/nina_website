// Projects.tsx
import React from 'react';
import Layout from './Layout';
import Heading from './Heading';
import happyPlumLogo from '../assets/images/happyPlumLogo.jpeg';

const Projects: React.FC = () => {
    return (
        <Layout id='projects'>
            <section className="w-full flex flex-col items-center">
                {/* Page Heading */}
                <Heading heading="Projects" />

                {/* Content Section */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center items-center rounded-3xl shadow-custom max-w-sm md:max-w-md">
                        <a href="https://happy-plum.com" target="_blank" rel="noopener noreferrer" className='p-0 w-full h-full'>
                            <img
                                src={happyPlumLogo}
                                alt="Happy Plum Logo"
                                className="object-cover w-full h-auto rounded-3xl cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                            />
                        </a>
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
                        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 text-center">Happy Plum</h2>
                        <p className="text-secondary text-lg md:text-xl mb-4">
                            Happy Plum is an innovative edtech platform focused on transforming language learning for pre-K to K-12 students. Our mission is to create engaging, personalized learning experiences that foster a love for languages from an early age.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Projects;
