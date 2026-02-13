import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, TrendingUp, Building2, Users, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import CompanyCard from '../components/CompanyCard';
import JobCard from '../components/JobCard';
import FilterBar from '../components/FilterBar';
import companiesData from '../data/companies.json';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [selectedType, setSelectedType] = useState('');

    // Job Sync Logic
    const [jobs, setJobs] = useState([]);
    const [newJobIds, setNewJobIds] = useState(new Set());

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/data/jobs.json');
                if (response.ok) {
                    const data = await response.json();

                    setJobs(prevJobs => {
                        // Detect new jobs if we already have data
                        if (prevJobs.length > 0) {
                            const prevIds = new Set(prevJobs.map(j => j.id));
                            const newIds = new Set([...newJobIds]);

                            data.forEach(job => {
                                if (!prevIds.has(job.id)) {
                                    newIds.add(job.id);
                                }
                            });
                            setNewJobIds(newIds);
                        }
                        return data;
                    });
                }
            } catch (error) {
                console.error("Failed to fetch jobs:", error);
            }
        };

        fetchJobs();
        const interval = setInterval(fetchJobs, 10000);
        return () => clearInterval(interval);
    }, []);

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

    // Stats
    const totalCompanies = companiesData.length;
    const activeHiring = companiesData.filter(c => c.hiringStatus === 'Actively Hiring').length;

    return (
        <div className="min-h-screen bg-slate-50">
            <SEO
                title="SaaS Jobs Ireland - Discovery Hiring Companies"
                description="The premium platform for discovering top startups and MNCs hiring in Ireland."
            />

            {/* Hero Section */}
            <section className="relative pt-24 pb-20 overflow-hidden bg-white border-b border-slate-200">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider mb-6 border border-primary-100">
                                <span className="w-2 h-2 rounded-full bg-primary-600 mr-2 animate-pulse"></span>
                                Live Recruitment Data
                            </span>
                            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                                Discover Hiring Companies <br />
                                <span className="text-primary-600">in Ireland.</span>
                            </h1>
                            <p className="text-xl text-slate-500 mb-10 leading-relaxed">
                                The most accurate, verified directory of Startups and MNCs recruiting top talent.
                                <br />Connect directly with HR teams. No third-party recruiters.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button onClick={() => document.getElementById('directory').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-soft hover:shadow-lg transition-all duration-200 text-lg">
                                    Explore Companies
                                </button>
                                <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-lg border border-slate-200 shadow-sm transition-all duration-200 text-lg">
                                    View Live Jobs
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Dashboard Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900">{totalCompanies}</p>
                                <p className="text-sm text-slate-500 font-medium">Verified Companies</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900">{activeHiring}</p>
                                <p className="text-sm text-slate-500 font-medium">Actively Hiring</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                            <div className="p-3 bg-violet-50 text-violet-600 rounded-lg">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900">12k+</p>
                                <p className="text-sm text-slate-500 font-medium">Monthly Seekers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Feed & Directory Section */}
            <section id="directory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Sidebar / Live Feed */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden sticky top-24">
                            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Live Job Feed
                                </h3>
                                <span className="text-xs font-mono text-slate-400">Polling...</span>
                            </div>
                            <div className="p-4 max-h-[600px] overflow-y-auto space-y-4 custom-scrollbar">
                                <AnimatePresence mode="popLayout">
                                    {jobs.slice(0, 5).map((job) => (
                                        <motion.div
                                            key={job.id}
                                            layout
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                        >
                                            <JobCard job={job} isNew={newJobIds.has(job.id)} />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                                {jobs.length === 0 && (
                                    <div className="py-8 text-center text-slate-500 text-sm">
                                        Connecting to job stream...
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Main Directory */}
                    <div className="lg:col-span-8">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Company Directory</h2>
                            <p className="text-slate-500">Browse and filter {filteredCompanies.length} companies.</p>
                        </div>

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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredCompanies.length > 0 ? (
                                filteredCompanies.map((company, index) => (
                                    <motion.div
                                        key={company.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                    >
                                        <CompanyCard company={company} />
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center bg-white rounded-xl border border-dashed border-slate-200">
                                    <Search className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-slate-900 mb-2">No companies found</h3>
                                    <p className="text-slate-500 mb-6">Try adjusting your filters or search terms.</p>
                                    <button
                                        onClick={() => { setSearchTerm(''); setSelectedIndustry(''); setSelectedType(''); }}
                                        className="text-primary-600 font-medium hover:text-primary-700 hover:underline"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
