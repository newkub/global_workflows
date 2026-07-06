---
title: Windsurf System Environment
description: ความสามารถและ features ของ Windsurf system environment
auto_execution_mode: 3
related_workflows:
  - /use-workflows
  - /add-windsurf-mcp
---

## Goal

อธิบาย capabilities ของ Windsurf system environment และวิธีใช้งาน MCP servers, global workflows, global rules, skills, และ IDE integration

## Scope

ครอบคลุม MCP servers, global workflows, global rules, skills, และ IDE integration

## Execute

### 1. Use MCP Servers

เลือก MCP server ตาม use case ที่ต้องการ

1. GitHub operations → ใช้ `io.windsurf/github-mcp-server` สำหรับ issues, PRs, repositories
2. Browser automation → ใช้ `chrome-devtools` สำหรับ Playwright และ testing
3. Documentation search → ใช้ `deepwiki` หรือ `io.windsurf/cloudflare-docs` สำหรับ docs
4. Project scaffolding → ใช้ `better-fullstack` สำหรับ scaffold projects
5. Code search → ใช้ `grep` สำหรับ fast code search
6. Project management → ใช้ `linear` สำหรับ Linear integration
7. Vue composables → ใช้ `vueuse` สำหรับ VueUse documentation

### 2. Use Global Workflows

เลือก workflow ตาม task type ที่ต้องการ

1. Development → ใช้ `/run-*` workflows (build, test, lint, dev)
2. Analysis → ใช้ `/analyze-*` workflows (project, errors, features)
3. Review → ใช้ `/review-*` workflows (codebase, security, performance)
4. Refactoring → ใช้ `/refactor-*` workflows (workspace, restructure, relocation)
5. Deployment → ใช้ `/deploy-*` workflows (vercel, cloudflare-worker)
6. Documentation → ใช้ `/write-*` workflows (readme, how-to, spec)
7. Skills → ใช้ `/write-*` workflows สำหรับ skills
8. Research → ใช้ `/deep-research`, `/learn-from-web`

ทำ `/use-workflows` สำหรับวิธีค้นหาและใช้งาน global workflows

### 3. Apply Global Rules

Apply global rules ตาม context ของงาน

1. Language → ใช้ `/follow-{language}` (rust, python, typescript)
2. Framework → ใช้ `/follow-{framework}` (nextjs, nuxt, vue, solid-start)
3. Tool → ใช้ `/follow-{tool}` (biome, eslint, vitest, drizzle)
4. Architecture → ใช้ `/follow-{architecture}` (monorepo, microservices, clean-architecture)
5. Best practices → ใช้ `/follow-best-practice`, `/follow-code-quality`

### 4. Load Skills

Load skill ตาม technology stack ที่ใช้

1. Solid.js → load `solid-js`, `uno-css`, `biome`
2. Rust → load `rust`, `cargo`, `clippy`
3. Bun → load `bun`, `bunup`
4. Tauri → load `tauri`
5. Next.js → load `nextjs`, `react`
6. Vue → load `vue`, `vueuse`

### 5. Use IDE Integration

ใช้ IDE integration ผ่าน Cascade AI agent

1. File operations → Read, write, edit files
2. Code search → Grep, find_by_name
3. Terminal commands → Run commands ใน project directory
4. Browser automation → Playwright ผ่าน chrome-devtools MCP
5. Git operations → Commit, push, branch management ผ่าน GitHub MCP
6. Project analysis → Analyze codebase structure และ dependencies

## Rules

ทำตาม `/use-workflows` สำหรับการใช้ global workflows

- เลือก MCP server ตาม use case ที่เหมาะสม
- เลือก workflow ตาม task type
- Load skill ตาม technology stack
- Apply global rules ตาม context
- ใช้ IDE integration อย่างมีประสิทธิภาพ
- ทำ `/add-windsurf-mcp` สำหรับเพิ่ม MCP server ใหม่

## Expected Outcome

- เข้าใจ capabilities ของ Windsurf system environment
- เลือกใช้ MCP servers, workflows, skills ที่เหมาะสม
- ใช้ global workflows อย่างมีประสิทธิภาพ
- Apply global rules ตาม context
- ใช้ IDE integration อย่างถูกต้อง
