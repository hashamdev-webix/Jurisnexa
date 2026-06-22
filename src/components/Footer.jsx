import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/our-services", label: "Our Services" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact-us", label: "Contact Us" },
  { to: "/book-a-consultation", label: "Book a Consultation" },
];

const serviceLinks = [
  "Legal Consultation",
  "Corporate Legal Support",
  "Compliance Assistance",
  "Legal Recruitment",
  "Staffing Solutions",
  "Candidate Placement",
  "Employment Advisory",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img
              src="/logo.jpeg"
              alt="Jurisnexa Logo"
              className="mb-5 h-20 w-auto rounded-sm object-contain"
            />
            <p className="leading-relaxed text-white/75">
              Jurisnexa is a law and recruitment agency in India offering legal
              consultation, corporate legal support, compliance guidance, legal
              recruitment, staffing solutions, candidate placement, and
              professional advisory services.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-base text-white/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-gold">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/our-services"
                    className="text-base text-white/75 transition-colors hover:text-gold"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-gold">
              Contact Details
            </h3>
            <ul className="space-y-2 text-base text-white/75">
              <li>
                Email:{" "}
                <a href="mailto:info@jurisnexa.org" className="hover:text-gold">
                  info@jurisnexa.org
                </a>
              </li>
              <li>Location: India</li>
              <li>
                Website:{" "}
                <a href="https://www.jurisnexa.org" className="hover:text-gold">
                  www.jurisnexa.org
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="text-base text-white/75 hover:text-gold"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="#"
                className="text-base text-white/75 hover:text-gold"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-base text-white/75 hover:text-gold"
                aria-label="X"
              >
                X
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-base text-white/60">
          © 2026 Jurisnexa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
