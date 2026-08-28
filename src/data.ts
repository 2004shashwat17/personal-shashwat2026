export const site = {
  name: 'Shashwat',
  title: 'Technical Product Manager | Software Engineer',
  description: 'Shashwat is a technical product builder who understands both product and engineering — working across product strategy, SaaS, logistics / WMS, web and mobile products.',
  domain: '[PLACEHOLDER_DOMAIN]',
  email: '[PLACEHOLDER_EMAIL]',
  github: '[PLACEHOLDER_GITHUB_URL]',
  linkedin: 'https://www.linkedin.com/in/buildwithshashwat/',
  resume: '/Shashwat-TPM.pdf',
}

export type ResumeVersion = {
  id: string
  kicker: string
  title: string
  description: string
  file: string
  accent: string
}

/* The three resume PDFs live in /public — one tailored lens per role. */
export const resumes: ResumeVersion[] = [
  {
    id: 'pm',
    kicker: 'For product roles',
    title: 'Product Manager',
    description: 'Focused on product strategy, execution, growth, user experience, and business impact.',
    file: '/Shashwat-PM.pdf',
    accent: '#55d7ff',
  },
  {
    id: 'tpm',
    kicker: 'For technical PM roles',
    title: 'Technical Product Manager',
    description: 'Combines product management with hands-on engineering, APIs, architecture, technical execution, and cross-functional delivery.',
    file: '/Shashwat-TPM.pdf',
    accent: '#8cffb5',
  },
  {
    id: 'sde',
    kicker: 'For engineering roles',
    title: 'Software Engineer',
    description: 'Focused on frontend, backend, APIs, databases, cloud infrastructure, and production software development.',
    file: '/sde-shashwat.pdf',
    accent: '#a995ff',
  },
]

export type Product = {
  slug: string
  name: string
  index: string
  category: string
  description: string
  url?: string
  accent: string
  status: string
  focus: string[]
  role: string
  context: string
  problem: string
  users: string
  requirements: string[]
  thinking: string
  workflow: string[]
  design: string
  engineering: string
  technical: string
  challenges: string
  decisions: string
  outcome: string
  learning: string
  social?: { label: string; url: string }[]
}

const pending = '[Add verified details here]'

