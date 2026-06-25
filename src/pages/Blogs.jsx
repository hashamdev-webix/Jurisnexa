import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeroBanner, ImageTextSection, FinalCTA } from "../components/Sections";
import BlogListItem from "../components/BlogListItem";
import { blogs, blogCategories } from "../data/blogs";

const topicAreas = [
  "Legal consultation and legal awareness",
  "Corporate legal support and documentation",
  "Compliance and workplace policy guidance",
  "Legal recruitment and law firm hiring",
  "Staffing and HR recruitment tips",
  "Candidate placement and career preparation",
  "Employment advisory and HR documentation",
  "Business documentation and professional consultation",
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All Blogs");
  const navigate = useNavigate();
  const featured = blogs.find((b) => b.featured);
  const listBlogs = blogs.filter((b) => !b.featured);

  const filtered =
    activeCategory === "All Blogs"
      ? listBlogs
      : listBlogs.filter((b) => b.category === activeCategory);

  return (
    <>
      <HeroBanner
        title="Legal, Recruitment and Career Insights"
        subtitle="Explore helpful articles from Jurisnexa on legal awareness, business documentation, compliance support, recruitment trends, legal hiring, staffing solutions, and career guidance in India."
        description="Our blogs are created to help businesses, law firms, HR teams, professionals, candidates, and job seekers understand important legal, hiring, and workplace topics in a clear and practical way."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85"
        ctas={[
          { label: "Explore Services", to: "/paralegal-services" },
          { label: "Book a Consultation", to: "/book-a-consultation" },
        ]}
      />

      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Knowledge That Helps You Make Better Decisions
          </h2>
          <p className="mt-4 text-slate-muted">
            The Jurisnexa blog is designed to provide practical information for
            clients who need legal support, recruitment assistance, staffing
            guidance, compliance awareness, employment documentation support,
            and career direction. The blog section helps visitors understand
            Jurisnexa's expertise while improving website SEO through useful
            legal, recruitment, and career content focused on India.
          </p>
        </div>
      </section>

      {featured && (
        <section className="bg-slate-50 py-14">
          <div className="grid w-full items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src={featured.image}
                alt=""
                className="h-64 w-full object-cover sm:h-72 lg:h-80"
              />
            </div>
            <div className="flex flex-col justify-center rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200/70 sm:p-7 lg:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                Featured Blog
              </span>
              <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-muted">
                {featured.excerpt}
              </p>
              <p className="mt-3 text-base text-slate-muted">
                {featured.category} / {featured.date}
              </p>
              <p
                onClick={() => {
                  navigate(`/blogs/${featured.slug}`);

                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "instant",
                    });
                  }, 100);
                }}
                className="mt-7 inline-block rounded-md bg-gold px-7 py-3 text-base font-bold text-navy hover:bg-gold-light"
              >
                Read Blog
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <h2 className="text-2xl font-bold text-navy">Explore Blog Topics</h2>
          <p className="mt-2 text-base text-slate-muted">
            Browse blogs by topic depending on whether you are looking for legal
            guidance, recruitment information, compliance support, employer
            resources, or career advice.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-base font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-navy text-white"
                    : "bg-slate-100 text-navy hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <h2 className="mb-6 text-2xl font-bold text-navy">Latest Articles</h2>
          {filtered.length > 0 ? (
            filtered.map((blog) => <BlogListItem key={blog.slug} blog={blog} />)
          ) : (
            <p className="text-slate-muted">
              No articles in this category yet.
            </p>
          )}
        </div>
      </section>

      <ImageTextSection
        title="Topics We Cover"
        description="Jurisnexa blogs are written to educate visitors, build trust, and support SEO for legal, recruitment, compliance, hiring, staffing, and career search terms in India."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85"
        imageLeft={false}
        bullets={topicAreas}
        cta={{ label: "Explore Services", to: "/paralegal-services" }}
      />

      <FinalCTA
        title="Need Guidance Beyond the Blog?"
        subtitle="If you need legal support, recruitment assistance, compliance guidance, staffing support, candidate placement, or professional consultation, connect with Jurisnexa for the next step."
        primaryLabel="Book a Consultation"
        primaryTo="/book-a-consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact-us"
      />
    </>
  );
}
