import {
  BadgeCheck,
  Check,
  Search,
  SquareArrowOutUpRight,
  Star,
  Users,
} from "lucide-react";
import { CTAButton, CTAButtonLight } from "../components/Sections";

const supportCards = [
  {
    icon: Search,
    title: "Global Talent Sourcing",
    description:
      "Find candidates across countries and time zones for remote, hybrid, offshore, and local hiring needs in professional service roles.",
  },
  {
    icon: BadgeCheck,
    title: "Screening & Shortlisting",
    description:
      "Review candidate profiles, match skills to role requirements, prepare interview-ready shortlists, and reduce first-round screening time.",
  },
  {
    icon: SquareArrowOutUpRight,
    title: "Candidate Placement Support",
    description:
      "Support job seekers and employers through profile review, opportunity matching, interview coordination, and placement communication.",
  },
  {
    icon: Users,
    title: "Staffing & HR Recruitment",
    description:
      "Hiring assistance for HR, administration, operations, compliance, customer support, office management, and business support teams.",
  },
  {
    icon: Star,
    title: "Professional & Executive Search",
    description:
      "Focused sourcing for senior professionals, managers, consultants, analysts, team leads, specialist roles, and cross-border hiring needs.",
  },
];

const detailSections = [
  {
    title: "Global Talent Sourcing & Role Matching",
    intro:
      "Recruitment support for organisations looking beyond one city or one country. JurisNexa helps define hiring requirements, source suitable candidates, and build practical shortlists for global teams.",

    cardTitle: "Sourcing That Fits the Role",
    body: [
      "We help identify relevant candidates based on experience, communication ability, industry exposure, availability, location preferences, and role expectations.",
      "This approach works for early-stage companies, growing agencies, professional firms, remote teams, and employers building international hiring pipelines.",
    ],
    tags: [
      "Remote roles",
      "Hybrid teams",
      "Offshore hiring",
      "Local market support",
    ],
    imageFirst: true,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Candidate Screening & Interview Coordination",
    intro:
      "Clear screening support for employers who need organised candidate information before committing time to interviews.",

    cardTitle: "From Profile Review to Interview List",
    body: [
      "Our process helps filter applications, verify basic fit, organise CVs, compare skills against the job description, and prepare employer-ready candidate summaries.",
      "The goal is to make hiring decisions easier, faster, and better documented.",
    ],
    tags: [
      "CV review",
      "Candidate summaries",
      "Interview scheduling",
      "Follow-up tracking",
    ],
    imageFirst: false,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Staffing & HR Recruitment",
    intro:
      "Worldwide staffing assistance for companies that need dependable team members for HR, administration, operations, customer support, office coordination, and business support roles.",

    cardTitle: "Roles We Can Help Recruit",
    body: [
      "JurisNexa supports hiring for HR executives, recruiters, admin assistants, operations coordinators, compliance assistants, documentation executives, client support staff, and business development support roles.",
      "Recruitment can be aligned with timezone, language, experience level, working model, and contract or full-time requirements.",
    ],
    tags: [
      "HR roles",
      "Admin support",
      "Operations staff",
      "Compliance support",
    ],
    imageFirst: true,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Professional, Specialist & Executive Search",
    intro:
      "Support for employers seeking experienced professionals, specialist contributors, managers, consultants, analysts, team leads, and senior business support talent across global markets.",

    cardTitle: "Focused Search for Better Fit",
    body: [
      "We help clarify seniority, responsibilities, required skills, compensation expectations, communication standards, and candidate readiness before outreach and screening.",
      "This page can position JurisNexa as a professional hiring partner for global businesses and remote-first teams.",
    ],
    tags: [
      "Senior roles",
      "Specialist talent",
      "Consultants",
      "Management hiring",
    ],
    imageFirst: false,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=85",
  },
];

