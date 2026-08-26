import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { Home } from './pages/Home'
import { CaseStudy } from './pages/CaseStudy'
import { Article } from './pages/Article'
import { Resume } from './pages/Resume'

export default function App() {
  return <Layout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/work/:slug" element={<CaseStudy />} />
    <Route path="/thinking/:slug" element={<Article />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></Layout>
}