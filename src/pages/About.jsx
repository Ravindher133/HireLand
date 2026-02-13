import React from 'react';
import { Target, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="min-h-screen py-20 relative overflow-hidden">
            <SEO
                title="About Us"
                description="We help job seekers in Ireland find the best companies to work for. Ethical, transparent, and community-driven."
            />

            {/* Background blob for visual interest */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 mb-4 inline-block">
                        Our Story
                    </span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                        About <span className="text-indigo-600">HireLand</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Bridging the gap between Ireland's top talent and its most innovative companies.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {[
                        {
                            icon: Target,
                            color: "blue",
                            title: "Our Mission",
                            desc: "To provide a transparent, curated, and easy-to-use platform for job seekers in Ireland to discover companies that are hiring. We start by connecting people directly to the source—official career pages."
                        },
                        {
                            icon: ShieldCheck,
                            color: "emerald",
                            title: "Ethical Data Usage",
                            desc: "We prioritize privacy. All company information listed on HireLand is curated from publicly available sources like official websites and LinkedIn. We do not scrape personal data or share your info."
                        },
                        {
                            icon: Heart,
                            color: "rose",
                            title: "Community Driven",
                            desc: "Built for the community, by the community. We support both established MNCs and the vibrant startup ecosystem in Ireland, giving visibility to great teams regardless of their size."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-lg shadow-slate-200/50 flex flex-col md:flex-row gap-8 items-start hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className={`p-4 rounded-xl flex-shrink-0 bg-${item.color}-50 text-${item.color}-600`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-display font-bold text-slate-900 mb-3">{item.title}</h2>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
