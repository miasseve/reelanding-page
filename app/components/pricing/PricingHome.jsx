"use client";

import { motion } from "framer-motion";

export default function PricingHero() {
    return (
        <section className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[700px]"
            >
                <p className="text-white/90 text-[16px] md:text-[18px] font-light leading-relaxed mb-1">
                    Get an online presence in 24 hours. No staff needed.
                </p>
                <p className="text-white/90 text-[16px] md:text-[18px] font-light leading-relaxed mb-14">
                    ALL product registration — synchronisation — devO DONE
                </p>

                <h1 className="text-[clamp(32px,5.5vw,56px)] font-black italic leading-[1.2] mb-4">
                    <span className="gradient-text">
                        YOUR way , YOUR system
                    </span>
                </h1>
                <h2 className="text-[clamp(28px,5vw,50px)] font-black italic leading-[1.2]">
                    <span className="gradient-text">
                        with YOUR webstore
                    </span>
                </h2>
            </motion.div>
        </section>
    );
}