const processSteps = [
  {
    title: "Define",
    description:
      "We understand the role, location preference, working model, budget, skills, experience level, and hiring timeline.",
  },
  {
    title: "Source",
    description:
      "We search for suitable candidates through targeted channels, networks, referrals, and role-specific outreach.",
  },
  {
    title: "Screen",
    description:
      "We review profiles, prepare shortlists, record notes, compare candidate fit, and coordinate interview availability.",
  },
  {
    title: "Place",
    description:
      "We support follow-ups, offer communication, joining coordination, and final handover for the employer and candidate.",
  },
];

const audience = [
  "Startups and scaleups",
  "Remote-first companies",
  "HR and operations teams",
  "Recruitment agencies",
  "Professional service firms",
  "Global employers",
];

const hiringModels = [
  "Remote hiring",
  "Hybrid roles",
  "On-site staffing",
  "Contract roles",
  "Full-time placement",
  "International shortlists",
];

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-gold" />
      <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-muted">
        {subtitle}
      </p>
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

function DetailSection({ section }) {
  const image = (
    <img
      src={section.image}
      alt=""
      className="h-80 w-full rounded-lg object-cover shadow-sm lg:h-[420px]"
    />
  );
  const card = (
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
        <div className="grid gap-6 lg:grid-cols-[1fr_25rem] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
              {section.title}
            </h2>
            <p className="mt-5 max-w-5xl leading-relaxed text-slate-muted">
              {section.intro}
            </p>
          </div>
        </div>
        <div className="mt-8 grid w-full items-end gap-8 lg:grid-cols-2">
          {section.imageFirst ? (
            <>
              {image}
              {card}
            </>
          ) : (
            <>
              {card}
              {image}
            </>
          )}
        </div>
      </div>
    </section>
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

export default function RecruitmentServices() {
  return (
    <>
      <section className="bg-slate-100 py-14 lg:py-16">
        <div className="grid w-full items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div>
            {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-2 text-base font-bold text-gold">
              <span className="h-2 w-2 rounded-full bg-gold" />
              Worldwide Hiring & Talent Placement
            </div> */}
            <h1 className="text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Recruitment Services for Global Employers
            </h1>
            <p className="mt-6 text-xl font-semibold leading-relaxed text-navy/85">
              JurisNexa helps companies, founders, HR teams, agencies, and
              growing organisations find suitable professionals for remote,
              hybrid, and on-site roles across international markets.
            </p>
            <p className="mt-5 max-w-3xl leading-relaxed text-slate-muted">
              From candidate sourcing to screening, shortlisting, interview
              coordination, and placement communication, our recruitment support
              is designed to save time and improve hiring clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton to="/book-a-consultation">
                Book a Consultation
              </CTAButton>
              <CTAButton to="/contact-us" variant="outline">
                Submit Hiring Need
              </CTAButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=85"
              alt=""
              className="h-80 w-full object-cover sm:h-96 lg:h-[440px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <SectionHeading
            title="Complete Recruitment Support Worldwide"
            subtitle="One dedicated page for international recruitment, staffing assistance, candidate placement, sourcing, screening, and hiring coordination across global markets."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {supportCards.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-transform hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-gold/40 bg-gold/10 text-gold">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold leading-tight text-navy">
                  {title}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-muted">
                  {description}
                </p>
              </div>
            ))}
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
              How JurisNexa Manages Recruitment Support
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              A clear process for global employers, remote teams, agencies, and
              growing organisations that need structured hiring support.
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
            intro="JurisNexa supports employers, agencies, founders, HR teams, professional firms, and growing organisations that need worldwide recruitment assistance."
            items={audience}
          />
          <CheckListCard
            title="Hiring Models Supported"
            intro="Recruitment support can be adapted for different working models, experience levels, and hiring requirements across countries and time zones."
            items={hiringModels}
          />
        </div>
      </section>

      <section className="border-b-4 border-gold bg-navy py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Need Recruitment Support Worldwide?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Book a consultation with JurisNexa to discuss global talent
            sourcing, staffing, candidate placement, interview coordination,
            executive search, or long-term hiring support.
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
