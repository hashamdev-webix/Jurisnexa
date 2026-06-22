import { Link } from "react-router-dom";

export default function BlogListItem({ blog }) {
  return (
    <article className="grid gap-6 border-b border-slate-200 py-8 last:border-0 sm:grid-cols-[280px_1fr]">
      <div className="overflow-hidden rounded-lg shadow-sm">
        <img
          src={blog.image}
          alt=""
          className="h-48 w-full object-cover sm:h-52"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold">
          {blog.category}
        </span>
        <h3 className="mt-2 text-2xl font-bold text-navy">{blog.title}</h3>
        <p className="mt-3 leading-relaxed text-slate-muted">{blog.excerpt}</p>
        <p className="mt-3 text-sm text-slate-muted">{blog.date}</p>
        <Link
          to={`/blogs/${blog.slug}`}
          className="mt-4 inline-block text-base font-semibold text-navy hover:text-gold"
        >
          Read Blog
        </Link>
      </div>
    </article>
  );
}
