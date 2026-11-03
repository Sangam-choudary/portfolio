"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiPostgresql, SiGit, SiGithub, SiPostman, SiTableau,
  SiAuth0, SiJsonwebtokens,
} from "react-icons/si";
import { VscVscode, VscJson } from "react-icons/vsc";
import {
  TbBrandReactNative, TbBrandOffice, TbChartBar, TbApi, TbPlugConnected,
  TbArrowUp, TbMail, TbPhone, TbCopy, TbCheck, TbMapPin, TbMenu2, TbX,
  TbBriefcase, TbSchool, TbCertificate, TbArrowRight, TbLayoutDashboard,
  TbShieldLock, TbRefresh, TbUsers, TbBox, TbDeviceMobile, TbBug, TbTestPipe,
  TbRocket, TbUsersGroup, TbListCheck, TbLanguage, TbSparkles, TbCode,
  TbDatabase, TbLock, TbForms, TbStack2,
} from "react-icons/tb";

/* ---------------- Technology registry: icon + brand colour ---------------- */
const TECH = {
  "HTML5": [SiHtml5, "#E34F26"],
  "CSS3": [SiCss3, "#3B8EEA"],
  "JavaScript": [SiJavascript, "#F7DF1E"],
  "React.js": [SiReact, "#61DAFB"],
  "Next.js": [SiNextdotjs, "#FFFFFF"],
  "React Native": [TbBrandReactNative, "#61DAFB"],
  "Node.js": [SiNodedotjs, "#6CC24A"],
  "Express.js": [SiExpress, "#FFFFFF"],
  "REST APIs": [TbApi, "#46C2B3"],
  "MongoDB": [SiMongodb, "#47A248"],
  "MySQL": [SiMysql, "#5B9BD5"],
  "PostgreSQL": [SiPostgresql, "#6C8EEF"],
  "Git": [SiGit, "#F05032"],
  "GitHub": [SiGithub, "#FFFFFF"],
  "VS Code": [VscVscode, "#3EA6FF"],
  "Postman": [SiPostman, "#FF6C37"],
  "Microsoft Office": [TbBrandOffice, "#F25022"],
  "Power BI": [TbChartBar, "#F2C811"],
  "Tableau": [SiTableau, "#E97627"],
  "Auth0": [SiAuth0, "#EB5424"],
  "JWT": [SiJsonwebtokens, "#D63AFF"],
  "JSON": [VscJson, "#F5C542"],
  "NetSuite": [TbPlugConnected, "#B3A4CE"],
};

function TechIcon({ name, size = 18 }) {
  const t = TECH[name];
  if (!t) return null;
  const [Icon, color] = t;
  return <Icon size={size} color={color} aria-hidden="true" />;
}

/* ---------------- Content (synced with resume) ---------------- */
const roles = ["Full Stack Developer", "MERN Stack Developer", "Next.js Developer", "React Native Developer"];

const impact = [
  { to: 1.5, dec: 1, suffix: " yrs", lbl: "Full stack development experience" },
  { to: 6, dec: 0, suffix: "", lbl: "Professional & training projects" },
  { to: 3, dec: 0, suffix: "", lbl: "Databases: MongoDB, MySQL, PostgreSQL" },
  { to: 9.0, dec: 1, suffix: "", lbl: "MBA Finance CGPA" },
];

const skillCats = ["All", "Frontend", "Backend", "Databases", "Tools", "Analytics"];
const skills = [
  { n: "HTML5", c: "Frontend" }, { n: "CSS3", c: "Frontend" }, { n: "JavaScript", c: "Frontend", l: "JavaScript (ES6+)" },
  { n: "React.js", c: "Frontend" }, { n: "Next.js", c: "Frontend" }, { n: "React Native", c: "Frontend" },
  { n: "Node.js", c: "Backend" }, { n: "Express.js", c: "Backend" }, { n: "REST APIs", c: "Backend", l: "RESTful APIs" },
  { n: "MongoDB", c: "Databases" }, { n: "MySQL", c: "Databases" }, { n: "PostgreSQL", c: "Databases" },
  { n: "Git", c: "Tools" }, { n: "GitHub", c: "Tools" }, { n: "VS Code", c: "Tools" },
  { n: "Postman", c: "Tools" }, { n: "Microsoft Office", c: "Tools" },
  { n: "Power BI", c: "Analytics" }, { n: "Tableau", c: "Analytics" },
];

