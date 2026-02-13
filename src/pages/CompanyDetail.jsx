import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, Users, Globe, Linkedin, Mail, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import companiesData from '../data/companies.json';

const CompanyDetail = () => {
    const { id } = useParams();

    const company = useMemo(() => {
        return companiesData.find(c => c.id === parseInt(id));
    }, [id]);

    if (!company) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Company Not Found</h2>
                <Link to="/" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen py-8">
            <SEO
                title={`${company.name} - Hiring in Ireland`}
                description={`Join ${company.name} in ${company.location}. ${company.description}`}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link to="/" className="text-slate-500 hover:text-blue-600 flex items-center gap-2 mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Companies
                </Link>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-slate-900 h-32 relative">
                        <div className="absolute -bottom-10 left-8 bg-white p-2 rounded-xl border border-slate-100 shadow-md">
                            {company.logoUrl ? (
                                <img src={company.logoUrl} alt={company.name} className="w-20 h-20 object-contain rounded-lg" />
                            ) : (
                                <Building2 className="w-20 h-20 text-slate-400 p-2" />
                            )}
                        </div>
                    </div>

                    <div className="pt-14 px-8 pb-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900 mb-2">{company.name}</h1>
                                <div className="flex flex-wrap gap-3">
                                    <span className="inline-flex items-center text-sm text-slate-600">
                                        <Building2 className="w-4 h-4 mr-1.5 text-slate-400" />
                                        {company.industry}
                                    </span>
                                    <span className="inline-flex items-center text-sm text-slate-600">
                                        <Users className="w-4 h-4 mr-1.5 text-slate-400" />
                                        {company.type}
                                    </span>
                                    <span className="inline-flex items-center text-sm text-slate-600">
                                        <MapPin className="w-4 h-4 mr-1.5 text-slate-400" />
                                        {company.location}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span className={`px-4 py-2 rounded-full text-sm font-semibold inline-block ${company.hiringStatus === 'Actively Hiring'
                                    ? 'bg-green-100 text-green-700 border border-green-200'
                                    : 'bg-slate-100 text-slate-600 border border-slate-200'
                                    }`}>
                                    {company.hiringStatus}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2">
                                <h2 className="text-lg font-semibold text-slate-900 mb-3">About</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {company.description}
                                </p>

                                <h2 className="text-lg font-semibold text-slate-900 mb-3">Why Work Here?</h2>
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-blue-800 text-sm mb-6">
                                    Top-tier companies like {company.name} are leading the {company.industry} space in Ireland.
                                    {company.type === 'Startup' ? ' Join a fast-paced environment and make a real impact.' : ' Experience world-class culture and benefits at a global leader.'}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-lg font-semibold text-slate-900 mb-2">Connect</h2>

                                <a href={company.careersUrl} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors gap-2 shadow-sm hover:shadow">
                                    <ExternalLink className="w-4 h-4" />
                                    View Open Roles
                                </a>

                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-3">
                                    {company.linkedinUrl && (
                                        <a href={company.linkedinUrl} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
                                            <Linkedin className="w-4 h-4 mr-2" />
                                            LinkedIn Page
                                        </a>
                                    )}
                                    {company.contractEmail && (
                                        <a href={`mailto:${company.contractEmail}`}
                                            className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
                                            <Mail className="w-4 h-4 mr-2" />
                                            {company.contractEmail}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDetail;
