import { HeroBanner, CTAButton } from "../components/Sections";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
  return (
    <>
      <HeroBanner
        title="Contact Jurisnexa"
        subtitle="Get in touch with Jurisnexa for legal support, recruitment assistance, staffing solutions, candidate placement, and professional consultation in India."
        description="Whether you are a business, law firm, employer, professional, or job seeker, our team can guide you toward the right legal or recruitment solution."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85"
        ctas={[
          { label: "Book a Consultation", to: "/book-a-consultation" },
          {
            label: "Explore Services",
            to: "/paralegal-services",
            variant: "outline",
          },
        ]}
      />

      <section className="bg-white py-14">
        <div className="grid w-full gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Send Us a Message
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Get in Touch
            </h2>
            <ul className="mt-6 space-y-4 text-slate-muted">
              <li>
                <span className="font-semibold text-navy">Email:</span>{" "}
                <a href="mailto:info@jurisnexa.org" className="hover:text-gold">
                  info@jurisnexa.org
                </a>
              </li>
              <li>
                <span className="font-semibold text-navy">Location:</span> India
              </li>
              <li>
                <span className="font-semibold text-navy">Website:</span>{" "}
                <a href="https://www.jurisnexa.org" className="hover:text-gold">
                  www.jurisnexa.org
                </a>
              </li>
            </ul>
            <p className="mt-6 leading-relaxed text-slate-muted">
              Jurisnexa supports clients with legal consultation, recruitment
              assistance, staffing solutions, candidate placement, compliance
              guidance, and professional advisory services across India.
            </p>
            <div className="mt-6">
              <CTAButton to="/book-a-consultation">
                Book a Consultation
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            How Can We Help?
          </h2>
          <p className="mt-4 text-slate-muted">
            Contact Jurisnexa if you need legal guidance, documentation support,
            corporate legal assistance, legal hiring, staffing support, job
            placement, employment advisory, or professional consultation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton to="/paralegal-services">Explore Services</CTAButton>
            <CTAButton to="/book-a-consultation" variant="outline">
              Book a Consultation
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
