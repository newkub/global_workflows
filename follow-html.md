---
title: Follow HTML
description: สร้าง single HTML ด้วย Vue 3 ผ่าน unpkg CDN และ Tailwind CSS
auto_execution_mode: 3
---

## Goal

สร้าง HTML ไฟล์เดียวที่รวม Vue 3 ผ่าน unpkg CDN พร้อม Tailwind CSS สำหรับ dark mode

## Execute

### 1. Research And Prepare

1. ทำ `/follow-write-workflows` ก่อนเริ่มเขียน
2. อ่าน `/follow-html` เพื่อใช้ Vue 3 CDN อย่างถูกต้อง

### 2. Setup HTML Structure

1. เพิ่ม Element Plus CSS (base + dark mode) - optional
2. โหลด Tailwind CSS: `<script src="https://cdn.tailwindcss.com"></script>`
3. โหลด Vue 3 ผ่าน `<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>` หรือ `https://unpkg.com/vue/dist/vue.global.js` (no version = latest)
4. สร้าง `<div id="app">` และ `<script setup>`

### 3. Initialize Vue Ecosystem

1. ใช้ `Vue.createApp()` จาก global object
2. ใช้ Vue template syntax (`v-model`, `v-for`, `{{ }}`) ใน HTML
3. ใช้ Tailwind utility classes (เช่น `max-w-6xl`, `mx-auto`, `p-10`)
4. Setup dark mode ด้วย `<html class="dark">`

### 4. TypeScript Limitations

**⚠️ ข้อจำกัดของ TypeScript ใน Browser:**
- `script setup lang ts` ใช้ไม่ได้โดยตรงใน browser
- Browser ไม่รองรับ TypeScript โดยตรง
- esm.sh สามารถ compile TypeScript ได้ แต่อาจมีปัญหา compatibility
- **แนะนำ**: ใช้ JavaScript ธรรมดากับ `<script setup>` สำหรับความเสถียร

## Rules

### 1. HTML Structure

```html
<!DOCTYPE html>
<html class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue 3 App</title>
    <link rel="stylesheet" href="https://unpkg.com/element-plus/dist/index.css" />
    <link rel="stylesheet" href="https://unpkg.com/element-plus/theme-chalk/dark/css-vars.css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <div class="max-w-6xl mx-auto p-10">
        <h1 class="text-5xl font-bold mb-4 text-white">{{ title }}</h1>
        <input v-model="searchQuery" type="text" placeholder="Search..." class="w-full p-3 text-base border border-gray-700 rounded-lg bg-gray-800 text-gray-200 outline-none focus:border-blue-400" />
        <div v-for="item in filteredItems" :key="item.id" class="p-4 mb-2 bg-gray-800 rounded-lg">
          {{ item.name }}
        </div>
      </div>
    </div>

    <script setup>
      const { createApp, ref, computed } = Vue

      const title = ref('Hello Vue 3')
      const searchQuery = ref('')
      const items = ref([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' }
      ])

      const filteredItems = computed(() => {
        if (!searchQuery.value) return items.value
        return items.value.filter(item => 
          item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      })

      createApp({
        setup() {
          return {
            title,
            searchQuery,
            filteredItems
          }
        }
      }).mount('#app')
    </script>
  </body>
</html>
```

### 2. Component Pattern

```javascript
// ใน script setup สามารถสร้าง component แยกได้
const Counter = {
  props: { initialCount: { type: Number, default: 0 } },
  setup(props) {
    const count = Vue.ref(props.initialCount)
    return { count }
  },
  template: `
    <button @click="count++">
      Count: {{ count }}
    </button>
  `
}
```

### 3. CDN Libraries (Optional)

สำหรับการใช้ libraries เพิ่มเติม สามารถโหลดผ่าน CDN:

