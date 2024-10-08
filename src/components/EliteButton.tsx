import { cva } from "class-variance-authority";
import { cn } from "../utils";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | "ternary";
}
export default function EliteButton({ className, variant, ...props }: ButtonProps) {
    return <button {...props} className={cn(buttonVariant({ variant }), className)} />;
}


const buttonVariant = cva(
    'px-6 py-2 rounded-md md:text-md text-sm hover:opacity-75 font-[600] w-fit h-fit',
    {
        variants: {
            variant: {
                primary: "bg-[#FF9247] text-white ",
                secondary: "bg-white text-black",
                ternary: "bg-[#E5E5E5] text-black",
            },
        },
        defaultVariants: {
            variant: 'primary'
        },
    }
)

