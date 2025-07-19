'use client';

import React, { ReactNode, useRef } from 'react';

// Hooks
import { useLocation } from 'react-router-dom';

// Custom components
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Flags from './components/common/flags/Flags';

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const parentRef = useRef<HTMLInputElement>(null);
    const isApp = searchParams.get('referrer') === 'app';

    return (
        <div className="parent-container">
            {!isApp ? <Header /> : null}
            <div
                ref={parentRef}
                // onScroll={handleScroll}
                className="content-container"
            >
                {children}
                {!isApp ? <Footer /> : null}
            </div>
            <div className="fixed-container">
                {!isApp ? <Flags /> : null}
                {/* <ScrollUpArrow parentRef={parentRef} />
                <ScrollDownArrow /> */}
            </div>
        </div>
    );
};

export default AppLayout;
