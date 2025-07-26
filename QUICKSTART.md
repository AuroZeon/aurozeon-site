# AuroZeon 快速开始指南

## 🚀 5分钟快速上手

### 1. 环境准备

确保您的系统已安装：
- Node.js (16.0+)
- Hugo (0.100.0+)
- Git

### 2. 克隆并设置项目

```bash
# 克隆项目
git clone <repository-url>
cd aurozeon-site

# 安装依赖
npm install

# 初始化项目
npm run project-setup
npm run theme-setup
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:1313` 查看网站。

## 📝 常用命令

| 命令 | 描述 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产版本 |
| `npm run format` | 格式化代码 |
| `hugo new posts/my-post.md` | 创建新博客文章 |

## 🎨 自定义主题

### 修改颜色主题

编辑 `tailwind.config.js` 中的颜色配置：

```javascript
colors: {
  primary: '#your-primary-color',
  secondary: '#your-secondary-color',
  // ...
}
```

### 添加新页面

1. 在 `content/` 目录创建 Markdown 文件
2. 添加 front matter：

```markdown
---
title: "页面标题"
description: "页面描述"
date: 2024-01-01
draft: false
---

页面内容...
```

## 🔧 常见问题

### Q: 样式不生效？
A: 运行 `npm run dev` 重新构建 CSS

### Q: Hugo 服务器启动失败？
A: 检查 Hugo 版本，确保使用 0.100.0+

### Q: 如何添加新组件？
A: 在 `themes/aurozeon/layouts/partials/` 创建模板文件

## 📚 下一步

- 阅读完整的 [开发文档](DEVELOPMENT.md)
- 查看 [Hugo 官方文档](https://gohugo.io/documentation/)
- 学习 [Tailwind CSS](https://tailwindcss.com/docs)

---

**提示**: 遇到问题？查看 [DEVELOPMENT.md](DEVELOPMENT.md) 获取详细帮助。 