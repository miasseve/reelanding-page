const plans = [
    {
        id: 1,
        title: "Auto Label & Ad",
        subtitle: "Get Barcode & Instagram",
        gradient: "from-[#F9F4FF] to-[#F9F4FF]",
        border: "border-purple-100",
    },
];


const PlanIcon = ({ id }) => {
    const icons = {
        1: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" className="w-6 h-6">
                <rect x="2" y="4" width="3" height="16" /><rect x="7" y="4" width="2" height="16" />
                <rect x="11" y="4" width="4" height="16" /><rect x="17" y="4" width="2" height="16" />
                <rect x="21" y="4" width="1" height="16" />
            </svg>
        ),
    };
    return icons[id] || null;
};



export default function GetBarcode() {
    return (
        <div className="flex justify-center pb-20 px-4">
            {plans.map((plan) => (
                <div
                    key={plan.id}
                    className={`rounded-3xl max-w-[350px] border ${plan.border} w-full flex flex-col justify-center relative overflow-hidden shadow-sm`}
                >
                    {/* TOP SECTION */}
                    <div
                        className={`bg-gradient-to-br ${plan.gradient} px-6 pt-6 pb-5 flex flex-col items-center`}
                    >
                        <div className="w-12 h-12 bg-white rounded-xl shadow-[0px_0px_20px_rgba(0,0,0,0.05)] mb-5 flex items-center justify-center">
                            <PlanIcon id={plan.id} />
                        </div>
                        <h3 className="text-[22px] font-bold text-[#000]">
                            {plan.title}
                        </h3>
                        <p className="text-[15px] text-gray-500 text-center pt-2 pb-4">
                            {plan.subtitle}
                        </p>
                        <div className="w-full h-[3px] rounded-full bg-gradient-to-r from-[#7c3aed] to-[#EC4899]" />
                    </div>
                </div>
            ))}
        </div>
    );
}
