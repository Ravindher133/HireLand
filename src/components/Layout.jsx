import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 relative">
            <Header />
            <main className="flex-grow w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
