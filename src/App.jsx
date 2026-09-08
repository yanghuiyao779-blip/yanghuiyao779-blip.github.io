import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Database,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  Sparkles,
  Terminal,
} from 'lucide-react'
import Navbar from './components/Navbar'
import GitHubIcon from './components/GitHubIcon'
import Reveal from './components/Reveal'
import SectionHeader from './components/SectionHeader'
import AgentDiagram from './components/AgentDiagram'
import RagPipeline from './components/RagPipeline'
import { education, experiences, expertise, principles, profile, projects, stats } from './data'

const base = import.meta.env.BASE_URL
const resumeUrl = `${base}Yang-Huiyao-Resume.pdf`
const avatarUrl = `${base}avatar.png`

function Badge({ children }) {
  return <span className="tech-badge">{children}</span>
}

function Hero() {
  const reduceMotion = useReducedMotion()
  const intro = {
    hidden: { opacity: 0, y: 24 },
    show: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: .72, delay, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  return (
    <section className="hero-section" id="top">
      <div className="hero-ambient" aria-hidden="true">
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="hero-grid" />
      </div>

      <div className="site-container hero-grid-layout">
        <div className="hero-copy">
          <motion.div
            className="availability-chip"
            initial={reduceMotion ? false : intro.hidden}
            animate={reduceMotion ? undefined : intro.show(.05)}
          >
            <span className="availability-pulse" />
            OPEN TO OPPORTUNITIES · {profile.location} · {profile.availability}
          </motion.div>

          <motion.div
            className="hero-name-row"
            initial={reduceMotion ? false : intro.hidden}
            animate={reduceMotion ? undefined : intro.show(.12)}
          >
            <span className="hero-overline">{profile.englishName}</span>
            <span className="hero-mini-line" />
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : intro.hidden}
            animate={reduceMotion ? undefined : intro.show(.18)}
          >
            AI AGENT
            <span>ENGINEER.</span>
          </motion.h1>

          <motion.p
            className="hero-role-cn"
            initial={reduceMotion ? false : intro.hidden}
            animate={reduceMotion ? undefined : intro.show(.25)}
          >
            {profile.name} · {profile.role}
          </motion.p>

          <motion.p
            className="hero-summary"
            initial={reduceMotion ? false : intro.hidden}
            animate={reduceMotion ? undefined : intro.show(.31)}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className="hero-tags"
            initial={reduceMotion ? false : intro.hidden}
            animate={reduceMotion ? undefined : intro.show(.37)}
          >
            {['Multi-Agent', 'Tool Calling', 'MCP', 'RAG', 'Context Engineering', 'LLM Infra'].map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : intro.hidden}
            animate={reduceMotion ? undefined : intro.show(.43)}
          >
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a className="button button-ghost" href={resumeUrl} download>
              <Download size={16} /> Download resume
            </a>
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={reduceMotion ? false : intro.hidden}
            animate={reduceMotion ? undefined : intro.show(.5)}
          >
            <div><MapPin size={15} /> {profile.location}</div>
            <div><BriefcaseBusiness size={15} /> {profile.experience}</div>
            <div><GraduationCap size={15} /> {profile.education}</div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: .96, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: .9, delay: .22, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-portrait-card">
            <div className="portrait-frame">
              <img src={avatarUrl} alt="杨惠瑶" />
              <div className="portrait-gradient" />
              <div className="portrait-label">
                <span>YH / 2026</span>
                <strong>Build systems,<br />not demos.</strong>
              </div>
            </div>
          </div>
          <AgentDiagram />
        </motion.div>
      </div>

      <div className="site-container hero-scroll-hint">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats-section" aria-label="核心数据">
      <div className="site-container stats-grid">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} className="stat-card" delay={index * .05}>
            <span className="stat-index">0{index + 1}</span>
            <strong>{stat.value}</strong>
            <div>{stat.label}</div>
            <small>{stat.note}</small>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="page-section" id="about">
      <div className="site-container">
        <SectionHeader
          index="01"
          eyebrow="ABOUT"
          title="把模型能力，做成可交付的系统能力。"
          description="我的关注点不止是 Prompt 或单次调用效果，而是 Agent 在真实业务中如何规划、执行、恢复、观察、评测并稳定交付。"
        />

        <div className="about-layout">
          <Reveal className="about-story">
            <p className="lead-paragraph">
              目前主要从事企业级大模型应用与 AI Agent 核心研发。围绕复杂长链路任务，持续建设 Multi-Agent Runtime、Tool Calling、动态 Skill、Memory / Context、RAG 与任务生命周期能力。
            </p>
            <p>
              在安全分析场景中，我将大模型推理、知识检索与真实工具链组合为自动化任务闭环；在模型与交付侧，也参与模型选型、评测、vLLM 推理适配、离线部署与客户验收，关注从 PoC 到生产环境之间真正影响稳定性的工程细节。
            </p>
            <div className="about-signature">
              <div className="signature-avatar"><img src={avatarUrl} alt="" /></div>
              <div>
                <strong>{profile.name}</strong>
                <span>{profile.roleEn}</span>
              </div>
            </div>
          </Reveal>

          <div className="about-bento">
            <Reveal className="bento-card bento-card-accent" delay={.08}>
              <Sparkles size={21} />
              <span className="bento-kicker">FOCUS</span>
              <h3>Agent Engineering</h3>
              <p>Planning · Runtime · Tools · Skills · Memory · Trace</p>
              <div className="mini-spectrum" />
            </Reveal>
            <Reveal className="bento-card" delay={.13}>
              <Network size={21} />
              <span className="bento-kicker">SYSTEM</span>
              <h3>Long-running Tasks</h3>
              <p>Heartbeat、取消、超时、失败恢复、结果回传与可观测性。</p>
            </Reveal>
            <Reveal className="bento-card" delay={.18}>
              <Database size={21} />
              <span className="bento-kicker">KNOWLEDGE</span>
              <h3>RAG Evaluation</h3>
              <p>Ground Truth · Recall@K · MRR / NDCG · Bad Case Analysis</p>
            </Reveal>
            <Reveal className="bento-card" delay={.23}>
              <Terminal size={21} />
              <span className="bento-kicker">DELIVERY</span>
              <h3>Private Deployment</h3>
              <p>8 × 海光 K100_AI 64 GB DCU · vLLM 适配 · Docker / Linux · 离线部署与客户验收。</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="page-section section-soft" id="experience">
      <div className="site-container">
        <SectionHeader
          index="02"
          eyebrow="EXPERIENCE"
          title="从 Agent 核心研发，到端到端交付。"
          description="时间线只展示可核验经历；后续新增公司或实习时，只需在 src/data.js 的 experiences 数组继续追加。"
        />

        <div className="experience-list">
          {experiences.map((experience, experienceIndex) => (
            <Reveal className="experience-card" key={`${experience.company}-${experience.period}`} delay={experienceIndex * .05}>
              <div className="experience-aside">
                <span className="experience-period">{experience.period}</span>
                <div className="experience-dot-line"><i /><span /></div>
              </div>
              <div className="experience-main">
                <div className="experience-heading">
                  <div>
                    <span className="company-label">{experience.label || 'EXPERIENCE'}</span>
                    <h3>{experience.company}</h3>
                    <p>{experience.role}</p>
                  </div>
                  <div className="product-pills">
                    {experience.products?.map((product) => <span key={product}>{product}</span>)}
                  </div>
                </div>
                <div className="experience-highlights">
                  {experience.highlights.map((item, index) => (
                    <div className="experience-point" key={item}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function GenericProjectVisual({ project }) {
  return (
    <div className="generic-project-visual">
      <span>PROBLEM</span><i />
      <span>ARCHITECTURE</span><i />
      <span>BUILD</span><i />
      <span>EVALUATE</span><i />
      <span>DELIVER</span>
      <small>{project.title}</small>
    </div>
  )
}

function ProjectCase({ project }) {
  const [expanded, setExpanded] = useState(false)
  const type = project.type || 'generic'

  return (
    <article className={`project-case project-case-${type}`}>
      <Reveal className="project-case-head">
        <div className="project-number">PROJECT / {project.id}</div>
        <div className="project-title-row">
          <div>
            <h3>{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
          <span className="project-role-pill">{project.status || 'PROJECT'}</span>
        </div>
        <p className="project-description">{project.description}</p>
      </Reveal>

      <Reveal className="project-proof-grid" delay={.04}>
        <div className="project-proof-card project-proof-role">
          <span className="proof-label">MY ROLE</span>
          <strong>{project.role}</strong>
          <p>明确个人负责边界，避免把团队成果等同于个人贡献。</p>
        </div>
        <div className="project-proof-card">
          <span className="proof-label">OWNERSHIP</span>
          <div className="ownership-tags">
            {project.ownership.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="project-proof-card">
          <span className="proof-label">ENGINEERING EVIDENCE</span>
          <ul className="evidence-list">
            {project.evidence.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </Reveal>

      <div className="project-showcase">
        <Reveal className="project-visual" delay={.05}>
          {type === 'agent' ? <AgentDiagram compact /> : type === 'rag' ? <RagPipeline /> : <GenericProjectVisual project={project} />}
        </Reveal>
        <Reveal className="project-metrics" delay={.1}>
          {project.metrics.map((metric) => (
            <div className="project-metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal className="project-decisions" delay={.11}>
        <div className="project-subsection-heading">
          <span>ENGINEERING DECISIONS</span>
          <p>不仅展示“用了什么”，也展示“为什么这样设计”。</p>
        </div>
        <div className="decision-grid">
          {project.decisions.map((decision, index) => (
            <div className="decision-card" key={decision.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h4>{decision.title}</h4>
              <p><strong>Problem</strong>{decision.problem}</p>
              <p><strong>Decision</strong>{decision.decision}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="project-stack" delay={.12}>
        <span>TECH STACK</span>
        <div>
          {project.stack.map((item) => <Badge key={item}>{item}</Badge>)}
        </div>
      </Reveal>

      <Reveal className="project-details" delay={.15}>
        <button className="details-toggle" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
          <span>{expanded ? '收起完整工程细节' : '查看完整工程细节'}</span>
          <ChevronDown className={expanded ? 'rotate' : ''} size={18} />
        </button>
        <motion.div
          className="details-panel"
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: .42, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="details-grid">
            {project.bullets.map((item, index) => (
              <div className="detail-item" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Reveal>
    </article>
  )
}

function Projects() {
  return (
    <section className="page-section projects-section" id="projects">
      <div className="site-container">
        <SectionHeader
          index="03"
          eyebrow="SELECTED WORK"
          title="用项目证明工程能力，而不是堆技术名词。"
          description="项目按 Role → Ownership → Evidence → Architecture → Engineering Decisions 组织，让面试官快速判断个人贡献、工程深度和设计取舍。"
        />
        <div className="project-list">
          {projects.map((project) => <ProjectCase project={project} key={project.id} />)}
        </div>
      </div>
    </section>
  )
}

const expertiseIcons = { network: Network, database: Database, code: Code2, terminal: Terminal }

function Skills() {
  return (
    <section className="page-section section-soft" id="skills">
      <div className="site-container">
        <SectionHeader
          index="04"
          eyebrow="TECH STACK"
          title="围绕 Agent 落地组织能力，而不是技能百分比。"
          description="技术栈按系统职责分组：Agent Runtime、知识工程、模型推理与后端工程化，共同服务生产级大模型应用。"
        />

        <div className="skills-bento">
          {expertise.map((group, index) => {
            const Icon = expertiseIcons[group.icon] || Code2
            return (
              <Reveal className={`skill-card skill-card-${index + 1}`} key={group.title} delay={index * .05}>
                <div className="skill-card-top">
                  <div className="skill-icon"><Icon size={21} /></div>
                  <span>{group.eyebrow}</span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="skill-tags">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="skill-used-in">
                  <span>USED IN</span>
                  <div>{group.usedIn.map((item) => <strong key={item}>{item}</strong>)}</div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Principles() {
  return (
    <section className="page-section principles-section">
      <div className="site-container">
        <SectionHeader
          index="05"
          eyebrow="ENGINEERING MINDSET"
          title="我更关注系统长期运行时，会发生什么。"
          description="Agent 的价值来自连续任务中的稳定决策与执行。工程设计要同时处理正确路径与失败路径。"
        />
        <div className="principles-grid">
          {principles.map((item, index) => (
            <Reveal className="principle-card" key={item.title} delay={index * .05}>
              <div className="principle-index">{item.index}</div>
              <h3>{item.title}</h3>
              <strong>{item.cn}</strong>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="education-section">
      <div className="site-container">
        <Reveal className="education-card">
          <div className="education-icon"><GraduationCap size={23} /></div>
          <div>
            <span className="education-kicker">EDUCATION</span>
            <h3>{education.school}</h3>
            <p>{education.major} · {education.degree}</p>
          </div>
          <span className="education-period">{education.period}</span>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="site-container">
        <Reveal className="contact-card">
          <div className="contact-kicker"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
          <h2>Let’s build intelligent<br /><span>systems that actually run.</span></h2>
          <p>如果你正在寻找 AI Agent / 大模型应用开发方向的工程师，欢迎联系我交流岗位或项目机会。</p>

          <div className="contact-actions">
            <a className="button button-primary button-large" href={`mailto:${profile.email}`}>
              <Mail size={18} /> {profile.email}
            </a>
            <a className="button button-ghost button-large" href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon size={18} /> GitHub
            </a>
            <a className="button button-ghost button-large" href={resumeUrl} download>
              <Download size={18} /> Resume PDF
            </a>
          </div>

          <div className="contact-meta-row">
            <span>{profile.location}</span>
            <i />
            <span>{profile.experience}</span>
            <i />
            <span>{profile.availability}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="site-container footer-inner">
        <div>
          <strong>YANG HUIYAO</strong>
          <span>AI Agent / LLM Application Engineer</span>
        </div>
        <span>© 2026 · Built with React, Vite & Motion</span>
      </div>
    </footer>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('portfolio-theme') || 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.classList.toggle('light', theme === 'light')
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const structuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    address: { '@type': 'PostalAddress', addressLocality: profile.location },
    email: `mailto:${profile.email}`,
    sameAs: [profile.github],
  }), [])

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)
    return () => script.remove()
  }, [structuredData])

  return (
    <div className="app-shell">
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} resumeUrl={resumeUrl} githubUrl={profile.github} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Principles />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
