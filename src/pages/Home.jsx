import HeroSlideshow from "../components/HeroSlideshow";
import {
  ImageTextSection,
  ProcessSteps,
  BenefitBlocks,
  FinalCTA,
  CTAButton,
} from "../components/Sections";
import { homeServices } from "../data/services";

const whoWeHelp = [
  "Law firms",
  "Corporate legal departments",
  "Startups and entrepreneurs",
  "Small and medium-sized businesses",
  "HR teams and recruitment managers",
  "Compliance-focused organizations",
  "Job seekers and legal professionals",
  "Businesses needing documentation and advisory support",
];

const benefits = [
  {
    title: "Legal and Recruitment Focus",
    description:
      "A combined platform for legal support, legal hiring, professional staffing, and candidate placement.",
  },
  {
    title: "India-Focused Services",
    description:
      "Services designed for Indian businesses, law firms, professionals, job seekers and growing organizations.",
  },
  {
    title: "Professional Consultation",
    description:
      "Clear communication, structured guidance, and practical next steps for legal and recruitment requirements.",
  },
  {
    title: "Business-Friendly Approach",
    description:
      "Support for startups, SMEs, corporate teams, HR departments, and law offices that need reliable legal and hiring assistance.",
  },
];

const processSteps = [
  {
    title: "Understand Your Requirement",
    description:
      "We understand whether you need legal consultation, documentation support, recruitment assistance, candidate placement, or business advisory support.",
  },
  {
    title: "Review and Plan",
    description:
      "Our team reviews your requirement and recommends the right service direction, consultation process, or hiring approach.",
  },
  {
    title: "Service or Talent Support",
    description:
      "We provide legal support, prepare service guidance, shortlist candidates, coordinate recruitment, or assist with documentation depending on your need.",
  },
  {
    title: "Follow-Up and Ongoing Assistance",
    description:
      "We support clients with communication, updates, consultation follow-up, and next-step guidance.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSlideshow />

      <ImageTextSection
        title="Your Trusted Partner for Legal and Recruitment Support"
        description="Jurisnexa is a professional law and recruitment agency in India created to support businesses, law firms, professionals, and job seekers with reliable legal guidance and hiring solutions. We bring legal service support and recruitment assistance together under one platform so clients can access consultation, documentation support, compliance guidance, legal hiring, staffing solutions, and candidate placement services with confidence."
        image="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=85"
        imageLeft
        cta={{ label: "Explore Services", to: "/our-services" }}
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              What Jurisnexa Offers
            </h2>
            <p className="mt-4 text-slate-muted">
              Jurisnexa provides a balanced range of legal, recruitment, staffing,
              and professional support services for clients across India.
            </p>
          </div>
          <div className="mt-10 space-y-6">
            {homeServices.map((service) => (
              <div
                key={service.title}
                className="border-l-4 border-gold bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-muted">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton to="/our-services">Explore Services</CTAButton>
          </div>
        </div>
      </section>

      <ImageTextSection
        title="Legal Support Designed for Businesses and Professionals"
        description="Jurisnexa helps clients understand and manage legal requirements through professional consultation, documentation support, contract assistance, business legal guidance, compliance coordination, and employment-related documentation support. We support clients with practical legal guidance, not complicated legal language - building trust for businesses, startups, professionals, and individuals who need structured legal support."
        image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=900&q=85"
        imageLeft={false}
        bullets={[
          "Legal consultation",
          "Corporate legal support",
          "Contract and agreement assistance",
          "Business documentation support",
          "Compliance coordination",
          "Employment-related legal documentation",
        ]}
        cta={{ label: "Book a Consultation", to: "/book-a-consultation" }}
      />

      <ImageTextSection
        title="Recruitment and Staffing Solutions for Growing Teams"
        description="Jurisnexa supports employers with recruitment services for legal, compliance, administrative, HR, and professional roles. We help businesses and law firms identify suitable candidates, simplify hiring, and reduce the time spent on screening and shortlisting. Our recruitment service is designed for law firms, companies, startups, consultancies, corporate legal teams, and organizations that need reliable talent support."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85"
        imageLeft
        bullets={[
          "Legal hiring",
          "Law firm recruitment",
          "Corporate legal department hiring",
          "Compliance and documentation roles",
          "HR and administrative staffing",
          "Professional candidate placement",
        ]}
        cta={{ label: "Contact Us", to: "/contact-us" }}
      />

      <ImageTextSection
        title="Who We Help"
        description="Jurisnexa works with clients who need dependable legal, recruitment, and professional support services in India."
        image="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=900&q=85"
        imageLeft={false}
        bullets={whoWeHelp}
        cta={{ label: "Explore Services", to: "/our-services" }}
      />

      <BenefitBlocks
        title="Why Choose Jurisnexa"
        description="Jurisnexa combines legal service understanding with recruitment experience to provide clients with practical support, professional communication, and reliable service delivery."
        benefits={benefits}
        cta={{ label: "Book a Consultation", to: "/book-a-consultation" }}
      />

      <ProcessSteps title="How We Work" steps={processSteps} />

      <FinalCTA
        title="Need Legal Support or Recruitment Assistance?"
        subtitle="Connect with Jurisnexa to discuss legal consultation, corporate legal support, compliance guidance, legal recruitment, staffing solutions, candidate placement, and professional hiring needs in India."
        primaryLabel="Book a Consultation"
        primaryTo="/book-a-consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact-us"
      />
    </>
  );
}
