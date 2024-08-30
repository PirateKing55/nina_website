// Heading.tsx
import React from 'react';

interface HeadingProps {
    heading: string;
    className?: string; // Optional className for additional styling
}

const Heading: React.FC<HeadingProps> = ({ heading, className }) => {
    return (
        <h1 className={`text-8xl font-petemoss font-medium text-primary mb-6 text-center ${className}`}>
            {heading}
        </h1>
    );
};

export default Heading;
