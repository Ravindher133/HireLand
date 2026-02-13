import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, Users, Globe, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';
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
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Company Not Found</h2>
                <Link to="/" className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2 font-medium">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pb-20">
            <SEO
                title={`${company.name} - Hiring in Ireland`}
                description={`Join ${company.name} in ${company.location}. ${company.description}`}
            />

            {/* Header Banner */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-indigo-900" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/10 to-transparent" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center">
                    <Link to="/" className="absolute top-8 text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Companies
                    </Link>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
                >
                    <div className="p-8 md:p-10">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 border-b border-slate-100 pb-8">
                            <div className="flex gap-6">
                                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm w-24 h-24 flex items-center justify-center flex-shrink-0 -mt-20">
                                    {company.logoUrl ? (
                                        <img src={company.logoUrl} alt={company.name} className="w-full h-full object-contain" />
                                    ) : (
                                        <Building2 className="w-12 h-12 text-slate-400" />
                                    )}
                                </div>
                                <div className="pt-2">
                                    <h1 className="text-4xl font-display font-bold text-slate-900 mb-2">{company.name}</h1>
                                    <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                                        <div className="flex items-center"><Building2 className="w-4 h-4 mr-1.5" />{company.industry}</div>
                                        <div className="flex items-center"><Users className="w-4 h-4 mr-1.5" />{company.type}</div>
                                        <div className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" />{company.location}</div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href={company.careersUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
                            >
                                View Open Roles <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="md:col-span-2 space-y-8">
                                <section>
                                    <h2 className="text-xl font-display font-bold text-slate-900 mb-4">About the Company</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {company.description}
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-display font-bold text-slate-900 mb-4">Why Join Us?</h2>
                                    <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-6 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                        <p className="text-indigo-900 relative z-10 leading-relaxed">
                                            Companies like <strong>{company.name}</strong> are shaping the future of {company.industry}.
                                            {company.type === 'Startup'
                                                ? ' As a high-growth startup, they offer the chance to wear multiple hats, make a direct impact, and grow fast.'
                                                : ' As an established MNC, they offer world-class mentorship, stability, and the opportunity to work on global scale problems.'}
                                        </p>
                                    </div>
                                </section>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-4">Quick Links</h3>
                                    <div className="space-y-3">
                                        <a href={company.careersUrl} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center justify-between w-full p-3 bg-white hover:border-indigo-200 border border-slate-200 rounded-xl transition-all group">
                                            <span className="text-slate-600 font-medium group-hover:text-indigo-600">Careers Page</span>
                                            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
                                        </a>
                                        {company.linkedinUrl && (
                                            <a href={company.linkedinUrl} target="_blank" rel="noopener noreferrer"
                                                className="flex items-center justify-between w-full p-3 bg-white hover:border-blue-200 border border-slate-200 rounded-xl transition-all group">
                                                <span className="text-slate-600 font-medium group-hover:text-blue-600">LinkedIn</span>
                                                <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                                            </a>
                                        )}
                                        {company.contractEmail && (
                                            <a href={`mailto:${company.contractEmail}`}
                                                className="flex items-center justify-between w-full p-3 bg-white hover:border-slate-300 border border-slate-200 rounded-xl transition-all group">
                                                <span className="text-slate-600 font-medium group-hover:text-slate-900">Email Us</span>
                                                <Mail className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
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
