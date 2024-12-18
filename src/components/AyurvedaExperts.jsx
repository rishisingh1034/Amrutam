import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import expertsimg from "/src/assets/expertsimg.png"

const AyurvedaExperts = () => {
    const experts = [
        {
            id: 1,
            name: "Dr. Vaishali Sharma",
            title: "Ayurveda Practitioner (BAMS, MD)",
            experience: "25 years of experience",
            specialty: "Skin Specialist",
            rating: "4.5",
            image: expertsimg,
        },
        {
            id: 2,
            name: "Dr. Rajesh Kumar",
            title: "Orthopedic Surgeon (MBBS, MS)",
            experience: "18 years of experience",
            specialty: "Bone and Joint Specialist",
            rating: "4.7",
            image: expertsimg,
        },
        {
            id: 3,
            name: "Dr. Nisha Patel",
            title: "Dermatologist (MD, DNB)",
            experience: "12 years of experience",
            specialty: "Hair and Skin Specialist",
            rating: "4.8",
            image: expertsimg,
        },
        {
            id: 4,
            name: "Dr. Aditya Verma",
            title: "Cardiologist (MD, DM)",
            experience: "20 years of experience",
            specialty: "Heart Specialist",
            rating: "4.6",
            image: expertsimg,
        },
        {
            id: 5,
            name: "Dr. Priya Menon",
            title: "Pediatrician (MBBS, MD)",
            experience: "15 years of experience",
            specialty: "Child Specialist",
            rating: "4.9",
            image: expertsimg,
        },
        {
            id: 6,
            name: "Dr. Arjun Mehta",
            title: "General Physician (MBBS, MD)",
            experience: "10 years of experience",
            specialty: "General Health Consultant",
            rating: "4.4",
            image: expertsimg,
        },
        {
            id: 7,
            name: "Dr. Kavita Singh",
            title: "Ophthalmologist (MBBS, MS)",
            experience: "14 years of experience",
            specialty: "Eye Specialist",
            rating: "4.7",
            image: expertsimg,
        },
        {
            id: 8,
            name: "Dr. Vikram Rao",
            title: "ENT Specialist (MBBS, MS)",
            experience: "17 years of experience",
            specialty: "Ear, Nose, and Throat Specialist",
            rating: "4.6",
            image: expertsimg,
        },
    ];

    return (
        <div className="bg-white py-12 px-4 lg:px-14" id="experts">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-green-700 text-center mb-8 underline">
                Meet Our Ayurveda Experts
            </h2>

            {/* Swiper Slider */}
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Navigation, Pagination]}
                className="max-w-screen-xl mx-auto"
            >
                {experts.map((expert) => (
                    <SwiperSlide key={expert.id}>
                        {/* Card */}
                        <div className="bg-yellow-50 rounded-xl shadow-lg p-6 text-center relative">
                            {/* Expert Image */}
                            <img
                                src={expert.image}
                                alt={expert.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />

                            {/* Rating Badge */}
                            <div className="absolute top-28 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-full">
                                {expert.rating} ★
                            </div>

                            {/* Expert Details */}
                            <h3 className="text-lg font-bold">{expert.name}</h3>
                            <p className="text-gray-500 mb-2">{expert.title}</p>
                            <p className="text-gray-700 flex items-center justify-center gap-2 mb-2">
                                <span>🎓</span> {expert.experience}
                            </p>
                            <p className="bg-green-100 text-green-700 rounded-full py-1 px-3 inline-block text-sm mb-4">
                                {expert.specialty}
                            </p>

                            {/* Book a Session Button */}
                            <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition">
                                Book a session
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Bottom Button */}
            <div className="text-center mt-8">
                <button className="text-green-700 font-semibold border border-green-700 px-6 py-2 rounded-lg hover:bg-green-700 hover:text-white transition">
                    Find more experts →
                </button>
            </div>
        </div>
    );
};

export default AyurvedaExperts;