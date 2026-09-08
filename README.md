# Yang Huiyao · AI Engineering Portfolio

一个面向技术面试官、招聘方和开发者的个人作品集网站。项目用单页叙事展示 AI Agent / 大模型应用工程师的经历、项目责任边界、工程决策与技术栈，重点回答三个问题：**做过什么、个人负责什么、为什么这样设计**。

> 这是用于呈现个人经历的前端 Portfolio，不包含案例中企业项目的源代码、数据或生产环境配置。

## 项目亮点

- **面试官友好的项目表达**：每个案例按 `Role → Ownership → Engineering Evidence → Architecture → Engineering Decisions` 展开，区分个人贡献与团队项目背景。
- **聚焦生产级 LLM 工程**：页面呈现 Multi-Agent Runtime、Tool Calling、动态 Skill、Memory / Context、RAG、MCP、长任务生命周期、模型推理与私有化交付等能力。
- **两个可视化案例**：
  - 自动化漏洞挖掘 Multi-Agent 平台：展示 Root / Sub Agent、Tools、RAG / MCP 与 Docker Sandbox 的协作关系。
  - 通信协议安全分析 RAG 平台：展示从文档解析、领域切分、混合检索、重排到 MCP Tools / Agent 消费的链路。
- **内容与视图分离**：个人信息、经历、项目、技术栈、教育背景全部集中在 `src/data.js`，新增内容通常无需改动页面组件。
- **完整的访问体验**：响应式布局、移动端导航、明暗主题、锚点导航、高亮当前区块、入场动画，以及“减少动态效果”系统偏好的兼容。
- **可部署性**：内置 GitHub Pages 工作流；Vite 会自动处理用户主页仓库和普通 Project Pages 仓库的基础路径。

## 页面内容

| 区块 | 面向访客传达的信息 |
| --- | --- |
| Hero / Stats | 候选人定位、开放机会状态，以及公开的能力规模数据 |
| About / Experience | 企业级大模型应用研发背景、当前职责与交付范围 |
| Selected Work | 两个脱敏企业案例的背景、个人负责模块、工程证据、指标与设计取舍 |
| Tech Stack | 按 Agent Systems、RAG / Knowledge、Model & Inference、Backend Engineering 分类的技术能力 |
| Engineering Mindset | Reliable、Observable、Context-aware、Production-ready 四项工程原则 |
| Contact | 邮箱、GitHub 与可下载的公开版 PDF 简历 |

## 技术栈

- **框架与构建**：React 19、Vite 8、Node.js 20.19+
- **样式**：Tailwind CSS 4（通过 Vite 插件接入）与自定义 CSS Design Tokens
- **交互与动画**：Motion、Lucide React
- **发布**：GitHub Actions、GitHub Pages

## 本地运行

前置条件：Node.js `>= 20.19.0`。

```bash
npm install
npm run dev
```

开发服务器启动后，访问终端显示的地址（通常为 `http://localhost:5173`）。

构建并本地预览生产版本：

```bash
npm run build
npm run preview
```

## 内容维护

日常更新优先修改 [src/data.js](src/data.js)，其中包含：

- `profile`：姓名、职位、地点、联系方式和简介
- `stats`：首页能力数据
- `experiences`：工作经历时间线
- `projects`：项目背景、个人职责、工程证据、设计决策、指标与技术栈
- `expertise`、`principles`、`education`：技能、工程理念和教育经历

页面会依据数组自动渲染经历、项目和能力卡片。新增项目时，建议优先填写可公开验证的个人 Ownership、工程取舍和能力范围；不要将无法公开或无法确认的数据写成量化成果。

静态资源位于 `public/`：

- `avatar.png`：头像
- `Yang-Huiyao-Resume.pdf`：供访客下载的简历
- `favicon.svg`：站点图标

公开部署前请确认 PDF 和数据文件中不含不希望公开的联系方式、客户信息或内部资料。

## 项目结构

```text
src/
├── App.jsx                  # 页面区块与数据渲染逻辑
├── data.js                  # 可维护的简历与案例内容
├── styles.css               # 主题变量、响应式布局与视觉样式
└── components/
    ├── AgentDiagram.jsx     # Multi-Agent 架构示意
    ├── RagPipeline.jsx      # RAG 链路示意
    ├── Navbar.jsx           # 导航、移动端菜单与当前区块状态
    ├── Reveal.jsx           # 尊重减少动态效果偏好的入场动画
    └── ThemeToggle.jsx      # 明暗主题切换
public/                      # 头像、PDF 简历、图标等静态资源
.github/workflows/deploy.yml # GitHub Pages 自动部署
```

## 部署到 GitHub Pages

仓库已提供 [deploy.yml](.github/workflows/deploy.yml)。向 `main` 分支推送代码，或手动触发 workflow，即会安装依赖、构建、校验产物并部署到 GitHub Pages。

首次使用时，在仓库 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions**。

`vite.config.js` 会根据 GitHub Actions 环境自动设置路径：

- `{username}.github.io` 仓库使用 `/`
- 普通仓库使用 `/{repository-name}/`

如需在其他路径发布，可设置 `VITE_BASE_PATH` 覆盖默认值。

## 可用脚本

| 命令 | 用途 |
| --- | --- |
| `npm run dev` | 启动本地开发服务器 |
| `npm run build` | 构建生产产物到 `dist/` |
| `npm run preview` | 预览生产构建结果 |

## 设计取向

这个项目刻意不使用技能进度条或技术名词墙。对于 AI Agent 候选人，更有价值的信息是：复杂任务如何拆解，工具调用失败如何恢复，长上下文如何控制，检索质量如何评测，以及系统怎样从 PoC 走到可部署、可观察、可验收的交付状态。页面的内容结构与交互均围绕这些信息设计。
