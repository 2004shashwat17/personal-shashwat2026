import { ResumeCards, Seo } from '../components'
import { education, experience, skillGroups } from '../data'

export function Resume() {
  return <>
    <Seo title="Resume — Shashwat, Technical Product Manager | Software Engineer" description="Choose the resume that fits your role — Product Manager, Technical Product Manager or Software Engineer. View online or download the PDF." />
    <section className="resume-page"><header><p className="eyebrow">RESUME</p><h1>Shashwat</h1><p className="resume-title">Technical Product Manager | Software Engineer</p><p>I'm a technical product builder who understands both product and engineering. Same experience, three lenses — pick the version that matches the role you're hiring for.</p></header>
      <ResumeCards />
      <div className="resume-document"><section><p className="eyebrow">EXPERIENCE</p>{experience.map(x => <article key={x.company}><div><h2>{x.role}</h2><p>{x.company}</p></div><small>{x.duration}</small><p>{x.description}</p><div className="tags">{x.skills.map(s => <span key={s}>{s}</span>)}</div></article>)}</section><section><p className="eyebrow">EDUCATION</p>{education.map(x => <article key={x.program}><div><h2>{x.program} · {x.status}</h2><p>{x.university}, {x.location}</p></div><small>{[x.startYear, x.completion].filter(Boolean).join(' — ')}</small></article>)}</section><section><p className="eyebrow">CAPABILITIES</p>{skillGroups.map(x => <article key={x.name}><h2>{x.name}</h2><div className="tag-cloud">{x.items.map(s => <span key={s}>{s}</span>)}</div></article>)}</section></div>
    </section>
  </>
}