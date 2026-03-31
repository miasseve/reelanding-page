"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
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
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setReady(true));
    }, []);

    return (
        <section className="min-h-screen bg-[#050510] flex flex-col items-center justify-center px-6 pt-0 pb-16 md:pb-0 text-center relative overflow-hidden">
            {/* Floating particles */}
            {ready && <Particles
                id="pricing-hero-particles"
                className="absolute inset-0 z-0"
                options={{
                    fullScreen: false,
                    particles: {
                        number: { value: 60 },
                        color: {
                            value: ["#a040dc", "#dc50a0"],
                        },
                        opacity: {
                            value: { min: 0.2, max: 0.6 },
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                        move: {
                            enable: true,
                            direction: "top",
                            speed: { min: 0.3, max: 1 },
                            outModes: { default: "out" },
                        },
                    },
                    detectRetina: true,
                }}
            />}

            {/* Purple glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(100,50,180,0.25)_0%,_transparent_70%)] pointer-events-none z-[1]" />

            {/* Floating orbs */}
            <motion.div
                className="absolute w-[200px] h-[200px] rounded-full bg-purple-500/10 blur-[80px] top-[15%] left-[10%] pointer-events-none z-[1]"
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-[100px] bottom-[10%] right-[8%] pointer-events-none z-[1]"
                animate={{ y: [0, 25, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-[150px] h-[150px] rounded-full bg-violet-400/10 blur-[60px] top-[50%] right-[25%] pointer-events-none z-[1]"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Content with staggered entrance */}
            <motion.div
                className="max-w-[800px] z-10 px-4"
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
                    className="text-[clamp(32px,5.5vw,56px)] font-black italic leading-[1.2] mb-2"
                >
                    <span className="text-white">
                        {t(pricingContent, "heroTitle", "YOUR WAY, YOUR SYSTEM")}
                    </span>
                </motion.h1>
                <motion.h2
                    variants={fadeUp}
                    className="text-[clamp(28px,5vw,50px)] font-black italic leading-[1.2] mb-8"
                >
                    <span className="gradient-text-shimmer inline-block pr-1">
                        {t(pricingContent, "heroSubtitle", "WITH YOUR WEBSTORE")}
                    </span>
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    className="text-white/50 text-[14px] md:text-[16px] font-light leading-relaxed"
                >
                    {t(pricingContent, "heroBody", "All product registration, synchronisation, and dev work — done\nfor you. No staff needed.")}
                </motion.p>
            </motion.div>
        </section>
    );
}
