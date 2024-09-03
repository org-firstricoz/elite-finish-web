import React from "react";
import { cn } from "@/utils"; // Adjust the path to your `cn` utility.

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="md:text-2xl text-lg font-semibold ">{label}</label>}
      <textarea
        className={cn(" border md:border-2 border-black py-3 px-4 md:my-6 w-full  focus:outline-none resize-none", className)}
        {...props}
      />
    </div>
  );
};

export default TextArea;
