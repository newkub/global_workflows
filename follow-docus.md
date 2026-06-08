---
title: Follow Docus
description: ตั้งค่า Docus สำหรับ documentation site ด้วย Nuxt Content และ Nuxt UI
auto_execution_mode: 3
---

ตั้งค่า Docus documentation framework ที่ใช้ Nuxt 4, Nuxt Content และ Nuxt UI พร้อม MDC syntax

## Goal

ตั้งค่า Docus documentation framework ที่ใช้ Nuxt 4, Nuxt Content และ Nuxt UI พร้อม MDC syntax

## Execute

### 1. Project Setup

1. ใช้ `npx create-docus <project-name>` สร้างโปรเจกต์
2. เลือก template:
   - `default` - สำหรับ single-language documentation
   - `i18n` - รองรับหลายภาษา
3. ติดตั้ง dependencies ด้วย bun
4. แก้ไข `package.json` scripts ให้ใช้ `nuxt` แทน `nuxi`:
   - `dev`: `nuxt dev`
   - `build`: `nuxt build`
   - `preview`: `nuxt preview`
5. รัน `bun run dev` เริ่ม dev server ที่ port 3000

### 2. Project Structure

สร้างโครงสร้างตามมาตรฐาน Docus:

```
my-docs/
├── content/              # Markdown content (บังคับ)
│   ├── index.md          # Landing page
│   └── guide/
│       └── introduction.md
├── public/               # Static assets (บังคับ)
├── app.config.ts         # Docus configuration
├── nuxt.config.ts        # Nuxt configuration (optional)
└── package.json          # Dependencies
```

### 3. Content Directory

1. สร้าง `content/` สำหรับ Markdown files
2. Docus สร้าง routes อัตโนมัติจาก file structure:
   - `content/index.md` → `/`
   - `content/getting-started.md` → `/getting-started`
   - `content/guide/intro.md` → `/guide/intro`
3. ใช้ `docs/` subfolder สำหรับ prefix URL ด้วย `/docs`
4. รองรับ i18n ด้วยโครงสร้าง `content/en/`, `content/fr/`

### 4. Configuration

1. สร้าง `app.config.ts` สำหรับ Docus settings:

```typescript
export default defineAppConfig({
  docus: {
    locale: 'en',
  },
  seo: {
    title: 'My Docs',
    description: 'My documentation',
  },
  ui: {
    colors: {
      primary: 'green',
      secondary: 'sky',
    },
  },
  socials: {
    x: 'https://x.com/username',
    github: 'https://github.com/username',
  },
})
```

2. ใช้ `nuxt.config.ts` สำหรับ extend modules (optional):

```typescript
export default defineNuxtConfig({
  extends: ['docus'],
})
```

### 5. Writing Content

1. ใช้ frontmatter สำหรับทุกไฟล์:

```yaml
---
title: 'Page Title'
description: 'Page description'
---
```

2. ใช้ MDC components:
   - Callouts: `::note`, `::tip`, `::warning`, `::caution`
   - Code groups: `::code-group`
   - Cards: `::card`, `::card-group`
   - Fields: `::field` สำหรับ API docs

3. ใช้ Markdown มาตรฐานผสม Vue components

### 6. Navigation

1. Docus สร้าง sidebar navigation อัตโนมัติจาก `content/` structure
2. ใช้ `_dir.yml` กำหนดหมวดหมู่:

```yaml
title: 'Guide'
navigation:
  icon: 'i-lucide-book'
```

3. ใช้ frontmatter สำหรับ custom navigation:

```yaml
---
navigation:
  title: 'Custom Title'
  icon: 'i-lucide-star'
---
```

4. Full-text search ทำงานอัตโนมัติ

### 7. Deployment

1. Static site: `npx nuxt generate`
2. SSR: `npx nuxt build`
3. Deploy ได้ทุก Nuxt-compatible platform
4. Nuxt Studio สำหรับ hosting และ CMS

## Rules

### 1. Content

- ใช้ frontmatter สำหรับทุก Markdown file
- ใช้ MDC syntax สำหรับ components
- จัดโครงสร้าง `content/` ตาม navigation ที่ต้องการ

### 2. Configuration

- ตั้งค่าใน `app.config.ts` เท่านั้น
- ใช้ `defineAppConfig` สำหรับ type safety
- ไม่แก้ไข theme CSS โดยตรง ใช้ `ui.colors`

### 3. Navigation

- ใช้ file structure ควบคุม navigation
- ใช้ `_dir.yml` กำหนดหมวดหมู่
- ใช้ frontmatter สำหรับ custom properties

### 4. Layer Integration

- ใช้ `extends: ['docus']` ใน `nuxt.config.ts`
- สามารถเพิ่ม modules อื่นได้ตามต้องการ
- รองรับ full Nuxt project capabilities

## Expected Outcome

- Documentation site ที่ใช้ Docus
- Nuxt 4 + Nuxt Content + Nuxt UI
- Auto-generated navigation และ full-text search
- Dark mode และ SEO optimized
- Nuxt Studio compatible
- MDC syntax พร้อม Vue components
