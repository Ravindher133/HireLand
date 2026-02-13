import React from 'react';
import { MapPin, Clock, Briefcase, ExternalLink, Building } from 'lucide-react';

const JobCard = ({ job, isNew }) => {
    // Format date roughly
    const date = new Date(job.postedAt);
    const now = new Date();
    const diffInHours = Math.abs(now - date) / 36e5;

    let timeString = 'Just now';
    if (diffInHours > 24) {
        timeString = Math.floor(diffInHours / 24) + 'd ago';
    } else if (diffInHours >= 1) {
        timeString = Math.floor(diffInHours) + 'h ago';
    } else if (diffInHours * 60 > 1) {
        timeString = Math.floor(diffInHours * 60) + 'm ago';
    }

    return (
        <div className={`
            bg-white rounded-xl border p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all duration-500
            ${isNew ? 'border-indigo-200 shadow-md shadow-indigo-100 ring-1 ring-indigo-100 scale-[1.02]' : 'border-slate-100 shadow-sm hover:shadow-md'}
        `}>
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0 text-indigo-600">
                    <Building className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                        {job.title}
                        {isNew && (
                            <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider animate-pulse">
                                New
                            </span>
                        )}
                    </h3>
                    <p className="text-slate-600 font-medium mb-1">{job.company}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />{job.location}</span>
                        <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1" />{job.type}</span>
                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />{timeString}</span>
                    </div>
                </div>
            </div>

            <a
                href={job.url}
                className="w-full sm:w-auto px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors flex items-center justify-center gap-2 text-sm"
            >
                Apply Now <ExternalLink className="w-3 h-3" />
            </a>
        </div>
    );
};

export default JobCard;
