"use client";

import { motion } from "framer-motion";
import { useSanityContent, t } from "../SanityProvider";

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function PricingHero() {
    const { pricingContent } = useSanityContent();

    return (
        <section className="min-h-screen bg-[#C4397C] flex flex-col items-center justify-center px-6 pt-0 pb-16 md:pb-0 text-center relative overflow-hidden">
            {/* Gradient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,_#E99491_0%,_transparent_65%)] opacity-80 pointer-events-none z-[1]" />

            {/* Content with staggered entrance */}
            <motion.div
                className="max-w-[800px] z-10 px-4 relative"
                variants={stagger}
                initial="hidden"
                animate="show"
            >
                <motion.span
                    variants={fadeUp}
                    className="inline-block text-[11px] md:text-[13px] tracking-[0.2em] uppercase text-white/70 border border-white/20 rounded-full px-5 py-2 mb-8"
                >
                    {t(pricingContent, "heroBadge", "Online Presence in 24 Hours")}
                </motion.span>

                <motion.h1
                    variants={fadeUp}
                    className="text-[clamp(32px,5.5vw,56px)] font-bold leading-[1.2] mb-2"
                >
                    <span className="text-white">
                        {t(pricingContent, "heroTitle", "YOUR WAY, YOUR SYSTEM")}
                    </span>
                </motion.h1>
                <motion.h2
                    variants={fadeUp}
                    className="text-[clamp(28px,5vw,50px)] font-bold leading-[1.2] mb-8"
                >
                    <span className="text-white">WITH YOUR </span>
                    <span style={{ color: "#9053ED" }}>WEBSTORE</span>
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    className="text-white/50 text-[16px] md:text-[16px] leading-relaxed"
                >
                    {t(pricingContent, "heroBody", "All product registration, synchronisation, and dev work done\nfor you. No staff needed.")}
                </motion.p>
            </motion.div>
        </section>
    );
}
