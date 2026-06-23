import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Legal Services and Recruitment Solutions in India",
    subtitle:
      "Jurisnexa connects businesses, law firms, professionals, and candidates with reliable legal support and recruitment solutions.",
    description:
      "We provide legal consultation, corporate legal support, compliance guidance, legal recruitment, staffing assistance, and professional hiring support for clients across India.",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1400&q=85",
    ctas: [
      { label: "Explore Services", to: "/our-services" },
      { label: "Book a Consultation", to: "/book-a-consultation" },
    ],
  },
  {
    title: "Hire the Right Legal and Professional Talent",
    subtitle:
      "We help law firms, companies, startups, and organizations find skilled legal, compliance, HR, administrative, and professional candidates.",
    description:
      "From legal associates and paralegals to compliance officers and business support professionals, Jurisnexa helps employers simplify hiring and build capable teams.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    ctas: [
      { label: "Explore Services", to: "/our-services" },
      { label: "Contact Us", to: "/contact-us", outline: true },
    ],
  },
  {
    title: "Professional Legal Guidance for Businesses and Individuals",
    subtitle:
      "Jurisnexa offers practical legal support, documentation assistance, business compliance guidance, employment-related support, and consultation services.",
    description:
      "Our goal is to make legal and recruitment services more accessible, organized, and professional for businesses, professionals, and job seekers in India.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=85",
    ctas: [
      { label: "Book a Consultation", to: "/book-a-consultation" },
      { label: "Contact Us", to: "/contact-us", outline: true },
    ],
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,162,39,0.2),transparent_34%)]" />
      <div className="relative mx-auto grid max-w-screen-2xl items-stretch gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-14">
        <div className="flex min-h-[390px] flex-col justify-center">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {slide.title}
          </h1>
          <p className="mt-4 text-lg font-semibold leading-relaxed text-gold">
            {slide.subtitle}
          </p>
          <p className="mt-4 leading-relaxed text-white/80">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {slide.ctas.map((cta) => (
              <Link
                key={cta.label}
                to={cta.to}
                className={
                  cta.outline
                    ? "rounded-md border-2 border-white px-7 py-3 text-base font-bold transition-colors hover:bg-white hover:text-navy"
                    : "rounded-md bg-gold px-7 py-3 text-base font-bold text-navy transition-colors hover:bg-gold-light"
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative h-full overflow-hidden rounded-lg shadow-2xl">
          <img
            src={slide.image}
            alt=""
            className="h-full min-h-[390px] w-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <button
          type="button"
          onClick={() =>
            setCurrent((c) => (c - 1 + slides.length) % slides.length)
          }
          className="rounded-full bg-white/10 p-2 hover:bg-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-gold" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setCurrent((c) => (c + 1) % slides.length)}
          className="rounded-full bg-white/10 p-2 hover:bg-white/20"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
