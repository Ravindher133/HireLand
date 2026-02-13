import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, Users, Linkedin, Mail, ExternalLink, ArrowRight, AlertCircle } from 'lucide-react';
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
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50">
                <div className="p-4 rounded-full bg-slate-100 border border-slate-200 mb-4">
                    <AlertCircle className="w-8 h-8 text-slate-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Company Not Found</h2>
                <p className="text-slate-500 mb-6">The company you are looking for doesn't exist or has been removed.</p>
                <Link to="/" className="px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pb-20 pt-8 bg-slate-50">
            <SEO
                title={`${company.name} - Hiring in Ireland`}
                description={`Join ${company.name} in ${company.location}. ${company.description}`}
            />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary-600 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Directory
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {/* Header Card */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 mb-8">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-24 h-24 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center p-4 flex-shrink-0">
                                {company.logoUrl ? (
                                    <img src={company.logoUrl} alt={company.name} className="w-full h-full object-contain" />
                                ) : (
                                    <Building2 className="w-10 h-10 text-slate-400" />
                                )}
                            </div>

                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <h1 className="text-3xl font-bold text-slate-900">{company.name}</h1>
                                    <a
                                        href={company.careersUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-sm hover:shadow-md group"
                                    >
                                        Visit Careers Page <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                                    <div className="flex items-center bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100">
                                        <Building2 className="w-4 h-4 mr-2 text-slate-400" />
                                        {company.industry}
                                    </div>
                                    <div className="flex items-center bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100">
                                        <Users className="w-4 h-4 mr-2 text-slate-400" />
                                        {company.type}
                                    </div>
                                    <div className="flex items-center bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100">
                                        <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                                        {company.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
                                <h2 className="text-xl font-bold text-slate-900 mb-6">About the Company</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {company.description}
                                </p>
                                <div className="bg-primary-50 border border-primary-100 rounded-lg p-6">
                                    <h3 className="font-semibold text-primary-900 mb-2">Why join us?</h3>
                                    <p className="text-primary-700 text-sm leading-relaxed">
                                        Companies like <strong>{company.name}</strong> are shaping the future of {company.industry}.
                                        {company.type === 'Startup'
                                            ? ' As a high-growth startup, they offer the chance to make a direct impact and grow fast.'
                                            : ' As an established market leader, they offer mentorship, stability, and global impact.'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                                <h3 className="font-bold text-slate-900 mb-4 px-1">Quick Links</h3>
                                <div className="space-y-2">
                                    <a href={company.careersUrl} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center justify-between w-full p-3 text-slate-600 hover:text-primary-700 hover:bg-slate-50 rounded-lg transition-colors group border border-transparent hover:border-slate-100">
                                        <span className="font-medium text-sm">Careers Page</span>
                                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary-600" />
                                    </a>
                                    {company.linkedinUrl && (
                                        <a href={company.linkedinUrl} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center justify-between w-full p-3 text-slate-600 hover:text-primary-700 hover:bg-slate-50 rounded-lg transition-colors group border border-transparent hover:border-slate-100">
                                            <span className="font-medium text-sm">LinkedIn Profile</span>
                                            <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-primary-600" />
                                        </a>
                                    )}
                                    {company.contractEmail && (
                                        <a href={`mailto:${company.contractEmail}`}
                                            className="flex items-center justify-between w-full p-3 text-slate-600 hover:text-primary-700 hover:bg-slate-50 rounded-lg transition-colors group border border-transparent hover:border-slate-100">
                                            <span className="font-medium text-sm">Email Recruiting</span>
                                            <Mail className="w-4 h-4 text-slate-400 group-hover:text-primary-600" />
                                        </a>
                                    )}
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
