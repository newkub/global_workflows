---
title: Follow Nitro
description: ตั้งค่า Nitro framework พร้อม presets และ deployment targets
auto_execution_mode: 3
---

ตั้งค่า Nitro สำหรับ full-stack server พร้อมรองรับหลาย deployment targets

## Execute

### 1. Install Dependencies

1. รัน `bun add nitropack`
2. รัน `bun add -D @cloudflare/wrangler` ถ้า deploy บน Cloudflare

### 2. Create Nitro Config

`nitro.config.ts`
```typescript
import { defineNitroConfig } from 'nitro/config'

export default defineNitroConfig({
  compatibilityDate: '2024-09-19',
  preset: 'node-server',
  experimental: {
    wasm: true
  }
})
```

### 3. Choose Preset

1. ใช้ `node-server` สำหรับ Node.js environments
2. ใช้ `cloudflare-pages` สำหรับ Cloudflare Pages
3. ใช้ `cloudflare-module` สำหรับ Cloudflare Workers
4. ใช้ `vercel` สำหรับ Vercel deployment
5. ใช้ `netlify` สำหรับ Netlify deployment
6. ใช้ `aws-lambda` สำหรับ AWS Lambda

### 4. Cloudflare Configuration

`nitro.config.ts`
```typescript
export default defineNitroConfig({
  preset: 'cloudflare-module',
  cloudflare: {
    deployConfig: true,
    nodeCompat: true
  }
})
```

### 5. Vercel Configuration

`nitro.config.ts`
```typescript
export default defineNitroConfig({
  preset: 'vercel',
  vercel: {
    config: {
      runtime: 'nodejs18.x'
    }
  }
})
```

### 6. Netlify Configuration

`nitro.config.ts`
```typescript
export default defineNitroConfig({
  preset: 'netlify',
  netlify: {
    edge: false
  }
})
```

### 7. Nuxt Integration

`nuxt.config.ts`
```typescript
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-module',
    cloudflare: {
      deployConfig: true
    }
  }
})
```

### 8. Build Scripts

`package.json`
```json
{
  "scripts": {
    "dev": "nitro dev",
    "build": "nitro build",
    "preview": "nitro preview"
  }
}
```

### 9. Deploy with Wrangler

1. รัน `bunx wrangler login`
2. รัน `bunx wrangler deploy`

## Rules

- **Preset Selection**: เลือก preset ตาม deployment target
- **Compatibility Date**: กำหนด `compatibilityDate` เสมอ
- **Zero Config**: Nitro จะ auto-detect preset ถ้าไม่กำหนด
- **Environment Variable**: ใช้ `NITRO_PRESET` สำหรับ CI/CD
- **Node Compat**: เปิด `nodeCompat` สำหรับ Cloudflare ถ้าใช้ Node.js APIs
- **Nuxt Integration**: กำหนด nitro config ใน `nuxt.config.ts`
- **Wrangler**: ใช้ wrangler CLI สำหรับ Cloudflare deployment

## Expected Outcome

1. Nitro server ที่พร้อม deploy บน multiple platforms
2. Configuration ที่รองรับ Node.js, Cloudflare, Vercel, Netlify
3. Zero-config auto detection ที่ทำงานได้ถูกต้อง
4. Integration กับ Nuxt ที่สมบูรณ์