const practices = [
  { n: "MERN Stack", i: TbStack2 }, { n: "CRUD Operations", i: TbDatabase }, { n: "API Integration", i: TbApi },
  { n: "Authentication", i: TbLock }, { n: "Form Validation", i: TbForms }, { n: "Debugging", i: TbBug },
  { n: "Testing", i: TbTestPipe }, { n: "Requirement Understanding", i: TbListCheck },
  { n: "Deployment Support", i: TbRocket }, { n: "Team Collaboration", i: TbUsersGroup },
];

const experience = {
  dates: "May 2025 — Oct 2026",
  dur: "1 year 6 months",
  role: "Full Stack Developer",
  org: "Aaxiomcrest Technologies",
  loc: "Hyderabad, India",
  points: [
    "Contributed to full stack application development across user interfaces, backend APIs, databases, testing and deployment support.",
    "Built responsive React.js and Next.js screens and integrated them with REST APIs developed using Node.js and Express.js.",
    "Worked with MongoDB, MySQL and PostgreSQL for data retrieval, updates, CRUD operations and application-level validation.",
    "Participated in requirement discussions, bug fixing, functional testing, code reviews and Git-based collaboration.",
    "Supported authentication, role-based access, internal dashboards and data-sync workflows across multiple business applications.",
  ],
  stack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "Git"],
};

