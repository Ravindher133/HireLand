import React from 'react';
import { Target, ShieldCheck, Heart } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <SEO
                title="About Us"
                description="We help job seekers in Ireland find the best companies to work for. Ethical, transparent, and community-driven."
            />
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-slate-900 mb-4">About HireLand</h1>
                    <p className="text-lg text-slate-600">
                        Bridging the gap between Ireland's talent and its most innovative companies.
                    </p>
                </div>

                <div className="space-y-12">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                            <Target className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h2>
                            <p className="text-slate-600 leading-relaxed">
                                To provide a transparent, curated, and easy-to-use platform for job seekers in Ireland to discover companies that are hiring.
                                We believe in connecting people directly to the source—official career pages—bypassing the noise of aggregators.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                            <ShieldCheck className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 mb-2">Ethical Data Usage</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We prioritize privacy. All company information listed on HireLand is curated from publicly available sources (official websites, public LinkedIn pages).
                                We do not scrape personal data or share your information with third parties.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                            <Heart className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 mb-2">Community Driven</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Built for the community, by the community. We support both established MNCs and the vibrant startup ecosystem in Ireland, giving visibility to great teams regardless of their size.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
