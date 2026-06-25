import {
  BriefcaseBusiness,
  Building2,
  Check,
  ClipboardCheck,
  FileCheck2,
  FileStack,
} from "lucide-react";
import { CTAButton, CTAButtonLight } from "../components/Sections";

const supportCards = [
  {
    icon: Check,
    title: "Paralegal Consultation",
    description:
      "Guided support to understand your requirement, collect documents, plan next steps, and identify what information is needed before moving ahead.",
  },
  {
    icon: Building2,
    title: "Corporate Paralegal Support",
    description:
      "Assistance with company records, internal policies, board-style notes, vendor files, service agreements, HR paperwork, and structured business documentation.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Documentation Assistance",
    description:
      "Help with compliance checklists, KYC-style information, business records, employment documents, verification folders, and process-based documentation.",
  },
  {
    icon: FileStack,
    title: "Document Review & Organisation",
    description:
      "Document sorting, naming, indexing, summaries, timeline preparation, checklist tracking, and secure handover packs.",
  },
  {
    icon: FileCheck2,
    title: "Contract & Agreement Support",
    description:
      "Draft preparation, formatting, version tracking, clause clarity checks, and coordination for service, vendor, employment, and business documents.",
  },
  // {
  //   icon: BriefcaseBusiness,
  //   title: "Contact & Consultation Support",
  //   description:
  //     "Clear intake, requirement discussion, document collection guidance, consultation booking, and follow-up coordination so clients know what to share and what happens next.",
  // },
];

const detailSections = [
  {
    layout: "documentMockup",
    title: "Document Review, Drafting, Formatting & Coordination",
    cardTitle: "Drafting, Formatting & Coordination",
    intro:
      "Clear, organised support for Indian businesses, founders, consultants, and professionals who need dependable paperwork assistance before final review by the right professional.",
    body: [
      "Jurisnexa supports clients with draft preparation, formatting, version tracking, clause clarity checks, and coordination for service, vendor, employment, and business documents.",
      "This support is useful for founders, service providers, HR teams, consultants, and companies that want clean paperwork before final review by the right professional.",
    ],
    imageFirst: true,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
    tags: [
      "Document review",
      "Draft formatting",
      "Version tracking",
      "Clause clarity",
      "Correction coordination",
      "Document handover",
    ],
  },
  {
    layout: "documentMockup",
    title: "Business Setup Paperwork Assistance",
    cardTitle: "Business Profiles & Supporting Files",
    intro:
      "Support with information collection, form preparation, supporting document files, business profile folders, licensing-related paperwork, and follow-up documentation for India-based operations.",
    body: [
      "Our team helps structure company information, founder details, registration-related documents, internal records, and supporting folders so the paperwork is easier to track.",
      "Files can be prepared as checklist-based trackers or portal-ready packs depending on the client requirement.",
    ],
    imageFirst: false,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
    tags: [
      "Business profiles",
      "Supporting files",
      "Information collection",
      "Checklist tracking",
      "Portal-ready folders",
      "Follow-up documents",
    ],
  },
  {
    layout: "documentMockup",
    title: "Employment & HR Documentation",
    cardTitle: "Clean HR Paperwork Support",
    intro:
      "Paralegal support for appointment letters, offer letters, internal policies, onboarding forms, staff records, experience letters, and HR documentation folders.",
    body: [
      "This service helps employers and HR teams reduce confusion, standardise paperwork, maintain employee-related records, and prepare structured folders for internal use.",
      "Jurisnexa can support documentation for onboarding, employee files, exit documents, and role-related paperwork.",
    ],
    imageFirst: true,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
    tags: [
      "Appointment letters",
      "Offer letters",
      "Onboarding forms",
      "Staff records",
      "Experience letters",
      "Policy drafts",
    ],
  },
  {
    layout: "documentMockup",
    title: "Matter File & Tribunal Documentation Coordination",
    cardTitle: "Organised Matter-File Assistance",
    intro:
      "Assistance with file indexing, document bundles, chronology preparation, annexures, hearing notes, reference summaries, and submission-ready document sets for advocates and client teams.",
    body: [
      "We help arrange documents into structured bundles, prepare chronologies, create index sheets, and support document coordination for ongoing matters.",
      "Designed for India-based clients, advocates, businesses, and professionals who need systematic file preparation.",
    ],
    imageFirst: false,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=85",
    tags: [
      "File indexing",
      "Document bundles",
      "Chronology notes",
      "Annexures",
      "Hearing notes",
      "Submission packs",
    ],
  },
  {
    layout: "documentMockup",
    title: "Contact & Consultation Coordination",
    cardTitle: "Clear Contact & Consultation Support",
    intro:
      "A simple contact flow for clients who need help deciding what documents are required, which support category fits their work, and how to begin the consultation process.",
    body: [
      "Jurisnexa helps with requirement intake, document collection guidance, consultation booking, follow-up communication, and next-step coordination.",
      "This keeps the first conversation organised, so clients can share the right details before work begins.",
    ],
    imageFirst: true,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=85",
    tags: [
      "Requirement intake",
      "Document checklist",
      "Consultation booking",
      "Follow-up support",
      "Client coordination",
      "Next-step guidance",
    ],
  },
];

