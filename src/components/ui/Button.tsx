import Link from 'next/link';
import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'white';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    href?: string;
    children: ReactNode;
    className?: string;
}

// We need a way to distinguish if it's a link or button for props passing
// Since we can't easily discriminate generic props in one go without complex overloads, 
// we'll explicitly handle the `href` case.

export default function Button({ children, href, variant = 'primary', className = '', ...props }: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
    const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg";

    const variants: Record<ButtonVariant, string> = {
        primary: "bg-primary text-white hover:bg-blue-600 border border-transparent",
        secondary: "bg-secondary text-white hover:bg-navy-800 border border-transparent",
        outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
        white: "bg-white text-primary hover:bg-gray-100 border border-transparent"
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {children}
        </button>
    );
}