const projects = [
  {
    type: "Professional", year: "2025 – 2026", icon: TbLayoutDashboard,
    title: "Vendor Operations & Availability Dashboard",
    desc: "Internal operations portal to manage vendor records, user access, availability information and administrative workflows for business teams.",
    points: [
      "Developed reusable dashboard components, tables, filters, forms and responsive pages.",
      "Integrated frontend screens with REST APIs for vendor data retrieval and updates.",
      "Supported admin and rights-maintenance workflows by showing actions based on user access.",
      "Worked on validation, error handling, bug fixes and availability-related UI improvements.",
      "Assisted with testing and deployment support for incremental releases.",
    ],
    tags: ["Next.js", "React.js", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "Git"],
  },
  {
    type: "Professional", year: "2026", icon: TbRefresh,
    title: "NetSuite Data Integration & Sync Utility",
    desc: "Integration utility that retrieves record identifiers and updated business records from NetSuite-facing endpoints and makes the data available to internal applications.",
    points: [
      "Assisted in consuming REST endpoints for record IDs and updated-record extraction.",
      "Handled JSON responses and mapped retrieved data to application-friendly structures.",
      "Implemented basic validation and error handling for API response failures and missing fields.",
      "Supported database persistence and verification of synchronized records.",
      "Participated in debugging integration issues and validating data consistency with the team.",
    ],
    tags: ["Node.js", "Express.js", "JavaScript", "REST APIs", "PostgreSQL", "JSON", "Git"],
  },
  {
    type: "Professional", year: "2026", icon: TbShieldLock,
    title: "Authentication & Application Security Enhancement",
    desc: "Security work for internal web applications focused on authentication flow reliability, protected routes and role-based access.",
    points: [
      "Supported Auth0 login integration and authentication configuration in a Next.js application.",
      "Worked on protected UI flows and role-based access checks for application routes.",
      "Assisted in removing obsolete/debug-only access paths and validating secure login behavior.",
      "Tested login, logout and authenticated API flows across development environments.",
      "Documented defects and collaborated with senior developers to resolve authentication issues.",
    ],
    tags: ["Next.js", "React.js", "Auth0", "Node.js", "REST APIs", "Git"],
  },
  {
    type: "Training", year: "MERN Stack", icon: TbUsers,
    title: "Employee Management System",
    desc: "Employee management application for employee records, attendance and role information.",
    points: [
      "Built an employee management application for employee records, attendance and role information.",
      "Created CRUD APIs and connected them to React-based user interfaces.",
      "Implemented JWT-based authentication and basic role-based access.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "CSS3"],
  },
  {
    type: "Training", year: "Next.js + SQL", icon: TbBox,
    title: "Inventory & Billing Application",
    desc: "Product, stock and invoice management workflows with relational database support.",
    points: [
      "Developed product, stock and invoice management workflows with relational database support.",
      "Built reusable UI components and integrated forms with backend APIs.",
      "Worked on validation, SQL queries and basic billing calculations.",
    ],
    tags: ["Next.js", "Node.js", "Express.js", "MySQL", "PostgreSQL"],
  },
  {
    type: "Training", year: "Mobile", icon: TbDeviceMobile,
    title: "Mobile Task & Activity Tracker",
    desc: "Cross-platform mobile application for adding, updating and tracking daily tasks.",
    points: [
      "Created a simple cross-platform mobile application for adding, updating and tracking daily tasks.",
      "Developed reusable mobile UI components and integrated API-based task data.",
      "Practiced state management, navigation, validation and debugging on mobile screens.",
    ],
    tags: ["React Native", "JavaScript", "REST APIs"],
  },
];

const certifications = [
  { n: "Microsoft Office", s: "Certified", tech: "Microsoft Office" },
  { n: "Power BI", s: "Certified", tech: "Power BI" },
  { n: "Tableau", s: "Certified", tech: "Tableau" },
  { n: "GRC Analyst Training", s: "Business Process Review, Risk Management, Internal Controls, Auditing, Cybersecurity, Data Analysis", icon: TbShieldLock },
  { n: "Naandi Foundation (Mahindra Pride)", s: "Umeed session", icon: TbSparkles },
];

const education = [
  { name: "MBA — Finance", inst: "Malla Reddy Institute of Management", year: "2024 – 2026", score: 9.0 },
  { name: "Bachelor's Degree (MPCS)", inst: "Government Degree College for Women, Begumpet (OU)", year: "2020 – 2023", score: 9.2 },
  { name: "Intermediate", inst: "Narayana Junior College, IDPL", year: "2018 – 2020", score: 8.9 },
  { name: "SSC", inst: "Sri Nayaki Model High School", year: "2017 – 2018", score: 8.5 },
];

const orbitInner = ["React.js", "Node.js", "MongoDB", "Express.js"];
const orbitOuter = ["Next.js", "PostgreSQL", "React Native", "MySQL", "JavaScript", "Git"];
const marquee = ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "React Native", "JavaScript", "HTML5", "CSS3", "Git", "GitHub", "Postman", "VS Code", "Auth0", "Power BI", "Tableau"];

const EMAIL = "sangamchoudary25022@gmail.com";
const PHONE = "+91 7396 195 396";
const NAV = ["about", "skills", "experience", "projects", "education", "contact"];

/* ---------------- Small interactive pieces ---------------- */
function useTyping(words) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    let t;
    if (!del && text === w) t = setTimeout(() => setDel(true), 1600);
    else if (del && text === "") { setDel(false); setI((x) => x + 1); }
    else t = setTimeout(() => setText(del ? w.slice(0, text.length - 1) : w.slice(0, text.length + 1)), del ? 40 : 75);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

