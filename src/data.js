export const profile = {
  name: '杨惠瑶',
  englishName: 'Yang Huiyao',
  role: 'AI Agent / 大模型应用开发工程师',
  roleEn: 'AI Agent & LLM Application Engineer',
  location: '北京',
  experience: '2+ 年企业级大模型应用经验',
  education: '本科',
  availability: '一个月内到岗',
  email: '1548824224@qq.com',
  github: 'https://github.com/yanghuiyao779-blip',
  summary:
    '专注生产级 AI Agent、RAG 与大模型工程化，具备从需求分析、架构设计、核心研发、评测测试到私有化部署与客户验收的完整 0→1 落地经验。',
}

export const stats = [
  { value: '2+', label: '企业级大模型应用经验', note: 'Agent / LLM production delivery' },
  { value: '30+', label: 'Native Tools 接入', note: 'Tool Registry · Schema Validation' },
  { value: '72+', label: '场景化 Skills 动态加载', note: 'Capability boundary & prompt control' },
  { value: '2', label: 'AI Agent 项目 0→1', note: 'Design · Build · Deliver' },
]

export const expertise = [
  {
    icon: 'network',
    title: 'Agent Systems',
    eyebrow: 'Core',
    description: '围绕生产级 Agent Runtime 搭建可规划、可协作、可恢复、可观测的执行闭环。',
    items: [
      'Multi-Agent Runtime',
      'Agent Loop',
      'Task Planning',
      'Native Function Calling',
      'MCP',
      'Dynamic Skills',
      'Memory Management',
      'Context Engineering',
      'Tool Self-Healing',
    ],
    usedIn: ['安星 / 自动化漏洞挖掘 Multi-Agent 平台'],
  },
  {
    icon: 'database',
    title: 'RAG / Knowledge',
    eyebrow: 'Retrieval',
    description: '覆盖文档解析、领域切分、混合检索、重排、评测与增量索引的完整知识工程链路。',
    items: [
      'Document Parsing',
      'Domain-aware Chunking',
      'BGE-M3',
      'FAISS + BM25',
      'Cross-Encoder Rerank',
      'RAG Evaluation',
      'Incremental Indexing',
      'Metadata Filtering',
    ],
    usedIn: ['面向通信协议安全分析的领域 RAG 知识增强平台'],
  },
  {
    icon: 'code',
    title: 'Model & Inference',
    eyebrow: 'LLM Infra',
    description: '从模型接入、评测选型到推理服务与离线环境适配，关注效果、稳定性与部署可控性。',
    items: [
      'LiteLLM',
      'OpenAI-Compatible API',
      'vLLM',
      'Qwen / DeepSeek',
      'Embedding / Reranker',
      'Model Evaluation',
      'Token / Context Window',
      'Retry / Fallback',
    ],
    usedIn: ['统一 LLM Gateway', '8 × 海光 K100_AI 64 GB DCU 环境适配'],
  },
  {
    icon: 'terminal',
    title: 'Backend Engineering',
    eyebrow: 'Delivery',
    description: '用后端工程化能力支撑异步任务、生命周期、Tracing、服务化与私有化交付。',
    items: [
      'Python',
      'FastAPI',
      'Django',
      'asyncio',
      'RabbitMQ',
      'Redis',
      'PostgreSQL',
      'Docker',
      'Linux',
      'Agent Tracing',
    ],
    usedIn: ['Agent 服务化与任务生命周期', 'RAG 服务化与私有化交付'],
  },
]

export const experiences = [
  {
    company: '中科数测科技有限公司',
    role: '大模型应用开发 / 核心研发',
    period: '2024.07 — 至今',
    label: 'CURRENT POSITION',
    products: ['多功能漏洞挖掘智能体', '自动化模糊测试智能体'],
    highlights: [
      '负责企业级 AI Agent 架构与工程研发，落地任务规划、Multi-Agent 协作、Tool Calling、RAG、上下文管理、长任务执行与异常恢复。',
      '面向源码审计、Web 渗透、协议模糊测试与固件分析，将大模型推理、知识检索与安全工具链融合为自动化任务闭环。',
      '围绕 Prompt、上下文裁剪、知识检索、模型适配与效果评测持续迭代，提升复杂长链路任务的稳定性、准确性与执行效率。',
      '覆盖 PoC、真实任务评测、研发测试、前后端联调、模型服务适配、离线部署、复杂问题排查与客户验收。',
    ],
  },
]

