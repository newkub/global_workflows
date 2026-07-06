---
title: Follow Svelte Kit Architecture
description: จัดโครงสร้างโปรเจกต์ SvelteKit ตาม best practices และ Svelte 5 Runes
auto_execution_mode: 3
---


## Goal

จัดโครงสร้างโปรเจกต์ SvelteKit ตาม best practices และ reactive programming patterns

## Scope

ใช้สำหรับ SvelteKit projects ที่ใช้ Svelte 5 Runes และ file-based routing

## Execute

### 1. Setup Project Structure

สร้างโครงสร้างโปรเจกต์พื้นฐาน

1. สร้างโฟลเดอร์หลัก: `src/`, `static/`, `tests/`
2. สร้าง `src/lib/` สำหรับ reusable components และ utilities
3. สร้าง `src/lib/server/` สำหรับ server-only code
4. สร้าง `src/routes/` สำหรับ file-based routing
5. สร้าง `src/params/` สำหรับ param matchers
6. สร้าง `src/stores/` สำหรับ state management
7. สร้าง `src/utils/` สำหรับ utility functions
8. สร้าง `src/types/` สำหรับ TypeScript types

### 2. Configure SvelteKit

ตั้งค่า SvelteKit และ build tools

1. ติดตั้ง dependencies: `@sveltejs/kit`, `svelte`, `vite`
2. ตั้งค่า `svelte.config.js` หรือ `svelte.config.ts`
3. ตั้งค่า TypeScript config สำหรับ SvelteKit
4. เพิ่ม SvelteKit types ใน `tsconfig.json`
5. ตั้งค่า preprocessors สำหรับ TypeScript, SCSS, PostCSS

### 3. Implement File-Based Routing

ใช้ file-based routing ของ SvelteKit

1. สร้าง routes ใน `src/routes` ด้วย directory structure
2. ใช้ `+page.svelte` สำหรับ page components
3. ใช้ `+page.js` หรือ `+page.server.js` สำหรับ load functions
4. ใช้ `+layout.svelte` สำหรับ layouts
5. ใช้ `+error.svelte` สำหรับ error pages
6. ใช้ `+server.js` สำหรับ API endpoints
7. ใช้ `[slug]` สำหรับ dynamic routes

### 4. Implement Reactive Patterns

ใช้ reactive patterns ของ Svelte 5

1. ใช้ `$state` สำหรับ local reactive state
2. ใช้ `$derived` สำหรับ derived state
3. ใช้ `$effect` สำหรับ side effects
4. ใช้ `$props` สำหรับ component props
5. ใช้ `$bindable` สำหรับ two-way bindings
6. ใช้ Svelte stores สำหรับ global state

### 5. Component Organization

จัดระเบียบ components อย่างเหมาะสม

1. แยก components เป็น small, reusable units
2. ใช้ `$props` สำหรับ component API
3. ใช้ `{@render}` และ snippets สำหรับ composition
4. ใช้ context API สำหรับ prop drilling
5. ใช้ dynamic components สำหรับ conditional rendering

### 6. State Management

จัดการ state อย่างมีประสิทธิภาพ

1. หลีกเลี่ยง shared state บน server
2. ใช้ load functions สำหรับ data loading
3. ใช้ `page.data` สำหรับ passing data ไปยัง components
4. ใช้ Svelte stores สำหรับ client-side state
5. ใช้ `writable` stores สำหรับ mutable state
6. ใช้ `readable` stores สำหรับ read-only state
7. ใช้ `derived` stores สำหรับ computed values

## File Structure

```
src/
├── lib/                # Reusable components and utilities
│   ├── components/     # UI components
│   ├── server/         # Server-only code
│   └── utils/          # Utility functions
├── routes/             # File-based routing
├── params/             # Param matchers
├── stores/             # State management
├── types/              # TypeScript types
├── app.html            # Root layout
├── error.html          # Error page
├── hooks.client.js     # Client hooks
├── hooks.server.js     # Server hooks
└── service-worker.js  # Service worker
static/                 # Static assets
tests/                  # Test files
```

