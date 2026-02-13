import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Terminal } from 'lucide-react';
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

    return (
        <div className="min-h-screen">
            <SEO
                title="Find Hiring Companies in Ireland"
                description="Discover the best startups and MNCs hiring in Ireland. Connect directly with official careers pages."
                keywords="jobs ireland, tech jobs dublin, startups ireland, hiring companies"
            />

            {/* Hero Section */}
            <section className="relative pt-24 pb-20 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                v2.0.0 Online
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-100 tracking-tight mb-6 leading-tight">
                                The <span className="text-indigo-500">OS</span> for <br />
                                Irish Jobs.
                            </h1>
                            <p className="text-lg text-slate-400 max-w-lg mb-8 leading-relaxed font-light">
                                Direct connection protocols to official career nodes. <br />
                                Bypass recruitment layers. Zero latency.
                            </p>

                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-all shadow-lg shadow-indigo-900/20 border border-indigo-500/50">
                                    Initialize Search
                                </button>
                                <button className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium rounded-md transition-all border border-white/10 flex items-center gap-2">
                                    <Terminal className="w-4 h-4" /> Documentation
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute inset-0 bg-indigo-500/5 blur-3xl rounded-full" />
                            <div className="relative bg-slate-900 border border-white/10 rounded-lg p-6 font-mono text-sm text-slate-400 shadow-2xl">
                                <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                </div>
                                <div className="space-y-2">
                                    <p><span className="text-green-400">➜</span> <span className="text-indigo-400">~</span> init_sequence --region=IE</p>
                                    <p className="text-slate-500">Loading modules...</p>
                                    <p>Found <span className="text-white">{filteredCompanies.length}</span> active nodes.</p>
                                    <p>Syncing job feed... <span className="text-green-400">Done</span></p>
                                    <p className="animate-pulse">_</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">

                {/* Live Feed Section */}
                <div className="mb-20">
                    <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-display font-bold text-slate-100">Live Feed</h2>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                REALTIME
                            </span>
                        </div>
                        <div className="text-xs font-mono text-slate-500">
                            Polling interval: 10000ms
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <AnimatePresence mode="popLayout">
                            {jobs.slice(0, 6).map((job) => (
                                <motion.div
                                    key={job.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <JobCard job={job} isNew={newJobIds.has(job.id)} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                    {jobs.length === 0 && (
                        <div className="p-12 text-center border border-dashed border-white/10 rounded-lg">
                            <p className="text-slate-500 font-mono text-sm">Waiting for signal...</p>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-2xl font-display font-bold text-slate-100">Directory</h2>
                    <span className="text-slate-500 text-sm font-mono">/ {filteredCompanies.length} items</span>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
                        <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-lg">
                            <Search className="w-8 h-8 text-slate-600 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-slate-300 mb-2">No results returned</h3>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedIndustry(''); setSelectedType(''); }}
                                className="text-indigo-400 hover:text-indigo-300 font-mono text-sm hover:underline"
                            >
                                &rarr; Reset filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Home;
