import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-white text-xl font-display font-bold mb-6">HireLand</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Connecting Ireland's top talent with world-class companies.
                            Your gateway to the best tech jobs in Dublin and beyond.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/" className="hover:text-indigo-400 transition-colors">Find Companies</Link></li>
                            <li><Link to="/jobs" className="hover:text-indigo-400 transition-colors">Latest Jobs</Link></li>
                            <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/blog" className="hover:text-indigo-400 transition-colors">Career Blog</Link></li>
                            <li><Link to="/salary-guide" className="hover:text-indigo-400 transition-colors">Salary Guide</Link></li>
                            <li><Link to="/faq" className="hover:text-indigo-400 transition-colors">Help Center</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <p className="text-sm text-slate-400 mb-4">
                            Questions? We're here to help you get hired.
                        </p>
                        <a
                            href="mailto:hello@hireland.ie"
                            className="inline-block bg-slate-800 hover:bg-slate-700 text-indigo-400 border border-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                            hello@hireland.ie
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} HireLand. All rights reserved.</p>
                    <div className="flex items-center gap-1 mt-4 md:mt-0">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-rose-500 fill-current animate-pulse" />
                        <span>in Dublin</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
