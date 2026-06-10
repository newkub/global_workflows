---
description: ตั้งค่า vite-plugin-checker
title: follow-vite-plugin-checker
auto_execution_mode: 3
---

## 1. ติดตั้ง

1. ติดตั้ง vite-plugin-checker ผ่าน Bun

## 2. กำหนดค่า

2.1. เพิ่ม checker ใน vite.config.ts

- กำหนด overlay และ options

```js
checker({
  overlay: {
    initialIsOpen: false,
  },
  typescript: true,
  oxlint: true,
})
```

2.2. เพิ่ม checker ใน nuxt.config.ts (ถ้าใช้ Nuxt)

  - กำหนด overlay และ options

```js
import checker from 'vite-plugin-checker';

export default defineNuxtConfig({
  vite: {
    plugins: [
      checker({
        overlay: {
          initialIsOpen: false,
        },
        biome: { command: "lint" },
        oxlint: true,
        typescript: true,
        vueTsc: true,
      }) as any,
    ],
  },
});
```

