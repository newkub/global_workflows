---
title: Follow Vercel
description: Deploy applications บน Vercel พร้อม serverless และ edge functions
auto_execution_mode: 3
---

Deploy applications บน Vercel platform พร้อม auto-build, preview deployments และ serverless functions

## Execute

### 1. Install Vercel CLI

1. รัน `bun add -D vercel`
2. หรือใช้ `bunx vercel` โดยไม่ต้องติดตั้ง
3. รัน `bunx vercel login` เพื่อ authenticate

### 2. Link Project

1. รัน `bunx vercel link` ใน project directory
2. ยืนยัน project settings
3. หรือใช้ `VERCEL_ORG_ID` และ `VERCEL_PROJECT_ID` สำหรับ CI/CD

### 3. Configure vercel.json

`vercel.json`
```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/src/index.ts" }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### 4. Framework Presets

Vercel รองรับ auto-detection สำหรับ frameworks:
- **Next.js**: ใช้ `next` preset อัตโนมัติ
- **Nuxt**: ใช้ `nuxt` preset พร้อม SSR
- **SvelteKit**: ใช้ `sveltekit` preset
- **Remix**: ใช้ `remix` preset
- **Astro**: ใช้ `astro` preset
- **Vite**: ใช้ `vite` preset สำหรับ static build

### 5. Environment Variables

1. รัน `bunx vercel env add KEY_NAME`
2. หรือใช้ dashboard สำหรับ manage variables
3. ใช้ `vercel env pull .env.local` เพื่อ sync ไปยัง local
4. กำหนด `NODE_ENV`, `API_URL` และ secrets

### 6. Build Configuration

`vercel.json` สำหรับ custom build
```json
{
  "buildCommand": "bun run build",
  "outputDirectory": "dist",
  "installCommand": "bun install",
  "framework": "vite"
}
```

### 7. Serverless Functions

`api/hello.ts`
```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ message: 'Hello from Vercel' })
}
```

### 8. Edge Functions

`api/edge.ts`
```typescript
export const config = {
  runtime: 'edge'
}

export default async function handler(req: Request) {
  return new Response('Hello from Edge Function')
}
```

### 9. CI/CD Deployment

`.github/workflows/deploy.yml`
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bunx vercel deploy --prod --token=${{ secrets.VERCEL_TOKEN }}
```

### 10. Preview Deployments

1. ทุก PR จะสร้าง preview deployment อัตโนมัติ
2. ใช้ `bunx vercel deploy` สำหรับ preview
3. ใช้ `bunx vercel deploy --prod` สำหรับ production
4. ตั้งค่า protection rules สำหรับ production deployments

## Rules

- **Framework Detection**: Vercel จะ auto-detect framework จาก `package.json`
- **Build Command**: กำหนดใน `package.json` scripts หรือ `vercel.json`
- **Output Directory**: ระบุ `dist`, `build`, หรือ `.next` ตาม framework
- **Environment Variables**: ใช้ `vercel env` CLI หรือ dashboard
- **Serverless Functions**: สร้างใน `api/` directory
- **Edge Functions**: ใช้ `runtime: 'edge'` สำหรับ edge deployment
- **Region**: กำหนด `regions` ใน `vercel.json` ถ้าต้องการ
- **Install Command**: ใช้ `bun install` สำหรับ Bun projects
- **Ignore Build**: ใช้ `ignoreCommand` สำหรับ skip builds
- **Rewrites**: กำหนด `rewrites` ใน `vercel.json` สำหรับ URL routing
- **Headers**: กำหนด `headers` สำหรับ security และ caching
- **Cron Jobs**: ใช้ `crons` สำหรับ scheduled functions
- **Preview Protection**: เปิดใช้งานสำหรับ sensitive projects

## Expected Outcome

1. Application ที่ deploy บน Vercel ได้สำเร็จ
2. Auto-build configuration ที่รองรับ multiple frameworks
3. Serverless และ Edge functions ที่ทำงานได้ถูกต้อง
4. CI/CD pipeline ที่ deploy อัตโนมัติทั้ง preview และ production
5. Environment variables ที่จัดการอย่างปลอดภัย

