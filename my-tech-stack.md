---

title: My Tech Stack

description: สรุป tech stack ที่ใช้ในการพัฒนา จัดกลุ่มตาม ecosystem

auto_execution_mode: 3

---

## Goal

สรุป tech stack ที่ใช้ในการพัฒนา จัดกลุ่มตาม ecosystem เพื่อให้เห็นภาพรวมและง่ายต่อการอ้างอิง

## Scope

ครอบคลุม runtime, frameworks, libraries, tools และ utilities ที่ใช้ในการพัฒนา

## Execute

### 1. Identify Runtime And Build Tools

1. ระบุ runtime หลักที่ใช้ (Bun, Node.js)
2. ระบุ build tools และ bundlers (bunup, tsdown, Rolldown)
3. ระบุ package managers ที่ใช้

### 2. Identify Backend Frameworks

1. ระบุ backend frameworks (ElysiaJS, Hono, Nitro)
2. ระบุ ORM ที่ใช้ (Drizzle)
3. ระบุ use cases สำหรับแต่ละ framework

### 3. Identify Frontend Frameworks

1. ระบุ framework หลัก (Vue, React, Next.js, Nuxt)
2. ระบุ state management ที่ใช้ (Pinia, Zustand, TanStack Query)
3. ระบุ UI libraries และ component systems

### 4. Identify Ecosystem Libraries

1. ระบุ Vue ecosystem (VueUse, Nuxt UI, shadcn-vue)
2. ระบุ TanStack ecosystem (TanStack Query, TanStack Start)
3. ระบุ utilities และ helper libraries

### 5. Identify Development Tools

1. ระบุ linting และ formatting tools (Biome, ESLint, Prettier)
2. ระบุ testing frameworks (Vitest, Playwright)
3. ระบุ build systems (Moonrepo, Turborepo)

### 6. Document In Table

1. จัดกลุ่ม tech stack ตาม ecosystem
2. สร้างตารางสรุปพร้อม description และ use case
3. อัปเดตเมื่อมีการเปลี่ยนแปลง

## Rules

### 1. Runtime And Build Tools

| Category | Tool | Description | Use Case |
|----------|------|-------------|----------|
| Runtime | Bun | Fast JavaScript runtime | Server-side execution, package management |
| Build Tool | bunup | Bun native bundler | Bundle TypeScript libraries |
| Build Tool | tsdown | TypeScript bundler with Rolldown | Bundle libraries with type declarations |
| Build Tool | Rolldown | Fast bundler by Rollup | High-performance bundling |

### 2. Backend Frameworks

| Category | Tool | Description | Use Case |
|----------|------|-------------|----------|
| Framework | ElysiaJS | Bun-first ergonomic framework | Fast TypeScript backends with end-to-end type safety |
| Framework | Hono | Edge-first web framework | Multi-runtime APIs, edge computing |
| Framework | Nitro | Universal server adapter | Meta-frameworks, universal deployment |
| ORM | Drizzle | Headless TypeScript ORM | Database operations with SQL-like syntax |

### 3. Deployment Platforms

| Category | Tool | Description | Use Case |
|----------|------|-------------|----------|
| Deployment | NuxtHub | Nuxt deployment platform | Deploy Nuxt apps on Cloudflare, multi-vendor |
| Runtime | Cloudflare Workers | Edge computing platform | Serverless functions at edge |
| CLI | Wrangler | Cloudflare CLI tool | Deploy and manage Workers |
| Storage | Cloudflare KV | Key-value storage | Edge data storage |
| Database | Cloudflare D1 | SQLite database | Serverless database |
| Storage | Cloudflare R2 | Object storage | S3-compatible storage |
| AI | Workers AI | AI inference at edge | AI model inference |

### 4. Rust Ecosystem

| Category | Tool | Description | Use Case |
|----------|------|-------------|----------|
| Web Framework | Axum | Async web framework | High-performance web servers |
| Web Framework | Actix Web | Actor-based framework | Scalable web applications |
| Web Framework | Rocket | Web framework with guards | Type-safe web applications |
| Frontend | Dioxus | Rust GUI framework | Cross-platform apps, WASM |
| Async Runtime | Tokio | Async runtime | Async I/O operations |
| Database | SeaORM | Async ORM | Database operations |
| Database | SQLx | Async SQL toolkit | Type-safe SQL queries |
| CLI | Clap | Command-line parser | CLI applications |
| Serialization | Serde | Serialization framework | Data serialization |

