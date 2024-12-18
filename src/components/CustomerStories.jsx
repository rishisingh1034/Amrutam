import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const CustomerStories = () => {
    // Sample data for the cards
    const customerReviews = [
        {
            id: 1,
            title: "Consulted for Skin",
            name: "Ava Johnson",
            location: "Bangalore",
            date: "15/02/24",
            stars: 4,
            review: "Great experience, very professional staff!",
        },
        {
            id: 2,
            title: "Consulted for Hair",
            name: "Liam Smith",
            location: "Mumbai",
            date: "12/02/24",
            stars: 5,
            review: "The results exceeded my expectations. Highly recommend!",
        },
        {
            id: 3,
            title: "Consulted for Dental",
            name: "Emily Davis",
            location: "Delhi",
            date: "10/02/24",
            stars: 3,
            review: "Service was good, but the wait time was too long.",
        },
        {
            id: 4,
            title: "Consulted for Orthopedic",
            name: "Mason Brown",
            location: "Hyderabad",
            date: "08/02/24",
            stars: 4,
            review: "Helpful consultation with clear advice.",
        },
        {
            id: 5,
            title: "Consulted for Cardiology",
            name: "Isabella Wilson",
            location: "Chennai",
            date: "05/02/24",
            stars: 5,
            review: "Fantastic care and attention to detail!",
        },
        {
            id: 6,
            title: "Consulted for General Health",
            name: "Oliver Taylor",
            location: "Kolkata",
            date: "02/02/24",
            stars: 4,
            review: "Efficient service and friendly staff.",
        },
        {
            id: 7,
            title: "Consulted for Eye Care",
            name: "Sophia Martinez",
            location: "Pune",
            date: "30/01/24",
            stars: 5,
            review: "Very knowledgeable doctor, and I felt heard.",
        },
        {
            id: 8,
            title: "Consulted for Pediatrics",
            name: "Ethan Garcia",
            location: "Lucknow",
            date: "28/01/24",
            stars: 5,
            review: "The doctor was amazing with kids!",
        },
    ];

    return (
        <div className="bg-yellow-50 py-12 px-4 lg:px-14" id='stories'>
            {/* Section Heading */}
            <h2 className="text-3xl font-bold text-green-700 text-center mb-8 underline">
                Stories from our valued customers!
            </h2>

            {/* Swiper Slider */}
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Navigation, Pagination]}
                className="max-w-screen-xl mx-auto"
            >
                {customerReviews.map((review) => (
                    <SwiperSlide key={review.id} className="p-4">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            {/* Card Top Bar */}
                            <div
                                className={`w-full h-2 ${review.title.includes("Skin") ? "bg-purple-200" : "bg-green-200"
                                    } rounded-t-lg`}
                            ></div>

                            {/* Content */}
                            <div className="pt-4">
                                <p
                                    className={`text-sm font-semibold ${review.title.includes("Skin")
                                        ? "text-purple-700"
                                        : "text-green-700"
                                        }`}
                                >
                                    {review.title}
                                </p>

                                {/* Name and Date */}
                                <div className="flex justify-between items-center mt-3 mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                                        <div>
                                            <p className="font-bold">{review.name}</p>
                                            <p className="text-sm text-gray-500">{review.location}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500">{review.date}</p>
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 text-yellow-400">
                                    {'★'.repeat(review.stars)}
                                    {'☆'.repeat(5 - review.stars)}
                                </div>

                                {/* Review */}
                                <p className="text-md font-semibold mt-4 mb-2">
                                    “{review.review}”
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Ultrices eros in cursus turpis massa tincidunt sem nulla
                                    pharetra diam sit amet nisl suscipit adipiscing.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CustomerStories;