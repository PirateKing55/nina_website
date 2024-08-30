import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    id: string;
}

const Layout: React.FC<LayoutProps> = ({ children, id }) => {
    return <div id={id} className='w-full min-h-screen px-5 lg:px-32 flex justify-center items-center'>{children}</div>;
};

export default Layout;
