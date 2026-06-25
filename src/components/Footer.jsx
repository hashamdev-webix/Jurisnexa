import { Link } from "react-router-dom";
import { Globe2, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/paralegal-services", label: "Paralegal Services" },
  { to: "/recruitment-services", label: "Recruitment Services" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact-us", label: "Contact Us" },
  { to: "/book-a-consultation", label: "Book a Consultation" },
];

const serviceLinks = [
  { to: "/paralegal-services", label: "Paralegal Consultation" },
  { to: "/paralegal-services", label: "Corporate Paralegal Support" },
  { to: "/paralegal-services", label: "Compliance Assistance" },
  { to: "/paralegal-services", label: "Contract Support" },
  { to: "/paralegal-services", label: "HR Documentation" },
  { to: "/paralegal-services", label: "Matter File Support" },
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-gold bg-navy text-white">
      <div className="w-full px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img
              src="/logo.PNG"
              alt="Jurisnexa Logo"
              className="h-20 w-auto rounded-sm object-contain sm:h-32 lg:h-36"
            />
            <p className="leading-relaxed text-white/75">
              Jurisnexa is a paralegal and recruitment support platform in
              India offering documentation support, compliance coordination,
              staffing assistance, candidate placement, and professional
              advisory services.
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
                <li key={service.label}>
                  <Link
                    to={service.to}
                    className="text-base text-white/75 transition-colors hover:text-gold"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-gold">
              Contact Details
            </h3>
            <ul className="space-y-4 text-base text-white/75">
              <li className="flex items-center gap-3">
                <MapPin
                  size={20}
                  className="shrink-0 text-gold"
                  aria-hidden="true"
                />
                <span>India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="shrink-0 text-gold"
                  aria-hidden="true"
                />
                <a href="mailto:info@jurisnexa.org" className="hover:text-gold">
                  info@jurisnexa.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe2
                  size={20}
                  className="shrink-0 text-gold"
                  aria-hidden="true"
                />
                <a href="https://www.jurisnexa.org" className="hover:text-gold">
                  www.jurisnexa.org
                </a>
              </li>
            </ul>

            <div className="mt-4 flex gap-4">
              <a href="#" className="text-white/75 hover:text-gold">
                <FaFacebookF size={20} />
              </a>

              <a href="#" className="text-white/75 hover:text-gold">
                <FaInstagram size={20} />
              </a>

              <a href="#" className="text-white/75 hover:text-gold">
                <FaXTwitter size={20} />
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
