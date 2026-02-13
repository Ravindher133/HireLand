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
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-lg p-4 mx-auto max-w-4xl"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Search */}
                <div className="md:col-span-5 relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-white/5 rounded-md text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all font-mono text-sm"
                        placeholder="Search companies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Industry Filter */}
                <div className="md:col-span-3 relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Briefcase className="h-4 w-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                    </div>
                    <select
                        value={selectedIndustry}
                        onChange={(e) => setSelectedIndustry(e.target.value)}
                        className="block w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-white/5 rounded-md text-slate-300 font-mono text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 cursor-pointer appearance-none transition-all"
                    >
                        <option value="">All Industries</option>
                        {industries.map(industry => (
                            <option key={industry} value={industry}>{industry}</option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <ChevronDown className="h-4 w-4 text-slate-500" />
                    </div>
                </div>

                {/* Type Filter */}
                <div className="md:col-span-4 flex bg-slate-950 p-1 rounded-md border border-white/5">
                    {['All', ...types.filter(Boolean)].map((type) => (
                        <button
                            key={type}
                            onClick={() => setSelectedType(type === 'All' ? '' : type)}
                            className={`flex-1 text-xs font-mono py-1.5 rounded transition-all duration-200 ${(selectedType === type || (type === 'All' && !selectedType))
                                    ? 'bg-indigo-600 text-white shadow-sm'
                                    : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
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
