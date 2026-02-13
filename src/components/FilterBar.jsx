import React from 'react';
import { Search, Filter, Briefcase, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const FilterBar = ({
    searchTerm,
    setSearchTerm,
    selectedIndustry,
    setSelectedIndustry,
    selectedType,
    setSelectedType,
    industries,
    types
}) => {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-xl shadow-soft border border-slate-200 p-4 mb-8"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Search */}
                <div className="md:col-span-5 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm font-medium"
                        placeholder="Search by company name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Industry Filter */}
                <div className="md:col-span-3 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Briefcase className="h-4 w-4 text-slate-400" />
                    </div>
                    <select
                        value={selectedIndustry}
                        onChange={(e) => setSelectedIndustry(e.target.value)}
                        className="block w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 cursor-pointer appearance-none transition-all"
                    >
                        <option value="">All Industries</option>
                        {industries.map(industry => (
                            <option key={industry} value={industry}>{industry}</option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <ChevronDown className="h-4 w-4 text-slate-400" />
                    </div>
                </div>

                {/* Type Filter */}
                <div className="md:col-span-4 flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                    {['All', ...types.filter(Boolean)].map((type) => (
                        <button
                            key={type}
                            onClick={() => setSelectedType(type === 'All' ? '' : type)}
                            className={`flex-1 text-xs font-semibold py-2 rounded-md transition-all duration-200 ${(selectedType === type || (type === 'All' && !selectedType))
                                    ? 'bg-white text-primary-700 shadow-sm ring-1 ring-slate-200'
                                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default FilterBar;
