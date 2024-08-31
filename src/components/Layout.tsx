import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    id: string;
    className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, id, className }) => {
    return <div id={id} className={`w-full min-h-screen px-5 lg:px-32 flex justify-center items-center ${className}`}>{children}</div>;
};

export default Layout;
