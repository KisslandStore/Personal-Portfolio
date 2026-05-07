import React, { useEffect } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import heroImage from "./assets/hero-digital-portfolio.png";
import founderPortrait from "./assets/founder-portrait.jpg";
import { profile, projects, services, skills, stats, strengths } from "./data/portfolio";

const whatsappLink = `https://wa.me/91${profile.whatsapp}?text=${encodeURIComponent(
  "Hi Lalmawizuala, I found your portfolio and want to discuss a project.",
)}`;

function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  return (
    <Tag className={`reveal ${className}`} style={{ "--reveal-delay": `${delay}ms` }}>
      {children}
    </Tag>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="reveal mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="eyebrow text-cyan">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">{title}</h2>
      {children ? <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/[0.66]">{children}</p> : null}
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}

function Navbar() {
  const items = ["About", "Skills", "Projects", "Services", "Contact"];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-ink/[0.68] backdrop-blur-2xl">
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-8" aria-label="Main navigation">
        <a href="#home" className="group flex items-center gap-3" aria-label={`${profile.name} home`}>
          <span className="hidden text-sm font-black tracking-wide text-white sm:block">{profile.name}</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
        <a href={whatsappLink} className="btn-primary hidden sm:inline-flex" target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          Contact Me
        </a>
      </nav>
      <div className="mobile-nav md:hidden" aria-label="Mobile navigation">
        {items.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="mobile-nav-link">
            {item}
          </a>
        ))}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-36 md:pt-28">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-55"
        loading="eager"
      />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_18%,rgba(69,214,255,0.24),transparent_28%),radial-gradient(circle_at_50%_85%,rgba(255,77,109,0.15),transparent_34%),linear-gradient(90deg,#070816_0%,rgba(7,8,22,0.92)_42%,rgba(7,8,22,0.56)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-ink" />
      <div className="mx-auto grid min-h-[calc(100vh-8.5rem)] max-w-7xl items-center gap-9 px-4 pb-16 sm:px-8 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.02fr_0.78fr] lg:gap-12">
        <div className="hero-copy max-w-3xl py-6 sm:py-10">
          <div className="hero-item mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.07] px-3.5 py-2 text-sm font-semibold text-white/[0.78] shadow-glow backdrop-blur-md sm:mb-7 sm:px-4">
            <Sparkles size={16} className="text-gold" />
            <span>Young digital entrepreneur from Mizoram</span>
          </div>
          <h1 className="hero-item text-balance text-[2.7rem] font-black leading-[0.96] tracking-tight text-white min-[390px]:text-5xl sm:text-7xl lg:text-[5.8rem]">
            {profile.name}
          </h1>
          <p className="hero-item mt-5 max-w-2xl text-lg font-semibold leading-7 text-white/[0.88] sm:mt-6 sm:text-2xl sm:leading-8">{profile.role}</p>
          <p className="hero-item mt-5 max-w-2xl text-base leading-8 text-white/[0.68] sm:text-lg">{profile.intro}</p>
          <div className="hero-item mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a href={whatsappLink} className="btn-primary" target="_blank" rel="noreferrer">
              <MessageCircle size={19} />
              Start a conversation
            </a>
            <a href={`mailto:${profile.email}`} className="btn-secondary">
              <Mail size={19} />
              Email me
            </a>
          </div>
          <div className="hero-item mt-8 grid gap-3 text-sm text-white/[0.64] sm:mt-9 sm:flex sm:flex-wrap sm:items-center sm:gap-5">
            <span className="inline-flex items-center gap-2">
              <MapPin size={17} className="shrink-0 text-ruby" />
              {profile.location}
            </span>
            <a className="inline-flex min-w-0 items-center gap-2 transition hover:text-white" href={profile.website} target="_blank" rel="noreferrer">
              <Globe2 size={17} className="shrink-0 text-cyan" />
              {profile.websiteLabel}
            </a>
          </div>
          <div className="mt-8 grid gap-3 min-[390px]:grid-cols-3 sm:mt-9">
            {stats.map((item, index) => (
              <div key={item.label} className="hero-item rounded-2xl border border-white/[0.1] bg-white/[0.055] px-4 py-3 backdrop-blur-md" style={{ "--hero-delay": `${520 + index * 90}ms` }}>
                <p className="text-xl font-black text-white">{item.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/[0.46]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <GlassCard className="hero-card relative mx-auto w-full max-w-md overflow-hidden p-3 sm:p-5 lg:ml-auto">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ruby via-gold to-cyan" />
          <div className="absolute -right-16 -top-16 size-40 rounded-full bg-cyan/[0.16] blur-3xl" />
          <div className="mb-3 flex items-center gap-3 rounded-[1.2rem] border border-white/[0.1] bg-white/[0.06] p-3 sm:mb-4 sm:gap-4 sm:rounded-[1.35rem]">
            <img
              src={founderPortrait}
              alt={`${profile.name}, founder of Kissland Store and Kissland Solutions`}
              className="size-16 rounded-2xl border border-white/[0.16] object-cover object-[50%_55%] grayscale"
              loading="eager"
            />
            <div className="min-w-0">
              <p className="text-sm font-black text-white">{profile.name}</p>
              <p className="mt-1 text-xs font-semibold leading-5 text-white/[0.58]">
                Founder from Aizawl, Mizoram
              </p>
            </div>
          </div>
          <div className="rounded-[1.2rem] border border-white/[0.1] bg-ink/[0.76] p-4 sm:rounded-[1.35rem] sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-semibold text-white/[0.52]">Featured business</p>
                <h2 className="mt-1 text-2xl font-black tracking-tight text-white">Kissland Store</h2>
              </div>
              <div className="grid size-12 place-items-center rounded-2xl bg-white text-ink">
                <Rocket size={25} />
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/[0.62]">
              A Mobile Legends diamond recharge business built on fast service, clear updates, and reliable customer support.
            </p>
            <div className="grid grid-cols-2 gap-2.5 py-5 sm:gap-3 sm:py-6">
              {["Instant recharge", "24/7 support", "Since 2022", "Mobile-first"].map((label) => (
                <div key={label} className="rounded-2xl border border-white/[0.1] bg-white/[0.055] p-3 transition group-hover:bg-white/[0.075] sm:p-4">
                  <ShieldCheck className="mb-3 text-gold" size={18} />
                  <p className="text-sm font-black leading-5 text-white">{label}</p>
                </div>
              ))}
            </div>
            <a href={profile.website} className="btn-primary w-full justify-center rounded-2xl" target="_blank" rel="noreferrer">
              Visit store
              <ArrowUpRight size={18} />
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:gap-8 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <p className="eyebrow text-ruby">About me</p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            I build digital ideas that are simple, useful, and ready for real customers.
          </h2>
        </Reveal>
        <Reveal delay={120}>
        <GlassCard className="overflow-hidden p-0">
          <div className="grid gap-0 md:grid-cols-[0.42fr_0.58fr]">
            <div className="relative min-h-64 overflow-hidden border-b border-white/[0.1] bg-white/[0.04] sm:min-h-72 md:border-b-0 md:border-r">
              <img
                src={founderPortrait}
                alt={`${profile.name} portrait`}
                className="h-full min-h-64 w-full object-cover object-[50%_58%] grayscale sm:min-h-72"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/[0.65] via-transparent to-transparent" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-lg leading-8 text-white/[0.76]">
                I am {profile.name}, a young digital entrepreneur from {profile.location}. I founded Kissland Store and
                Kissland Solutions, and I enjoy building websites, service pages, and online business ideas that solve
                practical problems.
              </p>
              <p className="mt-5 text-base leading-8 text-white/[0.62]">
                My focus is simple: make the business look trustworthy, make the service easy to understand, and make it
                easy for customers to contact, order, or get support.
              </p>
            </div>
          </div>
        </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-band section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader eyebrow="Skills" title="Practical skills for digital businesses">
          Skills I use to turn small digital ideas into clear, usable online services.
        </SectionHeader>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div key={skill} className="reveal skill-pill" style={{ "--reveal-delay": `${index * 55}ms` }}>
              <Code2 size={18} className="text-cyan" />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader eyebrow="Projects" title="Brands and projects I am building">
          These projects reflect the kind of work I care about: useful websites, fast service, and better customer experience.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.name} className="reveal project-card group" style={{ "--reveal-delay": `${index * 90}ms` }}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${project.color} p-px shadow-glow`}>
                  <span className="grid h-full w-full place-items-center rounded-2xl bg-ink/[0.82] text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                <span className="max-w-full rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-white/[0.72]">
                  {project.since}
                </span>
              </div>
              <div className={`mt-5 h-1 rounded-full bg-gradient-to-r ${project.color}`} />
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/[0.46]">{project.type}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">{project.name}</h3>
                </div>
              </div>
              <p className="mt-5 leading-7 text-white/[0.64] md:min-h-20">{project.summary}</p>
              <div className="mt-6 grid gap-3">
                {project.points.map((point) => (
                  <span key={point} className="inline-flex items-center gap-3 text-sm font-semibold text-white/[0.78]">
                    <CheckCircle2 size={17} className="text-gold" />
                    {point}
                  </span>
                ))}
              </div>
              {project.url ? (
                <a href={project.url} className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan/[0.28] px-4 py-2.5 font-bold text-cyan transition hover:border-cyan/70 hover:bg-cyan/[0.08] group-hover:text-white" target="_blank" rel="noreferrer">
                  Open website
                  <ArrowUpRight size={18} />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-band section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader eyebrow="Services" title="What I can help build">
          Practical website and service support for businesses that want to look professional and serve customers better.
        </SectionHeader>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service} delay={index * 70}>
            <GlassCard className="p-5 transition duration-300 hover:-translate-y-1 hover:border-white/[0.24] sm:p-6">
              <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-white to-gold text-ink">
                <Zap size={21} />
              </div>
              <p className="text-lg font-bold text-white">{service}</p>
              <p className="mt-3 text-sm leading-6 text-white/55">Service {String(index + 1).padStart(2, "0")}</p>
            </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyWork() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader eyebrow="Why work with me" title="Simple, reliable, and business-focused">
          I care about clean design, but I also care about the real work behind it: trust, speed, support, and clear communication.
        </SectionHeader>
        <div className="grid gap-5 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <Reveal key={item} delay={index * 90}>
            <GlassCard className="p-6">
              <BadgeCheck className="mb-5 text-gold" size={30} />
              <p className="text-base leading-7 text-white/[0.72]">{item}</p>
            </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="reveal relative overflow-hidden rounded-[1.5rem] border border-white/[0.12] bg-white/[0.08] p-5 shadow-glow backdrop-blur-xl sm:rounded-[2rem] sm:p-10 lg:p-12">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ruby via-gold via-violet to-cyan" />
          <div className="absolute -right-24 -top-24 size-56 rounded-full bg-violet/[0.16] blur-3xl" />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="eyebrow text-gold">Contact</p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">Let us build something useful and professional.</h2>
              <p className="mt-5 text-base leading-8 text-white/[0.64]">
                Message me for business websites, recharge pages, online service ideas, or MLBB dealer website templates.
              </p>
            </div>
            <div className="grid min-w-0 gap-3">
              <a href={whatsappLink} className="btn-primary justify-center" target="_blank" rel="noreferrer">
                <MessageCircle size={19} />
                <span>WhatsApp {profile.whatsapp}</span>
              </a>
              <a href={`mailto:${profile.email}`} className="btn-secondary justify-center break-all">
                <Mail size={19} />
                <span>{profile.email}</span>
              </a>
              <a href={profile.website} className="btn-ghost justify-center break-all" target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={19} />
                <span>{profile.websiteLabel}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-center text-sm leading-6 text-white/50 sm:px-8">
      <p>© {new Date().getFullYear()} {profile.name}. Built for modern digital services.</p>
    </footer>
  );
}

export default function App() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-ink text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <WhyWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
