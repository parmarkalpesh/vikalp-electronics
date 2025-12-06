import { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
}

export default function Section({ id = "", className = "", children }: SectionProps) {
    return (
        <section id={id} className={`py-20 ${className}`}>
            {children}
        </section>
    );
}

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    center?: boolean;
    light?: boolean;
}

export function SectionTitle({ title, subtitle, center = true, light = false }: SectionTitleProps) {
    return (
        <div className={`mb-16 ${center ? 'text-center' : ''}`}>
            {subtitle && (
                <span className={`block uppercase tracking-widest text-xs font-bold mb-3 ${light ? 'text-accent' : 'text-primary'}`}>
                    {subtitle}
                </span>
            )}
            <h2 className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-secondary'}`}>
                {title}
            </h2>
            <div className={`mt-4 h-1.5 w-24 bg-accent rounded-full ${center ? 'mx-auto' : ''}`}></div>
        </div>
    );
}
