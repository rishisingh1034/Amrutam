import React from "react";
import phone from '/src/assets/iPhone13.png';
import appstore from '/src/assets/appstore.png';
import playstore from '/src/assets/playstore.png';

const AppPromotion = () => {
    return (
        <div className="bg-yellow-50 py-12 px-4 lg:px-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
                <h1 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">
                    Amrutam Home App
                </h1>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.
                </p>
                <p className="text-lg font-semibold text-gray-800 mb-6">
                    Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe
                </p>

                <div>
                    <p className="font-bold text-black mb-4">Get The App Now</p>
                    <div className="flex gap-4">
                        {/* Google Play */}
                        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src={playstore}
                                alt="Get it on Google Play"
                                className="w-40"
                            />
                        </a>
                        {/* App Store */}
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={appstore}
                                alt="Download on the App Store"
                                className="w-40"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center">
                <img
                    src={phone}
                    alt="Mobile App Preview"
                    className="w-64 lg:w-max"
                />
            </div>
        </div>
    );
};

export default AppPromotion;