import { motion, useReducedMotion } from 'motion/react'
import { BrainCircuit, Wrench, Database, ShieldCheck } from 'lucide-react'

function Node({ className, icon: Icon, label, sub }) {
  return (
    <div className={`agent-node ${className}`}>
      <div className="agent-node-icon"><Icon size={16} /></div>
      <div>
        <div className="agent-node-label">{label}</div>
        <div className="agent-node-sub">{sub}</div>
      </div>
    </div>
  )
}

export default function AgentDiagram({ compact = false }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className={`agent-diagram ${compact ? 'agent-diagram-compact' : ''}`}>
      <div className="diagram-grid" aria-hidden="true" />
      <div className="diagram-glow diagram-glow-a" />
      <div className="diagram-glow diagram-glow-b" />

      <div className="diagram-caption">
        <span className="status-dot" />
        AGENT RUNTIME / LIVE GRAPH
      </div>

      <svg className="agent-lines" viewBox="0 0 620 410" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(91,140,255,.25)" />
            <stop offset=".55" stopColor="rgba(139,92,246,.75)" />
            <stop offset="1" stopColor="rgba(34,211,238,.25)" />
          </linearGradient>
        </defs>
        <path d="M310 118 L165 215" />
        <path d="M310 118 L455 215" />
        <path d="M165 275 L165 330" />
        <path d="M455 275 L455 330" />
        <path d="M225 354 L395 354" />
      </svg>

      {!reduceMotion && (
        <>
          <motion.div className="data-pulse pulse-1" animate={{ offsetDistance: ['0%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="data-pulse pulse-2" animate={{ offsetDistance: ['0%', '100%'] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'linear', delay: .7 }} />
        </>
      )}

      <Node className="node-root" icon={BrainCircuit} label="Root Agent" sub="Plan · Delegate · Merge" />
      <Node className="node-left" icon={BrainCircuit} label="Sub Agent" sub="Scoped capability" />
      <Node className="node-right" icon={BrainCircuit} label="Sub Agent" sub="Long task execution" />
      <Node className="node-tools" icon={Wrench} label="30+ Tools" sub="Schema · Retry · Healing" />
      <Node className="node-rag" icon={Database} label="RAG / MCP" sub="Knowledge · Context" />

      <div className="sandbox-pill"><ShieldCheck size={14} /> Docker Sandbox</div>
    </div>
  )
}
