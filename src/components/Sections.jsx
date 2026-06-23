import { Link } from "react-router-dom";

function NavOrAnchor({ to, className, children }) {
  if (to.startsWith("#")) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export function CTAButton({ to, children, variant = "primary" }) {
  const base =
    "inline-block rounded-md px-7 py-3 text-base font-bold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-gold text-navy hover:bg-gold-light"
      : "border-2 border-navy text-navy hover:bg-navy hover:text-white";

  return (
    <NavOrAnchor to={to} className={`${base} ${styles}`}>
      {children}
    </NavOrAnchor>
  );
}

export function CTAButtonLight({ to, children, variant = "primary" }) {
  const base =
    "inline-block rounded-md px-7 py-3 text-base font-bold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-gold text-navy hover:bg-gold-light"
      : "border-2 border-white text-white hover:bg-white hover:text-navy";

  return (
    <NavOrAnchor to={to} className={`${base} ${styles}`}>
      {children}
    </NavOrAnchor>
  );
}

export function FinalCTA({
  title,
  subtitle,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="bg-navy py-14 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CTAButtonLight to={primaryTo}>{primaryLabel}</CTAButtonLight>
          <CTAButtonLight to={secondaryTo} variant="outline">
            {secondaryLabel}
          </CTAButtonLight>
        </div>
      </div>
    </section>
  );
}

export function HeroBanner({
  title,
  subtitle,
  description,
  image,
  ctas = [],
  dark = false,
}) {
  return (
    <section
      className={`py-12 lg:py-14 ${dark ? "bg-navy text-white" : "bg-slate-100"}`}
    >
      <div className="mx-auto grid max-w-screen-2xl items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex min-h-[360px] flex-col justify-center">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-4 text-lg font-semibold leading-relaxed ${dark ? "text-gold" : "text-navy"}`}
            >
              {subtitle}
            </p>
          )}
          {description && (
            <p
              className={`mt-4 leading-relaxed ${dark ? "text-white/80" : "text-slate-muted"}`}
            >
              {description}
            </p>
          )}
          {ctas.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4">
              {ctas.map((cta) =>
                dark ? (
                  <CTAButtonLight
                    key={cta.label}
                    to={cta.to}
                    variant={cta.variant || "primary"}
                  >
                    {cta.label}
                  </CTAButtonLight>
                ) : (
                  <CTAButton
                    key={cta.label}
                    to={cta.to}
                    variant={cta.variant || "primary"}
                  >
                    {cta.label}
                  </CTAButton>
                ),
              )}
            </div>
          )}
        </div>
        <div className="h-full overflow-hidden rounded-lg shadow-2xl">
          <img
            src={image}
            alt=""
            className="h-full min-h-[360px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function ImageTextSection({
  title,
  description,
  image,
  imageLeft = true,
  bullets,
  cta,
  children,
}) {
  const content = (
    <div className="flex flex-col justify-center rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200/70 sm:p-7 lg:p-8">
      <h2 className="text-2xl font-bold leading-tight text-navy sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-relaxed text-slate-muted">{description}</p>
      )}
      {children}
      {bullets && (
        <ul className="mt-4 space-y-2">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-muted">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {cta && (
        <div className="mt-6">
          <CTAButton to={cta.to}>{cta.label}</CTAButton>
        </div>
      )}
    </div>
  );

  const imageBlock = (
    <div className="overflow-hidden rounded-lg shadow-xl">
      <img
        src={image}
        alt=""
        className="h-64 w-full object-cover sm:h-72 lg:h-80"
      />
    </div>
  );

  return (
    <section className="bg-slate-50 py-12 lg:py-14">
      <div className="mx-auto grid max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {imageLeft ? (
          <>
            {imageBlock}
            {content}
          </>
        ) : (
          <>
            {content}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}

export function ProcessSteps({ title, steps }) {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-2xl font-bold text-navy sm:text-3xl">
          {title}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-lg font-bold text-navy">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BenefitBlocks({ title, description, benefits, cta }) {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
          {description && (
            <p className="mt-4 text-slate-muted">{description}</p>
          )}
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="h-full border-l-4 border-gold bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-navy">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-muted">
                {b.description}
              </p>
            </div>
          ))}
        </div>
        {cta && (
          <div className="mt-10 text-center">
            <CTAButton to={cta.to}>{cta.label}</CTAButton>
          </div>
        )}
      </div>
    </section>
  );
}

export function ValueBlocks({ title, description, values }) {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
          {description && (
            <p className="mt-4 text-slate-muted">{description}</p>
          )}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="h-full rounded-lg bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200/70"
            >
              <h3 className="text-lg font-semibold text-navy">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-muted">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
