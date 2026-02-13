import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import CompanyCard from '../components/CompanyCard';
import FilterBar from '../components/FilterBar';
import companiesData from '../data/companies.json';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [selectedType, setSelectedType] = useState('');

    const industries = useMemo(() => {
        return [...new Set(companiesData.map(c => c.industry))].sort();
    }, []);

    const types = ['', 'Startup', 'MNC'];

    const filteredCompanies = useMemo(() => {
        return companiesData.filter(company => {
            const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesIndustry = selectedIndustry ? company.industry === selectedIndustry : true;
            const matchesType = selectedType ? company.type === selectedType : true;
            return matchesSearch && matchesIndustry && matchesType;
        });
    }, [searchTerm, selectedIndustry, selectedType]);

    return (
        <div className="min-h-screen">
            <SEO
                title="Find Hiring Companies in Ireland"
                description="Discover the best startups and MNCs hiring in Ireland. Connect directly with official careers pages."
                keywords="jobs ireland, tech jobs dublin, startups ireland, hiring companies"
            />

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-6">
                            🚀 The #1 Job Portal for Ireland
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 tracking-tight mb-8 leading-tight">
                            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Dream Job</span><br />
                            in Ireland Today.
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Connect directly with official career pages of top startups and MNCs.
                            No recruiters. No middle-men. Just opportunities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-20 relative z-20">
                <FilterBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedIndustry={selectedIndustry}
                    setSelectedIndustry={setSelectedIndustry}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                    industries={industries}
                    types={types}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {filteredCompanies.length > 0 ? (
                        filteredCompanies.map((company, index) => (
                            <motion.div
                                key={company.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <CompanyCard company={company} />
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center bg-white/50 backdrop-blur-sm rounded-2xl border border-dashed border-slate-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                                <Search className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-lg font-medium text-slate-900 mb-2">No companies found</h3>
                            <p className="text-slate-500 mb-6">Try adjusting your filters or search terms.</p>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedIndustry(''); setSelectedType(''); }}
                                className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center"
                            >
                                Clear all filters <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Home;
