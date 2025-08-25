'use client';

import React, {
    useEffect,
    useMemo,
    useRef,
    useState,
    useCallback
} from 'react';
import Image from 'next/image';

type Img = {
    name: string;
    src: string;
};

export default function Gallery() {
    const [images, setImages] = useState<Img[]>([]);
    const [page, setPage] = useState(1);

    // Lightbox state for navigation
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Fetch images
    useEffect(() => {
        let active = true;
        fetch('/api/gallery')
            .then((r) => r.json())
            .then((data) =>
                active && setImages(Array.isArray(data.images) ? data.images : [])
            )
            .catch(() => setImages([]));
        return () => {
            active = false;
        };
    }, []);

    // Calculate page size based on screen size
    const getPageSize = (w: number) =>
        w < 750 ? 6 : w < 1024 ? 8 : 15;

    const [pageSize, setPageSize] = useState(
        getPageSize(typeof window !== 'undefined' ? window.innerWidth : 1200)
    );

    useEffect(() => {
        const onResize = () => setPageSize(getPageSize(window.innerWidth));
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // Pagination logic
    const totalPages = Math.max(1, Math.ceil(images.length / pageSize));
    const start = (page - 1) * pageSize;
    const pageImages = images.slice(start, start + pageSize);

    // Lightbox actions
    const openAt = useCallback(
        (globalIndex: number) => {
            if (images.length === 0) return;
            setCurrentIndex(
                ((globalIndex % images.length) + images.length) % images.length
            );
            setIsOpen(true);
        },
        [images.length]
    );

    const close = useCallback(() => setIsOpen(false), []);

    const next = useCallback(() => {
        setCurrentIndex((i) => (i + 1) % images.length);
    }, [images.length]);

    const prev = useCallback(() => {
        setCurrentIndex((i) => (i - 1 + images.length) % images.length);
    }, [images.length]);

    // Keyboard shortcuts
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                next();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prev();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                close();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, next, prev, close]);

    // Focus management
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const onCardClick = (localIndex: number) => {
        triggerRef.current = document.activeElement as HTMLDivElement | null;
        openAt(start + localIndex);
    };

    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.focus();
        } else if (!isOpen && triggerRef.current) {
            triggerRef.current.focus();
            triggerRef.current = null;
        }
    }, [isOpen]);

    const selected = useMemo(
        () => images[currentIndex],
        [images, currentIndex]
    );

    return (
        <section className="px-4 py-10 max-w-6xl mx-auto">
            {/* Redesigned Header - Option 3 (Elegant with Gradient Border) */}
            <header className="relative mb-12 text-center">
                <p className="text-gray-500 text-sm uppercase tracking-widest">
                    Our Gallery
                </p>
                <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                    Capturing Moments of Impact
                </h1>
                <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-24 h-[2px] bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full"></div>
            </header>

            {/* Responsive Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pageImages.map((img, i) => (
                    <button
                        key={img.src}
                        type="button"
                        onClick={() => onCardClick(i)}
                        className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 shadow-sm hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <Image
                            src={img.src}
                            alt={img.name}
                            fill
                            sizes="(min-width:1024px) 33vw, (min-width:750px) 50vw, 100vw"
                            className="object-cover"
                            priority={page === 1}
                        />
                    </button>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <nav
                    className="flex justify-center items-center gap-4 mt-8 flex-wrap"
                    aria-label="pagination"
                >
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-4 py-2 rounded-md border bg-white disabled:opacity-50"
                    >
                        Prev
                    </button>

                    <span className="text-sm">
                        Page {page} of {totalPages}
                    </span>

                    <button
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="px-4 py-2 rounded-md border bg-white disabled:opacity-50"
                    >
                        Next
                    </button>
                </nav>
            )}

            {/* Lightbox Modal */}
            {isOpen && selected && (
                <div
                    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                    onClick={close}
                    aria-modal="true"
                    role="dialog"
                    aria-label="Image viewer"
                >
                    <div
                        ref={modalRef}
                        tabIndex={-1}
                        className="relative w-full max-w-5xl aspect-[16/10] outline-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image */}
                        <Image
                            src={selected.src}
                            alt={selected.name}
                            fill
                            className="object-contain"
                        />

                        {/* Close */}
                        <button
                            type="button"
                            onClick={close}
                            aria-label="Close"
                            className="absolute top-3 right-3 rounded-full bg-black/60 text-white p-2 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            ✕
                        </button>

                        {/* Prev */}
                        <button
                            type="button"
                            onClick={prev}
                            aria-label="Previous image"
                            className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            ‹
                        </button>

                        {/* Next */}
                        <button
                            type="button"
                            onClick={next}
                            aria-label="Next image"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            ›
                        </button>

                        {/* Counter */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/90 text-sm bg-black/40 px-2 py-1 rounded">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
