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
            className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-4 mx-auto max-w-4xl"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Search */}
                <div className="md:col-span-5 relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border-none bg-slate-50 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all font-medium"
                        placeholder="Search companies..."
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
                        className="block w-full pl-10 pr-10 py-3 border-none bg-slate-50 rounded-xl text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white cursor-pointer appearance-none transition-all"
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
                <div className="md:col-span-4 flex bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                    {types.map((type) => (
                        <button
                            key={type || 'All'}
                            onClick={() => setSelectedType(type)}
                            className={`flex-1 text-sm font-semibold rounded-lg py-2 transition-all duration-200 ${selectedType === type
                                ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-100'
                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                                }`}
                        >
                            {type || 'All'}
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default FilterBar;
