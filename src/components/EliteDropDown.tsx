import { cn } from "@/utils";
import React from "react";

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: { value: string | number; label: string; disabled?: boolean }[];
    label: string;
    required?: boolean; // Make required optional
}

const EliteDropdown: React.FC<DropdownProps> = ({
    options,
    label,
    required = false, // Default to false if not provided
    className,
    ...props
}) => {
    return (
        <div className="flex flex-col w-full">
            <label className="text-sm text-gray-500 px-1">
                {label}
                {required && <span className="text-2xl font-bold ">*</span>}
            </label>
            <div className="border md:border-2 rounded-lg py-5 w-full px-4 md:my-6">
                <select
                    className={cn("w-full focus:outline-none", className)}
                    aria-required={required}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value} disabled={option.disabled}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default EliteDropdown;
