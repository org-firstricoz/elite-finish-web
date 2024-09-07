import { cn } from "@/utils";
import React from "react";

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: { value: string | number; label: string; disabled?: boolean }[];
    label: string;
    required: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ options, label, required, className, ...props }) => {
    return (
        <div className="flex flex-col">
            <label className="md:text-2xl text-lg font-semibold">{label}
                {required && <span className="text-2xl font-bold">*</span>}
            </label>
            <div className="border md:border-2 border-black py-3 w-full px-4 md:my-6 ">
                <select className={cn("w-full focus:outline-none", className)}     {...props}>
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

export default Dropdown;
