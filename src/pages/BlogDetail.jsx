import { Link, useParams } from "react-router-dom";
import { getBlogBySlug } from "../data/blogs";
import { CTAButton, FinalCTA } from "../components/Sections";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-navy">Blog Not Found</h1>
        <Link to="/blogs" className="mt-4 inline-block text-gold hover:underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-slate-100 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link to="/blogs" className="text-base font-medium text-gold hover:underline">
            Back to Blogs
          </Link>
          <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-gold">
            {blog.category}
          </span>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl">
            {blog.title}
          </h1>
          <p className="mt-3 text-base text-slate-muted">{blog.date}</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl overflow-hidden px-4 sm:px-6 lg:px-8">
        <img
          src={blog.image}
          alt=""
          className="h-72 w-full rounded-lg object-cover shadow-xl sm:h-80"
        />
      </div>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-slate-muted">{blog.excerpt}</p>
        {blog.content?.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="mt-6 leading-relaxed text-slate-muted">
            {paragraph}
          </p>
        ))}
        <div className="mt-10 flex flex-wrap gap-4">
          <CTAButton to="/book-a-consultation">Book a Consultation</CTAButton>
          <CTAButton to="/our-services" variant="outline">
            Explore Services
          </CTAButton>
        </div>
      </article>

      <FinalCTA
        title="Need Guidance Beyond the Blog?"
        subtitle="Connect with Jurisnexa for legal support, recruitment assistance, compliance guidance, staffing support, or professional consultation."
        primaryLabel="Book a Consultation"
        primaryTo="/book-a-consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact-us"
      />
    </>
  );
}