export const projects = [
  {
    id: '01',
    type: 'agent',
    slug: 'agent-platform',
    title: '安星 / 自动化漏洞挖掘 Multi-Agent 平台',
    subtitle: 'Production-grade Multi-Agent Runtime for autonomous security analysis',
    role: 'LLM Agent Engine / Core R&D',
    status: 'Enterprise Project',
    description:
      '面向源码审计、Web 安全测试及自动化漏洞分析场景，建设 LLM Agent Engine 核心能力，通过自研 Multi-Agent Runtime、Tool Calling、动态 Skill、Context Engineering 与 Docker Sandbox，实现任务规划、工具执行、漏洞验证与报告生成的自动化闭环。',
    ownership: [
      'Multi-Agent Runtime',
      'Tool Calling Framework',
      'Memory Compression',
      'Dynamic Skills',
      'LLM Gateway',
      'Agent Tracing',
    ],
    evidence: [
      '通过 Tool Registry + Schema Validation 接入 30+ Native Tools，并支持 Tool Call 参数自动修复。',
      '支持 72+ 场景化 Skills 动态加载，通过 Skill / Tool 白名单减少无关 Prompt 注入并控制子 Agent 能力边界。',
      '基于 RabbitMQ 建立 Heartbeat、取消、失败恢复、结果回传与结构化 Trace，支撑长任务回放、问题定位和报告交付。',
    ],
    decisions: [
      {
        title: '分层 Agent 模型',
        problem: '复杂任务需要拆解、委派与结果汇总，同时避免能力边界失控。',
        decision: '使用 Root Agent / Sub Agent + Agent Graph 管理父子关系、运行状态和消息通信。',
      },
      {
        title: 'Schema-guided Self-Healing',
        problem: 'Tool 参数错误与长链路调用失败会直接中断任务。',
        decision: '将 Schema、错误原因和参数约束重新注入上下文，引导 LLM 修正 Tool Call，并结合超时、重试和异常处理。',
      },
      {
        title: 'Context / Memory Compression',
        problem: '长任务中 Tool Result、Error、Retry 与历史推理持续占用 Context Window。',
        decision: '按 Token 使用量触发多级压缩，差异化保留关键上下文，并提供本地 Extractive Fallback。',
      },
    ],
    stack: [
      'Python',
      'LiteLLM',
      'Pydantic',
      'FastAPI',
      'Multi-Agent',
      'Native Tool Calling',
      'RabbitMQ',
      'Docker',
      'asyncio',
    ],
    metrics: [
      { value: '30+', label: 'Native Tools Integrated' },
      { value: '72+', label: 'Dynamic Skills Supported' },
      { value: 'Lifecycle', label: 'Heartbeat · Cancel · Recovery' },
      { value: 'Trace', label: 'Thinking · Tool · Finding · Progress' },
    ],
    bullets: [
      '设计 Root Agent / Sub Agent 层级任务模型，通过 Agent Graph 管理父子关系、运行状态与消息通信，支持复杂任务拆解、委派与汇总。',
      '建设 Tool Calling Framework，以 Tool Registry + Schema Validation 实现动态注册、参数校验与 Function Calling 转换，接入 30+ Native Tools。',
      '为 Tool 参数错误和长链路失败设计自动恢复：将 Schema、错误原因与约束重新注入上下文，引导 LLM 自修复 Tool Call，并结合超时、重试与异常处理提升稳定性。',
      '建设长上下文与 Memory Compression：按 Context Window / Token 使用量动态多级压缩，对 Tool Result、Error、Retry 与历史推理差异化保留，并提供本地 Extractive Fallback。',
      '设计动态 Skill 体系，按源码审计、Web、渗透测试等场景配置 Skill / Tool 白名单，支持 Agent 按任务动态加载 70+ 场景化 Skills。',
      '封装 LiteLLM 统一 LLM Gateway；通过 Docker Sandbox + FastAPI Tool Server 隔离模型推理与 Shell / Python 等高风险工具执行。',
      '基于 RabbitMQ 实现任务消费、Heartbeat、取消、失败恢复与结果回传，并对 Thinking、Tool Call、Finding、Progress 等事件建立结构化 Trace。',
    ],
  },
  {
    id: '02',
    type: 'rag',
    slug: 'rag-platform',
    title: '面向通信协议安全分析的领域 RAG 知识增强平台',
    subtitle: 'Domain-aware RAG pipeline for protocol understanding & testing',
    role: 'RAG / Knowledge Engineering · Core R&D',
    status: 'Enterprise Project',
    description:
      '面向 RFC 标准协议及私有通信协议，将协议规范转换为可检索、可溯源知识，并通过 MCP 为大模型 Agent 提供协议理解、状态分析与测试用例生成能力。',
    ownership: [
      'Document Pipeline',
      'Domain-aware Chunking',
      'Hybrid Retrieval',
      'Rerank & Evaluation',
      'Incremental Indexing',
      'MCP Integration',
    ],
    evidence: [
      '构建 Ground Truth 测试集，并使用 Recall@K、MRR / NDCG 对 Dense / Hybrid / Rerank 链路进行离线评测与 Bad Case 分析。',
      '保留 Source / Page / Chunk Metadata，实现检索结果可溯源；通过文件指纹完成增量 Embedding 与 Source 级索引更新。',
      '将知识库构建、协议检索、消息和状态查询封装为 MCP Tools，并加入相关性过滤、上下文裁剪与索引缺失降级。',
    ],
    decisions: [
      {
        title: 'Domain-aware Chunking',
        problem: '固定长度切片会打断 RFC Section、ABNF、消息字段表等协议语义。',
        decision: '按 RFC Section、MUST / SHOULD / MAY、ABNF 与私有协议消息结构进行切分。',
      },
      {
        title: 'Hybrid Retrieval + Rerank',
        problem: '纯语义召回对字段名、状态码等精确术语不稳定。',
        decision: 'BGE-M3 + FAISS 做语义召回，BM25 补充精确术语，再通过 Cross-Encoder 二阶段精排。',
      },
      {
        title: 'Structured Protocol Manifest',
        problem: '纯非结构化 RAG 容易让模型猜测协议消息结构与状态关系。',
        decision: '抽取消息类型、字段长度、请求响应与状态关系，生成 Protocol Manifest 与 RAG 结果联合使用。',
      },
    ],
    stack: [
      'Python',
      'FastAPI',
      'LangChain',
      'FAISS',
      'BGE-M3',
      'BGE-Reranker',
      'BM25',
      'SQLite',
      'PyMuPDF',
      'MCP',
    ],
    metrics: [
      { value: 'Hybrid', label: 'Dense + BM25 Retrieval' },
      { value: '2-Stage', label: 'Retrieval + Cross-Encoder Rerank' },
      { value: 'Eval', label: 'Recall@K · MRR · NDCG' },
      { value: 'Incremental', label: 'Source-level Index Updates' },
    ],
    bullets: [
      '建设领域 RAG Pipeline，覆盖 PDF / Word / HTML / XML / JSON 文档解析、清洗、切片、Embedding、检索与重排，并保留 Source / Page / Chunk Metadata。',
      '针对协议文档按 RFC Section、MUST / SHOULD / MAY、ABNF 以及私有协议消息 / 字段表进行结构化切分，避免固定长度切片破坏协议语义。',
      '构建 BGE-M3 + FAISS 语义召回，结合 BM25 补充字段名、状态码等精确术语检索，再通过 Cross-Encoder 完成二阶段精排。',
      '构建 Ground Truth 离线评测集，使用 Recall@K、MRR / NDCG 评估 Dense / Hybrid / Rerank，并通过 Bad Case 持续优化 Chunk、TopK、融合权重与过滤规则。',
      '封装 Embedding / Rerank 推理层，兼容本地模型和 OpenAI-Compatible API，支持懒加载、Batch Encoding、CPU / CUDA 自动切换与多 Reranker Backend。',
      '使用 FAISS + SQLite DocStore 管理向量、原文与 Metadata，通过文件指纹识别增删改，完成增量 Embedding 与 Source 级索引更新。',
      '针对私有协议解析消息类型、Frame / Sub Type、字段长度、请求响应与状态关系，生成 Protocol Manifest，将非结构化 RAG 与确定性协议知识结合。',
      '将知识库构建、协议检索、消息和状态查询封装为 MCP Tools，并加入相关性过滤、上下文裁剪与索引缺失降级，降低无关知识造成的幻觉。',
      '基于 FastAPI 提供文档上传、异步建库、状态查询与文件管理接口，将协议知识接入 Agent 测试工作流，支撑协议建模和测试用例生成。',
    ],
  },
]

export const principles = [
  {
    index: '01',
    title: 'Reliable',
    cn: '先保证系统可持续执行',
    text: '对超时、重试、降级、异常恢复和长任务生命周期做工程化设计，而不是只优化一次成功的 Demo。',
  },
  {
    index: '02',
    title: 'Observable',
    cn: '让复杂链路可定位',
    text: '用结构化 Trace 记录 Thinking、Tool Call、Finding 与 Progress，为任务回放、问题定位和交付验收提供依据。',
  },
  {
    index: '03',
    title: 'Context-aware',
    cn: '让上下文真正服务任务',
    text: '通过动态 Skill、Context Window 管理、Memory Compression 与相关性过滤，减少无效 Prompt 和上下文噪声。',
  },
  {
    index: '04',
    title: 'Production-ready',
    cn: '从效果走向落地',
    text: '从模型选型、推理适配、服务化到离线私有部署与客户验收，把模型能力转化为可交付产品能力。',
  },
]

export const education = {
  school: '保定理工学院',
  major: '物联网工程',
  degree: '本科',
  period: '2020.07 — 2024.07',
}
