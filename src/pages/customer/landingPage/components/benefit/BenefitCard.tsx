
interface BenefitProps {
    title: string
    description: string
    imageSrc: string
}

function BenefitCard({ title, description, imageSrc }: BenefitProps) {
    return (
        <div className="bg-white  overflow-hidden  flex flex-col justify-between items-center   ">
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
            <div className="relative h-48 w-full lg:mt-12 content-end">
                <img
                    src={imageSrc}
                    alt={title}
                    className="object-cover"
                />
            </div>
        </div>
    )
}

export default BenefitCard