import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect for sticky header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Jobs', path: '/jobs' },
        { name: 'Companies', path: '/companies' },
        { name: 'About', path: '/about' },
    ];

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled || isMenuOpen
                ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
                : 'bg-transparent border-b border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center mr-2.5 shadow-md shadow-primary-200 group-hover:scale-105 transition-transform duration-200">
                            <span className="text-white font-bold text-xl leading-none">H</span>
                        </div>
                        <span className="text-xl font-bold text-slate-900 tracking-tight">
                            Hire<span className="text-primary-600">Land</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-1 bg-slate-50/50 p-1 rounded-full border border-slate-200/50">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${isActive(item.path)
                                    ? 'bg-white text-primary-700 shadow-sm ring-1 ring-slate-200'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            to="/signin"
                            className="text-sm font-semibold text-slate-600 hover:text-primary-600 transition-colors"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/submit"
                            className="group inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-primary-900 hover:bg-primary-800 rounded-lg shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Submit Company
                            <ChevronRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-slate-600 hover:text-primary-600 rounded-md hover:bg-slate-50 transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-slate-200 bg-white"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive(item.path)
                                        ? 'bg-primary-50 text-primary-700'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                                <Link
                                    to="/signin"
                                    className="w-full px-4 py-3 text-center text-slate-600 font-semibold hover:bg-slate-50 rounded-lg"
                                >
                                    Log in
                                </Link>
                                <Link
                                    to="/submit"
                                    className="w-full px-4 py-3 text-center text-white bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold shadow-soft"
                                >
                                    Submit Company
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
