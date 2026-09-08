# Yang Huiyao - AI Agent / LLM Portfolio V3

个人简历 / 工程 Portfolio，使用 React + Vite + Tailwind CSS + Motion 构建，并通过 GitHub Actions 自动发布到 GitHub Pages。

## V3 主要变化

- 将经验口径统一为 `2+ 年企业级大模型应用经验`，避免与 2024.07 - 至今的时间线冲突。
- 公网页面不再直接展示手机号，新增 GitHub 入口。
- Experience 改为数组驱动，后续新增公司 / 实习无需改页面组件。
- Projects 改为数组自动渲染，后续新增项目无需手写 `<ProjectCase />`。
- 项目展示增加 `MY ROLE / OWNERSHIP / ENGINEERING EVIDENCE / ENGINEERING DECISIONS`，更适合技术面试官快速判断个人贡献和设计取舍。
- Skills 增加 `USED IN`，把技能与真实项目证据关联起来。
- 调整正文对比度、标题字号、Section 间距和中文换行策略。
- GitHub Actions 增加 production build 校验，避免再次把 `/src/main.jsx` 源码直接发布到 Pages。

## 本地运行

建议 Node.js >= 20.19。

```bash
npm install
npm run dev
```

浏览器打开终端给出的地址，通常是：

```text
http://localhost:5173/
```

正式构建检查：

```bash
npm run build
npm run preview
```

## 最常修改的文件

### `src/data.js`

个人信息、数据指标、工作经历、项目、技能和教育经历都集中在这里。

### 修改个人信息

```js
export const profile = {
  name: '杨惠瑶',
  role: 'AI Agent / 大模型应用开发工程师',
  location: '北京',
  experience: '2+ 年企业级大模型应用经验',
  email: '1548824224@qq.com',
  github: 'https://github.com/yanghuiyao779-blip',
}
```

## 新增一段工作经历

在 `experiences` 数组里继续增加一个对象即可：

```js
export const experiences = [
  {
    company: '当前公司',
    role: '大模型应用开发 / 核心研发',
    period: '2024.07 — 至今',
    label: 'CURRENT POSITION',
    products: ['产品 A', '产品 B'],
    highlights: [
      '职责 / 结果 1',
      '职责 / 结果 2',
    ],
  },
  {
    company: '新公司或实习公司',
    role: 'AI Engineer',
    period: '2023.07 — 2024.06',
    label: 'PREVIOUS POSITION',
    products: ['项目名称'],
    highlights: [
      '职责 / 结果 1',
      '职责 / 结果 2',
    ],
  },
]
```

页面会自动生成新的时间线卡片，不需要修改 `App.jsx`。

## 新增一个项目

在 `projects` 数组末尾增加一个对象：

```js
{
  id: '03',
  type: 'generic', // 可用 agent / rag / generic
  slug: 'new-project',
  title: '新项目名称',
  subtitle: 'One-line English subtitle',
  role: 'AI Engineer / Core R&D',
  status: 'Enterprise Project',
  description: '项目背景与要解决的问题。',

  ownership: [
    '模块 A',
    '模块 B',
  ],

  evidence: [
    '可核验的工程证据 / 结果 1',
    '可核验的工程证据 / 结果 2',
  ],

  decisions: [
    {
      title: '关键设计决策',
      problem: '为什么这是一个问题？',
      decision: '你最终如何设计，以及为什么。',
    },
  ],

  stack: ['Python', 'FastAPI'],

  metrics: [
    { value: 'Metric', label: '可公开的数据或能力' },
  ],

  bullets: [
    '完整工程细节 1',
    '完整工程细节 2',
  ],
}
```

`projects.map(...)` 会自动渲染所有项目。

### 项目数据填写原则

优先顺序：

1. 真实结果 / 可核验指标
2. 个人 Ownership
3. 关键工程决策和 Trade-off
4. 系统架构
5. 技术栈

不要为了页面好看编造指标。公司数据不能公开时，可以写评测方法、能力范围或脱敏结果。

## 新增技能

`expertise` 也是数组。每个分组支持：

```js
{
  icon: 'network', // network / database / code / terminal
  title: 'Agent Systems',
  eyebrow: 'Core',
  description: '能力说明',
  items: ['Skill A', 'Skill B'],
  usedIn: ['真实项目 / 生产场景'],
}
```

如果新增未知 icon，页面会自动 fallback 到 Code 图标。

## 替换头像

覆盖：

```text
public/avatar.png
```

保持文件名不变。

## 替换 PDF 简历

覆盖：

```text
public/Yang-Huiyao-Resume.pdf
```

保持文件名不变。

注意：GitHub Pages 是公网。如果 PDF 中包含完整手机号，任何访问者都可以下载并看到。需要隐私保护时，请上传脱敏后的公开版 PDF。

## GitHub Pages 部署

仓库推荐命名：

```text
yanghuiyao779-blip.github.io
```

GitHub：

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

之后每次 push 到 `main` 都会自动构建并发布：

```bash
git add .
git commit -m "update portfolio"
git push
```

部署成功后访问：

```text
https://yanghuiyao779-blip.github.io/
```

## GitHub Pages 路径

`vite.config.js` 会自动识别：

- `username.github.io` -> `/`
- 普通仓库 `portfolio` -> `/portfolio/`

所以同一份代码也可以部署到普通 Project Pages。

## 发布故障检查

如果页面白屏，浏览器 Console 不应该出现：

```text
/src/main.jsx
text/jsx MIME type
```

正确生产页面应该加载：

```text
/assets/index-xxxx.js
/assets/index-xxxx.css
```

Workflow 中已经增加 `Verify production build`，会在 `dist/index.html` 仍引用 `/src/main.jsx` 时直接失败，避免发布错误版本。
