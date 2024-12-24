import React from "react"
import BenefitCard from "./BenefitCard"
import { sunset } from "@/constants/imagePath"

interface BenefitProps {
    title: string
    description: string
    imageSrc: string
}

const benefits: BenefitProps[] = [
    {
        title: "Time & Quality Assurance",
        description: "Our professionals work within your timeline, ensuring your project is completed promptly without compromising quality.",
        imageSrc: sunset,
    },
    {
        title: "Trusted and Verified Painters",
        description: "All our painters undergo a rigorous verification process, ensuring you work with skilled professionals who deliver top-notch quality.",
        imageSrc: sunset,
    },
    {
        title: "Hassle-Free Booking",
        description: "Easily browse painter profiles, check reviews, and book services directly through our intuitive platform",
        imageSrc: sunset,
    },
]



const BenefitsSection: React.FC = () => {
    return (
        <section className="py-16 bg-[#E4E5DF]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">Benefits of Choosing EliteFinish</h2>
                    <p className="text-gray-600">High-quality homes with low-carbon impact.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-24 mx-4  ">

                    {benefits.map((benefit) => (
                        <BenefitCard
                            key={benefit.title}
                            {...benefit}
                        />
                    ))}

                </div>
            </div>
        </section>
    )
}

export default BenefitsSection
