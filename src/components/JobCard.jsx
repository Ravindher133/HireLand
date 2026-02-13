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
            block bg-slate-900/50 backdrop-blur-sm border p-5 rounded-lg transition-all duration-300
            ${isNew
                ? 'border-indigo-500/40 bg-indigo-500/5 shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)]'
                : 'border-white/10 hover:border-white/20 hover:bg-white/5'
            }
        `}>
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-indigo-400">def</span>
                    <h3 className="font-bold text-slate-200 text-sm">{job.title}</h3>
                </div>
                {isNew && (
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                )}
            </div>

            <div className="mb-4">
                <p className="text-slate-400 text-sm mb-1">{job.company}</p>
                <div className="flex gap-3 text-xs text-slate-500 font-mono">
                    <span>{job.location}</span>
                    <span>|</span>
                    <span>{job.type}</span>
                </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-xs font-mono text-slate-600">{timeString} ago</span>
                <a
                    href={job.url}
                    className="text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group"
                >
                    apply() <ExternalLink className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </div>
        </div>
    );
};

export default JobCard;
