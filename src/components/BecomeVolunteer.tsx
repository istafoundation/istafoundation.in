"use client";

import { useState } from "react";

type FormState = {
    name: string;
    phone: string;
    email: string;
    interest: string;
    message: string;
};

type Status = { ok: boolean; msg: string } | null;

const inputBase =
    "block w-full rounded-xl border border-gray-300 bg-white/80 px-4 py-3 text-gray-900 shadow-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500 transition-all";

export default function BecomeVolunteer() {
    const [form, setForm] = useState<FormState>({
        name: "",
        phone: "",
        email: "",
        interest: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<Status>(null);

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(null);

        // validation
        if (!form.name.trim()) {
            return setStatus({ ok: false, msg: "Name is required." });
        }
        if (!form.phone.trim()) {
            return setStatus({ ok: false, msg: "Phone Number is required." });
        }

        setSubmitting(true);
        try {
            const res = await fetch("/contact.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json().catch(() => null);
            if (res.ok && data?.success) {
                setStatus({
                    ok: true,
                    msg: "Thank you for signing up as a volunteer!",
                });
                setForm({
                    name: "",
                    phone: "",
                    email: "",
                    interest: "",
                    message: "",
                });
            } else {
                setStatus({
                    ok: false,
                    msg: data?.error || "Submission failed. Try again later.",
                });
            }
        } catch {
            setStatus({ ok: false, msg: "Network error. Please try again." });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="relative bg-gradient-to-br from-emerald-100 via-white to-emerald-50 py-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-8">
                <div className="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl p-10 shadow-2xl">
                    <h2 className="text-4xl font-extrabold text-center text-emerald-700">
                        Become a Volunteer
                    </h2>
                    <p className="mt-3 text-center text-gray-600 max-w-xl mx-auto">
                        Join our mission to make a difference! Tell us a bit about yourself,
                        and we’ll reach out soon.
                    </p>

                    <form onSubmit={onSubmit} className="mt-12 space-y-6">
                        {/* Full Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Full Name <span className="text-red-600">*</span>
                            </label>
                            <input
                                id="name"
                                name="name"
                                required
                                value={form.name}
                                onChange={onChange}
                                placeholder="Your full name"
                                className={inputBase}
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Phone Number <span className="text-red-600">*</span>
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                required
                                inputMode="tel"
                                pattern="^[0-9+\\-\\s()]{6,}$"
                                value={form.phone}
                                onChange={onChange}
                                placeholder="+91 98XXXXXXX"
                                className={inputBase}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={onChange}
                                placeholder="you@example.com"
                                className={inputBase}
                            />
                        </div>

                        {/* Area of Interest */}
                        <div>
                            <label
                                htmlFor="interest"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Area of Interest
                            </label>
                            <input
                                id="interest"
                                name="interest"
                                type="text"
                                value={form.interest}
                                onChange={onChange}
                                placeholder="Education, Healthcare, Environment..."
                                className={inputBase}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Message / Availability
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={onChange}
                                placeholder="Share your motivation..."
                                className={inputBase}
                            />
                        </div>

                        {/* Submit */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-green-500 px-10 py-3 text-white font-semibold shadow-lg shadow-emerald-600/30 hover:from-emerald-700 hover:to-green-600 transition disabled:opacity-60"
                            >
                                {submitting ? "Submitting..." : "Join as Volunteer"}
                            </button>
                        </div>

                        {/* Status */}
                        {status && (
                            <div className="text-center">
                                <span
                                    className={`text-sm font-medium ${
                                        status.ok ? "text-emerald-700" : "text-red-600"
                                    }`}
                                >
                                    {status.msg}
                                </span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
