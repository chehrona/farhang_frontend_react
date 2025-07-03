'use client';

import React, { ReactNode } from 'react';

// Custom components
import Header from './components/common/Header';
import Footer from './components/common/footer/Footer';

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="parent-container">
            <Header />
            <div className="content-container">
                {children}
                {/* <Footer /> */}
            </div>
            <div className="fixed-container">{/* <Flags /> */}</div>
        </div>
    );
};

export default AppLayout;
