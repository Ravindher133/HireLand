import React from 'react';
import { Target, ShieldCheck, Heart, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="min-h-screen pb-20 bg-slate-50">
            <SEO
                title="About Us - HireLand"
                description="We help job seekers in Ireland find the best companies to work for. Ethical, transparent, and community-driven."
            />

            {/* Hero Section */}
            <div className="bg-white border-b border-slate-200 pt-20 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Connecting Talent with <br />
                            <span className="text-primary-600">Opportunity in Ireland</span>
                        </h1>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            HireLand is the definitive directory of companies hiring in Ireland.
                            We believe in direct connections, transparency, and empowering job seekers.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Target,
                            title: "Our Mission",
                            desc: "To provide a transparent, curated, and easy-to-use platform for job seekers in Ireland. We remove the middleman and connect you directly to official career pages."
                        },
                        {
                            icon: ShieldCheck,
                            title: "Verified Data",
                            desc: "We prioritize privacy and accuracy. All company information listed on HireLand is curated from publicly available sources. We do not scrape personal data."
                        },
                        {
                            icon: Users,
                            title: "Community First",
                            desc: "Built for the community. We support both established MNCs and the vibrant startup ecosystem in Ireland, giving visibility to great teams regardless of their size."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                                <item.icon className="w-6 h-6 text-primary-600" />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h2>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="grid md:grid-cols-2">
                        <div className="p-12 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Built for the future of work.</h2>
                            <p className="text-slate-500 mb-6 leading-relaxed">
                                The recruitment landscape is changing. HireLand is designed to be the modern operating system for your job search in Ireland.
                                Fast, clean, and direct.
                            </p>
                            <div className="flex items-center gap-2 text-primary-600 font-semibold">
                                <Globe className="w-5 h-5" />
                                <span>Based in Dublin, Ireland</span>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-12 flex items-center justify-center border-l border-slate-100">
                            <div className="text-center">
                                <div className="text-5xl font-bold text-slate-900 mb-2">500+</div>
                                <div className="text-slate-500 font-medium">Companies Listed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
