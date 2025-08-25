// app/components/Hero.tsx
'use client';

import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="bg-[#fbf7ff] text-slate-800">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-24">
                {/* Left media */}
                <div className="relative lg:col-span-7">
                    {/* Pink roundel sticker */}
                    <div className="absolute -left-4 -top-4 z-10 hidden sm:block">
                        <div className="relative h-24 w-24 md:h-28 md:w-28">
                            <div className="absolute inset-0 rounded-full bg-pink-300/70 backdrop-blur-sm ring-4 ring-pink-200" />
                            <div className="relative flex h-full w-full items-center justify-center text-[9px] md:text-[10px] font-semibold tracking-wider text-slate-700">
                                <span className="[writing-mode:vertical-rl] rotate-180">GOOD CHARITY</span>
                            </div>
                        </div>
                    </div>

                    {/* Main image */}
                    <div className="relative overflow-hidden rounded-[36px] sm:rounded-[44px] lg:rounded-[48px] bg-slate-200 shadow-sm">
                        <div className="absolute inset-0 -z-10 rounded-[inherit] ring-1 ring-black/5" />
                        <Image
                            src="/images/ista-group.jpg"
                            alt="ISTA Foundation community event"
                            width={1200}
                            height={900}
                            className="h-auto w-full object-cover"
                            priority
                        />
                    </div>

                    {/* Fund raised badge */}
                    <div className="pointer-events-none absolute -bottom-6 left-4 rotate-6 sm:left-6 sm:rotate-12 md:-bottom-8">
                        <div className="rounded-3xl bg-white/90 px-5 py-3 shadow-xl ring-1 ring-black/5 backdrop-blur sm:px-6 sm:py-4">
                            <p className="text-xs sm:text-sm font-semibold text-slate-700">
                                Total Fund Raised
                            </p>
                            <p className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                                $48,780
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right content */}
                <div className="space-y-6 sm:space-y-7 lg:space-y-8 lg:col-span-5">
                    <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-200">
                        <span className="inline-block h-2 w-2 rounded-full bg-violet-600" />
                        About ISTA Foundation
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                        Real Solutions For <br className="hidden sm:block" /> Real Needs.
                    </h1>

                    <p className="max-w-prose text-sm sm:text-base text-slate-600">
                        Nobody should face a mental health problem alone; with support, a call, and community, help is <strong>here</strong> and on the other end of the phone.
                    </p>

                    {/* Action cards */}
                    <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                        <a
                            href="#help"
                            className="group flex items-center gap-4 rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-slate-200 transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                        >
                            <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-100 text-violet-700 sm:h-12 sm:w-12">
                                <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" aria-hidden="true">
                                    <path d="M12 21c-4.2-3.3-7-6-7-9.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 7 3.5c0 3.5-2.8 6.2-7 9.5z" />
                                </svg>
                            </span>
                            <div>
                                <p className="font-semibold text-slate-900">Helping</p>
                                <p className="text-sm text-slate-600">Someone Else</p>
                            </div>
                        </a>

                        <a
                            href="#donate"
                            className="group flex items-center gap-4 rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-slate-200 transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                        >
                            <span className="grid h-11 w-11 place-items-center rounded-xl bg-rose-100 text-rose-700 sm:h-12 sm:w-12">
                                <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" aria-hidden="true">
                                    <path d="M12 21c6-4.3 9-7.2 9-11.2A5.8 5.8 0 0 0 12 5a5.8 5.8 0 0 0-9 4.8C3 13.8 6 16.7 12 21z" />
                                </svg>
                            </span>
                            <div>
                                <p className="font-semibold text-slate-900">Donate Or</p>
                                <p className="text-sm text-slate-600">Fundraise</p>
                            </div>
                        </a>
                    </div>

                    {/* Small photo card */}
                    <div className="flex items-center gap-4">
                        <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
                            <Image
                                src="/images/ista-table.jpg"
                                alt="ISTA Foundation meeting"
                                width={220}
                                height={160}
                                className="h-24 w-36 object-cover sm:h-28 sm:w-40"
                            />
                        </div>
                        <p className="text-sm sm:text-base text-slate-600">
                            Every child has the right to dream, no matter where they are or where they live.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
