# 贡献指南

感谢您对 AuroZeon 项目的关注！我们欢迎所有形式的贡献，包括但不限于：

- 🐛 Bug 报告
- 💡 功能建议
- 📝 文档改进
- 🎨 设计优化
- 🔧 代码贡献

## 开始贡献

### 1. Fork 项目

1. 访问项目 GitHub 页面
2. 点击右上角的 "Fork" 按钮
3. 克隆您的 fork 到本地：

```bash
git clone https://github.com/your-username/aurozeon-site.git
cd aurozeon-site
```

### 2. 设置开发环境

```bash
# 安装依赖
npm install

# 初始化项目
npm run project-setup
npm run theme-setup

# 启动开发服务器
npm run dev
```

### 3. 创建功能分支

```bash
git checkout -b feature/your-feature-name
# 或者
git checkout -b fix/your-bug-fix
```

## 开发规范

### 代码风格

- 使用 Prettier 格式化代码：`npm run format`
- 遵循现有的代码结构和命名约定
- 添加适当的注释和文档

### 提交信息

使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```
feat: 添加新功能
fix: 修复 bug
docs: 更新文档
style: 代码格式调整
refactor: 代码重构
test: 添加测试
chore: 构建过程或辅助工具的变动
```

### 测试

在提交 Pull Request 之前，请确保：

1. 代码能够正常构建：`npm run build`
2. 开发服务器正常运行：`npm run dev`
3. 没有明显的错误或警告

## 提交 Pull Request

### 1. 提交更改

```bash
git add .
git commit -m "feat: 添加新功能描述"
git push origin feature/your-feature-name
```

### 2. 创建 Pull Request

1. 访问您的 GitHub fork 页面
2. 点击 "Compare & pull request"
3. 填写 PR 描述，包括：
   - 更改的简要描述
   - 解决的问题
   - 测试情况
   - 相关截图（如果适用）

### 3. PR 模板

```markdown
## 更改描述

简要描述您的更改...

## 解决的问题

- 修复了什么问题
- 添加了什么功能

## 测试情况

- [ ] 本地测试通过
- [ ] 构建成功
- [ ] 没有破坏现有功能

## 截图（如果适用）

添加相关截图...

## 检查清单

- [ ] 代码遵循项目规范
- [ ] 添加了必要的文档
- [ ] 提交信息符合规范
- [ ] 没有引入新的依赖
```

## 问题报告

### Bug 报告

报告 bug 时，请包含以下信息：

1. **环境信息**
   - 操作系统
   - Node.js 版本
   - Hugo 版本
   - 浏览器（如果适用）

2. **重现步骤**
   - 详细的操作步骤
   - 预期结果
   - 实际结果

3. **错误信息**
   - 完整的错误日志
   - 控制台输出
   - 截图（如果适用）

### 功能建议

提出新功能建议时，请说明：

1. **功能描述**
   - 详细的功能说明
   - 使用场景
   - 预期效果

2. **实现考虑**
   - 技术可行性
   - 对现有功能的影响
   - 性能考虑

## 代码审查

### 审查流程

1. 所有 PR 都需要至少一名维护者的审查
2. 审查者会检查代码质量、功能和文档
3. 可能需要修改和重新提交

### 审查标准

- 代码质量和可读性
- 功能完整性和正确性
- 文档和注释的完整性
- 测试覆盖情况
- 性能影响

## 发布流程

### 版本管理

项目使用语义化版本控制：

- **主版本号**：不兼容的 API 修改
- **次版本号**：向下兼容的功能性新增
- **修订号**：向下兼容的问题修正

### 发布步骤

1. 更新版本号
2. 更新 CHANGELOG.md
3. 创建发布标签
4. 部署到生产环境

## 社区准则

### 行为准则

- 尊重所有贡献者
- 保持专业和友善的交流
- 欢迎新手和不同背景的贡献者
- 提供建设性的反馈

### 沟通渠道

- GitHub Issues：问题报告和讨论
- GitHub Discussions：功能讨论和想法分享
- Pull Requests：代码审查和协作

## 获取帮助

如果您在贡献过程中遇到问题：

1. 查看 [开发文档](DEVELOPMENT.md)
2. 搜索现有的 Issues 和 Discussions
3. 创建新的 Issue 寻求帮助
4. 联系项目维护者

## 致谢

感谢所有为 AuroZeon 项目做出贡献的开发者！

---

**注意**: 本指南会随着项目的发展而更新。如有疑问，请随时联系项目维护者。 