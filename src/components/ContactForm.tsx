"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

type FormState = {
	name: string;
	purpose: string;
	phone: string;
	email: string;
	message: string;
};

export default function ContactSection() {
	const [form, setForm] = useState<FormState>({
		name: "",
		purpose: "",
		phone: "",
		email: "",
		message: "",
	});
	const [submitting, setSubmitting] = useState(false);
	const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setForm((s) => ({ ...s, [name]: value }));
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus(null);

		// Client-side validation
		if (!form.name.trim()) return setStatus({ ok: false, msg: "Name is required." });
		if (!form.phone.trim()) return setStatus({ ok: false, msg: "Phone Number is required." });

		setSubmitting(true);
		try {
			// Update this path if PHP is deployed elsewhere
			const res = await fetch("/contact.php", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});
			const data = await res.json().catch(() => null);
			if (res.ok && data?.success) {
				setStatus({ ok: true, msg: "Message sent successfully." });
				setForm({ name: "", purpose: "", phone: "", email: "", message: "" });
			} else {
				setStatus({ ok: false, msg: data?.error || "Failed to send. Try again later." });
			}
		} catch {
			setStatus({ ok: false, msg: "Network error. Please try again." });
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<section className="relative">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
					{/* Right: Form (placed first in DOM for mobile) */}
					<div className="order-1 md:order-none">
						<div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 sm:p-8 shadow-lg">
							<h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
								Get in Touch
							</h2>
							<p className="mt-1 text-gray-600">
								We’ll respond as soon as possible.
							</p>

							<form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="sm:col-span-1">
									<label htmlFor="name" className="block text-sm font-medium text-gray-800">
										Name <span className="text-red-600">*</span>
									</label>
									<input
										id="name"
										name="name"
										required
										value={form.name}
										onChange={onChange}
										className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-emerald-600 focus:ring-emerald-600"
										placeholder="Full Name"
									/>
								</div>

								<div className="sm:col-span-1">
									<label htmlFor="purpose" className="block text-sm font-medium text-gray-800">
										Purpose
									</label>
									<input
										id="purpose"
										name="purpose"
										value={form.purpose}
										onChange={onChange}
										className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-emerald-600 focus:ring-emerald-600"
										placeholder="e.g., Volunteer, Donation, Partnership"
									/>
								</div>

								<div className="sm:col-span-1">
									<label htmlFor="phone" className="block text-sm font-medium text-gray-800">
										Phone Number <span className="text-red-600">*</span>
									</label>
									<input
										id="phone"
										name="phone"
										required
										value={form.phone}
										onChange={onChange}
										inputMode="tel"
										pattern="^[0-9+\-\s()]{6,}$"
										className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-emerald-600 focus:ring-emerald-600"
										placeholder="+91 98XXXXXXX"
									/>
								</div>

								<div className="sm:col-span-1">
									<label htmlFor="email" className="block text-sm font-medium text-gray-800">
										Email
									</label>
									<input
										id="email"
										name="email"
										type="email"
										value={form.email}
										onChange={onChange}
										className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-emerald-600 focus:ring-emerald-600"
										placeholder="name@example.com"
									/>
								</div>

								<div className="sm:col-span-2">
									<label htmlFor="message" className="block text-sm font-medium text-gray-800">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows={5}
										value={form.message}
										onChange={onChange}
										className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-emerald-600 focus:ring-emerald-600"
										placeholder="Write your message..."
									/>
								</div>

								<div className="sm:col-span-2 flex items-center gap-3">
									<button
										type="submit"
										disabled={submitting}
										className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700 disabled:opacity-60"
									>
										{submitting ? "Sending..." : "Send Message"}
									</button>
									{status && (
										<span className={`${status.ok ? "text-emerald-700" : "text-red-600"} text-sm`}>
											{status.msg}
										</span>
									)}
								</div>
							</form>
						</div>
					</div>

					{/* Left: Map + Socials */}
					<div className="order-2 md:order-none">
						<div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
							{/* Replace the src below with your preferred map pin; this one is Durgapur, West Bengal */}
							<iframe
								title="ISTA Foundation Location"
								className="absolute inset-0 h-full w-full"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								// Durgapur generic map. Update to your exact address if needed.
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7303.087915224464!2d87.296!3d23.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f769106d7b0ad7%3A0xa0c0c0c0c0c0c0c0!2sDurgapur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1724570000000"
								allowFullScreen
							></iframe>

							{/* Socials panel */}
							<div className="absolute left-4 top-4 flex flex-col gap-3">
								<BrandButton
									label="Facebook"
									href="#"
									styleClass="bg-[#1877F2] text-white hover:bg-[#0E63CE]"
								>
									<FaFacebookF className="text-lg" />
								</BrandButton>
								<BrandButton
									label="Instagram"
									href="#"
									styleClass="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:opacity-90"
								>
									<FaInstagram className="text-lg" />
								</BrandButton>
								<BrandButton
									label="WhatsApp"
									href="#"
									styleClass="bg-[#25D366] text-white hover:bg-[#1ebe57]"
								>
									<FaWhatsapp className="text-lg" />
								</BrandButton>
							</div>
						</div>

						{/* On mobile, map shows below: already handled via order classes (form first). */}
					</div>
				</div>
			</div>
		</section>
	);
}

function BrandButton({
	label,
	href,
	styleClass,
	children,
}: {
	label: string;
	href: string;
	styleClass?: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			aria-label={label}
			title={label}
			className={`group flex h-10 w-10 items-center justify-center rounded-full shadow-md ring-1 ring-black/5 ${styleClass || "bg-white text-gray-700 hover:bg-gray-50"}`}
		>
			{children}
			<span className="sr-only">{label}</span>
		</Link>
	);
}
