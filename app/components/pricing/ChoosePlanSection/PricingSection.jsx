"use client";

import { motion } from "framer-motion";

const plans = [
    {
        id: 2,
        title: "Auto Webstore",
        subtitle: "Launch Your Resell Webstore",
        accentColor: "#7c3aed",
        dividerColor: "#7c3aed",
        tiers: [
            {
                label: "Basic — One-time",
                price: "4,800",
                currency: "DKK/ONCE",
                users: "2 users",
                products: "300 products per month",
                note: "4% per transactions",
            },
            {
                label: "Pro — One-time",
                price: "35,000",
                currency: "DKK/ONCE",
                users: "5 users",
                products: "1000 products per month",
                note: "2% per transactions",
            },
        ],
        cta: "Get started",
    },
    {
        id: 3,
        title: "Auto Plug-In",
        subtitle: "Connect Your Existing Store",
        accentColor: "#7c3aed",
        dividerColor: "#e84393",
        tiers: [
            {
                label: "Basic — Per-month",
                price: "3,200",
                currency: "DKK",
                users: "2 users",
                products: "300 products per month",
            },
            {
                label: "Pro — One-time",
                price: "6,000",
                currency: "DKK/ONCE",
                users: "5 users",
                products: "1000 products per month",
            },
        ],
        cta: "Get started",
    },
];

const PlanIcon = ({ id, color }) => {
    const icons = {
        2: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" className="w-6 h-6">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        3: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" className="w-6 h-6">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
    };
    return icons[id] || null;
};

export default function PricingSection() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-purple-100/40 via-violet-50/30 to-transparent pointer-events-none" />
            <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.1)_0%,_transparent_70%)] pointer-events-none" />

            <motion.div
                className="relative text-center mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="inline-block text-[14px] font-medium text-purple-600 bg-purple-100/60 border border-purple-200/50 rounded-full px-5 py-2 mb-5">
                    Simple, transparent pricing
                </span>
                <h1 className="text-[34px] sm:text-[46px] font-bold text-[#1a1a1a] mb-3 leading-tight tracking-tight">PRICING</h1>
                <p className="text-gray-500 text-[16px]">
                    Choose the perfect plan for your business. Scale as you grow.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto px-4">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="group rounded-3xl border border-gray-200 bg-white w-full flex flex-col relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-100/80 cursor-default"
                    >
                        {/* TOP SECTION */}
                        <div className="px-6 pt-8 pb-5 flex flex-col items-center" style={{ background: "linear-gradient(180deg, #f3eeff 0%, #ffffff 100%)" }}>
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <PlanIcon id={plan.id} color={plan.accentColor} />
                            </div>
                            <h3 className="text-[22px] font-bold text-[#1a1a1a]">
                                {plan.title}
                            </h3>
                            <p className="text-[15px] text-gray-500 text-center pt-2 pb-4">
                                {plan.subtitle}
                            </p>
                            <div
                                className="w-full h-[3px] rounded-full"
                                style={{ backgroundColor: plan.dividerColor }}
                            />
                        </div>

                        {/* BOTTOM SECTION */}
                        <div className="bg-white px-6 pt-6 pb-6 flex flex-col flex-1">
                            <div className="flex-1 space-y-6">
                                {plan.tiers.map((tier, i) => (
                                    <div key={i} className="md:h-[150px]">
                                        {i > 0 && (
                                            <div className="border-t border-dashed border-gray-200 mb-5" />
                                        )}
                                        <p
                                            className="text-[15px] font-medium text-center mb-2"
                                            style={{ color: plan.accentColor }}
                                        >
                                            {tier.label}
                                        </p>
                                        {tier.users && (
                                            <p className="text-[14px] text-gray-500 mt-1 text-center">
                                                {tier.users}
                                            </p>
                                        )}
                                        {tier.products && (
                                            <p
                                                className="text-[14px] font-medium mt-0.5 text-center"
                                                style={{ color: plan.accentColor }}
                                            >
                                                {tier.products}
                                            </p>
                                        )}
                                        <div className="flex items-baseline gap-1 mb-1 justify-center">
                                            <span className="text-[36px] font-bold text-gray-900">
                                                {tier.price}
                                            </span>
                                            <span className="text-[14px] font-semibold text-gray-500 uppercase">
                                                {tier.currency}
                                            </span>
                                        </div>
                                        {tier.note && (
                                            <p
                                                className="text-[14px] font-medium text-center"
                                                style={{ color: plan.accentColor }}
                                            >
                                                {tier.note}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-8">
                                <a
                                    href="https://re-e.dk/try/subscription-plan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3.5 rounded-2xl border border-gray-200 bg-white text-gray-800 text-[16px] font-semibold text-center transition-all duration-300 ease-out hover:border-gray-300 hover:shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
