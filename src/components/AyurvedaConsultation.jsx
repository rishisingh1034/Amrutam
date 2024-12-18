import React from 'react';
import bgImage from '/src/assets/bgImage.png';
import "./AyurvedaConsultation.css"

const HarmonySection = () => {
    return (
        <div
            className="relative w-screen h-[80vh] bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}

        >
            {/* Shadow Layer */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h2 className="text-white text-2xl lg:text-4xl font-bold mb-6">
                    Ready to restore harmony in <br /> your mind, body and spirit?
                </h2>
                <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300">
                    Book a consultation
                </button>
            </div>
        </div>
    );
};

export default HarmonySection;