import { FileText, Scissors, Search, SlidersHorizontal, PlugZap, Bot } from 'lucide-react'

const steps = [
  { icon: FileText, label: 'Documents', sub: 'PDF · Word · HTML' },
  { icon: Scissors, label: 'Domain Chunking', sub: 'RFC · ABNF · Fields' },
  { icon: Search, label: 'Hybrid Retrieval', sub: 'BGE-M3 · FAISS · BM25' },
  { icon: SlidersHorizontal, label: 'Cross-Encoder', sub: 'Rerank · Filter' },
  { icon: PlugZap, label: 'MCP Tools', sub: 'Traceable knowledge' },
  { icon: Bot, label: 'AI Agent', sub: 'Understand · Analyze · Generate' },
]

export default function RagPipeline() {
  return (
    <div className="rag-pipeline">
      <div className="rag-flow-line" aria-hidden="true" />
      {steps.map((step, index) => {
        const Icon = step.icon
        return (
          <div className="rag-step" key={step.label}>
            <div className="rag-step-index">0{index + 1}</div>
            <div className="rag-step-icon"><Icon size={18} /></div>
            <div className="rag-step-content">
              <strong>{step.label}</strong>
              <span>{step.sub}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
