import { EliteCommon, HeroCommon } from "@/components"
import TestonomialSection from "@/components/EliteTestimonial"
import React from "react"
import PricingMain from "./component/PricingMain"

const PricingPage: React.FC = () => {
    return (
        <div>
            <HeroCommon
                heading="Pricing"
                description="Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan."
            />
            <PricingMain />
            <EliteCommon />
            <TestonomialSection
                heading="Testimonials"
                subheading1="Get to Know Our Digital Print"
                subheading2="Services Closer Through"
                subheading3="Customer Reviews"
                description="Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan lacinia erat. Porttitor neque pharetra viverra in rhoncus. Diam dignissim facilisis consequat quisque pharetra."
                author="Sally Wily - Customer Rona"
            />
        </div>
    )
}
export default PricingPage