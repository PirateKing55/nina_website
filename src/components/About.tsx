// AboutSection.tsx
import React from 'react';
import Layout from './Layout';
import Heading from './Heading';

const AboutSection: React.FC = () => {
    return (
        <Layout id='about'>
            <section className="flex flex-col gap-8 bg-background">
                {/* Section Heading */}
                <Heading heading='About Me' />

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Side - Highlighted Achievements */}
                    <div className="md:w-1/2 flex flex-col items-start p-8 bg-primary text-background rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Highlighted Achievements:</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>2015 US Department of State NSLIY</li>
                            <li>2018 US Department of State CLS</li>
                            <li>5+ years experience in the education industry</li>
                        </ul>
                    </div>

                    {/* Right Side - Vision and Goals */}
                    <div className="md:w-1/2 flex flex-col gap-6 p-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-primary mb-2">Vision:</h2>
                            <p className="text-secondary">
                                To impact the most number of pre-K and K-12 students worldwide with our ed tech platform
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-primary mb-2">Future Goals:</h2>
                            <p className="text-secondary">
                                I see the company heading for huge success in the next 5-10 years and the future of language learning
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-primary mb-2">Industry Impact:</h2>
                            <ul className="list-disc pl-5 text-secondary">
                                <li>Personalized learning will become the new norm</li>
                                <li>The importance of early language education</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AboutSection;
