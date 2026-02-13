import React from 'react';
import { Target, ShieldCheck, Heart, Sparkles, Code2 } from 'lucide-react';
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
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6">
                        <Code2 className="w-3 h-3" />
                        <span>Manifesto v1.0</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-100 mb-6 leading-tight">
                        About <span className="text-indigo-500">HireLand_</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Bridging the gap between Ireland's top talent and its most innovative companies.
                        <br /> <span className="text-indigo-400 font-mono text-sm">No recruiters. Direct connection.</span>
                    </p>
                </motion.div>

                <div className="grid gap-6">
                    {[
                        {
                            icon: Target,
                            color: "indigo",
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
                            className="bg-slate-900/50 backdrop-blur-md rounded-lg p-8 border border-white/10 hover:border-indigo-500/30 flex flex-col md:flex-row gap-8 items-start transition-all duration-300 group"
                        >
                            <div className={`p-4 rounded-md flex-shrink-0 bg-${item.color}-500/10 text-${item.color}-400 border border-${item.color}-500/20 group-hover:bg-${item.color}-500/20 transition-colors`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-display font-bold text-slate-200 mb-3 group-hover:text-indigo-400 transition-colors">{item.title}</h2>
                                <p className="text-slate-400 leading-relaxed font-light">
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
