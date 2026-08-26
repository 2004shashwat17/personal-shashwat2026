import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Check, Contact as Linkedin, ExternalLink, GitFork as Github, Menu, Moon, Play, Sun, X } from 'lucide-react'
import { site } from './data'

export function SmartLink({ href, className = '', children }: { href: string; className?: string; children: ReactNode }) {
  const placeholder = href.includes('[') || !href
  if (placeholder) return <span className={`${className} disabled-link`} title="Replace this URL in src/data.ts">{children}</span>
  const external = href.startsWith('http') || href.startsWith('mailto:')
  return external ? <a href={href} className={className} target="_blank" rel="noreferrer">{children}</a> : <Link to={href} className={className}>{children}</Link>
}

export function ArrowIcon() { return <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" /> }

const nav = [
  ['Home', '/#home'], ['Work', '/#work'], ['Product Thinking', '/#thinking'], ['Skills', '/#skills'],
  ['Experience', '/#experience'], ['Achievements', '/#achievements'], ['Certifications', '/#certifications'],
  ['Content', '/#content'], ['About', '/#about'], ['Resume', '/resume'], ['Contact', '/#contact'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [light, setLight] = useState(() => localStorage.getItem('theme') === 'light')
  useEffect(() => {
    document.documentElement.dataset.theme = light ? 'light' : 'dark'
    localStorage.setItem('theme', light ? 'light' : 'dark')
  }, [light])
  return <header className="header">
    <div className="nav-shell">
      <Link to="/" className="brand" aria-label="Shashwat home"><span>S</span> Shashwat</Link>
      <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary navigation" onClick={() => setOpen(false)}>
        {nav.map(([label, href]) => href.startsWith('/#') ? <a key={label} href={href}>{label}</a> : <NavLink key={label} to={href}>{label}</NavLink>)}
        <SmartLink href={site.linkedin} className="mobile-social"><Linkedin size={16} /> LinkedIn</SmartLink>
      </nav>
      <div className="nav-actions">
        <SmartLink href={site.linkedin} className="icon-link"><Linkedin size={17} /><span className="sr-only">LinkedIn</span></SmartLink>
        <SmartLink href={site.github} className="icon-link"><Github size={17} /><span className="sr-only">GitHub</span></SmartLink>
        <button className="icon-link" onClick={() => setLight(!light)} aria-label="Toggle color theme">{light ? <Moon size={17} /> : <Sun size={17} />}</button>
        <a href="/#contact" className="button small">Let's Connect <ArrowIcon /></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </div>
    </div>
  </header>
}

export function Footer() {
  return <footer className="footer"><div className="footer-grid">
    <div><Link to="/" className="brand"><span>S</span> Shashwat</Link><p>Product Manager & Product Builder</p><p className="muted">Working at the intersection of business, technology and product development.</p></div>
    <div><strong>Explore</strong>{['Work', 'About', 'Product Thinking', 'Skills', 'Achievements', 'Certifications', 'Resume', 'Contact'].map(x => <a key={x} href={x === 'Resume' ? '/resume' : `/#${x.toLowerCase().replace('product thinking', 'thinking')}`}>{x}</a>)}</div>
    <div><strong>Connect</strong><SmartLink href={site.linkedin}>LinkedIn</SmartLink><SmartLink href={site.github}>GitHub</SmartLink><SmartLink href={`mailto:${site.email}`}>Email</SmartLink></div>
    <div><strong>Clientalio</strong><SmartLink href="https://clientalio.com/">Website</SmartLink><SmartLink href="https://www.instagram.com/clientalio/">Instagram</SmartLink><SmartLink href="https://x.com/Clientalio/">X</SmartLink></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Shashwat. All rights reserved.</span><span>Designed around product, business & technology.</span></div></footer>
}

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname])
  return <><Header /><main>{children}</main><Footer /></>
}

export function SectionHead({ eyebrow, title, copy, action }: { eyebrow: string; title: string; copy?: string; action?: ReactNode }) {
  return <div className="section-head"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>{action}</div>
}

export function MediaPlaceholder({ label = 'Product screen', accent = '#55d7ff' }: { label?: string; accent?: string }) {
  return <div className="product-ui" style={{ '--accent': accent } as React.CSSProperties} aria-label={`${label} configurable media placeholder`}>
    <div className="ui-top"><span /><span /><span /><small>{label}</small></div>
    <div className="ui-body"><div className="ui-sidebar"><i /><i /><i /><i /></div><div className="ui-main"><div className="ui-kicker" /><div className="ui-title" /><div className="ui-panels"><div><b /><i /><i /></div><div><b /><i /><i /></div></div><div className="ui-chart"><i /><i /><i /><i /><i /><i /></div></div></div>
  </div>
}

export function VideoCard({ item }: { item: { title: string; platform: string; url: string; date: string; product: string; description: string } }) {
  return <article className="video-card"><div className="video-poster"><span className="play"><Play size={18} fill="currentColor" /></span><span className="video-platform">{item.platform}</span></div><div className="video-copy"><small>{item.product} · {item.date}</small><h3>{item.title}</h3><p>{item.description}</p>{item.url ? <SmartLink href={item.url} className="text-link">Watch video <ArrowIcon /></SmartLink> : <span className="placeholder-label">URL READY TO CONFIGURE</span>}</div></article>
}

export function VerifiedPlaceholder({ children }: { children: ReactNode }) { return <span className="verified-placeholder"><Check size={12} /> {children}</span> }

export function Seo({ title, description, type = 'website' }: { title: string; description: string; type?: string }) {
  const location = useLocation()
  useEffect(() => {
    document.title = title
    const set = (selector: string, attribute: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null
      if (!el) { el = document.createElement(attribute === 'rel' ? 'link' : 'meta'); if (attribute === 'rel') el.setAttribute('rel', selector.includes('canonical') ? 'canonical' : ''); else el.setAttribute(attribute, selector.match(/\[.*?="(.*?)"\]/)?.[1] || ''); document.head.appendChild(el) }
      el.setAttribute(attribute === 'rel' ? 'href' : 'content', value)
    }
    set('meta[name="description"]', 'name', description)
    set('meta[property="og:title"]', 'property', title)
    set('meta[property="og:description"]', 'property', description)
    set('meta[property="og:type"]', 'property', type)
    set('meta[name="twitter:card"]', 'name', 'summary_large_image')
    set('meta[name="twitter:title"]', 'name', title)
    set('meta[name="twitter:description"]', 'name', description)
    set('link[rel="canonical"]', 'rel', `https://${site.domain}${location.pathname}`)
    let script = document.head.querySelector('#structured-data') as HTMLScriptElement | null
    if (!script) { script = document.createElement('script'); script.id = 'structured-data'; script.type = 'application/ld+json'; document.head.appendChild(script) }
    script.textContent = JSON.stringify(type === 'article' ? {
      '@context': 'https://schema.org', '@type': location.pathname.startsWith('/thinking/') ? 'Article' : 'CreativeWork',
      headline: title, description, author: { '@type': 'Person', name: site.name, url: site.linkedin },
    } : {
      '@context': 'https://schema.org', '@type': 'Person', name: site.name, jobTitle: site.title,
      description: site.description, url: `https://${site.domain}`, sameAs: [site.linkedin],
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Golden Gate University' },
    })
  }, [description, location.pathname, title, type])
  return null
}

export function ExternalIcon() { return <ExternalLink size={14} aria-hidden="true" /> }