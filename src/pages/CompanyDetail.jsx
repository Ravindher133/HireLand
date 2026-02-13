import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, Users, Globe, Linkedin, Mail, ExternalLink, ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import companiesData from '../data/companies.json';

const CompanyDetail = () => {
    const { id } = useParams();

    const company = useMemo(() => {
        return companiesData.find(c => c.id === parseInt(id));
    }, [id]);

    if (!company) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <div className="p-4 rounded-full bg-slate-800/50 border border-slate-700 mb-4">
                    <Terminal className="w-8 h-8 text-slate-500" />
                </div>
                <h2 className="text-2xl font-display font-bold text-slate-200 mb-4">404: Node Not Found</h2>
                <Link to="/" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 font-mono text-sm">
                    <ArrowLeft className="w-4 h-4" /> cd ..
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pb-20 pt-24">
            <SEO
                title={`${company.name} - Hiring in Ireland`}
                description={`Join ${company.name} in ${company.location}. ${company.description}`}
            />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 font-mono text-xs">
                    <ArrowLeft className="w-3 h-3" /> / companies / {company.name.toLowerCase()}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
                >
                    <div className="p-8 md:p-10">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10 border-b border-white/5 pb-10">
                            <div className="flex gap-6">
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10 w-24 h-24 flex items-center justify-center flex-shrink-0">
                                    {company.logoUrl ? (
                                        <img src={company.logoUrl} alt={company.name} className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                                    ) : (
                                        <Building2 className="w-10 h-10 text-slate-600" />
                                    )}
                                </div>
                                <div>
                                    <h1 className="text-3xl font-display font-bold text-slate-100 mb-3">{company.name}</h1>
                                    <div className="flex flex-wrap gap-4 text-sm font-mono text-slate-400">
                                        <div className="flex items-center"><Building2 className="w-4 h-4 mr-2 opacity-50" />{company.industry}</div>
                                        <div className="flex items-center"><Users className="w-4 h-4 mr-2 opacity-50" />{company.type}</div>
                                        <div className="flex items-center"><MapPin className="w-4 h-4 mr-2 opacity-50" />{company.location}</div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href={company.careersUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-md font-medium transition-all shadow-lg shadow-indigo-900/20 border border-indigo-500/50 flex items-center gap-2 group w-full md:w-auto justify-center"
                            >
                                <span className="font-mono">sudo apply</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="md:col-span-2 space-y-10">
                                <section>
                                    <h2 className="text-lg font-mono font-bold text-slate-100 mb-4 border-l-2 border-indigo-500 pl-3">README.md</h2>
                                    <p className="text-slate-400 leading-relaxed font-light">
                                        {company.description}
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-lg font-mono font-bold text-slate-100 mb-4 border-l-2 border-indigo-500 pl-3">Why Join?</h2>
                                    <div className="bg-indigo-900/10 border border-indigo-500/10 rounded-lg p-6 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                        <p className="text-indigo-200 relative z-10 leading-relaxed font-light">
                                            Companies like <strong className="text-indigo-400 font-mono">{company.name}</strong> are shaping the future of {company.industry}.
                                            {company.type === 'Startup'
                                                ? ' As a high-growth startup, they offer the chance to wear multiple hats, make a direct impact, and grow fast.'
                                                : ' As an established MNC, they offer world-class mentorship, stability, and the opportunity to work on global scale problems.'}
                                        </p>
                                    </div>
                                </section>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-slate-950 rounded-lg p-6 border border-white/5">
                                    <h3 className="font-bold text-slate-200 mb-4 font-mono text-sm uppercase tracking-wider">Links</h3>
                                    <div className="space-y-3">
                                        <a href={company.careersUrl} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center justify-between w-full p-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-md transition-all group">
                                            <span className="text-slate-400 group-hover:text-white text-sm">Careers Page</span>
                                            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white" />
                                        </a>
                                        {company.linkedinUrl && (
                                            <a href={company.linkedinUrl} target="_blank" rel="noopener noreferrer"
                                                className="flex items-center justify-between w-full p-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-md transition-all group">
                                                <span className="text-slate-400 group-hover:text-white text-sm">LinkedIn</span>
                                                <Linkedin className="w-4 h-4 text-slate-500 group-hover:text-white" />
                                            </a>
                                        )}
                                        {company.contractEmail && (
                                            <a href={`mailto:${company.contractEmail}`}
                                                className="flex items-center justify-between w-full p-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-md transition-all group">
                                                <span className="text-slate-400 group-hover:text-white text-sm">Email Us</span>
                                                <Mail className="w-4 h-4 text-slate-500 group-hover:text-white" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default CompanyDetail;
