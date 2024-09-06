import { ChevronDown } from "lucide-react"
import React from "react"

const Faq: React.FC = () => {
    const [selectedOption, setSelectedOption] = React.useState<number | null>()
    const faqData = [
        {
            id: 1,
            question: "What is digital printing?",
            answer: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant ",
        },
        {
            id: 2,
            question: "What types of materials can be printed using digital printing?",
            answer: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant ",
        },
        {
            id: 3,
            question: "Can I print photographs using digital printing?",
            answer: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant ",
        },
        {
            id: 4,
            question: "What types of products can I create using digital printing?",
            answer: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant ",
        },
        {
            id: 5,
            question: "What types of products can I create using digital printing?",
            answer: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant ",
        },
        {
            id: 6,
            question: "What types of materials can be printed using digital printing?",
            answer: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant ",
        },
        {
            id: 7,
            question: "Can I print photographs using digital printing?",
            answer: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant ",
        },
        {
            id: 8,
            question: "What is digital printing?",
            answer: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant ",
        },

    ]

    const clickHandler = (id: number) => {
        setSelectedOption((prev) => prev === id ? null : id)
    }
    return (
        <div className="w-full min-h-screen h-auto lg:px-32 sm:px-8 px-2 my-12">
            <div>
                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-[6vw] text-center font-bold sm:font-semibold">
                    Frequently Asked Questions
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
                <div className="md:col-span-1 col-span-2 ">
                    {faqData.slice(0, 4).map((faq, i) => (
                        <div
                            key={`FAQ_DATA${i}`}
                            className="bg-red-20 p-4 cursor-pointer transition-all duration-300  mb-4"
                            onClick={() => clickHandler(faq.id)}
                        >
                            <div className="flex justify-between items-center ">
                                <div className="w-[80%] flex flex-col gap-4  ">
                                    <h1 className="text-2xl font-semibold">{faq.question}</h1>
                                    <p className={`text-sm ${selectedOption === faq.id ? "block" : "hidden"}`}>
                                        {faq.answer}
                                    </p>
                                </div>
                                <ChevronDown
                                    className={`transform transition-transform duration-300 ${selectedOption === faq.id ? "rotate-180" : ""
                                        }`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:col-span-1 col-span-2">
                    {faqData.slice(4, 8).map((faq,i) => (
                        <div
                            key={`FAQ_DATA${i}`}
                            className="bg-red-20 p-4 cursor-pointer transition-all duration-300 mb-4"
                            onClick={() => clickHandler(faq.id)}
                        >
                            <div className="flex justify-between items-center">
                                <div className="w-[80%]">
                                    <h1 className="text-2xl font-semibold">{faq.question}</h1>
                                    <p className={`text-sm md:text-base ${selectedOption === faq.id ? "block" : "hidden"}`}>
                                        {faq.answer}
                                    </p>
                                </div>
                                <ChevronDown
                                    className={`transform transition-transform duration-300 ${selectedOption === faq.id ? "rotate-180" : ""
                                        }`}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>


        </div>
    )
}
export default Faq