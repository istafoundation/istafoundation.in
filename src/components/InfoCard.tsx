"use client";

import Link from "next/link";
import clsx from "clsx";

type CardProps = {
    label: string;
    description: string;
    accent: "pink" | "sky" | "stone";
    href: string;
};

const accentStyles: Record<
    CardProps["accent"],
    { bg: string; ring: string; text: string; shadow: string }
> = {
    pink: {
        bg: "bg-pink-100/70",
        ring: "ring-pink-200",
        text: "text-pink-950",
        shadow: "shadow-pink-200/60",
    },
    sky: {
        bg: "bg-sky-100/70",
        ring: "ring-sky-200",
        text: "text-sky-950",
        shadow: "shadow-sky-200/60",
    },
    stone: {
        bg: "bg-stone-100/70",
        ring: "ring-stone-200",
        text: "text-stone-950",
        shadow: "shadow-stone-200/60",
    },
};

export default function SupportPrograms() {
    return (
        <section className="relative isolate overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(700px_350px_at_10%_20%,rgba(59,130,246,0.08),transparent_70%),radial-gradient(700px_400px_at_90%_30%,rgba(16,185,129,0.08),transparent_70%)]" />
                <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay [background-image:url('/noise.png')]" />
            </div>

            {/* Content Wrapper */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                {/* Intro Text */}
                <div className="max-w-3xl">
                    <p className="text-lg sm:text-xl font-semibold text-gray-800">
                        We’re tackling the shame so many of us feel around our mental health.
                    </p>
                    <p className="mt-2 text-gray-600 text-base sm:text-lg">
                        Connect with others in a supportive environment and learn
                        mindfulness techniques together.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <InfoCard
                        label="Medical & Health"
                        description="Connect with others in a supportive environment and learn mindfulness techniques together."
                        accent="pink"
                        href="#"
                    />
                    <InfoCard
                        label="Poor Children"
                        description="Connect with others in a supportive environment and learn mindfulness techniques together."
                        accent="sky"
                        href="#"
                    />
                    <InfoCard
                        label="Foster Care"
                        description="Connect with others in a supportive environment and learn mindfulness techniques together."
                        accent="stone"
                        href="#"
                    />
                </div>
            </div>
        </section>
    );
}

function InfoCard({ label, description, accent, href }: CardProps) {
    const { bg, ring, text, shadow } = accentStyles[accent];

    return (
        <div
            className={clsx(
                "relative rounded-3xl p-6 sm:p-7 lg:p-8 ring-1 shadow-md",
                bg,
                ring,
                shadow
            )}
        >
            <h3 className={clsx("text-3xl sm:text-4xl font-extrabold tracking-tight", text)}>
                {label}
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>

            <div className="mt-6">
                <Link
                    href={href}
                    className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-gray-300 transition hover:bg-gray-50"
                >
                    Read More
                </Link>
            </div>

            {/* Subtle radial mask */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl [mask-image:radial-gradient(80%_80%_at_50%_50%,#000_40%,transparent_70%)]" />
        </div>
    );
}
