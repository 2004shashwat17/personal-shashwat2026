import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowIcon, MediaPlaceholder, Seo, SmartLink, VerifiedPlaceholder } from '../components'
import { products } from '../data'

export function CaseStudy() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  if (!product) return <Navigate to="/" replace />
  const next = products[(products.indexOf(product) + 1) % products.length]
  const sections = [
    ['01', 'Overview', product.context], ['02', 'Problem', product.problem], ['03', 'Users / Business Context', product.users], ['04', 'My Role', product.role],
    ['05', 'Requirements', product.requirements], ['06', 'Product Thinking', product.thinking], ['07', 'User Workflow', product.workflow], ['08', 'Design / UX', product.design],
    ['09', 'Engineering Collaboration', product.engineering], ['10', 'Technical Implementation', product.technical], ['11', 'Challenges', product.challenges],
    ['12', 'Decisions & Trade-offs', product.decisions], ['13', 'Product Screens', '[Add verified product screenshots here]'], ['14', 'Product Demo / Video', '[Add product demo or video URL here]'],
    ['15', 'Outcome', product.outcome], ['16', 'What I Learned', product.learning], ['17', 'Related Content', '[Add related article or video links here]'], ['18', 'Product Link', product.url || '[No public product URL]'],
  ] as const
  return <>
    <Seo title={`${product.name} Case Study — Shashwat`} description={`${product.name}: ${product.description} A product case study by Shashwat.`} type="article" />
    <div className="case-hero"><Link to="/#work" className="back-link"><ArrowLeft size={16}/> Back to selected work</Link><div className="case-hero-grid"><div><p className="eyebrow">CASE STUDY · {product.index}</p><h1>{product.name}</h1><p className="case-lead">{product.description}</p><div className="tags">{product.focus.map(x => <span key={x}>{x}</span>)}</div>{product.url && <SmartLink href={product.url} className="button">Visit product <ExternalLink size={15}/></SmartLink>}</div><MediaPlaceholder label={product.name} accent={product.accent}/></div>
      <div className="case-facts"><div><small>Category</small><b>{product.category}</b></div><div><small>My role</small><b>{product.role}</b></div><div><small>Status</small><b>{product.status}</b></div></div>
    </div>
    <div className="case-layout"><aside><p>IN THIS CASE STUDY</p>{sections.map(([n, title]) => <a href={`#case-${n}`} key={n}><span>{n}</span>{title}</a>)}</aside><article className="case-content">
      {sections.map(([n, title, content]) => <section id={`case-${n}`} key={n} className="case-section"><div className="case-number">{n}</div><div><h2>{title}</h2>{Array.isArray(content) ? <ol className={title === 'User Workflow' ? 'workflow-list' : 'requirement-list'}>{content.map((x, i) => <li key={x}><span>{String(i + 1).padStart(2, '0')}</span>{x}</li>)}</ol> : title === 'Product Screens' ? <><p>{content}</p><div className="screens-grid"><MediaPlaceholder label={`${product.name} screen 01`} accent={product.accent}/><MediaPlaceholder label={`${product.name} screen 02`} accent={product.accent}/></div></> : title === 'Product Demo / Video' ? <><p>{content}</p><div className="case-video">CLICK-TO-LOAD VIDEO AREA · URL NOT CONFIGURED</div></> : title === 'Product Link' && product.url ? <SmartLink href={product.url} className="text-link">Open {product.name} <ExternalLink size={14}/></SmartLink> : <><p>{content}</p>{String(content).startsWith('[') && <VerifiedPlaceholder>Awaiting verified information</VerifiedPlaceholder>}</>}</div></section>)}
    </article></div>
    <Link to={`/work/${next.slug}`} className="next-case"><span>Next case study</span><strong>{next.name}</strong><ArrowIcon/></Link>
  </>
}