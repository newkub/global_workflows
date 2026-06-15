---
title: Windsurf System Environment
description: ความสามารถและ features ของ Windsurf system environment
auto_execution_mode: 3
---

## Goal

อธิบายสิ่งที่ Windsurf system environment สามารถทำได้และ capabilities ที่มีให้ใช้

## Scope

ครอบคลุม MCP servers, global workflows, global rules, skills, และ IDE integration

## Execute

### 1. MCP Servers (Model Context Protocol)

Windsurf รองรับ MCP servers สำหรับเชื่อมต่อกับ external tools และ services:

**Available MCP Servers:**
- **better-fullstack** - Scaffold fullstack projects ข้าม ecosystems (TypeScript, Rust, Python, Go, Java, Elixir)
- **chrome-devtools** - Browser automation ผ่าน Chrome DevTools Protocol
- **deepwiki** - AI-powered documentation สำหรับ GitHub repositories
- **grep** - Fast code search ด้วย ripgrep
- **io.windsurf/cloudflare-docs** - Cloudflare documentation search
- **io.windsurf/deepwiki** - DeepWiki MCP สำหรับ GitHub repositories
- **io.windsurf/github-mcp-server** - GitHub API integration (issues, PRs, repositories)
- **linear** - Linear project management integration
- **next-devtools** - Next.js development tools และ diagnostics
- **sequential-thinking** - Deep thinking และ problem-solving
- **vueuse** - VueUse composables documentation

**Use Cases:**
- Connect external APIs และ services
- Browser automation และ testing
- GitHub operations (issues, PRs, repositories)
- Project management (Linear)
- Documentation search และ query
- Code search และ analysis

### 2. Global Workflows

Global workflows คือ automation scripts ที่ใช้ได้ทั่วทั้ง workspaces:

**Workflow Categories:**
- **Development workflows** - `/run-build`, `/run-test`, `/run-lint`, `/run-dev`
- **Analysis workflows** - `/analyze-project`, `/analyze-errors`, `/analyze-features`
- **Review workflows** - `/review-codebase`, `/review-security`, `/review-performance`
- **Refactoring workflows** - `/refactor`, `/restructure`, `/relocation`
- **Deployment workflows** - `/deploy-to-vercel`, `/deploy-to-cloudflare-worker`
- **Documentation workflows** - `/write-readme`, `/write-how-to`, `/write-spec`
- **Skill workflows** - `/write-devin-skills`, `/write-missing-skills-from-deps`
- **Research workflows** - `/deep-research`, `/learn-from-web`

**Use Cases:**
- Automate repetitive tasks
- Standardize development processes
- Code quality checks
- Documentation generation
- Research และ learning

### 3. Global Rules

Global rules คือ guidelines ที่ใช้ได้ทั่วทั้ง workspaces:

**Rule Categories:**
- **Development guidelines** - `/follow-best-practice`, `/follow-clean-architecture`
- **Language-specific rules** - `/follow-rust`, `/follow-python`, `/follow-typescript`
- **Framework-specific rules** - `/follow-nextjs`, `/follow-nuxt`, `/follow-vue`
- **Tool-specific rules** - `/follow-biome`, `/follow-eslint`, `/follow-vitest`
- **Architecture rules** - `/follow-monorepo`, `/follow-microservices`
- **Code quality rules** - `/follow-code-quality`, `/follow-functional-programming`

**Use Cases:**
- Maintain code consistency
- Enforce best practices
- Standardize architecture patterns
- Reduce technical debt

### 4. Skills

Skills คือ knowledge base สำหรับ specific libraries, frameworks, หรือ tools:

**Skill Types:**
- **Library skills** - `lib-*` (เช่น lib-shadcn-solid, lib-zaidan)
- **Framework skills** - `framework-*` (เช่น framework-solid-start)
- **Language skills** - `lang-*` (เช่น lang-rust, lang-python)
- **Runtime skills** - `runtime-*` (เช่น runtime-bun)
- **CLI skills** - `cli-*` (เช่น cli-bun)
- **Guide skills** - `guide-*` (เช่น guide-clean-architecture)
- **Flow skills** - `flow-*` (เช่น flow-dev-workflows)

**Use Cases:**
- Quick reference สำหรับ libraries/frameworks
- Best practices และ patterns
- Installation และ configuration guides
- API references และ examples

### 5. IDE Integration

Windsurf ผสานรวมกับ IDE ผ่าน Cascade AI agent:

**Features:**
- **File operations** - Read, write, edit files
- **Code search** - Grep, find_by_name
- **Terminal commands** - Run commands ใน project directory
- **Browser automation** - Playwright ผ่าน chrome-devtools MCP
- **Git operations** - Commit, push, branch management ผ่าน GitHub MCP
- **Project analysis** - Analyze codebase structure และ dependencies

**Use Cases:**
- Code editing และ refactoring
- Debugging และ testing
- Build และ deployment
- Documentation generation

### 6. AI Capabilities

Cascade AI agent มี capabilities พิเศษ:

**Core Capabilities:**
- **Multi-tool coordination** - ใช้หลาย tools พร้อมกัน
- **Context management** - เก็บ memories และ project context
- **Task planning** - วางแผนและ execute complex tasks
- **Error handling** - Debug และ fix errors อย่าง systematic
- **Code generation** - Generate code ตาม best practices

**Use Cases:**
- Complex feature implementation
- Systematic debugging
- Code refactoring
- Project setup แล scaffolding

## Rules

### 1. MCP Server Usage

เลือก MCP server ตาม use case:
- **GitHub operations** → `io.windsurf/github-mcp-server`
- **Browser automation** → `chrome-devtools`
- **Documentation search** → `deepwiki` หรือ `io.windsurf/cloudflare-docs`
- **Project scaffolding** → `better-fullstack`
- **Code search** → `grep`

### 2. Workflow Selection

เลือก workflow ตาม task type:
- **Development** → `/run-*` workflows
- **Analysis** → `/analyze-*` workflows
- **Review** → `/review-*` workflows
- **Refactoring** → `/refactor-*` workflows
- **Deployment** → `/deploy-*` workflows

### 3. Skill Loading

Load skill ตาม technology stack:
- **Solid.js** → `solid-js`, `uno-css`, `biome`
- **Rust** → `rust`, `cargo`, `clippy`
- **Bun** → `bun`, `bunup`
- **Tauri** → `tauri`

### 4. Global Rules Application

Apply global rules ตาม context:
- **Language** → `/follow-{language}`
- **Framework** → `/follow-{framework}`
- **Tool** → `/follow-{tool}`
- **Architecture** → `/follow-{architecture}`

## Expected Outcome

- เข้าใจ capabilities ของ Windsurf system environment
- เลือกใช้ tools, workflows, skills ที่เหมาะสม
- ใช้ MCP servers อย่างมีประสิทธิภาพ
- Automate tasks ด้วย global workflows
- รักษา code quality ด้วย global rules
