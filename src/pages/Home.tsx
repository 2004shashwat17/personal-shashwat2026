import { ArrowUpRight, Contact as Linkedin, FileText, GitBranch, Mail, MessagesSquare, Route, Target, TrendingUp, Users } from 'lucide-react'
import { AchievementsGrid, ArrowIcon, CertificationsGrid, ExternalIcon, ResumeCards, SectionHead, Seo, SmartLink } from '../components'
import { experience, featuredProjects, products, site, skillGroups, tools } from '../data'

const mindset = [
  { title: 'Product thinking', copy: 'Understanding the problem, the user and the business before writing a single requirement.' },
  { title: 'Engineering execution', copy: 'APIs, architecture, frontend and backend — enough depth to build it, not just describe it.' },
  { title: 'Growth mindset', copy: 'Measure real usage, learn from it and iterate. Products improve through feedback loops, not assumptions.' },
]

const capabilities = [
  { icon: Target, title: 'Product Strategy', copy: 'Turning business problems into prioritized roadmaps, clear requirements and testable scopes.' },
  { icon: Route, title: 'Execution & Delivery', copy: 'Acceptance criteria, sprint execution, release management and cross-team coordination.' },
  { icon: Users, title: 'User Experience', copy: 'User workflows, edge-case handling and interfaces that respect how people actually work.' },
  { icon: TrendingUp, title: 'Growth & Business Impact', copy: 'Billing and payment flows, reporting, analytics and iteration driven by real usage.' },
  { icon: GitBranch, title: 'Technical Fluency', copy: 'APIs, databases, architecture and cloud — enough depth to build and to review technical work.' },
  { icon: MessagesSquare, title: 'Cross-functional Communication', copy: 'Working across founders, engineers, designers and operations to ship the right thing.' },
]

