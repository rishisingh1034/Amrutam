import header1 from "/src/assets/1.png";
import header2 from "/src/assets/2.png";
import header3 from "/src/assets/3.png";
import header4 from "/src/assets/4.png";
import discover1 from "/src/assets/discover1.png";
import discover2 from "/src/assets/discover2.png";
import discover3 from "/src/assets/discover3.png";
import discover4 from "/src/assets/discover4.png";
import discover5 from "/src/assets/discover5.png";
import discover6 from "/src/assets/discover6.png";
import centerImg from "/src/assets/center.png";

export default function AyurvedaLanding() {
    const headerFeatures = [
        { title: "Convenient Online & In-Clinic Consultations", image: header1 },
        { title: "Safe And Effective Treatment", image: header2 },
        { title: "Experienced Ayurvedic Practitioners", image: header3 },
        { title: "Personalized Treatment Plans & Guidance", image: header4 },
    ];

    const benefits = [
        {
            title: "Personalized Wellness",
            description: "Get treatments made just for you based on your individual doshas (body type)",
            className: "md:translate-x-[-20%]",
            image: discover1,
        },
        {
            title: "Focus on Prevention",
            description: "Stop problems even before they start.",
            className: "md:translate-x-[-10%]",
            image: discover2,
        },
        {
            title: "Mind-Body Connection",
            description: "Keep your mind and body in sync for a happy life.",
            className: "md:translate-y-[20%]",
            image: discover3,
        },
        {
            title: "Holistic Healing",
            description: "Fix the root problem for long-lasting health.",
            className: "md:translate-x-[10%]",
            image: discover4,
        },
        {
            title: "Natural Remedies",
            description: "Using herbs and natural therapies for healing.",
            className: "md:translate-x-[20%]",
            image: discover5,
        },
        {
            title: "Boosting Immunity",
            description: "Stay strong and healthy for life, not just for today.",
            className: "md:translate-x-[-20%]",
            image: discover6,
        },
    ];

    return (
        <div className="min-h-screen bg-cream-50" id="discover">
            {/* Header Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-8 bg-cream-100">
                {headerFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 p-4">
                        <div className="flex-shrink-0">
                            <img src={feature.image} alt="" width={48} height={48} />
                        </div>
                        <h3 className="font-medium text-green-800">{feature.title}</h3>
                    </div>
                ))}
            </div>

            {/* Main Section */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                        Discover Ayurveda's Magic With Us
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Ayurvedic treatment aims to balance your body and mind, bringing harmony
                        and vitality. It's like a journey to better health using ancient wisdom,
                        a totally effective approach for a better life.
                    </p>
                </div>

                <div className="relative">
                    {/* Decorative Background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[80%] h-[80%] bg-green-50 rounded-full opacity-20"></div>
                    </div>

                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Left Column */}
                        <div className="space-y-8">
                            {benefits.slice(0, 2).map((benefit, index) => (
                                <div key={index} className={`flex items-start gap-4 ${benefit.className}`}>
                                    <div className="w-12 h-12 flex-shrink-0">
                                        <img src={benefit.image} alt={benefit.title} width={48} height={48} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-green-800 mb-1">{benefit.title}</h3>
                                        <p className="text-sm text-gray-600">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Center Image */}
                        <div className="flex justify-center items-center">
                            <img
                                src={centerImg}
                                alt="Person meditating"
                                width={400}
                                height={400}
                                className="rounded-full"
                            />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {benefits.slice(2).map((benefit, index) => (
                                <div key={index + 2} className={`flex items-end gap-10 ${benefit.className}`}>
                                    <div className="w-16 h-16">
                                        <img src={benefit.image} alt={benefit.title} width={48} height={48} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-green-800 mb-1">{benefit.title}</h3>
                                        <p className="text-sm text-gray-600">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}