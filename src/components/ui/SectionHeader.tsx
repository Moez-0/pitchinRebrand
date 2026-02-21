// components/ui/SectionHeader.tsx
interface SectionHeaderProps {
    eyebrow?: string;
    title: string;
    description?: string;
    centered?: boolean;
}

export default function SectionHeader({
    eyebrow,
    title,
    description,
    centered = false,
}: SectionHeaderProps) {
    return (
        <div className={`mb-16 ${centered ? "text-center" : ""}`}>
            {eyebrow && (
                <p className={`text-xs text-primary font-medium tracking-[0.2em] uppercase mb-3 ${centered ? "mx-auto" : ""}`}>
                    {eyebrow}
                </p>
            )}
            <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
                {title}
            </h2>
            {description && (
                <p className={`text-base text-zinc-400 font-normal max-w-xl ${centered ? "mx-auto" : ""}`}>
                    {description}
                </p>
            )}
        </div>
    );
}