## File Patterns

| Folder | File | Purpose | Pattern |
|--------|------|---------|---------|
| `src/lib/components` | `*.svelte` | Reusable components | `PascalCase.svelte` |
| `src/lib/server` | `*.ts` | Server-only code | `camelCase.ts` |
| `src/lib/utils` | `*.ts` | Utility functions | `camelCase.ts` |
| `src/routes` | `+page.svelte` | Page components | `+page.svelte` |
| `src/routes` | `+page.js` | Universal load functions | `+page.js` |
| `src/routes` | `+page.server.js` | Server load functions | `+page.server.js` |
| `src/routes` | `+layout.svelte` | Layout components | `+layout.svelte` |
| `src/routes` | `+error.svelte` | Error pages | `+error.svelte` |
| `src/routes` | `+server.js` | API endpoints | `+server.js` |
| `src/stores` | `*.ts` | State management | `camelCase.ts` |
| `src/types` | `*.ts` | TypeScript types | `PascalCase.ts` |

## Rules

### 1. Project Structure

ตั้งค่า project structure ตามมาตรฐาน SvelteKit:

- ใช้ `src/lib` สำหรับ reusable code
- ใช้ `src/lib/server` สำหรับ server-only code
- ใช้ `src/routes` สำหรับ file-based routing
- ใช้ `src/params` สำหรับ param matchers
- ใช้ `static` สำหรับ static assets
- ใช้ `tests` สำหรับ test files

### 2. File-Based Routing

ใช้ file-based routing ของ SvelteKit:

- ใช้ `+page.svelte` สำหรับ page components
- ใช้ `+page.js` สำหรับ universal load functions
- ใช้ `+page.server.js` สำหรับ server load functions
- ใช้ `+layout.svelte` สำหรับ layouts
- ใช้ `+error.svelte` สำหรับ error pages
- ใช้ `+server.js` สำหรับ API endpoints
- ใช้ `[slug]` สำหรับ dynamic routes

### 3. Svelte 5 Runes

ใช้ Svelte 5 Runes สำหรับ reactivity:

- ใช้ `$state` สำหรับ local reactive state
- ใช้ `$derived` สำหรับ derived state
- ใช้ `$effect` สำหรับ side effects
- ใช้ `$props` สำหรับ component props
- ใช้ `$bindable` สำหรับ two-way bindings
- หลีกเลี่ยง legacy reactivity (`let`, `$:`)

### 4. State Management

จัดการ state อย่างถูกต้อง:

- หลีกเลี่ยง shared state บน server
- ใช้ load functions สำหรับ data loading
- ใช้ `page.data` สำหรับ passing data
- ใช้ Svelte stores สำหรับ client-side state
- หลีกเลี่ยง side-effects ใน load functions

### 5. Component Development

พัฒนา components ตาม best practices:

- ใช้ `.svelte` พร้อม `lang="ts"` สำหรับทุก components
- กำหนด types สำหรับ props ด้วย `$props`
- ใช้ snippets แทน slots
- ใช้ context API สำหรับ deep prop passing
- ใช้ UnoCSS สำหรับ styling

### 6. Related Workflows

เชื่อมโยงกับ workflows ที่เกี่ยวข้อง:

- ทำ `/follow-svelte-kit` สำหรับ SvelteKit setup
- ทำ `/unocss` สำหรับ styling
- ทำ `/follow-vite` สำหรับ Vite configuration

## Expected Outcome

- โครงสร้างโปรเจกต์ SvelteKit ที่ถูกต้อง
- File-based routing ที่เป็นระเบียบ
- Svelte 5 Runes ใช้งานถูกต้อง
- State management ที่ปลอดภัย
- Component organization ที่ดี
- TypeScript support ครบถ้วน