### 5. Vue Ecosystem

| Category | Tool | Description | Use Case |
|----------|------|-------------|----------|
| Framework | Vue 3 | Progressive JavaScript framework | Frontend development |
| Framework | Nuxt 3 | Vue meta-framework | SSR, file-based routing |
| State Management | Pinia | Vue state management | Global state management |
| Utilities | VueUse | Vue composition utilities | Composable functions |
| UI Library | Nuxt UI | Vue component library | UI components with Tailwind |
| UI Library | shadcn-vue | Vue component system | Accessible components |

### 6. TanStack Ecosystem

| Category | Tool | Description | Use Case |
|----------|------|-------------|----------|
| State Management | TanStack Query | Async state management | Server state management |
| State Management | TanStack Store | Client state management | Global state management |
| Router | TanStack Router | Type-safe router | Client-side routing |
| Table | TanStack Table | Headless table component | Data tables with sorting/filtering |
| Form | TanStack Form | Form state management | Form validation and handling |
| Virtual | TanStack Virtual | Virtual scrolling | Large list rendering |
| Hotkeys | TanStack Hotkeys | Keyboard shortcuts | Keyboard event handling |
| Parser | TanStack Parser | SQL parser | Query parsing and analysis |
| CLI | TanStack CLI | Developer tools | Code generation and scaffolding |
| Database | TanStack DB | Type-safe database ORM | Database operations |
| Framework | TanStack Start | Full-stack framework | React full-stack development |

### 7. Development Tools

| Category | Tool | Description | Use Case |
|----------|------|-------------|----------|
| Linter | Biome | Fast linter and formatter | Code linting, formatting |
| Linter | ESLint | JavaScript linter | Code quality checks |
| Testing | Vitest | Unit testing framework | Unit tests |
| Testing | Playwright | E2E testing framework | End-to-end tests |
| Build System | Moonrepo | Build system for monorepos | Task management, caching |
| Build System | Turborepo | Monorepo build system | Build optimization |

### 9. Functional Programming

| Category | Tool | Description | Use Case |
|----------|------|-------------|----------|
| FP Library | ts-belt | Fast, modern FP utility library | Data-first utilities, high performance |
| FP Library | fp-ts | Functional programming in TypeScript | Comprehensive FP patterns |
| Effect System | Effect-TS | Effect system, structured concurrency | Async workflows, error handling |

### 10. Documentation And Quality

| Category | Tool | Description | Use Case |
|----------|------|-------------|----------|
| Documentation | Docus | Documentation site generator | Documentation with Nuxt Content |
| Type Safety | Zod | Schema validation | Runtime type validation |
| Type Safety | Valibot | Modular schema validation | Edge functions, small bundles |
| Release | Auto | Automated releases | Version management, changelog |

### 11. State Management

| Category | Tool | Description | Use Case |
|----------|------|-------------|----------|
| State Management | Nano Stores | Tiny state manager (286 bytes) | Cross-framework, lightweight |
| State Management | Pinia | Vue state management | Vue 3 global state |
| State Management | TanStack Store | Client state management | React global state |
| State Management | TanStack Query | Async state management | Server state management |

### 12. Security And Authentication

| Category | Tool | Description | Use Case |
|----------|------|-------------|----------|
| Auth | WorkOS | Enterprise auth platform | SSO, RBAC, user management |
| Auth | Better Auth | TypeScript authentication | Comprehensive auth solution |
| Auth | Auth.js | Flexible auth library | Next.js, React apps |

### 13. AI SDKs

| Category | Tool | Description | Use Case |
|----------|------|-------------|----------|
| AI SDK | Mastra | AI agent framework | Build AI agents, workflows |

## Expected Outcome

- ตารางสรุป tech stack ที่ครบถ้วน
- จัดกลุ่มตาม ecosystem อย่างชัดเจน
- ง่ายต่อการอ้างอิงและอัปเดต
- เห็นภาพรวมของ tools ที่ใช้

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่อัปเดตตารางเมื่อเปลี่ยน tech stack
- จัดกลุ่ม tools ไม่ถูกต้อง
- ไม่ระบุ use case ชัดเจน
- ทิ้ง tools ที่ไม่ได้ใช้ไว้ในตาราง

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ ไม่อัปเดตตารางเป็นปัจจุบัน
- ❌ จัดกลุ่ม tools แบบสุ่ม
- ❌ ไม่ระบุ description หรือ use case
- ❌ ทิ้ง tools ที่ obsolete ไว้ในตาราง
