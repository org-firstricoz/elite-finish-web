import { cn } from "@/utils";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string; // Ensure the value is controlled
    name: string;  // Name is needed to identify which field to update
}

const EliteInput: React.FC<InputProps> = ({ label, required = false, className, onChange, value, name, ...props }) => {
    return (
        <div className="w-full flex flex-col">
            <label className="text-sm text-gray-500 px-1">
                {label}
                {required && <span className="text-2xl font-bold">*</span>}
            </label>
            <input
                className={cn("border md:border-2 border-gray-200 rounded-lg py-5 w-full px-4 md:my-4 my-2 focus:outline-none ", className)}
                onChange={onChange} 
                value={value} 
                name={name}  
                {...props}  
            />
        </div>
    );
};

export default EliteInput;
