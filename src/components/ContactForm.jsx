import { useState } from "react";

const inquiryTypes = [
  "Legal Consultation",
  "Corporate Legal Support",
  "Compliance Assistance",
  "Legal Recruitment",
  "Staffing Solutions",
  "Candidate Placement",
  "Employment Advisory",
  "General Inquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center text-green-800">
        Thank you for contacting Jurisnexa. Our team will get back to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-base font-medium text-navy">Full Name</label>
        <input
          type="text"
          required
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <div>
        <label className="mb-1 block text-base font-medium text-navy">Email Address</label>
        <input
          type="email"
          required
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <div>
        <label className="mb-1 block text-base font-medium text-navy">Phone Number</label>
        <input
          type="tel"
          required
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <div>
        <label className="mb-1 block text-base font-medium text-navy">City / Location</label>
        <input
          type="text"
          required
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <div>
        <label className="mb-1 block text-base font-medium text-navy">Inquiry Type</label>
        <select
          required
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        >
          <option value="">Select inquiry type</option>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block text-base font-medium text-navy">Message</label>
        <textarea
          required
          rows={4}
          placeholder="Tell us how we can help you."
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-gold px-6 py-3 text-base font-bold text-navy transition-colors hover:bg-gold-light"
      >
        Submit Message
      </button>
    </form>
  );
}
