import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact-us", label: "Contact Us" },
];

const serviceLinks = [
  { to: "/paralegal-services", label: "Paralegal Services" },
  { to: "/recruitment-services", label: "Recruitment Services" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-xl shadow-navy/20">
      <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={closeMenus}
        >
          <img
            src="/logo.PNG"
            alt="Jurisnexa Logo"
            className="h-24 w-auto rounded-sm object-contain sm:h-36 lg:h-40"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.slice(0, 2).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => {
                window.scrollTo(0, 0);
                setServicesOpen(false);
              }}
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
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((current) => !current)}
              className={`flex items-center gap-1 text-base font-semibold transition-colors hover:text-gold ${
                servicesOpen ? "text-gold" : "text-white/90"
              }`}
              aria-expanded={servicesOpen}
            >
              Our Services
              <ChevronDown size={16} aria-hidden="true" />
            </button>
            <div
              className={`absolute left-1/2 top-full min-w-64 -translate-x-1/2 pt-3 transition ${
                servicesOpen
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              }`}
            >
              <div className="rounded-lg border border-slate-200 bg-white p-2 text-navy shadow-xl">
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      setServicesOpen(false);
                    }}
                    className={({ isActive }) =>
                      `block rounded-md px-4 py-3 text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-gold/20 text-gold"
                          : "text-navy hover:bg-gold/15 hover:text-gold"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => {
                window.scrollTo(0, 0);
                setServicesOpen(false);
              }}
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
            {navLinks.slice(0, 2).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenus}
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
            <div className="rounded-md bg-white/5 p-2">
              <p className="px-3 py-2 text-sm font-semibold text-gold">
                Our Services
              </p>
              {serviceLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-sm font-medium ${
                      isActive
                        ? "bg-gold/20 text-gold"
                        : "text-white/90 hover:bg-white/5"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            {navLinks.slice(2).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenus}
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
              onClick={closeMenus}
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
