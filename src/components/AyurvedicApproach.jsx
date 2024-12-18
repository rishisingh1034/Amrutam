import React from 'react';
import "./AyurvedicApproach.css"

const ApproachCard = ({ number, title, description }) => {
    return (
        <div className="approach-card">
            <div className="number-badge">{number}</div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    );
};

export default function AyurvedicApproach() {
    const steps = [
        {
            number: 1,
            title: "Make Appointment",
            description: "You must make an appointment in advance, to choose the service and date."
        },
        {
            number: 2,
            title: "Consultations",
            description: "The next stage involves a thorough consultation with an Ayurveda practitioner."
        },
        {
            number: 3,
            title: "Treatment Planning",
            description: "The Ayurvedic practitioner creates a personalized treatment plan for you"
        },
        {
            number: 4,
            title: "Maintenance",
            description: "These visits allow for assessment of progress, adjustments to the treatment."
        }
    ];

    return (
        <div className="ayurvedic-approach">
            <div className="approach-content">
                <h2 className="approach-title">Our Ayurvedic Approach</h2>
                <p className="approach-description">
                    At Amrutam we follow a unique and personalized approach to healing. Our expert
                    practitioners begin each treatment process by conducting a thorough analysis of the
                    patient's body type, medical history, and current health conditions.
                </p>

                <div className="cards-container">
                    {steps.map((step, index) => (
                        <ApproachCard
                            key={step.number}
                            {...step}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}