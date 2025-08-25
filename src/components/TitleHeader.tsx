// components/TitleHeader.tsx
import React from "react";

type Crumb = {
	label: string;
	href?: string; // if omitted, treated as current page
};

type TitleHeaderProps = {
	title: string;
	crumbs?: Crumb[]; // e.g., [{ label: "Home", href: "/" }, { label: "About Us" }]
	bgImageUrl?: string; // optional background image url
	className?: string;
};

export default function TitleHeader({
	title,
	crumbs = [{ label: "Home", href: "/" }, { label: title }],
	bgImageUrl = "/images/header-bg.jpg",
	className = "",
}: TitleHeaderProps) {
	return (
		<header
			className={[
				"relative w-full",
				"overflow-hidden",
				"flex items-center",
				"min-h-[180px] md:min-h-[220px]",
				className,
			].join(" ")}
		>
			{/* Background image */}
			<div
				aria-hidden
				className="absolute inset-0 bg-center bg-cover"
				style={{ backgroundImage: `url(${bgImageUrl})` }}
			/>

			{/* Gradient overlay for legibility */}
			<div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/50 md:from-white/70 md:via-white/50 md:to-white/40" />

			{/* Content */}
			<div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 md:py-12">
				<h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 font-mono">
					{title}
				</h1>

				<nav aria-label="Breadcrumb" className="mt-3 md:mt-4">
					<ol className="flex flex-wrap items-center gap-2 text-sm md:text-base text-slate-700">
						{crumbs.map((c, idx) => {
							const isLast = idx === crumbs.length - 1;
							return (
								<li key={`${c.label}-${idx}`} className="flex items-center gap-2">
									{!isLast && c.href ? (
										<a
											href={c.href}
											className="hover:underline"
											aria-label={`Go to ${c.label}`}
										>
											{c.label}
										</a>
									) : (
										<span className="font-semibold text-slate-900" aria-current="page">
											{c.label}
										</span>
									)}
									{!isLast && <span className="text-slate-400">/</span>}
								</li>
							);
                        })}
					</ol>
				</nav>
			</div>
		</header>
	);
}
