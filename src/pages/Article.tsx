import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Seo, VerifiedPlaceholder } from '../components'
import { articles } from '../data'

export function Article() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)
  if (!article) return <Navigate to="/" replace />
  return <>
    <Seo title={`${article.title} — Shashwat`} description={article.summary} type="article" />
    <article className="reading"><Link to="/#thinking" className="back-link"><ArrowLeft size={16}/> Product Thinking</Link><header><p className="eyebrow">{article.category} · {article.date}</p><h1>{article.title}</h1><p>{article.summary}</p></header>
      <div className="reading-body"><p className="dropcap">This article page is ready for Shashwat's original, verified perspective. It intentionally does not manufacture a personal lesson or claim an experience that has not yet been documented.</p><h2>Context</h2><p>[Add the real situation, product context and why this question mattered.]</p><h2>What made it difficult</h2><p>[Add the roles, dependencies, business rules and edge cases involved.]</p><blockquote>Good product thinking makes the context visible before making the solution feel obvious.</blockquote><h2>My approach</h2><p>[Add the actual process, product decisions, collaboration and trade-offs.]</p><h2>What I learned</h2><p>[Add a verified personal lesson and how it changed your future product decisions.]</p><VerifiedPlaceholder>Editorial content ready to complete</VerifiedPlaceholder></div>
    </article>
  </>
}