import {
  HeroBanner,
  ImageTextSection,
  ProcessSteps,
  BenefitBlocks,
  FinalCTA,
  ValueBlocks,
} from "../components/Sections";

const values = [
  {
    title: "Professional Integrity",
    description:
      "We believe in honest communication, responsible guidance, and professional service delivery for every client and candidate.",
  },
  {
    title: "Client-Focused Support",
    description:
      "We take time to understand each client's legal, recruitment, staffing, or consultation need before recommending the right direction.",
  },
  {
    title: "Confidentiality",
    description:
      "We respect the sensitivity of legal matters, hiring decisions, candidate profiles, business documents, and client information.",
  },
  {
    title: "Practical Guidance",
    description:
      "We aim to provide clear, useful, and action-oriented support instead of confusing clients with unnecessary complexity.",
  },
  {
    title: "Quality and Reliability",
    description:
      "We focus on organized processes, careful communication, and dependable support across legal services, recruitment, documentation, and consultation.",
  },
  {
    title: "Growth and Opportunity",
    description:
      "We support businesses in finding talent and help professionals explore better career opportunities in legal, compliance, HR, and business support roles.",
  },
];

const whoWeServe = [
  "Law firms",
  "Corporate legal departments",
  "Startups and entrepreneurs",
  "Small and medium-sized businesses",
  "HR teams and hiring managers",
  "Compliance-focused organizations",
  "Legal professionals and job seekers",
  "Businesses needing documentation support",
];

const benefits = [
  {
    title: "Combined Legal and Recruitment Focus",
    description:
      "Clients can access legal support, legal hiring, staffing assistance, and candidate placement from one platform.",
  },
  {
    title: "India-Focused Service Approach",
    description:
      "Services are designed for Indian businesses, law firms, professionals, and candidates.",
  },
  {
    title: "Clear Communication",
    description:
      "We explain service options clearly and help clients understand the next steps without unnecessary confusion.",
  },
  {
    title: "Professional Network Support",
    description:
      "Jurisnexa helps connect employers with suitable professionals and supports candidates looking for legal, compliance, HR, and business roles.",
  },
  {
    title: "Confidential and Trustworthy Process",
    description:
      "We handle legal documents, business requirements, candidate profiles, and hiring information with care and professionalism.",
  },
];

const processSteps = [
  {
    title: "Understand the Requirement",
    description:
      "We identify whether the client needs legal support, documentation assistance, recruitment help, staffing support, candidate placement, or consultation.",
  },
  {
    title: "Review and Recommend",
    description:
      "We review the requirement and recommend the most suitable service direction, hiring approach, or consultation pathway.",
  },
  {
    title: "Provide Support",
    description:
      "We assist with legal guidance, documentation, recruitment coordination, candidate shortlisting, staffing support, or professional consultation.",
  },
  {
    title: "Follow Up",
    description:
      "We communicate updates, share next steps, and support the client or candidate through the process.",
  },
];

export default function AboutUs() {
  return (
    <>
      <HeroBanner
        title="About Jurisnexa"
        subtitle="Jurisnexa is a law and recruitment agency in India helping businesses, law firms, professionals, and job seekers access reliable legal support, hiring assistance, staffing solutions, and consultation services."
        description="We bring together legal service support and recruitment expertise to help clients manage documentation, compliance, corporate legal needs, employment support, legal hiring, candidate placement, and professional staffing with confidence."
        image="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=85"
        ctas={[
          { label: "Explore Services", to: "/our-services" },
          { label: "Book a Consultation", to: "/book-a-consultation" },
        ]}
      />

      <ImageTextSection
        title="Who We Are"
        description="Jurisnexa is created to support clients who need practical legal guidance and professional recruitment solutions in India. The company works with businesses, startups, law firms, corporate teams, professionals, and job seekers by providing structured support for legal consultation, documentation, compliance guidance, hiring, staffing, and candidate placement. Jurisnexa is designed as a professional platform where legal support and recruitment services come together. Whether a client needs help reviewing legal documentation, hiring legal talent, finding professional staff, or understanding basic compliance requirements, Jurisnexa provides clear direction and organized service support."
        image="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=900&q=85"
        imageLeft
        cta={{ label: "Explore Services", to: "/our-services" }}
      />

      <ImageTextSection
        title="A Combined Platform for Legal and Recruitment Support"
        description="Jurisnexa serves clients who need dependable legal and hiring assistance without dealing with scattered service providers. The company focuses on practical legal consultation, corporate legal support, compliance assistance, employment documentation, legal recruitment, staffing, HR hiring, and candidate placement services. Our approach is simple: understand the client's requirement, recommend the right service direction, provide professional support, and help the client move forward with clarity."
        image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=85"
        imageLeft={false}
        cta={{ label: "Contact Us", to: "/contact-us" }}
      />

      <ImageTextSection
        title="Our Mission"
        description="Our mission is to make legal support, recruitment assistance, and professional hiring services more accessible, organized, and reliable for businesses, law firms, professionals, and job seekers across India. Jurisnexa aims to simplify legal and recruitment processes by offering clear consultation, structured documentation support, practical compliance guidance, legal hiring assistance, staffing solutions, and candidate placement services."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85"
        imageLeft
        cta={{ label: "Book a Consultation", to: "/book-a-consultation" }}
      />

      <ImageTextSection
        title="Our Vision"
        description="Our vision is to become a trusted legal and recruitment support platform in India, known for professional service, ethical guidance, dependable hiring support, and client-focused solutions. Jurisnexa aims to support the growth of Indian businesses, law firms, and professionals by connecting legal service needs with recruitment solutions under one reliable platform."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85"
        imageLeft={false}
        cta={{ label: "Explore Services", to: "/our-services" }}
      />

      <ValueBlocks
        title="Our Values"
        description="Our values guide how we work with clients, candidates, businesses, and professionals. Jurisnexa focuses on trust, clarity, professionalism, and practical support."
        values={values}
      />

      <ImageTextSection
        title="What We Do"
        description="Jurisnexa provides legal and recruitment-related services for businesses, law firms, professionals, and job seekers. The company supports both service sides: legal assistance and hiring support."
        image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"
        imageLeft
        bullets={[
          "Legal consultation",
          "Corporate legal support",
          "Compliance and documentation assistance",
          "Legal recruitment",
          "Staffing and HR recruitment",
          "Candidate placement support",
          "Employment and business advisory",
          "Professional consultation services",
        ]}
        cta={{ label: "Explore Services", to: "/our-services" }}
      />

      <ImageTextSection
        title="Who We Serve"
        description="Jurisnexa works with clients across legal, business, HR, compliance, and professional service environments in India."
        image="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=900&q=85"
        imageLeft={false}
        bullets={whoWeServe}
        cta={{ label: "Explore Services", to: "/our-services" }}
      />

      <BenefitBlocks
        title="Why Choose Jurisnexa"
        description="Jurisnexa combines legal service awareness with recruitment support to provide clients with a professional, organized, and practical service experience."
        benefits={benefits}
        cta={{ label: "Book a Consultation", to: "/book-a-consultation" }}
      />

      <ProcessSteps title="Our Process" steps={processSteps} />

      <FinalCTA
        title="Looking for Legal Support or Recruitment Assistance?"
        subtitle="Connect with Jurisnexa to discuss legal consultation, corporate legal support, compliance assistance, legal recruitment, staffing solutions, candidate placement, and professional advisory services in India."
        primaryLabel="Book a Consultation"
        primaryTo="/book-a-consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact-us"
      />
    </>
  );
}
