"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(900px_450px_at_15%_20%,rgba(59,130,246,0.12),transparent_70%),radial-gradient(900px_500px_at_85%_30%,rgba(16,185,129,0.12),transparent_70%)]" />
                <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('/noise.png')]" />
            </div>

            {/* Social icons (visible from md screens upward) */}
            <aside className="hidden md:flex flex-col items-center gap-5 absolute left-2 top-1/2 -translate-y-1/2">
                <Social label="Facebook" href="#" icon="f" />
                <Social label="Instagram" href="#" icon="x" />
                <Social label="WhatsApp" href="#" icon="in" />
            </aside>

            {/* Content */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Badge (Desktop only) */}
                <div className="hidden md:block pt-8">
                    <span className="inline-flex -rotate-6 items-center rounded-full border border-gray-300/70 bg-white/80 px-4 py-1.5 text-xs font-semibold text-gray-700 backdrop-blur">
                        • Making a Difference
                    </span>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 sm:gap-12 lg:gap-16 py-14 sm:py-16 lg:py-24">
                    
                    {/* Left: Text content */}
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                            Every Small Act
                            <span className="block">Of Kindness Adds</span>
                            <span className="block">Up To Big Change.</span>
                        </h1>

                        <p className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700 max-w-prose">
                            Herding Cats My Grasp On Reality Right Now Is Tenuous Message The Initiative Radical Candor.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                            <Link
                                href="#"
                                className="inline-flex h-11 sm:h-12 items-center justify-center rounded-full bg-emerald-600 px-6 sm:px-7 text-sm sm:text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
                            >
                                Join Campaign
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-11 sm:h-12 items-center justify-center rounded-full border border-gray-300 bg-white/80 px-6 sm:px-7 text-sm sm:text-base font-semibold text-gray-900 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Right: Visual elements */}
                    <div className="relative ml-auto aspect-square w-4/5 sm:w-[78%] md:w-[85%] bg-white/70 p-2 shadow-xl backdrop-blur rounded-[48%_52%_52%_48%/60%_48%_52%_40%]">
                        <div className="relative h-full w-full overflow-hidden rounded-[48%_52%_52%_48%/60%_48%_52%_40%]">
                            <Image
                                src="/assets/hero-1.jpg"
                                alt="Community session"
                                fill
                                priority
                                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                            />
                        </div>

                        {/* Smaller circle (desktop only) */}
                        <div className="absolute -left-4 top-6 hidden md:block lg:-left-10 lg:top-6 w-[45%] lg:w-[50%]">
                            <div className="aspect-square overflow-hidden rounded-full border-4 border-white shadow-xl">
                                <Image
                                    src="/assets/hero-2.jpg"
                                    alt="Children participating"
                                    width={600}
                                    height={600}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Glow accent */}
                        <div className="absolute -bottom-8 -right-6 h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 rounded-full bg-emerald-400/30 blur-3xl pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* Social Icon Tooltip Button */
function Social({
    label,
    href,
    icon,
}: {
    label: string;
    href: string;
    icon: string;
}) {
    return (
        <Link
            href={href}
            aria-label={label}
            title={label}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white/85 text-gray-700 backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-emerald-700"
        >
            <span className="text-sm font-bold">{icon}</span>
            <span className="absolute left-12 opacity-0 group-hover:opacity-100 whitespace-nowrap rounded-md bg-gray-900/90 px-2 py-1 text-xs text-white shadow transition">
                {label}
            </span>
        </Link>
    );
}
