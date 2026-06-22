import { useState } from "react";

const iAmOptions = [
  "Business Owner",
  "Law Firm Representative",
  "HR / Hiring Manager",
  "Job Seeker / Candidate",
  "Legal Professional",
  "Individual Client",
  "Other",
];

const consultationTypes = [
  "Legal Consultation",
  "Corporate Legal Support",
  "Compliance Assistance",
  "Legal Recruitment",
  "Staffing Solutions",
  "Candidate Placement",
  "Employment Advisory",
  "Professional Consultation",
  "Not Sure / Need Guidance",
];

const contactMethods = ["Phone Call", "Email", "Online Meeting"];

export default function ConsultationForm({ formId = "consultation-form" }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center text-green-800">
        Thank you for requesting a consultation. The Jurisnexa team will contact
        you shortly to confirm the next step.
      </div>
    );
  }

  return (
    <form id={formId} onSubmit={handleSubmit} className="space-y-4">
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
        <label className="mb-1 block text-base font-medium text-navy">I Am A</label>
        <select
          required
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        >
          <option value="">Select option</option>
          {iAmOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block text-base font-medium text-navy">Consultation Type</label>
        <select
          required
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        >
          <option value="">Select consultation type</option>
          {consultationTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block text-base font-medium text-navy">
          Preferred Contact Method
        </label>
        <select
          required
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        >
          <option value="">Select contact method</option>
          {contactMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-base font-medium text-navy">
            Preferred Date
          </label>
          <input
            type="date"
            className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </div>
        <div>
          <label className="mb-1 block text-base font-medium text-navy">
            Time Preference
          </label>
          <input
            type="text"
            placeholder="e.g. Morning, 2-4 PM"
            className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-base font-medium text-navy">Message</label>
        <textarea
          rows={4}
          placeholder="Briefly describe what you need help with."
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-gold px-6 py-3 text-base font-bold text-navy transition-colors hover:bg-gold-light"
      >
        Submit Consultation Request
      </button>
    </form>
  );
}
