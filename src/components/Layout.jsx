import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 bg-grid text-slate-200 relative">
            {/* Ambient glows */}
            <div className="fixed top-0 left-0 w-full h-[500px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-violet-900/10 blur-[100px] rounded-full pointer-events-none translate-y-1/3" />

            <Header />
            <main className="flex-grow relative z-10 w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
