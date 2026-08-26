import { ArrowUpRight, Boxes, BriefcaseBusiness, Code2, Contact as Linkedin, Download, GitFork as Github, Globe2, Mail, PackageSearch, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArrowIcon, ExternalIcon, MediaPlaceholder, SectionHead, Seo, SmartLink, VerifiedPlaceholder, VideoCard } from '../components'
import { achievements, articles, certifications, education, experience, journey, products, repositories, site, skillGroups, socialPosts, tools, videos } from '../data'

const buildAreas = [
  { icon: BriefcaseBusiness, title: 'Product Management', copy: 'Requirements, roadmaps, prioritization and cross-functional product delivery.' },
  { icon: Boxes, title: 'SaaS Products', copy: 'Customer-focused workflows, MVP thinking and continuous product iteration.' },
  { icon: PackageSearch, title: 'Logistics / WMS', copy: 'Operational systems grounded in warehouse, inventory and delivery realities.' },
  { icon: Code2, title: 'Web / Mobile', copy: 'Technical understanding that improves decisions and engineering collaboration.' },
  { icon: Sparkles, title: 'AI / Technology', copy: 'Exploring practical applications of emerging technology in useful products.' },
]

export function Home() {
  return <>
    <Seo title="Shashwat — Product Manager & Product Builder" description={site.description} />
    <section className="hero" id="home"><div className="hero-grid">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> PRODUCT MANAGER <b>•</b> PRODUCT BUILDER</p>
        <h1>Product Manager.<br/><span>Product Builder.</span></h1>
        <p className="hero-lead">I build and work on real-world products across SaaS, logistics, WMS, web, mobile and emerging technology.</p>
        <p className="hero-secondary">Currently building products at <strong>BWays Techno Solution</strong> while pursuing my MBA at <strong>Golden Gate University.</strong></p>
        <div className="hero-actions"><a href="#work" className="button">Explore My Work <ArrowIcon /></a><SmartLink href={site.linkedin} className="button secondary"><Linkedin size={16} /> Connect on LinkedIn</SmartLink><Link to="/resume" className="text-link">View Resume <ArrowIcon /></Link></div>
        <div className="hero-note"><span>Based in a global mindset</span><span>Open to conversations worldwide</span></div>
      </div>
      <div className="system-visual" aria-label="From business context through product development to users">
        <div className="system-glow" /><div className="system-label"><span>THE PRODUCT SYSTEM</span><i>LIVE</i></div>
        <div className="system-track">
          {['Business', 'Product', 'Design', 'Engineering', 'Users'].map((item, i) => <div className="system-node" key={item}><span>0{i + 1}</span><b>{item}</b>{i < 4 && <i>↓</i>}</div>)}
        </div><div className="system-footer"><span>Problem → Product → Outcome</span><span>Iterate ↻</span></div>
      </div>
    </div></section>

    <section className="proof"><div className="proof-label">Products & domains I've worked across</div><div className="proof-items">{products.map(p => <span key={p.slug}>{p.name}<i /></span>)}</div></section>

    <section className="section about-section" id="about"><div className="about-index">01 / ABOUT</div><div className="about-layout"><h2>Building products,<br/><em>not just features.</em></h2><div className="about-copy"><p>I'm a Product Manager and Product Builder working at the intersection of business, technology and real-world operations.</p><p>My experience spans SaaS, logistics, WMS, web, mobile and software products.</p><p>I've worked closely with business requirements, product workflows, engineering, testing and product delivery — while also building products of my own.</p><p>I'm particularly interested in understanding real problems, turning them into practical product solutions, and continuously learning from the people who use them.</p><div className="mini-proof"><div><span>Current</span><strong>Product Manager</strong><small>BWays Techno Solution</small></div><div><span>Education</span><strong>MBA Candidate</strong><small>Golden Gate University, USA</small></div></div></div></div></section>

    <section className="section bordered" id="build"><SectionHead eyebrow="02 / WHAT I BUILD" title="Business context. Product clarity. Technical execution." copy="I work across the product lifecycle—from understanding an operational problem to collaborating on a product that can ship." />
      <div className="build-grid">{buildAreas.map(({ icon: Icon, title, copy }, i) => <article key={title}><span className="card-number">0{i + 1}</span><Icon size={22} strokeWidth={1.5}/><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <div className="process-line">{['Business problem', 'Requirements', 'Workflow', 'Build', 'Test', 'Launch', 'Learn'].map((x, i) => <span key={x}><b>{String(i + 1).padStart(2, '0')}</b>{x}</span>)}</div>
    </section>

    <section className="section" id="work"><SectionHead eyebrow="03 / SELECTED WORK" title="Products I've helped build" copy="A selection of products and domains where product thinking meets real-world execution." action={<span className="availability"><i /> Case studies available</span>} />
      <div className="products-grid">{products.slice(0, 4).map((p, i) => <article className={`product-card product-${i + 1}`} key={p.slug}>
        <div className="product-meta"><span>{p.index}</span><span>{p.category}</span></div><MediaPlaceholder label={p.name} accent={p.accent}/>
        <div className="product-copy"><div><h3>{p.name}</h3><p>{p.description}</p></div><Link to={`/work/${p.slug}`} className="circle-link" aria-label={`View ${p.name} case study`}><ArrowUpRight /></Link></div>
        <div className="tags">{p.focus.map(x => <span key={x}>{x}</span>)}</div>
      </article>)}</div>
      <Link to="/work/logistics-wms" className="domain-feature"><div><p className="eyebrow">DOMAIN CASE STUDY</p><h3>Logistics / WMS</h3><p>Warehouse workflows, inventory, delivery operations, route planning, business rules and real-world edge cases.</p></div><div className="domain-map"><span>Warehouse</span><i>→</i><span>Inventory</span><i>→</i><span>Delivery</span><i>→</i><span>Operations</span></div><ArrowIcon /></Link>
    </section>

    <section className="section section-tint" id="thinking"><SectionHead eyebrow="04 / PRODUCT THINKING" title="How I think about products" copy="Notes from working between business context, operational reality and engineering execution." />
      <div className="article-grid">{articles.map((a, i) => <Link to={`/thinking/${a.slug}`} className="article-card" key={a.slug}><div className="article-visual"><span>0{i + 1}</span><div>{['Context', 'Clarity', 'Decision'].map(x => <i key={x}>{x}</i>)}</div></div><small>{a.category} · {a.date}</small><h3>{a.title}</h3><p>{a.summary}</p><span className="text-link">Read article <ArrowIcon /></span></Link>)}</div>
    </section>

    <section className="section" id="content"><SectionHead eyebrow="05 / WATCH ME BUILD" title="Products, process & progress" copy="Selected demos and building-in-public updates. Videos use lightweight posters and load only when opened." />
      <div className="video-grid">{videos.map(v => <VideoCard item={v} key={v.title}/>)}</div>
      <div className="social-callout"><div><Linkedin/><span><strong>Building in public on LinkedIn</strong><small>{socialPosts[0].description}</small></span></div><SmartLink href={site.linkedin} className="button secondary">Connect with me on LinkedIn <ExternalIcon/></SmartLink></div>
    </section>

    <section className="section bordered" id="skills"><SectionHead eyebrow="06 / CAPABILITIES" title="Business + Product + Technology" copy="No proficiency scores—just the capabilities I use and continue to develop through real product work." />
      <div className="skills-grid">{skillGroups.map((group, i) => <article key={group.name}><span className="skill-index">0{i + 1}</span><h3>{group.name}</h3><p>{group.intro}</p><div className="tag-cloud">{group.items.map(x => <span key={x}>{x}</span>)}</div></article>)}</div>
      <div className="tools-row"><div><p className="eyebrow">TOOLS & WORKFLOW</p><h3>Editable, practical toolkit</h3><p>Keep only tools that accurately represent actual experience.</p></div><div className="tag-cloud tools">{tools.map(x => <span key={x}>{x}</span>)}</div></div>
    </section>

    <section className="section" id="experience"><SectionHead eyebrow="07 / EXPERIENCE" title="Built through real product work" copy="Roles and projects across product management, software development and operational technology." />
      <div className="timeline">{experience.map((x, i) => <article key={x.company}><div className="timeline-mark"><span>{String(i + 1).padStart(2, '0')}</span></div><div className="timeline-title"><small>{x.duration}</small><h3>{x.role}</h3><p>{x.company}</p></div><div className="timeline-copy"><p>{x.description}</p><div className="tags">{x.skills.map(s => <span key={s}>{s}</span>)}</div><small>Products: {x.products}</small></div></article>)}</div>
    </section>

    <section className="section section-tint" id="education"><SectionHead eyebrow="08 / EDUCATION & JOURNEY" title="Learning across disciplines" />
      <div className="education-grid">{education.map((x, i) => <article key={x.program}><span className="edu-icon">{i === 0 ? 'MBA' : 'BTech'}</span><small>{x.status} · {x.location}</small><h3>{x.university}</h3><p>{x.program}</p><dl><div><dt>Timeline</dt><dd>{x.startYear} — {x.completion}</dd></div><div><dt>Relevant subjects</dt><dd>{x.subjects}</dd></div><div><dt>Learning highlights</dt><dd>{x.highlights}</dd></div></dl></article>)}</div>
      <div className="journey"><p className="eyebrow">PRODUCT JOURNEY · DATES EDITABLE</p><div>{journey.map((x, i) => <span key={x}><b>{String(i + 1).padStart(2, '0')}</b>{x}</span>)}</div></div>
    </section>

    <section className="section" id="achievements"><SectionHead eyebrow="09 / ACHIEVEMENTS" title="Milestones, ready for verification" copy="Exactly six editable placeholders—reserved for real, verifiable achievements only." />
      <div className="placeholder-grid achievements">{achievements.map((x, i) => <article key={x.title}><div className="upload-area"><span>0{i + 1}</span><small>{x.image}</small></div><small>{x.organization} · {x.date}</small><h3>{x.title}</h3><p>{x.description}</p><VerifiedPlaceholder>{x.verificationUrl}</VerifiedPlaceholder></article>)}</div>
    </section>

    <section className="section bordered" id="certifications"><SectionHead eyebrow="10 / CERTIFICATIONS" title="Verified learning & credentials" copy="Nine editable certificate records. Infosys certification is noted without inventing its exact credential name." />
      <div className="placeholder-grid certifications">{certifications.map((x, i) => <article key={x.name}><span className="cert-number">{String(i + 1).padStart(2, '0')}</span><small>{x.issuer}</small><h3>{x.name}</h3><p>{x.description}</p><dl><div><dt>Issue date</dt><dd>{x.issueDate}</dd></div><div><dt>Credential</dt><dd>{x.credentialId}</dd></div></dl><VerifiedPlaceholder>{x.credentialUrl}</VerifiedPlaceholder></article>)}</div>
    </section>

    <section className="section" id="github"><SectionHead eyebrow="11 / GITHUB" title="Code, Experiments & Projects" copy="A manual repository showcase designed to remain useful even when API data is unavailable." action={<SmartLink href={site.github} className="button secondary"><Github size={17}/> View GitHub Profile</SmartLink>} />
      <div className="github-layout"><div className="github-profile"><Github size={38}/><div><small>GITHUB PROFILE</small><h3>@[ADD_USERNAME]</h3><p>No statistics are displayed until a real profile or verified API data is configured.</p></div><VerifiedPlaceholder>GitHub achievements ready to add</VerifiedPlaceholder></div><div className="repo-list">{repositories.map(r => <SmartLink href={r.url} className="repo" key={r.name}><span><Code2/><small>{r.date}</small></span><h3>{r.name}</h3><p>{r.description}</p><b>{r.technology}</b></SmartLink>)}</div></div>
    </section>

    <section className="section whats-next"><div><p className="eyebrow">12 / WHAT'S NEXT</p><h2>A global perspective,<br/>with curiosity for <em>what's next.</em></h2></div><div><Globe2/><p>I'm interested in connecting with founders, product teams, builders and technology professionals globally, and especially learning from the growing startup and technology ecosystem in Dubai.</p><a href="#contact" className="text-link">Start a conversation <ArrowIcon/></a></div></section>

    <section className="section resume-strip" id="resume"><div><p className="eyebrow">RESUME</p><h2>The concise version.</h2><p>Download the latest version of my resume. This website provides the deeper product context.</p></div><div><SmartLink href={site.resume} className="button"><Download size={16}/> Download Resume</SmartLink><Link to="/resume" className="button secondary">View Resume <ArrowIcon/></Link></div></section>

    <section className="contact" id="contact"><div className="contact-inner"><p className="eyebrow">LET'S CONNECT</p><h2>Building something<br/><em>interesting?</em></h2><p>If you're building a product, solving an operational problem, working on technology, or simply want to exchange ideas, I'd love to connect.</p><div className="contact-links"><SmartLink href={site.linkedin}><Linkedin/> LinkedIn <ArrowUpRight/></SmartLink><SmartLink href={`mailto:${site.email}`}><Mail/> Email <ArrowUpRight/></SmartLink><SmartLink href={site.github}><Github/> GitHub <ArrowUpRight/></SmartLink><Link to="/resume"><BriefcaseBusiness/> Resume <ArrowUpRight/></Link></div></div></section>
  </>
}