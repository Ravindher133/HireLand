import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="bg-indigo-600/10 p-2 rounded-md border border-indigo-500/20 group-hover:bg-indigo-600/20 transition-colors">
                                <Code2 className="w-5 h-5 text-indigo-400" />
                            </div>
                            <span className="text-lg font-bold text-slate-100 tracking-tight font-display">HireLand<span className="text-indigo-500">_</span></span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-1">
                        {[
                            { name: 'Start', path: '/' },
                            { name: 'Companies', path: '/companies' }, // Placeholder path
                            { name: 'About', path: '/about' },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${isActive(item.path)
                                        ? 'text-white bg-white/5'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <span className="font-mono text-indigo-500/50 mr-2 opacity-0 hover:opacity-100 transition-opacity">./</span>
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/signin" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                            Sign In
                        </Link>
                        <Link
                            to="/post-job"
                            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors border border-indigo-500/50 shadow-lg shadow-indigo-900/20"
                        >
                            Post a Job
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-slate-400 hover:text-white"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-white/10 bg-slate-950"
                    >
                        <div className="px-4 py-4 space-y-1">
                            <Link to="/" className="block px-3 py-2 text-base font-medium text-white bg-white/5 rounded-md">Find Companies</Link>
                            <Link to="/about" className="block px-3 py-2 text-base font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-md">About</Link>
                            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                                <Link to="/signin" className="text-center text-slate-400 hover:text-white">Sign In</Link>
                                <Link to="/post-job" className="w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-md font-medium">Post a Job</Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
