import React from 'react';
import { ShieldAlert } from 'lucide-react';
import SEO from '../components/SEO';

const Disclaimer = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <SEO
                title="Disclaimer"
                description="Disclaimer for HireLand. We use only publicly available data and do not scrape personal information."
            />
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <ShieldAlert className="w-10 h-10 text-amber-500" />
                        <h1 className="text-2xl font-bold text-slate-900">Disclaimer</h1>
                    </div>

                    <div className="prose prose-slate max-w-none text-slate-600">
                        <p className="mb-4">
                            Welcome to <strong>HireLand</strong>. Please read this disclaimer carefully before using our platform.
                        </p>

                        <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">Information Accuracy</h3>
                        <p className="mb-4">
                            The company information listed on this website is for general informational purposes only. While we verify data at the time of listing,
                            hiring statuses, contact details, and other company information may change. We recommend verifying details directly on the company's official website.
                        </p>

                        <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">No Personal Data Collection</h3>
                        <p className="mb-4">
                            This platform uses only <strong>publicly available company information</strong>.
                            We do not collect, store, or scrape personal LinkedIn data or private individual contact details.
                            Any email addresses listed are public HR or careers contacts provided by the companies themselves or found on their public channels.
                        </p>

                        <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">Third-Party Links</h3>
                        <p className="mb-4">
                            Our website contains links to external websites (e.g., company career pages, LinkedIn profiles).
                            We are not responsible for the content, privacy policies, or practices of any third-party sites.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
