import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-100 selection:text-indigo-700">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
            </div>

            <Header />
            <main className="flex-grow z-10 relative">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
