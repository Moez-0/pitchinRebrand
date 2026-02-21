// components/ui/GridOverlay.tsx
import Image from "next/image";

interface GridOverlayProps {
    opacity?: number;
}

export default function GridOverlay({ opacity = 10 }: GridOverlayProps) {
    return (
        <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ opacity: opacity / 100 }}
        >
            <Image
                src="/images/grid.svg"
                alt=""
                fill
                className="object-cover"
                aria-hidden="true"
            />
        </div>
    );
}