export const products: Product[] = [
  {
    slug: 'clientalio', name: 'Clientalio', index: '01', accent: '#55d7ff', status: 'SaaS product',
    category: 'SaaS / Customer Testimonials / Social Proof',
    description: 'Customer testimonials and social proof platform.', url: 'https://clientalio.com/',
    focus: ['Customer trust', 'Social proof', 'SaaS workflows'], role: pending,
    context: 'A product built around helping businesses collect and present customer proof.',
    problem: 'How can customer trust be made easier to collect, manage and communicate?', users: pending,
    requirements: ['Testimonial collection workflow', 'Social-proof presentation', 'Administration and publishing flows'],
    thinking: 'Start with the customer-trust problem, then reduce friction across collection and presentation.',
    workflow: ['Business creates a collection flow', 'Customer shares feedback', 'Business reviews the response', 'Approved proof is presented'],
    design: pending, engineering: pending, technical: pending, challenges: pending, decisions: pending,
    outcome: '[Add verified outcome here]', learning: pending,
    social: [
      { label: 'Clientalio on Instagram', url: 'https://www.instagram.com/clientalio/' },
      { label: 'Clientalio on X', url: 'https://x.com/Clientalio/' },
      { label: 'Clientalio content', url: 'https://www.reddit.com/user/Intelligent-Video-16/' },
    ],
  },
  {
    slug: 'dropproof', name: 'DropProof', index: '02', accent: '#8cffb5', status: 'Logistics product',
    category: 'Logistics / Delivery Management', description: 'A product focused on delivery management and operational workflows.', url: 'https://dropproof.app/',
    focus: ['Delivery operations', 'Workflow design', 'Edge cases'], role: pending,
    context: 'Delivery management connects digital workflows with time-sensitive, real-world operations.',
    problem: 'How can delivery activity be made easier to coordinate, track and complete?', users: pending,
    requirements: ['Delivery workflow', 'Operational status handling', 'Exception and completion states'],
    thinking: 'Model the actual delivery lifecycle—including exceptions—before defining interface states.',
    workflow: ['Delivery is created', 'Work is assigned', 'Progress is tracked', 'Completion or exception is recorded'],
    design: pending, engineering: pending, technical: pending, challenges: pending, decisions: pending,
    outcome: '[Add verified outcome here]', learning: pending,
  },
  {
    slug: 'labelium', name: 'Labelium', index: '03', accent: '#a995ff', status: 'Print workflow product',
    category: 'Label & Print Management', description: 'A product focused on label and print-management workflows.', url: 'https://labelium.io/',
    focus: ['Print workflows', 'Configuration', 'Operations'], role: pending, context: 'Label and print workflows require precision across configuration and execution.',
    problem: pending, users: pending, requirements: ['Label configuration', 'Print workflow', 'Operational management'], thinking: pending,
    workflow: ['Configure', 'Validate', 'Generate', 'Print'], design: pending, engineering: pending, technical: pending, challenges: pending, decisions: pending,
    outcome: '[Add verified outcome here]', learning: pending,
  },
  {
    slug: 'speedpilot', name: 'SpeedPilot', index: '04', accent: '#ffbc6e', status: 'Technical product',
    category: 'Network Performance / Speed Testing', description: 'A product focused on network performance and speed-testing workflows.', url: 'https://speedpilot.io/',
    focus: ['Network performance', 'Testing', 'Technical UX'], role: pending, context: 'Technical measurements need to be translated into clear, usable product feedback.',
    problem: pending, users: pending, requirements: ['Test initiation', 'Measurement feedback', 'Results presentation'], thinking: pending,
    workflow: ['Start test', 'Measure performance', 'Process results', 'Present feedback'], design: pending, engineering: pending, technical: pending, challenges: pending, decisions: pending,
    outcome: '[Add verified outcome here]', learning: pending,
  },
  {
    slug: 'logistics-wms', name: 'Logistics / WMS', index: '05', accent: '#53a9ff', status: 'Domain case study',
    category: 'Logistics / Warehouse Management', description: 'Real-world product experience across logistics, warehouse and operational systems.',
    focus: ['Warehouse workflows', 'Inventory', 'Business rules'], role: pending,
    context: 'Operational software must account for physical processes, business rules and real-world exceptions.',
    problem: 'Turning complex warehouse and delivery operations into practical, reliable software workflows.', users: pending,
    requirements: ['Warehouse and inventory workflows', 'Delivery and route-planning flows', 'Installation and replacement handling', 'Operational dashboards', 'Backend and API requirements'],
    thinking: 'Understand the physical operation first, then map states, roles, business rules and exceptions.',
    workflow: ['Observe the operation', 'Map the process', 'Define rules and edge cases', 'Collaborate on implementation', 'Test against real workflows'],
    design: pending, engineering: 'Requirements, business rules, API needs and edge cases are translated for engineering collaboration.',
    technical: pending, challenges: 'Operational edge cases and dependencies between digital states and physical activity.', decisions: pending,
    outcome: '[Add verified outcome here]', learning: pending,
  },
]

