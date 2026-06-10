---
title: Follow VitePress

description: ตั้งค่า VitePress ด้วย UnoCSS, Shiki Twoslash, Group Icons

auto_execution_mode: 3
---

## Goal

ตั้งค่า VitePress สำหรับ documentation site พร้อม UnoCSS, Shiki Twoslash, Group Icons

## Execute

### 1. Project Initialization

1. ติดตั้ง `vitepress` dependencies
2. สร้าง `apps/docs/` directory
3. สร้าง `.vitepress/` config directory

### 2. VitePress Configuration

สร้าง `.vitepress/config.ts`:

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  description: 'Documentation site',
  lang: 'en-US',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Docs', link: '/docs/' },
      { text: 'API Reference', link: '/api/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Playground', link: '/playground/' },
      { text: 'Resources', link: '/resources/' }
    ],
    sidebar: {
      '/docs/': [
        { text: 'Getting Started', link: '/docs/getting-started' }
      ]
    }
  },
  markdown: {
    deadLinks: 'ignore'
  }
})
```

### 3. UnoCSS Integration

1. ทำ `/unocss` สำหรับ UnoCSS configuration

### 4. Theme Setup

สร้าง `.vitepress/theme/index.ts`:

```typescript
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register global components
  }
}
```

สร้าง `.vitepress/theme/style.css`:

```css
:root {
  --vp-c-brand: #3b82f6;
}
```

### 5. Package Scripts

เพิ่ม scripts ใน `package.json`:

```json
{
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "preview": "vitepress preview docs"
  }
}
```

### 6. Shiki Twoslash Integration

1. ติดตั้ง `@shikijs/vitepress-twoslash`
2. เพิ่ม `transformerTwoslash` ใน markdown config
3. เพิ่ม plugin ใน theme
4. import CSS สำหรับ twoslash styling

### 7. VitePress Plugin Group Icons

1. ติดตั้ง `@yuy1n/vitepress-plugin-group-icons`
2. เพิ่ม plugin ใน VitePress config

### 8. GitHub Actions Deployment

1. สร้าง `.github/workflows/deploy.yml`
2. ตั้งค่า deploy ไปยัง GitHub Pages
3. ตั้งค่า triggers สำหรับ push และ pull request

### 9. Home Page

สร้าง `index.md` พร้อม frontmatter ตาม VitePress default:

```yaml
---
layout: home

hero:
  name: My Docs
  text: Documentation site
  tagline: Beautiful documentation powered by VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /docs/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/your-repo

features:
  - title: Feature A
    details: Description for feature A
  - title: Feature B
    details: Description for feature B
  - title: Feature C
    details: Description for feature C
---
```

## Rules

### 1. Configuration Standards

- ใช้ `defineConfig` จาก `vitepress` สำหรับ type safety
- ตั้งค่า `lang: 'en-US'` หรือตาม project requirement
- ใช้ `deadLinks: 'ignore'` ใน markdown config
- ตั้งค่า nav และ sidebar ใน `themeConfig`

### 2. UnoCSS Integration

- ทำ `/unocss` สำหรับ UnoCSS configuration

### 3. Theme Customization

- extend DefaultTheme จาก `vitepress/theme`
- ใช้ `enhanceApp` hook สำหรับ register components
- ตั้งค่า CSS variables ใน `:root`

### 4. Package Scripts

- ใช้ `vitepress dev docs` สำหรับ development
- ใช้ `vitepress build docs` สำหรับ production
- ใช้ `vitepress preview docs` สำหรับ preview

### 5. Plugin Integration

- ใช้ `@shikijs/vitepress-twoslash` สำหรับ type hover
- ใช้ `@yuy1n/vitepress-plugin-group-icons` สำหรับ icons
- เพิ่ม plugins ใน config หรือ theme ตาม requirement

### 6. Content Standards

- ใช้ frontmatter สำหรับ metadata
- ใช้ `layout: home` สำหรับ landing page
- ตั้งค่า hero และ features ตาม VitePress default

### 7. Related Workflows

- ทำ `/write-docs` สำหรับ content structure และ organization
- ทำ `/unocss` สำหรับ UnoCSS integration
- ทำ `/docus` สำหรับ Docus configuration (ถ้าใช้ Nuxt Content)

## Expected Outcome

- VitePress config พร้อมใช้งาน
- UnoCSS integrated พร้อม presetWind4
- Theme custom พร้อมใช้งาน
- Package scripts พร้อมใช้งาน
- Shiki Twoslash integrated พร้อม type hover
- VitePress Plugin Group Icons integrated
- GitHub Actions deployment พร้อมใช้งาน
- Home page พร้อม frontmatter ตาม VitePress default

