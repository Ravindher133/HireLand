import React from 'react';
import { Building2, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyCard = ({ company }) => {
    return (
        <div className="group bg-white rounded-xl p-6 border border-slate-200 shadow-card hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 content-['']" />

            <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-2 border border-slate-100 shadow-sm">
                    {company.logoUrl ? (
                        <img src={company.logoUrl} alt={company.name} className="w-full h-full object-contain" />
                    ) : (
                        <Building2 className="w-7 h-7 text-slate-400" />
                    )}
                </div>
                <div className="flex gap-2">
                    {company.type === 'Startup' && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-50 text-violet-600 border border-violet-100">
                            Startup
                        </span>
                    )}
                    {company.hiringStatus === 'Actively Hiring' && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Hiring
                        </span>
                    )}
                </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">
                {company.name}
            </h3>

            <p className="text-slate-500 text-sm line-clamp-2 mb-6 flex-grow leading-relaxed">
                {company.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-50">
                <div className="flex items-center text-xs font-medium text-slate-500">
                    <Building2 className="w-3.5 h-3.5 mr-2 text-slate-400" />
                    {company.industry}
                </div>
                <div className="flex items-center text-xs font-medium text-slate-500">
                    <MapPin className="w-3.5 h-3.5 mr-2 text-slate-400" />
                    {company.location}
                </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
                <Link
                    to={`/company/${company.id}`}
                    className="text-sm font-semibold text-slate-500 hover:text-primary-700 transition-colors"
                >
                    View details
                </Link>
                <Link
                    to={`/company/${company.id}`}
                    className="inline-flex items-center text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors group/link"
                >
                    Careers page <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default CompanyCard;
