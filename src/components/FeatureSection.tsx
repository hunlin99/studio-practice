"use client"; // If needed for interactivity

import React from "react";

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
}

const features: Feature[] = [
  {
    title: "Match with Verified Locals",
    description: "Connect with trusted guides for authentic experiences.",
    imageSrc: "image/feature-match.png",
  },
  {
    title: "No Money Needed Just Tickets!",
    description: "Earn and redeem tickets for unique tours.",
    imageSrc: "image/feature-ticket.png",
  },
  {
    title: "Explore & Earn Rewards",
    description: "Complete challenges, refer friends, and unlock perks.",
    imageSrc: "image/feature-rewards.png",
  },
  {
    title: "Safety First",
    description: "Verified users, in-app reporting, and emergency support for peace of mind.",
    imageSrc: "image/feature-safety.png",
  }
];

const backgroundColors = ["#A6D2D0", "#FFBB28", "#FFBB28", "#A6D2D0" ];

const FeatureCard: React.FC<Feature & { index: number }> = ({ title, description, imageSrc, index }) => {
  return (
    <div className="col-md-6 col-12 p-5 feature-card" >
      <div className="img-container bg-light">
        <img src={imageSrc} alt={title} className="img-fluid" />
      </div>
      <div className="text-container" style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};


const FeatureSection: React.FC = () => {
  return (
    <section className="py-5 FeatureSection">
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
