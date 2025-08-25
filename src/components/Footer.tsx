// components/Footer.tsx
'use client';

import Link from 'next/link';
import { FaArrowUp } from "react-icons/fa";
import { useCallback } from 'react';

const linksNav = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Programmes', href: '/programmes' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'Feed', href: '/feed' },
    { title: 'Contact', href: '/contact' },
];

const linksResources = [
    { title: 'Resource - 1', href: '/resources/1' },
    { title: 'Resource - 2', href: '/resources/2' },
    { title: 'Resource - 3', href: '/resources/3' },
    { title: 'Resource - 4', href: '/resources/4' },
    { title: 'Resource - 5', href: '/resources/5' },
    { title: 'Resource - 6', href: '/resources/6' },
];

export default function Footer() {
    const onBackToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        // For sticky-at-bottom pages, ensure the page layout uses: min-h-screen flex flex-col
        // and place this footer inside the layout with mt-auto on the previous content wrapper.
        <footer className="relative text-zinc-700">
            {/* Background: softer gradients + corner doodles + vignette */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(36rem_26rem_at_12%_0%,rgba(124,58,237,0.07),transparent_60%),radial-gradient(28rem_24rem_at_90%_8%,rgba(244,114,182,0.10),transparent_60%),linear-gradient(180deg,rgba(250,250,250,0.96),rgba(250,250,250,1))]" />
                <div className="absolute inset-0 bg-[radial-gradient(120vh_40vh_at_50%_120%,rgba(0,0,0,0.06),transparent_60%)]" />
                <svg className="absolute left-3 top-6 h-14 w-14 opacity-30" viewBox="0 0 64 64" fill="none">
                    <path d="M12 20c8-8 26-10 30-2s-6 20-12 24-14 2-18-4 0-10 0-18z" stroke="#8b5cf6" strokeWidth="2" />
                </svg>
                <svg className="absolute right-6 top-5 h-20 w-20 opacity-20" viewBox="0 0 64 64" fill="none">
                    <path d="M14 32c6-12 22-16 34-12m-4 22c-6 12-20 14-30 8" stroke="#7c3aed" strokeWidth="2" />
                </svg>
            </div>

            {/* Elevated card wrapper */}
            <div className="mx-auto mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/85 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur">
                    {/* Top: 4 columns with smart breakpoints */}
                    <div className="px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                            {/* 1. Brand + Legal */}
                            <div>
                                <Link href="/" className="inline-flex items-center gap-3">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-sm font-semibold tracking-wide text-white">
                                        IS
                                    </span>
                                    <span className="text-lg font-semibold tracking-wide text-zinc-900">
                                        ISTA FOUNDATION
                                    </span>
                                </Link>

                                <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">
                                    Empowering communities through programmes and compassionate action across education, health, and relief.
                                </p>

                                <ul className="mt-5 space-y-2 text-sm">
                                    <li>
                                        <Link
                                            href="/terms"
                                            className="hover:text-zinc-900 underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                                        >
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/privacy"
                                            className="hover:text-zinc-900 underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>

                                <Link
                                    href="#"
                                    className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-transform hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 sm:h-12 sm:px-7 sm:text-base"
                                >
                                    Join Campaign
                                </Link>
                            </div>

                            {/* 2. Navigation */}
                            <nav aria-label="Footer navigation">
                                <h3 className="text-base font-semibold text-zinc-900">Navigation</h3>
                                <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm sm:gap-2">
                                    {linksNav.map((l) => (
                                        <li key={l.title}>
                                            <Link
                                                href={l.href}
                                                className="group inline-flex w-full items-center justify-between rounded px-1 py-1.5 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                                            >
                                                <span>{l.title}</span>
                                                <span aria-hidden className="translate-x-0 text-zinc-400 transition-transform group-hover:translate-x-0.5">→</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* 3. Resources */}
                            <div>
                                <h3 className="text-base font-semibold text-zinc-900">Resources</h3>
                                <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm sm:gap-2">
                                    {linksResources.map((r) => (
                                        <li key={r.title}>
                                            <Link
                                                href={r.href}
                                                className="group inline-flex w-full items-center justify-between rounded px-1 py-1.5 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                                            >
                                                <span>{r.title}</span>
                                                <span aria-hidden className="translate-y-0 text-zinc-400 transition-transform group-hover:-translate-y-0.5">↗</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 4. Contact */}
                            <section aria-labelledby="footer-contact">
                                <h3 id="footer-contact" className="text-base font-semibold text-zinc-900">
                                    Get In Touch!
                                </h3>
                                <ul className="mt-4 space-y-4 text-sm">
                                    <li className="flex items-start gap-3">
                                        <span aria-hidden className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                                            ☎
                                        </span>
                                        <div className="leading-6">
                                            <span className="font-medium">+92 3800 8060</span>
                                            <span className="text-zinc-500"> — Free support</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span aria-hidden className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                                            📍
                                        </span>
                                        <div className="leading-6">
                                            <span className="font-medium">299 Market Street, Suite</span>
                                            <span className="text-zinc-500"> — Our location</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span aria-hidden className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                                            ✉
                                        </span>
                                        <div className="leading-6">
                                            <span className="font-medium">support@company.com</span>
                                            <span className="text-zinc-500"> — Emergency email</span>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-zinc-200/70 bg-white/80">
                        <div className="flex flex-col items-center justify-between gap-4 px-6 py-4 text-sm sm:flex-row sm:px-8 lg:px-12">
                            {/* Social left */}
                            <ul className="order-2 flex items-center gap-3 sm:order-1">
                                <li>
                                    <a
                                        aria-label="Facebook"
                                        href="https://facebook.com"
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                                    >
                                        f
                                    </a>
                                </li>
                                <li>
                                    <a
                                        aria-label="Instagram"
                                        href="https://instagram.com"
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                                    >
                                        ig
                                    </a>
                                </li>
                                <li>
                                    <a
                                        aria-label="YouTube"
                                        href="https://youtube.com"
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                                    >
                                        ▶
                                    </a>
                                </li>
                            </ul>

                            {/* Copyright center */}
                            <p className="order-1 text-center text-zinc-600 sm:order-2">
                                © {new Date().getFullYear()} ISTA Foundation
                            </p>

                            {/* Back to top right */}
                            <button
                                type="button"
                                onClick={onBackToTop}
                                className="order-3 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600"
                            >
                                <span>BACK TO TOP</span>
                                <FaArrowUp />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
