import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram, ShieldCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
                    <div className="md:col-span-2 space-y-4">
                        <Link to="/" className="flex items-center group">
                            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center mr-2.5">
                                <span className="text-white font-bold text-xl leading-none">H</span>
                            </div>
                            <span className="text-xl font-bold text-slate-900 tracking-tight">
                                Hire<span className="text-primary-600">Land</span>
                            </span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                            The most trusted platform for discovering top-tier companies and career opportunities in Ireland.
                            Connecting talent with future-forward organizations.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-primary-600 hover:shadow-sm border border-slate-200 transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-semibold mb-4 text-sm uppercase tracking-wider">Platform</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/companies" className="text-slate-500 hover:text-primary-600 transition-colors">Browse Companies</Link></li>
                            <li><Link to="/jobs" className="text-slate-500 hover:text-primary-600 transition-colors">Search Jobs</Link></li>
                            <li><Link to="/submit" className="text-slate-500 hover:text-primary-600 transition-colors">Submit Company</Link></li>
                            <li><Link to="/pricing" className="text-slate-500 hover:text-primary-600 transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">Career Advice</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">Salary Guide</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">Tech Ecosystem</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">Help Center</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/privacy" className="text-slate-500 hover:text-primary-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-slate-500 hover:text-primary-600 transition-colors">Terms of Service</Link></li>
                            <li><Link to="/cookies" className="text-slate-500 hover:text-primary-600 transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} HireLand Inc. All rights reserved.</p>
                    <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
                        <ShieldCheck className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-medium">Public Data Only. No Personal Scraping.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