export function Home() {
  return <>
    <Seo title="Shashwat — Technical Product Manager | Software Engineer" description={site.description} />
    <section className="hero" id="home"><div className="hero-grid">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> TECHNICAL PRODUCT MANAGER <b>•</b> SOFTWARE ENGINEER</p>
        <h1>Product thinking.<br/><span>Engineering execution.</span></h1>
        <p className="hero-lead">I'm Shashwat — a technical product builder who understands both product and engineering. I shape what gets built, then help build it.</p>
        <p className="hero-secondary">Currently building products at <strong>BWays Techno Solution</strong> while pursuing my MBA at <strong>Golden Gate University.</strong></p>
        <div className="hero-actions"><a href="#projects" className="button">Explore Projects <ArrowIcon /></a><a href="#resume" className="button secondary">View Resume <ArrowIcon /></a><SmartLink href={site.linkedin} className="text-link"><Linkedin size={15} /> Connect on LinkedIn</SmartLink></div>
        <div className="hero-note"><span>Product thinking + Engineering execution + Growth mindset</span><span>Open to product & engineering roles</span></div>
      </div>
      <div className="system-visual" aria-label="From product thinking through engineering execution to users">
        <div className="system-glow" /><div className="system-label"><span>PRODUCT × ENGINEERING</span><i>LIVE</i></div>
        <div className="system-track">
          {['Product', 'Design', 'Engineering', 'Ship', 'Users'].map((item, i) => <div className="system-node" key={item}><span>0{i + 1}</span><b>{item}</b>{i < 4 && <i>↓</i>}</div>)}
        </div><div className="system-footer"><span>Build → Measure → Learn</span><span>Iterate ↻</span></div>
      </div>
    </div></section>

    <section className="proof"><div className="proof-label">Products & domains I've worked across</div><div className="proof-items">{products.map(p => <span key={p.slug}>{p.name}<i /></span>)}</div></section>

    <section className="section about-section" id="about"><div className="about-index">01 / ABOUT</div><div className="about-layout"><h2>One builder,<br/><em>both sides of the product.</em></h2><div className="about-copy"><p>I'm a technical product builder who understands both product and engineering — I've never seen them as separate jobs.</p><p>On the product side: strategy, user experience, prioritization and business impact. On the engineering side: APIs, architecture, frontend, backend and shipping to production.</p><p>My work spans SaaS, logistics / WMS, web and mobile products — from dashboards, reports and billing workflows to driver apps, backend services and deployment pipelines.</p><div className="mini-proof"><div><span>Current</span><strong>Product Manager</strong><small>BWays Techno Solution</small></div><div><span>Education</span><strong>MBA Candidate</strong><small>Golden Gate University, USA</small></div></div></div></div>
      <div className="mindset-strip">{mindset.map(m => <div key={m.title}><b>{m.title}</b><p>{m.copy}</p></div>)}</div>
    </section>

    <section className="section" id="experience"><SectionHead eyebrow="02 / EXPERIENCE" title="Built through real product work" copy="Roles across product management and software engineering — in SaaS, logistics and operational technology." />
      <div className="timeline">{experience.map((x, i) => <article key={x.company}><div className="timeline-mark"><span>{String(i + 1).padStart(2, '0')}</span></div><div className="timeline-title"><small>{x.duration}</small><h3>{x.role}</h3><p>{x.company}</p></div><div className="timeline-copy"><p>{x.description}</p><div className="tags">{x.skills.map(s => <span key={s}>{s}</span>)}</div></div></article>)}</div>
    </section>

    <section className="section section-tint" id="projects"><SectionHead eyebrow="03 / FEATURED PROJECTS" title="Designed, built and shipped" copy="Products where product thinking and engineering execution met real users in production." />
      <div className="featured-grid">{featuredProjects.map(p => <article className="project-card" style={{ '--accent': p.accent } as React.CSSProperties} key={p.name}>
        <div className="project-card-head"><span className="project-index">{p.index}</span><h3>{p.name}</h3><span className="project-status"><i />{p.status}</span></div>
        <div className="project-body"><div className="project-main"><p className="project-desc">{p.description}</p><ul className="project-points">{p.highlights.map(h => <li key={h}>{h}</li>)}</ul></div>
          <div className="project-side">{p.metric && <div className="project-metric"><b>{p.metric.value}</b><small>{p.metric.label}</small></div>}
            <div><p className="eyebrow project-stack-label">STACK</p><div className="project-stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div></div>
            {p.url && <SmartLink href={p.url} className="text-link project-link">{p.urlLabel} <ExternalIcon /></SmartLink>}</div>
        </div>
      </article>)}</div>
    </section>

    <section className="section" id="achievements"><SectionHead eyebrow="04 / ACHIEVEMENTS" title="Hackathons, wins and recognition" copy="Competitions, showcases and programs I've taken part in — each card links to the original certificate or document." />
      <AchievementsGrid />
    </section>

    <section className="section section-tint" id="certifications"><SectionHead eyebrow="05 / CERTIFICATIONS" title="Courses and certified skills" copy="Certifications across AI, frontend, backend and software engineering — verifiable through the issuing platforms." />
      <CertificationsGrid />
    </section>

    <section className="section bordered" id="skills"><SectionHead eyebrow="06 / TECHNICAL SKILLS" title="Business + Product + Technology" copy="No proficiency scores—just the capabilities I use and continue to develop through real product work." />
      <div className="skills-grid">{skillGroups.map((group, i) => <article key={group.name}><span className="skill-index">0{i + 1}</span><h3>{group.name}</h3><p>{group.intro}</p><div className="tag-cloud">{group.items.map(x => <span key={x}>{x}</span>)}</div></article>)}</div>
      <div className="tools-row"><div><p className="eyebrow">TOOLS & WORKFLOW</p><h3>Practical, daily toolkit</h3><p>The tools I actually use across product and engineering work.</p></div><div className="tag-cloud tools">{tools.map(x => <span key={x}>{x}</span>)}</div></div>
    </section>

    <section className="section" id="capabilities"><SectionHead eyebrow="07 / PRODUCT & BUSINESS CAPABILITIES" title="What I bring beyond the code" copy="The product and business capabilities I use alongside hands-on engineering." />
      <div className="capability-grid">{capabilities.map(({ icon: Icon, title, copy }) => <article key={title}><Icon size={21} strokeWidth={1.5} aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="section bordered" id="resume"><SectionHead eyebrow="08 / RESUME" title="Choose the resume that fits your role" copy="Different roles highlight different parts of my experience. Choose the version most relevant to the position you're hiring for." />
      <ResumeCards />
    </section>

    <section className="contact" id="contact"><div className="contact-inner"><p className="eyebrow">LET'S CONNECT</p><h2>Hiring for a product<br/><em>or engineering role?</em></h2><p>I'm open to product and engineering opportunities — and always happy to talk about building real products. Pick the resume that fits your role, or reach out directly.</p><div className="contact-links"><SmartLink href={site.linkedin}><Linkedin /> LinkedIn <ArrowUpRight /></SmartLink><SmartLink href={`mailto:${site.email}`}><Mail /> Email <ArrowUpRight /></SmartLink><a href="#resume"><FileText /> Resume <ArrowUpRight /></a></div></div></section>
  </>
}
