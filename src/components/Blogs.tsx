import React from 'react';
import Layout from './Layout';
import Heading from './Heading';
import happyPlumLogo from '../assets/images/happyPlumLogo.jpeg';

interface Blog {
    id: number;
    title: string;
    image: string;
    link: string;
}

const blogs: Blog[] = [
    {
        id: 1,
        title: 'Sharing some of my learnings while building "Happy Plum Language Learning" leveraging Generative AI',
        image: happyPlumLogo,
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7234587258299838465/',
    },
    {
        id: 2,
        title: 'Navigating the Storm: The Early-Stage Startup Struggle',
        image: happyPlumLogo,
        link: 'https://www.linkedin.com/posts/activity-7234955837348147200-Sp-r?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 3,
        title: 'How Happy Plum Will Forever Change Language Learning',
        image: happyPlumLogo,
        link: 'https://www.linkedin.com/posts/activity-7235381997630599169-Js3Z?utm_source=share&utm_medium=member_desktop',
    },
];

const BlogsSection: React.FC = () => {
    return (
        <Layout id="blogs" className='pt-20'>
            <section className="w-full flex flex-col items-center">
                {/* Page Heading */}
                <Heading heading='Blogs' />

                {/* Content Section */}
                <div className="flex flex-col gap-8 w-full md:w-4/5 mt-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="flex flex-col sm:flex-row items-center rounded-lg shadow-xl p-4 bg-primary w-full"
                        >
                            {/* Image Section */}
                            <div className="flex justify-center items-center flex-shrink-0">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="h-28 sm:h-40 object-cover rounded-md mb-4 md:mb-0 md:mr-4"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                <h3 className="text-sm font-medium sm:text-base sm:font-semibold text-background mb-4">
                                    {blog.title}
                                </h3>
                                <a
                                    href={blog.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ border: '1px solid #fff' }}
                                    className="px-2 py-1 bg-background text-primary font-semibold rounded-md hover:bg-primary hover:text-background transition duration-300"
                                >
                                    Read
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <a href='https://councils.forbes.com/profile/Nina-Greenwood-Founder-CEO-Happy-Plum-Language-Learning/bd3b38c8-972b-4d30-88a8-7937053e534c'
                    target='_blank' rel='noopener noreferrer'
                    className="mt-7 text-primary font-semibold text-xl underline">More Blogs &gt;</a>
            </section>
        </Layout>
    );
};

export default BlogsSection;
