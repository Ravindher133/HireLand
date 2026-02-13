import React from 'react';
import { MapPin, Building2, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyCard = ({ company }) => {
    return (
        <div className="group h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100 transition-all duration-300 flex flex-col overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

            <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-6">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                        {company.logoUrl ? (
                            <img
                                src={company.logoUrl}
                                alt={`${company.name} logo`}
                                className="w-10 h-10 object-contain"
                            />
                        ) : (
                            <Building2 className="w-10 h-10 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                        )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${company.hiringStatus === 'Actively Hiring'
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                        : 'bg-slate-50 text-slate-500 border border-slate-100'
                        }`}>
                        {company.hiringStatus}
                    </span>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                        {company.name}
                    </h3>
                    <div className="flex items-center text-slate-500 text-sm">
                        <MapPin className="w-3.5 h-3.5 mr-1" />
                        {company.location}
                    </div>
                </div>

                <div className="flex gap-2 mb-6">
                    <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                        {company.industry}
                    </span>
                    <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                        {company.type}
                    </span>
                </div>

                <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                    {company.description}
                </p>
            </div>

            <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center group-hover:bg-indigo-50/30 transition-colors">
                <Link
                    to={`/company/${company.id}`}
                    className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
                >
                    View Details
                </Link>
                <a
                    href={company.careersUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                    Careers Page
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </div>
    );
};

export default CompanyCard;
