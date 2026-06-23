export const blogCategories = [
  "All Blogs",
  "Legal Insights",
  "Recruitment",
  "Compliance",
  "Employment Advisory",
  "Career Guidance",
  "Business Documentation",
  "Hiring Tips",
];

export const blogs = [
  {
    slug: "legal-recruitment-support-india",
    category: "Legal and Recruitment Insights",
    title:
      "Why Legal and Recruitment Support Matters for Growing Businesses in India",
    excerpt:
      "Businesses today need more than basic hiring or basic documentation. They need reliable legal guidance, proper compliance awareness, structured hiring support, and professional staffing solutions. Jurisnexa helps businesses, law firms, startups, HR teams, and professionals access both legal and recruitment support under one platform.",
    date: "January 2026",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    content: [
      "Growing businesses in India face increasing pressure to stay legally compliant while building capable teams. Legal documentation, employment processes, and hiring decisions all require structured support.",
      "Jurisnexa helps businesses access both legal guidance and recruitment assistance under one professional platform. This combined approach saves time, reduces confusion, and helps organizations move forward with clarity.",
      "Whether you need corporate legal support, compliance coordination, legal hiring, or staffing solutions, having a trusted partner makes the process more organized and reliable.",
    ],
  },
  {
    slug: "basic-legal-documentation-indian-businesses",
    category: "Legal Insights",
    title: "Understanding Basic Legal Documentation for Indian Businesses",
    excerpt:
      "Legal documentation helps businesses operate with clarity and reduce future confusion. This article explains common documents such as contracts, agreements, internal policies, offer letters, appointment letters, and basic business records.",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1635859890085-ec8cb5466806?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fExlZ2FsJTIwZG9jdW1lbnRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    content: [
      "Every Indian business relies on documentation to define relationships, protect interests, and maintain organized operations. Contracts, agreements, and internal policies form the foundation of professional business management.",
      "Offer letters and appointment letters help establish clear employment terms. Business records and compliance documents support audits, reviews, and day-to-day decision-making.",
      "Jurisnexa assists businesses with documentation support, review coordination, and practical guidance so clients can manage legal paperwork with confidence.",
    ],
  },
  {
    slug: "law-firm-legal-hiring-india",
    category: "Recruitment",
    title: "How Law Firms Can Hire the Right Legal Talent in India",
    excerpt:
      "Hiring legal professionals requires more than reviewing resumes. Law firms need to assess legal knowledge, communication skills, drafting ability, professional ethics, and long-term role suitability.",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85",
    content: [
      "Law firms in India need legal professionals who combine technical knowledge with practical communication and drafting skills. A structured hiring process helps identify candidates who fit both role requirements and firm culture.",
      "Effective legal recruitment involves clear role definition, targeted screening, interview coordination, and assessment of professional ethics and long-term suitability.",
      "Jurisnexa supports law firms with legal recruitment services including candidate sourcing, shortlisting, and hiring process assistance.",
    ],
  },
  {
    slug: "compliance-awareness-startups-smes-india",
    category: "Compliance",
    title: "Why Compliance Awareness Is Important for Startups and SMEs",
    excerpt:
      "Startups and small businesses often focus on growth but overlook compliance, documentation, workplace policies, and employment processes. A structured approach helps businesses stay organized and reduce avoidable risks.",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=900&q=85",
    content: [
      "Startups and SMEs in India often prioritize growth while compliance and documentation take a back seat. This can create avoidable risks related to employment, policies, and business records.",
      "A structured compliance approach includes organized documentation, workplace policies, employment processes, and regular review of business requirements.",
      "Jurisnexa provides compliance and documentation assistance to help growing businesses stay organized and professional.",
    ],
  },
  {
    slug: "legal-compliance-career-tips-india",
    category: "Career Guidance",
    title: "Career Tips for Legal and Compliance Professionals in India",
    excerpt:
      "Legal and compliance professionals can improve career opportunities by strengthening drafting skills, research ability, communication, practical business understanding, and interview preparation.",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=85",
    content: [
      "Legal and compliance professionals in India can strengthen their careers by developing practical skills beyond academic qualifications. Drafting ability, research skills, and clear communication are highly valued.",
      "Understanding business operations and preparing thoroughly for interviews can significantly improve placement outcomes.",
      "Jurisnexa supports candidates with profile review, career guidance, and candidate placement services across legal, compliance, HR, and business support roles.",
    ],
  },
  {
    slug: "important-employment-documents-india",
    category: "Employment Advisory",
    title: "Important Employment Documents Every Business Should Organize",
    excerpt:
      "Employment documents such as offer letters, appointment letters, policies, role descriptions, confidentiality terms, and employee records help create a more organized workplace.",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
    content: [
      "Organized employment documentation creates clarity for both employers and employees. Offer letters, appointment letters, and workplace policies define expectations and protect all parties.",
      "Role descriptions, confidentiality terms, and employee records support HR processes, compliance reviews, and professional workplace management.",
      "Jurisnexa provides employment and business advisory support to help companies manage workplace documentation effectively.",
    ],
  },
  {
    slug: "shortlist-better-candidates-india",
    category: "Hiring Tips",
    title: "How Employers Can Shortlist Better Candidates",
    excerpt:
      "A good shortlisting process saves time and improves hiring quality. Employers should define role requirements clearly, screen for relevant experience, review communication ability, and align candidates with the company's needs.",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
    content: [
      "Effective shortlisting begins with a clear definition of role requirements, skills, and experience. Employers who invest time upfront save significant effort during interviews and onboarding.",
      "Screening for relevant experience, communication ability, and alignment with company needs improves hiring quality and reduces turnover.",
      "Jurisnexa helps employers with staffing and HR recruitment support including requirement discussion, candidate sourcing, and shortlisting assistance.",
    ],
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug);
}
