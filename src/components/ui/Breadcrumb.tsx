// components/ui/Breadcrumb.tsx
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                    {index > 0 && (
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0" />
                    )}
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="text-zinc-500 hover:text-primary transition-colors duration-300"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-zinc-300">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
}
