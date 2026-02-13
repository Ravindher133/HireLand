import React, { useState } from 'react';
import { MapPin, Bookmark, MessageSquare, Share2, ExternalLink, Check, X, ChevronDown, Flag, User, Building2 } from 'lucide-react';

// DUMMY DATA
const JOB_DATA = [
    {
        id: 1,
        title: "Cyber Security Intern",
        company: "TechSecure Solutions",
        location: "Dublin, Ireland (Hybrid)",
        salary: "₹8,086 – ₹20,000 a month",
        posted: "2 hours ago",
        applicants: "25+ applicants",
        type: "Internship",
        description: "Assist in vulnerability assessments and network security monitoring. Great opportunity for students.",
        skills: ["Vulnerability assessment", "Research", "Network security", "Python", "Linux"],
        logo: null
    },
    {
        id: 2,
        title: "Junior Security Analyst",
        company: "Global Cyber Defense",
        location: "Cork, Ireland (Remote)",
        salary: "€35,000 – €45,000 a year",
        posted: "5 hours ago",
        applicants: "10+ applicants",
        type: "Full-time",
        description: "Monitor security alerts, investigate incidents, and help improve our SOC procedures.",
        skills: ["SIEM", "Incident Response", "Firewalls", "TCP/IP"],
        logo: null
    },
    {
        id: 3,
        title: "Network Security Engineer",
        company: "FinTech Corp",
        location: "Galway, Ireland",
        salary: "€55,000 – €70,000 a year",
        posted: "1 day ago",
        applicants: "45+ applicants",
        type: "Full-time",
        description: "Design and implement secure network architectures. Manage firewalls and VPNs.",
        skills: ["Cisco", "Palo Alto", "VPN", "Network Design"],
        logo: null
    },
    {
        id: 4,
        title: "Information Security Officer",
        company: "HealthData Systems",
        location: "Limerick, Ireland",
        salary: "€60,000 – €80,000 a year",
        posted: "2 days ago",
        applicants: "8 applicants",
        type: "Contract",
        description: "Oversee information security policies and ensure compliance with GDPR and HIPAA.",
        skills: ["GDPR", "Risk Management", "ISO 27001", "Auditing"],
        logo: null
    }
];

