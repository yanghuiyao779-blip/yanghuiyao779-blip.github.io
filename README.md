# Yang Huiyao · AI Agent / LLM Engineer Portfolio

基于个人简历重新设计的工程师 Portfolio，视觉方向为 **Dark AI / Developer Portfolio**。

## 技术栈

- React 19
- Vite 8
- Tailwind CSS 4
- Motion
- Lucide React
- GitHub Actions + GitHub Pages

## 设计特点

- 深蓝黑 + Electric Blue + Violet + Cyan 的克制科技配色
- Hero 中使用动态 Agent Runtime 架构图，而不是装饰性粒子特效
- 核心数据（2 年企业级 LLM、30+ Tools、72+ Skills、2 个 AI Agent 0→1 项目）前置
- Multi-Agent 项目使用 Agent Graph 视觉表达
- RAG 项目使用 Domain-aware Retrieval Pipeline 视觉表达
- 工程细节默认折叠，确保首页有信息密度但不形成文字墙
- 深色 / 浅色主题切换
- PC / Tablet / Mobile 响应式布局
- `prefers-reduced-motion` 可访问性处理
- 简历 PDF 下载

## 本地运行

要求 Node.js >= 20.19。

```bash
npm install
npm run dev
```

终端会显示本地地址，一般为：

```text
http://localhost:5173
```

生产构建：

```bash
npm run build
npm run preview
```

构建产物位于：

```text
dist/
```

## GitHub Pages 部署

项目已经包含：

```text
.github/workflows/deploy.yml
```

无需手写 Actions。

### 方案 A：个人主页仓库（推荐）

如果 GitHub 用户名是 `yourname`，创建仓库：

```text
yourname.github.io
```

部署后访问：

```text
https://yourname.github.io/
```

### 方案 B：普通项目仓库

例如仓库名：

```text
portfolio
```

部署后访问：

```text
https://yourname.github.io/portfolio/
```

`vite.config.js` 已经在 GitHub Actions 环境中根据 `GITHUB_REPOSITORY` 自动判断 Base Path：

- `yourname.github.io` → `/`
- 普通仓库 `portfolio` → `/portfolio/`

因此通常不用手动修改 `base`。

### GitHub 后台操作

1. 创建仓库并上传整个项目。
2. 确保默认分支是 `main`。
3. 打开仓库 **Settings → Pages**。
4. 在 **Build and deployment → Source** 选择 **GitHub Actions**。
5. Push 到 `main` 后打开仓库的 **Actions** 页面。
6. 等待 `Deploy Portfolio to GitHub Pages` 工作流完成。
7. 返回 **Settings → Pages**，页面顶部会显示正式访问地址。

## 首次上传命令

```bash
git init
git add .
git commit -m "feat: publish personal AI portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

之后修改只需要：

```bash
git add .
git commit -m "update portfolio"
git push
```

GitHub Actions 会自动重新构建和部署。

## 自定义域名

如果以后给 GitHub Pages 绑定自定义域名（例如 `huiyao.dev`），Vite 应使用根路径 `/`。

可以把 Workflow 的 Build 步骤改为：

```yaml
- name: Build
  run: npm run build
  env:
    VITE_BASE_PATH: /
```

然后在 GitHub **Settings → Pages → Custom domain** 配置你的域名。

## 修改个人信息

核心简历数据集中在：

```text
src/data.js
```

姓名、邮箱、手机号、工作经历、技能和项目文字优先在这里修改。

页面结构：

```text
src/App.jsx
```

全局视觉样式：

```text
src/styles.css
```

头像：

```text
public/avatar.png
```

PDF 简历：

```text
public/Yang-Huiyao-Resume.pdf
```

## 隐私提醒

当前网站按提供的简历保留了手机号和邮箱。GitHub Pages 是公开网站，如不希望手机号被公开搜索，可以：

1. 在 `src/data.js` 删除 / 遮盖手机号；
2. 同时替换 `public/Yang-Huiyao-Resume.pdf` 中的公开版本。
