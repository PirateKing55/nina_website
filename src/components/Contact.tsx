// ContactSection.tsx
import React from 'react';
import Layout from './Layout';
import Heading from './Heading';
import { FiCopy } from 'react-icons/fi';

const ContactSection: React.FC = () => {
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    const [isMeCopied, setIsMeCopied] = React.useState(false);
    const [isCompanyCopied, setIsCompanyCopied] = React.useState(false);

    return (
        <Layout id='contact'>
            <section className="w-full flex flex-col items-center">
                {/* Page Heading */}
                <Heading heading="Get in Touch" />

                {/* Contact Details */}
                <div className="mt-8 flex flex-col items-start gap-4">
                    <div className="flex items-center gap-2">
                        <p className="text-secondary text-lg md:text-xl"><span className='text-primary'>Contact me:</span> ninagreenwood@happy-plum.com</p>
                        <button className='flex items-center relative'
                            onClick={() => {
                                handleCopy('ninagreenwood@happy-plum.com')
                                setIsMeCopied(true)
                            }}>
                            <FiCopy className={`${isMeCopied ? "text-secondary" : "text-primary"} cursor-pointer hover:text-secondary transition duration-300`} />
                            {isMeCopied && <span className="text-primary absolute left-5">Copied!</span>}
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-secondary text-lg md:text-xl"><span className='text-primary'>Contact company:</span> happyplum@happy-plum.com</p>
                        <button className='flex items-center relative'
                            onClick={() => {
                                handleCopy('happyplum@happy-plum.com')
                                setIsCompanyCopied(true)
                            }}>
                            <FiCopy className={`${isCompanyCopied ? "text-secondary" : "text-primary"} cursor-pointer hover:text-secondary transition duration-300`} />
                            {isCompanyCopied && <span className="text-primary absolute left-5">Copied!</span>}
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ContactSection;