export type FeaturedProject = {
  index: string
  name: string
  status: string
  accent: string
  description: string
  highlights: string[]
  stack: string[]
  metric?: { value: string; label: string }
  url?: string
  urlLabel?: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    index: '01',
    name: 'DropProof',
    status: 'In production',
    accent: '#8cffb5',
    description: 'Delivery management platform covering the full operational loop — from the web dashboard and reports to the driver apps in the field.',
    highlights: [
      'Product and dashboard development',
      '.NET backend',
      'Reports and billing / payment workflows',
      'React Native driver applications',
      'Android and iOS builds and releases',
    ],
    stack: ['.NET', 'React', 'React Native', 'Android', 'iOS'],
    metric: { value: '263', label: 'active users in the last 28 days' },
    url: 'https://dropproof.app/',
    urlLabel: 'dropproof.app',
  },
  {
    index: '02',
    name: 'SpeedPilot',
    status: 'In production',
    accent: '#ffbc6e',
    description: 'Speed-testing platform that turns raw network measurements into a clear, usable product experience.',
    highlights: [
      'React-based speed testing platform built on LibreSpeed',
      'Backend services for test handling and results',
      'CORS and server configuration',
      'DigitalOcean hosting and production deployment',
    ],
    stack: ['React', 'LibreSpeed', 'Node.js', 'DigitalOcean'],
    url: 'https://speedpilot.io/',
    urlLabel: 'speedpilot.io',
  },
  {
    index: '03',
    name: 'Social Media Intelligence Platform',
    status: 'Full-stack build',
    accent: '#55d7ff',
    description: 'A platform that collects, processes and analyzes social media data — from automated collection to sentiment insights.',
    highlights: [
      'React frontend with authentication and access control',
      'Node.js APIs with MongoDB and Redis',
      'Automated data collection and processing',
      'Sentiment analysis',
      'Python / Flask services, Docker and AWS deployment',
      'Webhook-driven integrations',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Redis', 'Python / Flask', 'Docker', 'AWS', 'Webhooks'],
  },
]

export const skillGroups = [
  { name: 'Product', intro: 'From ambiguity to structured, testable product decisions.', items: ['Product Management', 'Product Strategy', 'Product Discovery', 'Requirement Gathering', 'Requirement Analysis', 'Feature Definition', 'User Workflows', 'User Stories', 'Acceptance Criteria', 'Product Roadmapping', 'Feature Prioritization', 'MVP Planning', 'Product Documentation', 'User Feedback', 'Product Iteration', 'Cross-functional Collaboration', 'Agile Product Development', 'Stakeholder Communication', 'Problem Solving', 'Product Thinking', 'Business Requirement Analysis', 'Process Mapping', 'Operational Workflow Design'] },
  { name: 'Business', intro: 'Connecting customer and operational context with product direction.', items: ['Business Analysis', 'Business Process Understanding', 'Customer Problem Identification', 'Stakeholder Management', 'Client Communication', 'Business Workflow Analysis', 'Market Research', 'Competitive Research', 'Customer Feedback', 'SaaS Business Understanding', 'Startup/Product Thinking', 'Go-to-Market Understanding', 'Product Positioning', 'Basic SEO / Search Intent', 'Social Proof / Customer Trust', 'B2B Product Thinking'] },
  { name: 'Technical', intro: 'Enough technical depth to build and collaborate closely with engineering.', items: ['Full-Stack Development', 'Web Development', 'Mobile Development', 'API Integration', 'REST APIs', 'Backend Development', 'Frontend Development', 'Database Systems', 'Authentication', 'Cloud / Deployment', 'AI Integrations', 'Software Testing', 'Debugging', 'Git', 'GitHub', 'Technical Documentation', 'System Workflows', 'Software Architecture Understanding'] },
]

export const tools = ['GitHub', 'Git', 'VS Code', 'GitHub Copilot', 'Postman', 'Figma', 'Jira', 'Agile / Scrum tools', 'AI tools', 'Analytics / SEO tools', 'Canva']

export const articles = [
  { slug: 'requirements-to-workflow', title: 'How I turn a business requirement into a product workflow', summary: 'A practical approach to moving from an initial request to roles, states, rules and testable product behavior.', category: 'Product Practice', date: '[ADD DATE]' },
  { slug: 'logistics-software', title: 'What I learned building logistics software', summary: 'Why operational context, exceptions and physical constraints shape better product decisions.', category: 'Logistics', date: '[ADD DATE]' },
  { slug: 'simple-requirements', title: 'Why simple requirements become complicated in real products', summary: 'The hidden roles, dependencies, business rules and edge cases inside apparently small features.', category: 'Product Thinking', date: '[ADD DATE]' },
]

