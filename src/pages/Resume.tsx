import { Download, ExternalLink } from 'lucide-react'
import { Seo, SmartLink } from '../components'
import { education, experience, site, skillGroups } from '../data'

export function Resume() {
  return <>
    <Seo title="Resume — Shashwat, Product Manager & Product Builder" description="View or download the latest resume for Shashwat, Product Manager and Product Builder." />
    <section className="resume-page"><header><p className="eyebrow">RESUME / PROFILE</p><h1>Shashwat</h1><p className="resume-title">Product Manager & Product Builder</p><p>I build and work on real-world products across SaaS, logistics, WMS, web, mobile and emerging technology.</p><div><SmartLink href={site.resume} className="button"><Download size={16}/> Download Resume</SmartLink><SmartLink href={site.resume} className="button secondary">View Resume <ExternalLink size={15}/></SmartLink></div><small>Download the latest version of my resume.</small></header>
      <div className="resume-document"><section><p className="eyebrow">EXPERIENCE</p>{experience.map(x => <article key={x.company}><div><h2>{x.role}</h2><p>{x.company}</p></div><small>{x.duration}</small><p>{x.description}</p><div className="tags">{x.skills.map(s => <span key={s}>{s}</span>)}</div></article>)}</section><section><p className="eyebrow">EDUCATION</p>{education.map(x => <article key={x.program}><div><h2>{x.program} · {x.status}</h2><p>{x.university}, {x.location}</p></div><small>{x.startYear} — {x.completion}</small></article>)}</section><section><p className="eyebrow">CAPABILITIES</p>{skillGroups.map(x => <article key={x.name}><h2>{x.name}</h2><div className="tag-cloud">{x.items.map(s => <span key={s}>{s}</span>)}</div></article>)}</section></div>
    </section>
  </>
}