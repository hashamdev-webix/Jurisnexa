import { HeroBanner, ImageTextSection, FinalCTA } from "../components/Sections";
import { services } from "../data/services";

export default function OurServices() {
  return (
    <>
      <HeroBanner
        title="Our Legal and Recruitment Services"
        subtitle="Jurisnexa provides legal consultation, corporate legal support, compliance assistance, legal recruitment, staffing solutions, candidate placement, and professional advisory services across India."
        description="Whether you are a business looking for legal guidance, a law firm hiring legal talent, an employer building a professional team, or a candidate searching for career opportunities, Jurisnexa offers structured support designed around your needs."
        image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85"
        ctas={[
          { label: "Book a Consultation", to: "/book-a-consultation" },
          { label: "Contact Us", to: "/contact-us", variant: "outline" },
        ]}
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Complete Support for Legal, Hiring, and Professional Needs
          </h2>
          <p className="mt-4 leading-relaxed text-slate-muted">
            Jurisnexa brings together legal service support and recruitment
            assistance under one professional platform. Our services are
            designed for law firms, businesses, startups, HR teams, corporate
            legal departments, professionals, and job seekers who need reliable
            guidance, staffing support, documentation assistance, and
            consultation services in India.
          </p>
        </div>
      </section>

      {services.map((service) => (
        <ImageTextSection
          key={service.title}
          title={service.title}
          description={service.description}
          image={service.image}
          imageLeft
          cta={{ label: "Book a Consultation", to: "/book-a-consultation" }}
        >
          <p className="mt-4 leading-relaxed text-slate-muted">
            {service.details}
          </p>
        </ImageTextSection>
      ))}

      <ImageTextSection
        title="Practical Support for Legal, Hiring, and Business Needs"
        description="Many businesses, professionals, law firms, and candidates need support that is clear, organized, and easy to access. Jurisnexa is designed to simplify legal service coordination, recruitment assistance, staffing support, documentation needs, and consultation requests through one professional platform. We help clients save time, reduce confusion, organize requirements, and connect with the right service direction."
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85"
        imageLeft={false}
        cta={{ label: "Book a Consultation", to: "/book-a-consultation" }}
      />

      <FinalCTA
        title="Need Legal Support or Recruitment Assistance?"
        subtitle="Book a consultation with Jurisnexa to discuss legal consultation, corporate legal support, compliance assistance, legal recruitment, staffing solutions, candidate placement, employment advisory, or professional consultation needs in India."
        primaryLabel="Book a Consultation"
        primaryTo="/book-a-consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact-us"
      />
    </>
  );
}