const processSteps = [
  {
    title: "Understand",
    description:
      "We discuss the requirement, purpose, timeline, and required documents so the scope is clear from the beginning.",
  },
  {
    title: "Organise",
    description:
      "We collect, label, arrange, and structure information into easy-to-use folders, checklists, and working files.",
  },
  {
    title: "Prepare",
    description:
      "We assist with drafts, templates, summaries, supporting paperwork, and structured handover documents.",
  },
  {
    title: "Coordinate",
    description:
      "We help manage updates, follow-ups, corrections, and final document sharing with the required stakeholders.",
  },
];

const audience = [
  "Startups and founders",
  "Small and medium businesses",
  "HR and administration teams",
  "Consultants and professionals",
  "Individuals needing paperwork support",
  "Advocates needing file assistance",
];

const documents = [
  "Agreements and contracts",
  "Business records",
  "HR documents",
  "Compliance checklists",
  "File chronologies",
  "Supporting document bundles",
];

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-gold" />
      <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-slate-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function TagGrid({ tags }) {
  return (
    <div className="mt-7 grid gap-3 sm:grid-cols-2">
      {tags.map((tag) => (
        <div
          key={tag}
          className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-base font-semibold text-navy"
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

function CheckListCard({ title, intro, items }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
      <h2 className="text-3xl font-bold leading-tight text-navy">{title}</h2>
      <p className="mt-4 leading-relaxed text-slate-muted">{intro}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 font-semibold text-navy"
          >
            <Check size={18} className="mt-1 shrink-0 text-gold" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailSection({ section }) {
  const imageBlock = (
    <img
      src={section.image}
      alt=""
      className="h-80 w-full rounded-lg object-cover shadow-sm lg:h-[420px]"
    />
  );

  const cardBlock = (
    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 lg:p-9">
      <h3 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
        {section.cardTitle}
      </h3>
      {section.body.map((paragraph) => (
        <p key={paragraph} className="mt-5 leading-relaxed text-slate-muted">
          {paragraph}
        </p>
      ))}
      <TagGrid tags={section.tags} />
    </div>
  );

  return (
    <section className="bg-slate-100 py-14">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="max-w-5xl">
          <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
            {section.title}
          </h2>
          <p className="mt-5 max-w-5xl leading-relaxed text-slate-muted">
            {section.intro}
          </p>
        </div>

        <div className="mt-10 grid w-full items-end gap-8 lg:grid-cols-2">
          {section.imageFirst ? (
            <>
              {imageBlock}
              {cardBlock}
            </>
          ) : (
            <>
              {cardBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function ParalegalServices() {
  return (
    <>
      <section className="bg-slate-100 py-14 lg:py-16">
        <div className="grid w-full items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div>
            {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-2 text-base font-bold text-gold">
              <BriefcaseBusiness size={18} />
              India-Focused Paralegal Assistance
            </div> */}
            <h1 className="text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Paralegal Services in India
            </h1>
            <p className="mt-6 text-xl font-semibold leading-relaxed text-navy/85">
              Structured documentation, drafting support, compliance
              coordination, and matter-file assistance for individuals,
              startups, firms, HR teams, consultants, and businesses across
              India.
            </p>
            <p className="mt-5 max-w-3xl leading-relaxed text-slate-muted">
              Jurisnexa helps clients organise requirements, prepare paperwork,
              review information, coordinate files, and move forward with
              clarity from first discussion to final handover.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton to="/book-a-consultation">
                Book a Consultation
              </CTAButton>
              <CTAButton to="/contact-us" variant="outline">
                Contact Us
              </CTAButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85"
              alt=""
              className="h-80 w-full object-cover sm:h-96 lg:h-[440px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <SectionHeading
            title="Complete Paralegal Support for Indian Clients"
            subtitle="One dedicated page for paralegal support, documentation, business paperwork, compliance coordination, and professional assistance across India."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {supportCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-transform hover:-translate-y-1 hover:shadow-lg sm:p-8"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-gold/40 bg-gold/10 text-gold">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold leading-tight text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-slate-muted">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {detailSections.map((section) => (
        <DetailSection key={section.title} section={section} />
      ))}

      <section className="bg-navy py-14 text-white lg:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              How Jurisnexa Supports Your Paralegal Work
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              A clear step-by-step process designed for India-based clients who
              need dependable documentation and coordination support.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg border border-white/15 bg-white/5 p-6"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-lg font-bold text-navy">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="grid w-full gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          <CheckListCard
            title="Who This Page Is For"
            intro="Jurisnexa supports India-based individuals and organisations that need reliable paralegal documentation support without mixing it with recruitment work."
            items={audience}
          />
          <CheckListCard
            title="Documents We Help Organise"
            intro="Our support covers everyday business, employment, compliance, and matter-file documentation used by clients across India."
            items={documents}
          />
        </div>
      </section>

      <section className="border-b-4 border-gold bg-navy py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Need Paralegal Support in India?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Book a consultation with Jurisnexa to discuss documentation,
            compliance coordination, contract support, HR paperwork, corporate
            paperwork, or matter-file assistance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButtonLight to="/book-a-consultation">
              Book a Consultation
            </CTAButtonLight>
            <CTAButtonLight to="/contact-us" variant="outline">
              Contact Us
            </CTAButtonLight>
          </div>
        </div>
      </section>
    </>
  );
}
