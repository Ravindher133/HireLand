import React from 'react';
import { MapPin, Clock, Briefcase, ExternalLink, Terminal } from 'lucide-react';

const JobCard = ({ job, isNew }) => {
    // Format date roughly
    const date = new Date(job.postedAt);
    const now = new Date();
    const diffInHours = Math.abs(now - date) / 36e5;

    let timeString = 'Just now';
    if (diffInHours > 24) {
        timeString = Math.floor(diffInHours / 24) + 'd';
    } else if (diffInHours >= 1) {
        timeString = Math.floor(diffInHours) + 'h';
    } else if (diffInHours * 60 > 1) {
        timeString = Math.floor(diffInHours * 60) + 'm';
    }

    return (
        <div className={`
            block bg-white border p-5 rounded-xl transition-all duration-300
            ${isNew
                ? 'border-primary-200 shadow-md ring-1 ring-primary-50 relative overflow-hidden'
                : 'border-slate-200 hover:border-primary-300 hover:shadow-soft'
            }
        `}>
            {isNew && (
                <div className="absolute top-0 right-0 p-1.5">
                    <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
                    </span>
                </div>
            )}

            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base leading-snug group-hover:text-primary-700 transition-colors">
                        {job.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mt-1">{job.company}</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 my-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                    <MapPin className="w-3 h-3 mr-1 text-slate-400" /> {job.location}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                    <Briefcase className="w-3 h-3 mr-1 text-slate-400" /> {job.type}
                </span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-2">
                <span className="text-xs text-slate-400 font-medium flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> {timeString} ago
                </span>
                <a
                    href={job.url}
                    className="text-xs font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1 group"
                >
                    Apply Now <ExternalLink className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </div>
        </div>
    );
};

export default JobCard;
