import { HeroBanner, CTAButton, FinalCTA } from "../components/Sections";
import ConsultationForm from "../components/ConsultationForm";

const discussPoints = [
  "Legal and corporate support",
  "Recruitment and staffing guidance",
  "Candidate placement support",
  "Compliance and documentation help",
  "Employment and business advisory",
];

const processSteps = [
  {
    title: "Submit Your Request",
    description:
      "Share your details, consultation type, preferred contact method, and message.",
  },
  {
    title: "We Review Your Requirement",
    description:
      "Jurisnexa reviews your legal, recruitment, staffing, or advisory requirement.",
  },
  {
    title: "We Contact You",
    description:
      "Our team follows up to confirm your consultation and guide you on the next steps.",
  },
];

export default function BookConsultation() {
  return (
    <>
      <HeroBanner
        title="Book a Consultation With Jurisnexa"
        subtitle="Schedule a consultation for legal guidance, recruitment support, staffing solutions, compliance assistance, candidate placement, or professional advisory services in India."
        description="Tell us what kind of support you need and our team will help guide you toward the right service direction."
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=85"
        ctas={[
          { label: "Book Consultation Below", to: "#consultation-form" },
          {
            label: "Explore Services",
            to: "/our-services",
            variant: "outline",
          },
        ]}
      />

      <section className="bg-white py-14" id="consultation-form">
        <div className="mx-auto grid max-w-screen-2xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Request a Consultation
            </h2>
            <p className="mt-3 text-slate-muted">
              Fill out the form below and Jurisnexa will contact you to confirm
              the next step for your consultation request.
            </p>
            <div className="mt-6">
              <ConsultationForm formId="consultation-form" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              What You Can Discuss
            </h2>
            <p className="mt-4 text-slate-muted">
              You can book a consultation for legal guidance, business
              documentation, compliance assistance, legal hiring, staffing
              support, candidate placement, employment advisory, or general
              professional support.
            </p>
            <ul className="mt-6 space-y-3">
              {discussPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-slate-muted"
                >
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton to="/our-services">Explore Services</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-navy sm:text-3xl">
            How the Consultation Process Works
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {processSteps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-lg font-bold text-navy">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Ready to Speak With Jurisnexa?"
        subtitle="Book a consultation today for legal support, recruitment assistance, staffing solutions, candidate placement, compliance guidance, or professional advisory services in India."
        primaryLabel="Book a Consultation"
        primaryTo="#consultation-form"
        secondaryLabel="Contact Us"
        secondaryTo="/contact-us"
      />
    </>
  );
}
