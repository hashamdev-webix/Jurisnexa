import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/our-services", label: "Our Services" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-xl shadow-navy/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.PNG"
            alt="Jurisnexa Logo"
            className="h-16 w-auto rounded-sm object-contain sm:h-24"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => window.scrollTo(0, 0)}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-base font-semibold transition-colors hover:text-gold ${
                  isActive ? "text-gold" : "text-white/90"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/book-a-consultation"
            className="rounded-md bg-gold px-6 py-3 text-base font-bold text-navy transition-colors hover:bg-gold-light"
          >
            Book a Consultation
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy-light px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-gold/20 text-gold"
                      : "text-white/90 hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/book-a-consultation"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-gold px-4 py-3 text-center text-base font-bold text-navy"
            >
              Book a Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
