import React from "react";
import { cn } from "@/utils"; 

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const EliteTextArea: React.FC<TextAreaProps> = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="text-sm text-gray-500 px-1">{label}</label>}
      <textarea
        className={cn("border md:border-2 border-gray-200 rounded-lg py-5 w-full px-4 md:my-4 focus:outline-none", className)}
        {...props}
      />
    </div>
  );
};

export default EliteTextArea;