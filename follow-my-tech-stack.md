---

title: My Tech Stack

description: สรุป tech stack ที่ใช้ในการพัฒนา จัดกลุ่มตาม ecosystem

auto_execution_mode: 3

related_workflows:
  - /use-lib-better
  - /analyze-project

---

## Goal

สรุป tech stack ที่ใช้ในการพัฒนา จัดกลุ่มตาม ecosystem เพื่อให้เห็นภาพรวมและง่ายต่อการอ้างอิง

## Scope

ครอบคลุม runtime, frameworks, libraries, tools และ utilities ที่ใช้ในการพัฒนา

## Execute

### 1. Identify Tech Stack

ระบุ tools และ frameworks ที่ใช้:

1. ระบุ runtime และ build tools (Bun, tsdown, Rolldown)
2. ระบุ backend frameworks และ ORM (ElysiaJS, Hono, Nitro, Drizzle)
3. ระบุ frontend frameworks และ state management (Vue, Nuxt, Pinia, TanStack)
4. ระบุ ecosystem libraries (VueUse, Nuxt UI, shadcn-vue)
5. ระบุ development tools (Biome, Vitest, Playwright, Moonrepo)

### 2. Document Tech Stack

สร้างรายการสรุป:

1. จัดกลุ่มตาม ecosystem ใน Rules
2. เพิ่ม description และ use case สำหรับแต่ละ tool
3. อัปเดตเมื่อมีการเปลี่ยนแปลง

## Rules

### 1. Runtime And Build Tools

จัดกลุ่ม runtime และ build tools:

- Runtime: `Bun` - Fast JavaScript runtime
- Build Tool: `tsdown` - TypeScript bundler with Rolldown
- Build Tool: `Rolldown` - Fast bundler by Rollup

### 2. Backend Frameworks

จัดกลุ่ม backend frameworks:

- Framework: `ElysiaJS` - Bun-first ergonomic framework
- Framework: `Hono` - Edge-first web framework
- Framework: `Nitro` - Universal server adapter
- ORM: `Drizzle` - Headless TypeScript ORM

### 3. Deployment Platforms

จัดกลุ่ม deployment platforms:

- Deployment: `NuxtHub` - Nuxt deployment platform
- Runtime: `Cloudflare Workers` - Edge computing platform
- CLI: `Wrangler` - Cloudflare CLI tool
- Storage: `Cloudflare KV` - Key-value storage
- Database: `Cloudflare D1` - SQLite database
- Storage: `Cloudflare R2` - Object storage
- AI: `Workers AI` - AI inference at edge

### 4. Vue Ecosystem

จัดกลุ่ม Vue ecosystem:

- Framework: `Vue 3` - Progressive JavaScript framework
- Framework: `Nuxt 3` - Vue meta-framework
- State Management: `Pinia` - Vue state management
- Utilities: `VueUse` - Vue composition utilities
- UI Library: `Nuxt UI` - Vue component library
- UI Library: `shadcn-vue` - Vue component system

### 5. TanStack Ecosystem

จัดกลุ่ม TanStack ecosystem:

- State Management: `TanStack Query` - Async state management
- State Management: `TanStack Store` - Client state management
- Router: `TanStack Router` - Type-safe router
- Table: `TanStack Table` - Headless table component
- Form: `TanStack Form` - Form state management
- Virtual: `TanStack Virtual` - Virtual scrolling
- Hotkeys: `TanStack Hotkeys` - Keyboard shortcuts
- Parser: `TanStack Parser` - SQL parser
- CLI: `TanStack CLI` - Developer tools
- Database: `TanStack DB` - Type-safe database ORM
- Framework: `TanStack Start` - Full-stack framework

### 6. Development Tools

จัดกลุ่ม development tools:

- Linter: `Biome` - Fast linter and formatter
- Linter: `ESLint` - JavaScript linter
- Testing: `Vitest` - Unit testing framework
- Testing: `Playwright` - E2E testing framework
- Build System: `Moonrepo` - Build system for monorepos
- Build System: `Turborepo` - Monorepo build system

### 7. Documentation And Quality

จัดกลุ่ม documentation และ quality:

- Documentation: `Docus` - Documentation site generator
- Type Safety: `Zod` - Schema validation
- Type Safety: `Valibot` - Modular schema validation
- Release: `Auto` - Automated releases

### 8. Security And Authentication

จัดกลุ่ม security และ authentication:

- Auth: `WorkOS` - Enterprise auth platform
- Auth: `Better Auth` - TypeScript authentication
- Auth: `Auth.js` - Flexible auth library

### 9. AI SDKs

จัดกลุ่ม AI SDKs:

- AI SDK: `Mastra` - AI agent framework

## Expected Outcome

- รายการสรุป tech stack ที่ครบถ้วน
- จัดกลุ่มตาม ecosystem อย่างชัดเจน
- ง่ายต่อการอ้างอิงและอัปเดต
- เห็นภาพรวมของ tools ที่ใช้

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่อัปเดตรายการเมื่อเปลี่ยน tech stack
- จัดกลุ่ม tools ไม่ถูกต้อง
- ไม่ระบุ use case ชัดเจน
- ทิ้ง tools ที่ไม่ได้ใช้ไว้ในรายการ

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ ไม่อัปเดตรายการเป็นปัจจุบัน
- ❌ จัดกลุ่ม tools แบบสุ่ม
- ❌ ไม่ระบุ description หรือ use case
- ❌ ทิ้ง tools ที่ obsolete ไว้ในรายการ

