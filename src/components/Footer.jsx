import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Github, Twitter, Linkedin, Code2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-slate-950 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="bg-indigo-600/10 p-2 rounded-md border border-indigo-500/20">
                                <Code2 className="w-5 h-5 text-indigo-400" />
                            </div>
                            <span className="text-lg font-bold text-slate-200 tracking-tight font-display">HireLand_</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Open source protocol for directly connecting talent with opportunity.
                            De-centralizing recruitment in Ireland.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-slate-200 font-semibold mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Platform
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Start Search</Link></li>
                            <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">Documentation</Link></li>
                            <li><Link to="/api" className="text-slate-400 hover:text-white transition-colors">API Access</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-200 font-semibold mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Resources
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Salary Data</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Visa Guide</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Tech Hubs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-200 font-semibold mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Connect
                        </h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
                    <p>&copy; {new Date().getFullYear()} HireLand Inc. System status: Operational.</p>
                    <div className="flex items-center gap-2">
                        <span>Built with</span>
                        <Code2 className="w-3 h-3 text-slate-400" />
                        <span>in Dublin</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