```html
<!-- Vue Router -->
<script src="https://unpkg.com/vue-router@4/dist/vue-router.global.js"></script>
<!-- หรือ no version -->
<script src="https://unpkg.com/vue-router/dist/vue-router.global.js"></script>

<!-- Pinia -->
<script src="https://unpkg.com/pinia@2/dist/pinia.iife.js"></script>
<!-- หรือ no version -->
<script src="https://unpkg.com/pinia/dist/pinia.iife.js"></script>

<!-- Chart.js -->
<script src="https://unpkg.com/chart.js@4/dist/chart.umd.js"></script>
<!-- หรือ no version -->
<script src="https://unpkg.com/chart.js/dist/chart.umd.js"></script>

<!-- VueUse -->
<script src="https://unpkg.com/@vueuse/core/dist/index.iife.min.js"></script>

<!-- Axios -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

### 4. Available Libraries

| Category | Library | CDN | URL | Commonly Used | Notes |
|----------|---------|-----|-----|---------------|-------|
| Framework | Vue 3 | unpkg | https://unpkg.com/vue@3/dist/vue.global.js | ✅ | ผ่าน `<script>` tag |
| UI | Element Plus | unpkg | https://unpkg.com/element-plus/dist/index.css | ✅ | CSS only |
| Router | Vue Router | unpkg | https://unpkg.com/vue-router@4/dist/vue-router.global.js | ✅ | SPA routing |
| State | Pinia | unpkg | https://unpkg.com/pinia@2/dist/pinia.iife.js | ✅ | Vue store |
| Charts | Chart.js | unpkg | https://unpkg.com/chart.js@4/dist/chart.umd.js | ✅ | Data visualization |
| Utilities | VueUse | unpkg | https://unpkg.com/@vueuse/core/dist/index.iife.min.js | ✅ | Vue composables |
| HTTP | Axios | unpkg | https://unpkg.com/axios/dist/axios.min.js | ✅ | HTTP client |
| Icons | Iconify | unpkg | https://api.iconify.design | ✅ | Icon library |
| Utils | Lodash | unpkg | https://unpkg.com/lodash/dist/lodash.min.js | ✅ | Utility functions |
| Forms | TanStack Form | esm.sh | https://esm.sh/@tanstack/vue-form | ❌ | Form management |
| Data | TanStack Query | esm.sh | https://esm.sh/@tanstack/vue-query | ❌ | Data fetching |
| Table | TanStack Table | esm.sh | https://esm.sh/@tanstack/vue-table | ❌ | Advanced table |
| Virtual | TanStack Virtual | esm.sh | https://esm.sh/@tanstack/vue-virtual | ❌ | Virtual scrolling |
| Icons | Lucide | unpkg | https://unpkg.com/lucide-static | ❌ | Icon set |
| Date | Day.js | unpkg | https://unpkg.com/dayjs/dayjs.min.js | ✅ | Date manipulation |
| Validation | Zod | unpkg | https://unpkg.com/zod/lib/index.umd.js | ❌ | Schema validation |
| Markdown | Marked | unpkg | https://unpkg.com/marked/marked.min.js | ❌ | Markdown parser |
| Highlight | Shiki | unpkg | https://unpkg.com/shiki | ❌ | Syntax highlighting |
| CSS | Tailwind CSS | cdn | https://cdn.tailwindcss.com | ✅ | Utility-first CSS |
| Icons | Lucide | unpkg | https://unpkg.com/lucide | ✅ | Icon set |
| Animations | Anime.js | unpkg | https://unpkg.com/animejs/lib/anime.min.js | ✅ | Animation library |
| Storage | LocalForage | unpkg | https://unpkg.com/localforage/dist/localforage.min.js | ✅ | Offline storage |
| QR Code | QRCode | unpkg | https://unpkg.com/qrcode/build/qrcode.min.js | ✅ | QR code generation |
| PDF | PDF.js | unpkg | https://unpkg.com/pdfjs/build/pdf.min.js | ✅ | PDF rendering |
| Excel | SheetJS | unpkg | https://unpkg.com/xlsx/dist/xlsx.full.min.js | ✅ | Excel file processing |
| Crypto | CryptoJS | unpkg | https://unpkg.com/crypto-js/crypto-js.min.js | ✅ | Cryptography utilities |
| Time | Moment.js | unpkg | https://unpkg.com/moment/min/moment.min.js | ✅ | Date/time library |
| Validation | Joi | unpkg | https://unpkg.com/joi/dist/joi.min.js | ✅ | Schema validation |
| DOM | DOMPurify | unpkg | https://unpkg.com/dompurify/dist/purify.min.js | ✅ | DOM sanitization |
| Color | Chroma.js | unpkg | https://unpkg.com/chroma-js/chroma.min.js | ✅ | Color manipulation |

### 5. JavaScript Patterns

```javascript
// Refs
const count = Vue.ref(0)
const user = Vue.ref(null)

// Computed
const double = Vue.computed(() => count.value * 2)

// Watch
Vue.watch(count, (newVal) => console.log(newVal))
```

### 6. UI/UX Design Guidelines

หลักการ Modern, Clean, Simple:

- Minimal Layout - พื้นที่ว่างเพียงพอ
- Flat Colors - โทนสีเรียบง่าย
- Clear Text - ขนาดชัดเจน
- Direct UI - ตรงไปตรงมา

## Expected Outcome

- HTML ไฟล์เดียวที่รวม Vue 3 ผ่าน unpkg CDN
- `<script setup>` สำหรับ Vue composition API
- Vue template syntax (`v-model`, `v-for`, `{{ }}`)
- Tailwind CSS สำหรับ dark mode
- Element Plus CSS (optional)
- ทำงานได้จริงใน browser โดยไม่ต้อง build