const Jobs = () => {
    const [selectedJobId, setSelectedJobId] = useState(1);
    const selectedJob = JOB_DATA.find(job => job.id === selectedJobId) || JOB_DATA[0];

    return (
        <div className="min-h-screen bg-[#f3f4f6] pt-16 md:pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-0 md:px-4 h-[calc(100vh-5rem)]">
                <div className="flex flex-col md:flex-row h-full gap-6">

                    {/* LEFT PANEL: Job Listings */}
                    <div className="w-full md:w-[35%] flex flex-col h-full bg-white md:bg-transparent md:rounded-lg overflow-hidden">
                        {/* Header */}
                        <div className="p-4 bg-white border-b border-gray-200 md:rounded-t-lg sticky top-0 z-10">
                            <h1 className="text-xl font-bold text-slate-900">cyber security internship jobs</h1>
                            <div className="flex items-center justify-between mt-2 text-sm text-slate-500">
                                <p>
                                    <span className="text-green-600 font-medium">25+ new jobs</span>
                                </p>
                                <div className="flex items-center gap-1 cursor-pointer hover:text-slate-900">
                                    <span>Sort by: <span className="font-semibold text-slate-700">Relevance</span></span>
                                    <ChevronDown className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        {/* List */}
                        <div className="overflow-y-auto flex-1 bg-white md:rounded-b-lg custom-scrollbar">
                            {JOB_DATA.map((job) => (
                                <div
                                    key={job.id}
                                    onClick={() => setSelectedJobId(job.id)}
                                    className={`p-4 border-b border-gray-200 cursor-pointer transition-all hover:bg-slate-50 relative group ${selectedJobId === job.id ? 'bg-blue-50/50' : 'bg-white'
                                        }`}
                                >
                                    {/* Selection Indicator (Blue Border) */}
                                    {selectedJobId === job.id && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
                                    )}

                                    <div className="flex gap-3">
                                        <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                                            <Building2 className="w-6 h-6 text-slate-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-base font-semibold mb-0.5 group-hover:underline ${selectedJobId === job.id ? 'text-blue-700' : 'text-slate-900'}`}>
                                                {job.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 mb-1">{job.company}</p>
                                            <p className="text-sm text-slate-500 mb-2">{job.location}</p>

                                            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                                                <span className="text-green-700 font-medium flex items-center gap-1">
                                                    <User className="w-3 h-3" /> {job.applicants}
                                                </span>
                                                <span>•</span>
                                                <span>{job.posted}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
                                        <Bookmark className="w-5 h-5" />
                                    </button>
                                    <button className="absolute bottom-4 right-4 text-slate-400 hover:text-slate-600 hidden group-hover:block">
                                        <Flag className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT PANEL: Job Details */}
                    <div className="w-full md:w-[65%] h-full overflow-y-auto bg-white rounded-lg border border-gray-200 shadow-sm hidden md:block">
                        <div className="p-8">
                            {/* Header Section */}
                            <div className="mb-6">
                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-4 border border-slate-200">
                                        <Building2 className="w-8 h-8 text-slate-400" />
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"><Share2 className="w-5 h-5" /></button>
                                        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"><Bookmark className="w-5 h-5" /></button>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-1">{selectedJob.title}</h2>
                                <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                                    <span className="font-semibold text-slate-900 hover:underline cursor-pointer">{selectedJob.company}</span>
                                    <span>•</span>
                                    <span>{selectedJob.location}</span>
                                    <span>•</span>
                                    <span className="text-green-600 font-medium">{selectedJob.applicants}</span>
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full border border-green-100">
                                        <MapPin className="w-3.5 h-3.5" /> On-site
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100">
                                        Full-time
                                    </div>
                                    <span className="text-sm text-slate-500">{selectedJob.salary}</span>
                                </div>

                                <div className="flex gap-3">
                                    <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-sm flex items-center gap-2">
                                        Apply Now <ExternalLink className="w-4 h-4" />
                                    </button>
                                    <button className="px-6 py-2.5 bg-white border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all">
                                        Save
                                    </button>
                                </div>
                            </div>

                            <hr className="my-8 border-gray-100" />

                            {/* Profile Insights */}
                            <div className="mb-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                                        <span className="text-amber-600 text-xs font-bold">💡</span>
                                    </div>
                                    Profile insights
                                </h3>

                                {/* Skills */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Skills assessment</h4>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {selectedJob.skills.map((skill, i) => (
                                            <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm rounded-full font-medium">
                                                {skill}
                                            </span>
                                        ))}
                                        <span className="px-3 py-1 bg-white border border-slate-200 text-slate-400 text-sm rounded-full font-medium cursor-pointer hover:bg-slate-50">+ show more</span>
                                    </div>

                                    <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200">
                                        <span className="text-sm text-slate-700 font-medium">Do you have experience in <span className="font-bold text-slate-900">Vulnerability assessment</span>?</span>
                                        <div className="flex gap-2">
                                            <button className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-full transition-colors">Skip</button>
                                            <button className="px-4 py-1.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-colors">Yes</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Languages */}
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Languages</h4>
                                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <MessageSquare className="w-4 h-4 text-slate-400" />
                                                <span className="font-semibold text-sm text-slate-700">Malayalam</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-3">
                                            <span className="text-sm text-slate-600">Do you know Malayalam?</span>
                                            <div className="flex gap-2">
                                                <button className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-full transition-colors">No</button>
                                                <button className="px-4 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">Yes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-8 border-gray-100" />

                            {/* Description */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4">About the job</h3>
                                <div className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed">
                                    <p className="mb-4">{selectedJob.description}</p>
                                    <p className="mb-4">
                                        <strong>Key Responsibilities:</strong>
                                    </p>
                                    <ul className="list-disc pl-5 mb-4 space-y-2">
                                        <li>Conduct vulnerability assessments and penetration testing.</li>
                                        <li>Monitor network traffic for security incidents.</li>
                                        <li>Collaborate with the diverse IT team to implement security controls.</li>
                                        <li>Assist in the preparation of security reports and documentation.</li>
                                    </ul>
                                    <p>
                                        <strong>Requirements:</strong>
                                    </p>
                                    <ul className="list-disc pl-5 mb-4 space-y-2">
                                        <li>Currently enrolled in a Computer Science or related degree.</li>
                                        <li>Basic knowledge of networking protocols (TCP/IP).</li>
                                        <li>Familiarity with security tools (e.g., Wireshark, Metasploit) is a plus.</li>
                                        <li>Strong analytical and problem-solving skills.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Detail Overlay (Only visible on small screens when a job is selected?) 
              For this implementation, let's keep it overlapping or just rely on the 'hidden md:block' 
              and maybe a state to toggle listing/detail on mobile. 
              But for now, following 35/65 split. 
              To make it truly responsive as requested:
          */}
                </div>
            </div>
        </div>
    );
};

export default Jobs;