function Counter({ to, dec, suffix }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1300;
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        setVal(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{val.toFixed(dec)}{suffix}</span>;
}

function spotlight(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

/* ---------------- Page ---------------- */
export default function SangamPortfolio() {
  const typed = useTyping(roles);
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [skillCat, setSkillCat] = useState("All");
  const [projFilter, setProjFilter] = useState("All");
  const [openProj, setOpenProj] = useState(null);
  const [copied, setCopied] = useState(false);
  const [expOpen, setExpOpen] = useState(true);

  // scroll progress + back-to-top
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
      setShowTop(h.scrollTop > 700);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active nav section
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  // reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // modal: esc + scroll lock
  useEffect(() => {
    if (!openProj) return;
    const onKey = (e) => e.key === "Escape" && setOpenProj(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [openProj]);

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL); } catch (e) { /* ignore */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const shownSkills = skillCat === "All" ? skills : skills.filter((s) => s.c === skillCat);
  const shownProjects = projFilter === "All" ? projects : projects.filter((p) => p.type === projFilter);

  return (
    <div className="root">
      <div className="progress" style={{ width: `${progress}%` }} />
      <div className="bg-blob b1" /><div className="bg-blob b2" /><div className="bg-grid" />

      {/* NAV */}
      <nav className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="brand"><span className="logo">SK</span><span>Sangam<span className="dot">.</span></span></a>
          <div className={`navlinks${menuOpen ? " open" : ""}`}>
            {NAV.map((id) => (
              <a key={id} href={`#${id}`} className={active === id ? "on" : ""} onClick={() => setMenuOpen(false)}>
                {id[0].toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
          <a className="nav-cta" href={`mailto:${EMAIL}`}><TbMail size={16} /> Hire me</a>
          <button className="burger" aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <TbX size={22} /> : <TbMenu2 size={22} />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="wrap hero">
        <div className="hero-copy">
          <div className="pill"><span className="pulse" /> Open to Full Stack roles · Hyderabad</div>
          <h1>Hi, I'm <span className="grad">Choudary Sangam Kumari</span></h1>
          <div className="typed">
            <TbCode size={22} color="var(--teal)" />
            <span>{typed}</span><span className="caret">|</span>
          </div>
          <p className="lede">
            1.5 years building and maintaining web applications with React.js, Next.js, Node.js, Express.js,
            MongoDB, MySQL and PostgreSQL — responsive UIs, REST APIs, authentication and internal dashboards.
            An MBA in Finance helps me turn business requirements into practical features.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">View projects <TbArrowRight size={18} /></a>
            <a className="btn ghost" href="#contact">Get in touch</a>
          </div>
          <div className="hero-stack">
            {["React.js", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "React Native"].map((t) => (
              <span key={t} className="mini-chip" data-tip={t}><TechIcon name={t} size={18} /></span>
            ))}
          </div>
        </div>

        <div className="orbit-wrap" aria-hidden="true">
          <div className="orbit outer">
            {orbitOuter.map((t, i) => (
              <div key={t} className="orb" style={{ "--a": `${(360 / orbitOuter.length) * i}deg`, "--r": "var(--ro)" }}>
                <span className="orb-in"><TechIcon name={t} size={24} /></span>
              </div>
            ))}
          </div>
          <div className="orbit inner">
            {orbitInner.map((t, i) => (
              <div key={t} className="orb" style={{ "--a": `${(360 / orbitInner.length) * i + 45}deg`, "--r": "var(--ri)" }}>
                <span className="orb-in"><TechIcon name={t} size={22} /></span>
              </div>
            ))}
          </div>
          <div className="core">
            <div className="core-ring" />
            <div className="core-txt">SK</div>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((t, i) => (
            <span className="mq-item" key={i}><TechIcon name={t} size={20} /> {t}</span>
          ))}
        </div>
      </div>

      {/* IMPACT */}
      <div className="wrap impact reveal">
        {impact.map((it) => (
          <div className="impact-item" key={it.lbl}>
            <div className="num"><Counter to={it.to} dec={it.dec} suffix={it.suffix} /></div>
            <div className="lbl">{it.lbl}</div>
          </div>
        ))}
      </div>

      {/* ABOUT */}
      <section id="about" className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">01 · About</span>
          <h2>Developer with an analyst's eye</h2>
          <p>
            Full Stack Developer experienced in responsive UI development, REST API integration, CRUD workflows,
            authentication, database operations, debugging, testing and deployment support — comfortable in
            team-based environments and translating business requirements into practical application features.
          </p>
        </div>
        <div className="about-grid">
          {[
            { i: TbCode, t: "Build", d: "Responsive React.js & Next.js screens wired to Node.js / Express.js REST APIs." },
            { i: TbDatabase, t: "Data", d: "CRUD operations, validation and data-sync across MongoDB, MySQL and PostgreSQL." },
            { i: TbShieldLock, t: "Secure", d: "Auth0 & JWT authentication, protected routes and role-based access." },
            { i: TbChartBar, t: "Analyse", d: "MBA Finance plus Power BI & Tableau — dashboards that surface the right data." },
          ].map((c, k) => (
            <div className="glass about-card reveal" key={c.t} style={{ transitionDelay: `${k * 80}ms` }} onMouseMove={spotlight}>
              <div className="ic-box"><c.i size={22} /></div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">02 · Skills</span>
          <h2>Tech I work with</h2>
          <p>Filter by category — hover a tile to light it up.</p>
        </div>
        <div className="tabs reveal" role="tablist">
          {skillCats.map((c) => (
            <button key={c} role="tab" aria-selected={skillCat === c} className={`tab${skillCat === c ? " on" : ""}`} onClick={() => setSkillCat(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="skill-grid">
          {shownSkills.map((s, k) => (
            <div key={skillCat + s.n} className="skill-tile pop" style={{ "--c": TECH[s.n][1], animationDelay: `${k * 35}ms` }}>
              <div className="sk-ic"><TechIcon name={s.n} size={34} /></div>
              <div className="sk-name">{s.l || s.n}</div>
              <div className="sk-cat">{s.c}</div>
            </div>
          ))}
        </div>
        <h4 className="sub-head reveal">FULL STACK & CORE PRACTICES</h4>
        <div className="practice-row reveal">
          {practices.map((p) => (
            <span className="practice" key={p.n}><p.i size={16} /> {p.n}</span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">03 · Experience</span>
          <h2>Where I've worked</h2>
        </div>
        <div className="glass exp-card reveal" onMouseMove={spotlight}>
          <div className="exp-top">
            <div className="exp-logo"><TbBriefcase size={26} /></div>
            <div className="exp-main">
              <h3>{experience.role}</h3>
              <div className="exp-org">{experience.org} · <TbMapPin size={14} /> {experience.loc}</div>
            </div>
            <div className="exp-date">
              <div>{experience.dates}</div>
              <span className="dur">{experience.dur}</span>
            </div>
          </div>
          <div className="exp-stack">
            {experience.stack.map((t) => (
              <span className="chip" key={t}><TechIcon name={t} size={15} /> {t}</span>
            ))}
          </div>
          <button className="toggle" onClick={() => setExpOpen((o) => !o)} aria-expanded={expOpen}>
            {expOpen ? "Hide responsibilities" : "Show responsibilities"} <span className={`chev${expOpen ? " up" : ""}`}>⌄</span>
          </button>
          <ul className={`exp-points${expOpen ? " open" : ""}`}>
            {experience.points.map((p) => <li key={p}><TbCheck size={16} className="tick" /> {p}</li>)}
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">04 · Projects</span>
          <h2>Things I've built</h2>
          <p>Professional work on internal business applications, plus training builds across web and mobile. Click a card for details.</p>
        </div>
        <div className="tabs reveal">
          {["All", "Professional", "Training"].map((c) => (
            <button key={c} className={`tab${projFilter === c ? " on" : ""}`} onClick={() => setProjFilter(c)}>
              {c} <span className="count">{c === "All" ? projects.length : projects.filter((p) => p.type === c).length}</span>
            </button>
          ))}
        </div>
        <div className="proj-grid">
          {shownProjects.map((p, k) => (
            <button
              key={projFilter + p.title}
              className="glass proj-card pop"
              style={{ animationDelay: `${k * 70}ms` }}
              onMouseMove={spotlight}
              onClick={() => setOpenProj(p)}
            >
              <div className="proj-top">
                <div className="ic-box"><p.icon size={22} /></div>
                <span className={`badge ${p.type === "Professional" ? "pro" : "trn"}`}>{p.type}</span>
              </div>
              <div className="proj-year">{p.year}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="proj-icons">
                {p.tags.map((t) => <span key={t} className="ti" data-tip={t}><TechIcon name={t} size={18} /></span>)}
              </div>
              <span className="more">View details <TbArrowRight size={16} /></span>
            </button>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">05 · Certifications</span>
          <h2>Certifications & training</h2>
        </div>
        <div className="cert-grid">
          {certifications.map((c, k) => (
            <div className="glass cert reveal" key={c.n} style={{ transitionDelay: `${k * 70}ms` }} onMouseMove={spotlight}>
              <div className="cert-ic">
                {c.tech ? <TechIcon name={c.tech} size={26} /> : <c.icon size={26} color="var(--gold)" />}
              </div>
              <div>
                <div className="cert-n">{c.n}</div>
                <div className="cert-s">{c.s}</div>
              </div>
              <TbCertificate className="cert-bg" size={70} />
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">06 · Education</span>
          <h2>Education</h2>
        </div>
        <div className="edu-list">
          {education.map((e, k) => (
            <div className="edu-row reveal" key={e.name} style={{ transitionDelay: `${k * 70}ms` }}>
              <div className="edu-ic"><TbSchool size={20} /></div>
              <div className="edu-body">
                <div className="edu-name">{e.name}</div>
                <div className="edu-inst">{e.inst}</div>
                <div className="bar"><span style={{ "--w": `${e.score * 10}%` }} /></div>
              </div>
              <div className="edu-meta">
                <div className="cgpa">{e.score.toFixed(1)}<small> CGPA</small></div>
                <div>{e.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="wrap">
        <div className="glass contact reveal">
          <div>
            <span className="kicker">07 · Contact</span>
            <h2>Let's build something <span className="grad">that adds up.</span></h2>
            <p className="lede">Looking for a Full Stack / MERN / Next.js role. Drop a line — I usually reply within a day.</p>
          </div>
          <div className="contact-actions">
            <a className="btn primary" href={`mailto:${EMAIL}`}><TbMail size={18} /> Email me</a>
            <button className="btn ghost" onClick={copyEmail}>
              {copied ? <><TbCheck size={18} /> Copied!</> : <><TbCopy size={18} /> Copy email</>}
            </button>
            <a className="btn ghost" href="tel:+917396195396"><TbPhone size={18} /> {PHONE}</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span><TbMapPin size={15} /> Hyderabad, Telangana</span>
          <span><TbLanguage size={15} /> English · Hindi · Telugu</span>
          <span>© 2026 Choudary Sangam Kumari</span>
        </div>
      </footer>

      <button className={`to-top${showTop ? " show" : ""}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <TbArrowUp size={20} />
      </button>

      <div className={`toast${copied ? " show" : ""}`}><TbCheck size={16} /> Email copied to clipboard</div>

      {/* PROJECT MODAL */}
      {openProj && (
        <div className="modal-bg" onClick={() => setOpenProj(null)}>
          <div className="modal" role="dialog" aria-modal="true" aria-label={openProj.title} onClick={(e) => e.stopPropagation()}>
            <button className="modal-x" aria-label="Close" onClick={() => setOpenProj(null)}><TbX size={20} /></button>
            <div className="proj-top">
              <div className="ic-box"><openProj.icon size={24} /></div>
              <span className={`badge ${openProj.type === "Professional" ? "pro" : "trn"}`}>{openProj.type} · {openProj.year}</span>
            </div>
            <h3>{openProj.title}</h3>
            <p className="modal-desc">{openProj.desc}</p>
            <h4 className="sub-head" style={{ margin: "20px 0 10px" }}>WHAT I DID</h4>
            <ul className="exp-points open">
              {openProj.points.map((p) => <li key={p}><TbCheck size={16} className="tick" /> {p}</li>)}
            </ul>
            <h4 className="sub-head" style={{ margin: "20px 0 10px" }}>TECH STACK</h4>
            <div className="exp-stack">
              {openProj.tags.map((t) => <span className="chip" key={t}><TechIcon name={t} size={15} /> {t}</span>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
