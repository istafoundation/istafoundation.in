"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    // Close on Escape and outside click
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        function onClick(e: MouseEvent) {
            const target = e.target as Node;
            if (!menuRef.current || !btnRef.current) return;
            if (!menuRef.current.contains(target) && !btnRef.current.contains(target)) {
                setOpen(false);
            }
        }
        document.addEventListener("keydown", onKey);
        document.addEventListener("click", onClick);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("click", onClick);
        };
    }, []);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Programmes", href: "/programmes" },
        { name: "Gallery", href: "/gallery" },
        { name: "Feed", href: "/feed" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* Sticky wrapper so both bars move together */}
            <div className="sticky top-0 z-50 w-full">
                {/* Top info bar */}
                <div className="bg-gradient-to-b from-cyan-200/80 to-emerald-200/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm shadow-sm">
                    <div className="mx-auto max-w-7xl px-4 md:px-6">
                        <div className="flex items-center justify-between py-2 text-sm md:text-base">
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                                <Link
                                    href="mailto:istafoundation.in@gmail.com"
                                    className="inline-flex items-center gap-2 hover:underline underline-offset-4 transition-colors"
                                >
                                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                                    <span className="select-all">istafoundation.in@gmail.com</span>
                                </Link>
                                <Link
                                    href="#" target="_blank"
                                    className="inline-flex items-center gap-2 hover:text-emerald-700 transition-colors"
                                >
                                    <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                                    <span>Durgapur</span>
                                </Link>
                            </div>
                            <div className="hidden sm:flex items-center gap-3">
                                <span className="text-gray-700">Let&apos;s Talk</span>
                                <Link
                                    href="#"
                                    className="font-medium hover:text-emerald-700 transition-colors"
                                >
                                    +91 00000 00000
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main navbar */}
                <header className="relative w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm border-b border-gray-200">
                    <div className="mx-auto max-w-7xl px-4 md:px-6">
                        <nav className="flex h-16 items-center justify-between">
                            {/* Brand */}
                            <Link href="/" className="flex items-center gap-3">
                                <Image
                                    src="/logo.png"
                                    alt="ISTA Foundation Logo"
                                    width={170}
                                    height={38}
                                    priority
                                    className="h-9 w-auto"
                                />
                                <span className="sr-only">Go to homepage</span>
                            </Link>

                            {/* Desktop nav */}
                            <ul className="hidden md:flex items-center gap-8 font-medium">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="relative text-gray-700 transition-colors hover:text-yellow-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                                        >
                                            <span className="after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all hover:after:w-full">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA desktop */}
                            <div className="hidden md:block">
                                <Link
                                    href="/become-a-volunteer"
                                    className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-2.5 text-base font-semibold text-gray-900 shadow-sm transition-all hover:bg-amber-400 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                                >
                                    Become a Volunteer
                                </Link>
                            </div>

                            {/* Mobile toggle */}
                            <button
                                ref={btnRef}
                                onClick={() => setOpen((v) => !v)}
                                aria-label="Toggle navigation"
                                aria-expanded={open}
                                aria-controls="mobile-menu"
                                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-gray-700 transition-all hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                            >
                                <svg
                                    className={`h-5 w-5 transition-transform duration-300 ${
                                        open ? "rotate-90" : ""
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    {open ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 7h16M4 12h16M4 17h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </nav>
                    </div>

                    {/* Mobile menu (overlay, no pushdown) */}
                    <div
                        id="mobile-menu"
                        ref={menuRef}
                        className={`md:hidden absolute left-0 w-full origin-top overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="mx-auto max-w-7xl px-4 md:px-6 pb-4">
                            <div className="rounded-2xl border border-gray-200 bg-white/95 backdrop-blur shadow-lg p-3">
                                <ul className="flex flex-col divide-y divide-gray-100">
                                    {navItems.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-3">
                                    <Link
                                        href="/become-a-volunteer"
                                        onClick={() => setOpen(false)}
                                        className="inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-5 py-2.5 text-base font-semibold text-gray-900 shadow-sm transition-all hover:bg-amber-400 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                                    >
                                        Become a Volunteer
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}
