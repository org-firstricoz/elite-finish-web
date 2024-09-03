import { cn } from "@/utils";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, required = false, className, ...props }) => {
  return (
    <div className="flex flex-col">
      <label className="md:text-2xl text-lg font-semibold">
        {label}
        {required && <span className="text-2xl font-bold">*</span>}
      </label>
      <input
        className={cn("border md:border-2 border-black py-3 w-full px-4 md:my-6 focus:outline-none", className)}
        {...props}
      />
    </div>
  );
};

export default Input;