export const videos = [
  { title: 'Add a product walkthrough', platform: 'LinkedIn / YouTube / MP4', url: '', thumbnail: '', date: '[ADD DATE]', product: 'Product video', description: 'Add a video URL and thumbnail in the content configuration. Media loads only when requested.' },
  { title: 'Add a building-in-public update', platform: 'LinkedIn', url: '', thumbnail: '', date: '[ADD DATE]', product: 'Building in public', description: 'Prioritize a selected LinkedIn product or process video here.' },
]

export const socialPosts = [
  { title: 'Add a selected LinkedIn post', url: '', thumbnail: '', category: 'Product Building', date: '[ADD DATE]', description: 'Configure a post URL, title, thumbnail and short context without relying on scraping.' },
]

export const achievements = Array.from({ length: 6 }, (_, index) => ({
  title: `Achievement ${String(index + 1).padStart(2, '0')}`, organization: '[ADD ORGANIZATION]', date: '[ADD DATE]',
  description: '[Add a verified achievement description]', verificationUrl: '[ADD VERIFICATION LINK]', image: '[UPLOAD IMAGE / DOCUMENT]',
}))

export const certifications = Array.from({ length: 9 }, (_, index) => ({
  name: `Certification ${String(index + 1).padStart(2, '0')}`, issuer: index === 0 ? 'Infosys — exact certification name to verify' : '[ADD ISSUING ORGANIZATION]',
  issueDate: '[ADD ISSUE DATE]', credentialId: '[ADD CREDENTIAL ID]', credentialUrl: `[VERIFY_CERTIFICATE_${String(index + 1).padStart(2, '0')}]`,
  document: '[UPLOAD CERTIFICATE IMAGE / PDF]', description: index === 0 ? 'Infosys Certified — details remain editable pending verification.' : '[ADD DESCRIPTION]',
}))

export const experience = [
  { company: 'BWays Techno Solution', role: 'Product Manager', duration: 'Current role', description: 'Working across product requirements, workflows, engineering collaboration, testing and delivery for products used in real, time-sensitive operations.', skills: ['Product Management', 'Requirements', 'Engineering Collaboration', 'Delivery'] },
  { company: 'Enalytechs', role: 'Software Engineer', duration: 'Earlier', description: 'Early professional experience building software products and working closely across engineering and product teams.', skills: ['Software Development', 'Software Products', 'Collaboration'] },
  { company: 'Independent Product Building', role: 'Product projects', duration: 'Ongoing', description: 'Building products of my own across SaaS, logistics and web — including Clientalio, DropProof, Labelium and SpeedPilot.', skills: ['SaaS', 'Product Development', 'Web & Mobile'] },
]

export const education = [
  { university: 'Golden Gate University', program: 'MBA', status: 'MBA Candidate', location: 'USA', startYear: 'In progress', completion: '', subjects: '', highlights: '', url: '' },
]

export const journey = ['BTech', 'Full-Stack & Mobile Development', 'Enalytechs', 'BWays Techno Solution', 'Logistics / WMS', 'Clientalio', 'DropProof', 'Labelium', 'SpeedPilot', 'MBA — Golden Gate University']

export const repositories = [
  { name: 'Add featured repository', description: 'Configure a real repository name, description and URL here.', technology: '[ADD TECHNOLOGY]', url: site.github, featured: true, image: '', date: '[ADD DATE]' },
  { name: 'Add product experiment', description: 'Use this manual fallback when API access is unavailable.', technology: '[ADD TECHNOLOGY]', url: site.github, featured: false, image: '', date: '[ADD DATE]' },
]