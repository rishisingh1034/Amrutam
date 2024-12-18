import { motion } from 'framer-motion'
import ayurvedic1 from "/src/assets/ayurvedic1.png"
import ayurvedic2 from "/src/assets/ayurvedic2.png"
import ayurvedic3 from "/src/assets/ayurvedic3.png"

const Card = ({ title, description, image, sanskrit, isWide = false }) => {
    return (
        <motion.div
            className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${isWide ? 'col-span-2' : 'col-span-1'
                }`}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            {image && (
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}
            <div className="p-6">
                {sanskrit && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-lg text-green-800 font-sanskrit mb-4 text-center"
                    >
                        {sanskrit}
                    </motion.div>
                )}
                {title && (
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xl font-semibold text-green-800 mb-2"
                    >
                        {title}
                    </motion.h3>
                )}
                {description && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600"
                    >
                        {description}
                    </motion.p>
                )}
            </div>
        </motion.div>
    )
}

export default function AyurvedaConsultation() {
    const cards = [
        {
            sanskrit: "स्वस्थस्य स्वास्थ्य रक्षणं,\nआतुरस्य विकार प्रशमनं ।",
            description: "[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]",
            isWide: true,
        },
        {
            image: ayurvedic1,
            isWide: true
        },
        {
            title: "Precise Diagnosis",
            description: "Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.",
        },
        {
            title: "Zero side-effects",
            description: "Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs",
            image: ayurvedic2
        },
        {
            title: "Individual Treatment",
            description: "all Treatments are personalized based on a person's unique constitution and health concerns.",
        },
        {
            image: ayurvedic3,
        }
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 bg-cream-50" id='consultation'>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12"
            >
                What sets Ayurvedic consultations apart?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        {...card}
                    />
                ))}
            </div>
        </div>
    )
}