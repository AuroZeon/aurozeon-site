# AuroZeon 网站开发文档

## 项目概述

AuroZeon 是一个基于 [Hugo](https://gohugo.io/) 静态网站生成器构建的现代化网站，使用 [Tailwind CSS](https://tailwindcss.com/) 作为样式框架。该项目采用模块化设计，具有响应式布局和现代化的用户界面。

### 技术栈

- **静态网站生成器**: Hugo
- **CSS 框架**: Tailwind CSS
- **包管理器**: npm/yarn
- **构建工具**: PostCSS, Autoprefixer
- **代码格式化**: Prettier
- **部署平台**: 支持 Netlify, Vercel, AWS Amplify

## 环境要求

### 必需软件

- **Node.js**: 版本 16.0 或更高
- **npm** 或 **yarn**: 包管理器
- **Hugo**: 版本 0.100.0 或更高 (推荐使用扩展版本)

### 安装 Hugo

#### macOS (使用 Homebrew)
```bash
brew install hugo
```

#### Ubuntu/Debian
```bash
sudo apt-get update
sudo apt-get install hugo
```

#### Windows (使用 Chocolatey)
```bash
choco install hugo-extended
```

#### 手动安装
访问 [Hugo Releases](https://github.com/gohugoio/hugo/releases) 下载适合您系统的版本。

## 项目设置

### 1. 克隆项目
```bash
git clone <repository-url>
cd aurozeon-site
```

### 2. 安装依赖
```bash
npm install
# 或者使用 yarn
yarn install
```

### 3. 初始化项目
```bash
npm run project-setup
npm run theme-setup
```

## 开发流程

### 启动开发服务器

```bash
npm run dev
```

这将在 `http://localhost:1313` 启动开发服务器，支持热重载。

### 构建项目

```bash
npm run build
```

构建后的文件将生成在 `public/` 目录中。

### 预览生产版本

```bash
npm run preview
```

这将启动一个生产环境的预览服务器。

## 项目结构

```
aurozeon-site/
├── config/                 # Hugo 配置文件
│   └── _default/
│       ├── languages.toml  # 多语言配置
│       ├── module.toml     # 模块配置
│       └── params.toml     # 站点参数
├── content/                # 内容文件
│   ├── _index.md          # 首页内容
│   ├── posts/             # 博客文章
│   └── solutions/         # 解决方案页面
├── themes/aurozeon/       # 自定义主题
│   ├── assets/            # 静态资源 (CSS, JS, 图片)
│   ├── layouts/           # HTML 模板
│   ├── static/            # 静态文件
│   └── data/              # 数据文件
├── hugo.toml              # Hugo 主配置
├── tailwind.config.js     # Tailwind CSS 配置
├── package.json           # Node.js 依赖
└── scripts/               # 构建脚本
```

## 内容管理

### 创建新页面

1. 在 `content/` 目录下创建 Markdown 文件
2. 添加 front matter (YAML 头部信息)

```markdown
---
title: "页面标题"
description: "页面描述"
date: 2024-01-01
draft: false
---

页面内容...
```

### 创建新博客文章

```bash
hugo new posts/my-new-post.md
```

### 创建新解决方案页面

```bash
hugo new solutions/my-solution.md
```

## 主题开发

### 自定义样式

1. 编辑 `themes/aurozeon/assets/css/main.css`
2. 使用 Tailwind CSS 类名
3. 运行 `npm run dev` 查看更改

### 修改布局

布局文件位于 `themes/aurozeon/layouts/` 目录：

- `_default/`: 默认布局模板
- `partials/`: 可重用的部分模板
- `index.html`: 首页模板

### 添加新组件

1. 在 `layouts/partials/` 创建新的部分模板
2. 在需要的地方使用 `{{ partial "component-name.html" . }}`

## 配置管理

### 站点配置

主要配置文件：`hugo.toml`

```toml
baseURL = 'https://www.aurozeon.com/'
languageCode = 'en-us'
title = 'AuroZeon'
theme = 'aurozeon'
```

### 主题配置

主题配置文件：`themes/aurozeon/hugo.toml`

### Tailwind CSS 配置

配置文件：`tailwind.config.js`

- 自定义颜色
- 字体设置
- 响应式断点
- 插件配置

## 构建和部署

### 本地构建

```bash
npm run build
```

### 部署到 Netlify

1. 连接 GitHub 仓库到 Netlify
2. 设置构建命令：`npm run build`
3. 设置发布目录：`public`

### 部署到 Vercel

1. 连接 GitHub 仓库到 Vercel
2. 框架预设选择：Hugo
3. 构建命令：`npm run build`
4. 输出目录：`public`

### 部署到 AWS Amplify

1. 连接 GitHub 仓库到 AWS Amplify
2. 构建设置：
   - 构建命令：`npm run build`
   - 输出目录：`public`

## 性能优化

### 图片优化

- 使用 WebP 格式
- 实现响应式图片
- 使用 Hugo 的图片处理功能

### CSS 优化

- 启用 CSS 压缩
- 使用 PurgeCSS 移除未使用的样式
- 优化字体加载

### JavaScript 优化

- 最小化 JavaScript 文件
- 使用异步加载
- 实现代码分割

## 调试和故障排除

### 常见问题

1. **Hugo 服务器无法启动**
   - 检查 Hugo 版本
   - 验证配置文件语法

2. **样式不生效**
   - 检查 Tailwind CSS 配置
   - 重新构建 CSS 文件

3. **构建失败**
   - 检查 Markdown 语法
   - 验证 front matter 格式

### 调试命令

```bash
# 详细构建信息
hugo --verbose

# 检查配置
hugo config

# 列出所有内容
hugo list all
```

## 代码规范

### 文件命名

- 使用小写字母和连字符
- 避免空格和特殊字符
- 使用有意义的名称

### Markdown 规范

- 使用标准的 Markdown 语法
- 保持一致的缩进
- 添加适当的空行

### HTML 模板规范

- 使用语义化标签
- 保持代码整洁
- 添加适当的注释

## 版本控制

### Git 工作流

1. 创建功能分支
2. 提交更改
3. 创建 Pull Request
4. 代码审查
5. 合并到主分支

### 提交信息规范

```
feat: 添加新功能
fix: 修复 bug
docs: 更新文档
style: 代码格式调整
refactor: 代码重构
test: 添加测试
chore: 构建过程或辅助工具的变动
```

## 贡献指南

### 如何贡献

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

### 代码审查

- 所有更改都需要代码审查
- 确保代码符合项目规范
- 测试所有功能

## 支持和帮助

### 文档资源

- [Hugo 官方文档](https://gohugo.io/documentation/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [项目 README](README.md)

### 社区支持

- GitHub Issues
- 项目讨论区
- 技术博客

---

**注意**: 本文档会随着项目的发展而更新。请定期查看最新版本。 