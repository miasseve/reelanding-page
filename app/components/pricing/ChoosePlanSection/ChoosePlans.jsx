"use client";

import { useState } from "react";

const tierCards = [
    {
        label: "Per Product",
        price: "10",
        currency: "DKK",
        subLabel: "per Product",
        noteExtra: "No monthly fees, ever",
        accent: "purple",
        bgTint: "from-[#faf7ff] to-white",
        borderColor: "border-purple-200",
        accentColor: "#7c3aed",
    },
    {
        label: "Basic",
        price: "390",
        currency: "DKK",
        users: "Up to 2 users",
        products: "Up to 300 products per month",
        accent: "purple",
        bgTint: "from-[#faf7ff] to-white",
        borderColor: "border-violet-200",
        accentColor: "#8b5cf6",
        popular: true,
    },
    {
        label: "Pro",
        price: "1,990",
        currency: "DKK",
        users: "Up to 5 users",
        products: "Up to 1000 products per month",
        accent: "violet",
        bgTint: "from-[#faf7ff] to-white",
        borderColor: "border-violet-200",
        accentColor: "#8b5cf6",
    },
];

// const individualPricing = [
//     {
//         title: "WEBSTORE",
//         items: ["Pay Once", "4% per Transactions"],
//         total: "4800 DKK",
//     },
//     {
//         title: "PLUG-IN",
//         items: ["Pay Once", "Connect your existing Webstore"],
//         total: "3200 DKK",
//     },
// ];

const featureRows = [
    { label: "Your Webstore", cols: [false, true, false, false] },
    { label: "Plug-In web", cols: [false, true, true, false] },
    { label: "Consigner portal", cols: [true, true, true, true] },
    { label: "Product linked to consigner profils", cols: [true, true, true, true] },
    { label: "Commission settings", cols: [true, true, true, true] },
    { label: "Auto Split payments", cols: [true, true, true, true] },
    { label: "Support", cols: [true, true, true, true] },
    { label: "Instagram integration", cols: [true, true, true, true] },
    { label: "Get a month free by inviting a friend", cols: [true, true, true, false] },
];

const comparisonColumns = [
    "Auto Label & Ad",
    "Auto Webshop",
    "Plug-In",
    "Pay As You Go",
];

const CheckIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "inline-block" }}
    >
        <path
            d="M3 8.5L6.5 12L13 5"
            stroke="#1a1a1a"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function ChoosePlans() {
    const [activeTab, setActiveTab] = useState("plan");

    return (
        <section className="px-4 pb-20">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-[34px] sm:text-[46px] font-bold text-white mb-4 leading-tight tracking-tight">
                    Choose Your Plan
                </h1>
            </div>

            {/* Toggle */}
            <div className="flex justify-center mb-12">
                <div className="bg-white rounded-full p-1.5 flex shadow-sm border border-gray-100">
                    {["plan", "comparison"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-5 sm:px-10 py-3 rounded-full text-[14px] sm:text-[16px] font-semibold transition-all duration-300 ease-out whitespace-nowrap ${
                                activeTab === tab
                                    ? "bg-gradient-to-r from-purple-200 to-violet-200 text-gray-800 shadow-md scale-[1.02]"
                                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                            {tab === "plan" ? "Plan Card" : "Feature Comparison"}
                        </button>
                    ))}
                </div>
            </div>

            {/* PLAN CARDS TAB */}
            {activeTab === "plan" && (
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 sm:px-8">
                    {tierCards.map((tier, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-3xl bg-gradient-to-b ${tier.bgTint} flex flex-col px-6 pt-6 pb-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100/50 cursor-default ${
                                tier.popular ? "" : `border ${tier.borderColor}`
                            }`}
                            style={tier.popular ? {
                                border: "2px solid transparent",
                                backgroundClip: "padding-box",
                                backgroundOrigin: "border-box",
                            } : undefined}
                        >
                            {/* Gradient border for popular card */}
                            {tier.popular && (
                                <div
                                    className="absolute inset-0 rounded-3xl -z-10"
                                    style={{
                                        padding: "2px",
                                        background: "linear-gradient(135deg, #a855f7, #ec4899)",
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                            )}
                            {/* Popular badge */}
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <span
                                        className="text-white text-[13px] font-semibold px-6 py-2 rounded-full shadow-lg whitespace-nowrap"
                                        style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                                    >
                                        Popular
                                    </span>
                                </div>
                            )}

                            {/* Tier Label */}
                            <p
                                className="text-[20px] font-bold text-center pb-3 pt-1"
                                style={{ color: tier.accentColor }}
                            >
                                {tier.label}
                            </p>
                            {/* Sub label */}
                            {tier.subLabel && (
                                <p className="text-[14px] text-gray-500 text-center mb-1">
                                    {tier.subLabel}
                                </p>
                            )}

                            {/* Note extra */}
                            {tier.noteExtra && (
                                <p
                                    className="text-[14px] font-medium text-center"
                                    style={{ color: tier.accentColor }}
                                >
                                    {tier.noteExtra}
                                </p>
                            )}

                            {/* Users */}
                            {tier.users && (
                                <p className="text-[14px] text-gray-500 text-center mt-1">
                                    {tier.users}
                                </p>
                            )}

                            {/* Products */}
                            {tier.products && (
                                <p
                                    className="text-[14px] font-medium text-center mt-0.5"
                                    style={{ color: tier.accentColor }}
                                >
                                    {tier.products}
                                </p>
                            )}
                            {/* Price */}
                            <div className="flex items-baseline gap-1 justify-center pt-2">
                                <span className="text-[36px] font-bold text-gray-900">
                                    {tier.price}
                                </span>
                                <span className="text-[14px] font-semibold text-gray-500 uppercase">
                                    {tier.currency}
                                </span>
                            </div>

                            {/* CTA */}
                            <div className="mt-4">
                                <button
                                    className="w-full py-3.5 rounded-2xl border text-[16px] font-semibold transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
                                    style={{
                                        borderColor: tier.accentColor + "66",
                                        background: tier.popular
                                            ? `linear-gradient(135deg, ${tier.accentColor}18, ${tier.accentColor}08)`
                                            : "white",
                                        color: tier.popular ? tier.accentColor : "#1f2937",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = `linear-gradient(135deg, ${tier.accentColor}22, ${tier.accentColor}11)`;
                                        e.currentTarget.style.borderColor = tier.accentColor;
                                        e.currentTarget.style.color = tier.accentColor;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = tier.popular
                                            ? `linear-gradient(135deg, ${tier.accentColor}18, ${tier.accentColor}08)`
                                            : "white";
                                        e.currentTarget.style.borderColor = tier.accentColor + "66";
                                        e.currentTarget.style.color = tier.popular ? tier.accentColor : "#1f2937";
                                    }}
                                >
                                    Get started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* FEATURE COMPARISON TAB */}
            {activeTab === "comparison" && (
                <div className="max-w-[1400px] mx-auto overflow-x-auto px-4 sm:px-8">
                    <div
                        className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm min-w-[600px]"
                        style={{ backgroundColor: "#ffffff" }}
                    >
                        <table className="w-full" style={{ borderCollapse: "collapse" }}>
                            <thead>
                                <tr
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(236, 72, 153, 0.08))",
                                    }}
                                >
                                    <th
                                        className="text-left py-6 pl-8 pr-4"
                                        style={{ width: "36%" }}
                                    />
                                    {comparisonColumns.map((col, idx) => (
                                        <th
                                            key={col}
                                            className={`py-6 px-4 text-center text-[17px] font-bold text-[#1a1a1a] ${idx === comparisonColumns.length - 1 ? "pr-8" : ""
                                                }`}
                                            style={{ width: "16%" }}
                                        >
                                            <span className="bg-gradient-to-r from-[#7c3aed] to-[#EC4899] bg-clip-text text-transparent">
                                                {col}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {featureRows.map((row) => (
                                    <tr
                                        key={row.label}
                                        className="transition-colors duration-200 hover:bg-purple-50/30"
                                        style={{ borderTop: "1px solid #f0ebe5" }}
                                    >
                                        <td
                                            className="py-5 pl-8 pr-4 text-[16px] text-[#1a1a1a]"
                                            style={{ fontWeight: 500 }}
                                        >
                                            {row.label}
                                        </td>
                                        {row.cols.map((hasFeature, colIdx) => (
                                            <td
                                                key={colIdx}
                                                className={`py-5 px-4 text-center ${colIdx === row.cols.length - 1 ? "pr-8" : ""
                                                    }`}
                                            >
                                                {hasFeature ? <CheckIcon /> : null}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </section>
    );
}
