"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useSanityContent, t } from "../../components/SanityProvider";

function fmt(n) {
    return Math.round(n).toLocaleString("da-DK");
}

function fmtK(n) {
    return n >= 1000 ? (n / 1000).toFixed(1).replace(".0", "") + "K" : Math.round(n).toString();
}

function SliderField({ label, min, max, step, value, display, onChange }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <p className="text-[16px] text-gray-300 font-normal">{label}</p>
                <span className="text-[14px] font-semibold text-white min-w-[80px] text-right">
                    {display}
                </span>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full h-[3px] rounded-full appearance-none cursor-pointer"
                style={{
                    background: `linear-gradient(to right, #a040dc ${((value - min) / (max - min)) * 100}%, #3a3350 ${((value - min) / (max - min)) * 100}%)`,
                    accentColor: "#a040dc",
                }}
            />
        </div>
    );
}

function ResultItem({ title, value, sub, barPct, numColor, barColor }) {
    return (
        <div>
            <p className="text-[14px] text-white mb-1">{title}</p>
            <p className="text-[22px] sm:text-[32px] md:text-[36px] font-bold leading-none tracking-tight break-words" style={{ color: numColor }}>
                {value}
            </p>
            <p className="text-[14px] mt-1" style={{ color: numColor, opacity: 0.75 }}>{sub}</p>
            <div className="h-[3px] bg-[#2a2540] rounded-full mt-3 overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${barPct}%`, backgroundColor: barColor }}
                />
            </div>
        </div>
    );
}

export default function CalculatorSection() {
    const { pricingContent } = useSanityContent();
    const [products, setProducts] = useState(100);
    const [people, setPeople] = useState(3);
    const [revenue, setRevenue] = useState(50000);
    const [wage, setWage] = useState(200);
    const [mins, setMins] = useState(20);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setReady(true));
    }, []);

    const hrs = Math.round((products * mins) / 60);
    const labour = Math.round(((products * mins) / 60) * wage * people);
    const revGain = Math.round(revenue * 0.18);

    const barPct1 = Math.min(Math.round((hrs / 200) * 100), 100);
    const barPct2 = Math.min(Math.round((labour / 200000) * 100), 100);
    const barPct3 = Math.min(Math.round((revGain / 100000) * 100), 100);

    let insightHead = "Solid efficiency gains";
    let insightBody = `Reclaim ${hrs} hrs and ${fmt(labour)} DKK in labour while growing revenue by ${fmt(revGain)} DKK/month.`;

    if (hrs < 20) {
        insightHead = "Small store, real savings";
        insightBody = `Even at this scale, automating barcodes and sync saves ${hrs} hrs/month — time better spent sourcing.`;
    } else if (labour > 50000) {
        insightHead = "Labour is your biggest leak";
        insightBody = `You're spending ${fmt(labour)} DKK/month on manual listing. Automating this alone funds the platform for years.`;
    } else if (revGain > 30000) {
        insightHead = "Growth is on the table";
        insightBody = `Faster listings could unlock ${fmt(revGain)} DKK more revenue monthly. The platform pays for itself in weeks.`;
    }

    return (
        <section 
        id="calculate"
        className="bg-[#111111] py-16 sm:py-20 px-4 sm:px-8 md:px-[6vw] relative overflow-hidden">
            {/* Floating particles */}
            {ready && (
                <Particles
                    id="calculator-particles"
                    className="absolute inset-0 z-0"
                    options={{
                        fullScreen: false,
                        particles: {
                            number: { value: 60 },
                            color: { value: ["#a040dc", "#dc50a0"] },
                            opacity: { value: { min: 0.2, max: 0.6 } },
                            size: { value: { min: 1, max: 3 } },
                            move: {
                                enable: true,
                                direction: "top",
                                speed: { min: 0.3, max: 1 },
                                outModes: { default: "out" },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-[900px] mx-auto items-start relative z-10">
                <div>
                    <p className="text-[28px] font-medium leading-[40px] gradient-text uppercase mb-3">
                        {t(pricingContent, "calcLabel", "Cost calculator")}
                    </p>
                    <h2 className="text-[26px] sm:text-[32px] font-bold text-white leading-snug mb-2">
                        {t(pricingContent, "calcHeading", "How much is manual work costing you?")}
                    </h2>
                    <p className="text-[16px] text-gray-400 leading-relaxed mb-8">
                        {t(pricingContent, "calcDescription", "Adjust the sliders to match your store. The real cost of manual listing is usually much higher than expected.")}
                    </p>

                    <div className="flex flex-col gap-6">
                        <SliderField label="Products listed per month" min={10} max={500} step={10} value={products} display={String(products)} onChange={setProducts} />
                        <SliderField label="People doing the listing" min={1} max={20} step={1} value={people} display={String(people)} onChange={setPeople} />
                        <SliderField label="Monthly revenue (DKK)" min={5000} max={500000} step={5000} value={revenue} display={fmtK(revenue) + " DKK"} onChange={setRevenue} />
                        <SliderField label="Avg. hourly wage (DKK)" min={100} max={500} step={10} value={wage} display={wage + " DKK"} onChange={setWage} />
                        <SliderField label="Minutes spent per product (manual)" min={5} max={60} step={1} value={mins} display={mins + " min"} onChange={setMins} />
                    </div>
                </div>

                <div className="md:sticky md:top-10">
                    <div className="bg-[#1a1a2e] rounded-[20px] overflow-hidden shadow-sm divide-y divide-[#2a2540]">
                        <div className="p-6">
                            <ResultItem
                                title="Hours saved per month"
                                value={hrs + " hrs"}
                                sub={`Across ${people} people listing ${products} products`}
                                barPct={barPct1}
                                numColor="#a040dc"
                                barColor="#a040dc"
                            />
                        </div>

                        <div className="p-6">
                            <ResultItem
                                title="Labour cost you're paying now"
                                value={fmt(labour) + " DKK"}
                                sub={`At ${wage} DKK/hr · ${people} staff members`}
                                barPct={barPct2}
                                numColor="#7c3aed"
                                barColor="#7c3aed"
                            />
                        </div>

                        <div className="p-6">
                            <ResultItem
                                title="Revenue increase potential"
                                value={"+" + fmt(revGain) + " DKK"}
                                sub="~18% uplift from faster listings & auto-sync"
                                barPct={barPct3}
                                numColor="#EC4899"
                                barColor="#EC4899"
                            />
                        </div>

                        <div className="p-6">
                            <div className="bg-[#2a2540] rounded-[14px] px-5 py-4">
                                <p className="text-[16px] font-semibold text-purple-300 mb-1">{insightHead}</p>
                                <p className="text-[14px] text-white leading-relaxed">{insightBody}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                input[type=range]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: white;
                    border: 2px solid #a040dc;
                    cursor: pointer;
                    box-shadow: 0 1px 4px rgba(0,0,0,0.3);
                }
                input[type=range]::-moz-range-thumb {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: white;
                    border: 2px solid #a040dc;
                    cursor: pointer;
                    box-shadow: 0 1px 4px rgba(0,0,0,0.3);
                }
                input[type=range] { -webkit-appearance: none; appearance: none; }
                input[type=range]:focus { outline: none; }
            `}</style>
        </section>
    );
}
