import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const isActive = (path) => location.pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-indigo-100 shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-200 group-hover:shadow-indigo-300 transition-all duration-300">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <span className="text-2xl font-display font-bold text-slate-900 tracking-tight">
                                Hire<span className="text-indigo-600">Land</span>
                            </span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {['/', '/about'].map((path) => (
                            <Link
                                key={path}
                                to={path}
                                className={`text-sm font-medium transition-colors relative py-1 ${isActive(path) ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
                                    }`}
                            >
                                {path === '/' ? 'Find Companies' : 'About'}
                                {isActive(path) && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-600 rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="mailto:contact@hireland.ie"
                            className="bg-white text-indigo-600 hover:bg-indigo-50 px-5 py-2.5 rounded-full text-sm font-medium border border-indigo-100 transition-all shadow-sm hover:shadow"
                        >
                            Sign In
                        </a>
                        <a
                            href="mailto:contact@hireland.ie"
                            className="bg-slate-900 text-white hover:bg-slate-800 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-slate-200 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Post a Job
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-slate-600 hover:text-indigo-600 transition-colors"
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-indigo-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <Link
                                to="/"
                                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Find Companies
                            </Link>
                            <Link
                                to="/about"
                                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <div className="pt-4 border-t border-slate-100 mt-4 flex flex-col gap-3">
                                <a href="mailto:contact@hireland.ie" className="w-full text-center py-2 text-indigo-600 font-medium">Sign In</a>
                                <a href="mailto:contact@hireland.ie" className="w-full text-center py-2 bg-slate-900 text-white rounded-lg font-medium">Post a Job</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
