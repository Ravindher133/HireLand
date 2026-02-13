import React from 'react';
import { Building2, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyCard = ({ company }) => {
    return (
        <div className="group bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-indigo-500/50 transition-all duration-300 flex flex-col h-full hover:bg-slate-900">
            <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-md flex items-center justify-center p-2 border border-white/10">
                    {company.logoUrl ? (
                        <img src={company.logoUrl} alt={company.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" />
                    ) : (
                        <Building2 className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                    )}
                </div>
                {company.hiringStatus === 'Actively Hiring' && (
                    <span className="px-2 py-1 rounded text-[10px] font-mono font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                        HIRING
                    </span>
                )}
            </div>

            <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-indigo-400 transition-colors font-display">
                {company.name}
            </h3>

            <p className="text-slate-500 text-sm line-clamp-2 mb-6 flex-grow font-light leading-relaxed">
                {company.description}
            </p>

            <div className="space-y-3">
                <div className="flex items-center text-xs text-slate-400 font-mono">
                    <Building2 className="w-3 h-3 mr-2 opacity-50" />
                    {company.industry}
                </div>
                <div className="flex items-center text-xs text-slate-400 font-mono">
                    <MapPin className="w-3 h-3 mr-2 opacity-50" />
                    {company.location}
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                <Link
                    to={`/company/${company.id}`}
                    className="text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors flex items-center gap-1"
                >
                    View Profile
                </Link>
                <Link
                    to={`/company/${company.id}`}
                    className="inline-flex items-center text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                    _details <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
            </div>
        </div>
    );
};

export default CompanyCard;
