---
title: Follow Nuxt Architecture
description: จัดโครงสร้างโปรเจกต์ Nuxt 3/4 มาตรฐานพร้อม Layers และ Modules
auto_execution_mode: 3
---


## Goal

จัดโครงสร้างโปรเจกต์ Nuxt ตามมาตรฐานสำหรับ Universal Rendering, Nitro server, Layers และ Modules

## Scope

ใช้สำหรับ project ที่พัฒนาด้วย Nuxt 3/4

## Execute

สร้างหรือปรับปรุงโครงสร้างโปรเจกต์ Nuxt

1. Project Structure Setup

สร้างโครงสร้างโปรเจกต์มาตรฐาน

- ใช้ `app/` directory ตามมาตรฐาน Nuxt 4
- สร้าง `layers/` สำหรับ feature-based architecture
- สร้าง `server/` สำหรับ Nitro API routes และ business logic
- สร้าง `shared/` สำหรับ types และ utilities ที่ใช้ร่วมกัน
- ใช้ `public/` สำหรับ static assets และ `content/` สำหรับ Nuxt Content

```text
nuxt-project/
├── app/           # Main application (Nuxt 4)
├── layers/        # Feature-based Layers
├── server/        # Nitro server layer
├── shared/        # Shared types & utils
├── public/        # Static files
└── content/       # Nuxt Content
```

2. App Directory Structure

สร้างโครงสร้างมาตรฐานสำหรับ app/ directory

```text
app/
├── app.vue              # Root component
├── app.config.ts        # App configuration
├── error.vue            # Error page
├── assets/              # Styles, fonts, images
├── components/          # Vue components (auto-import)
├── layouts/             # Layout components
├── middleware/          # Route middleware
├── pages/               # File-based routing
├── plugins/             # Nuxt plugins
├── stores/              # Pinia stores
└── utils/               # Client utilities
```

- ใช้ `app.vue` เป็น root component สำหรับ global layout
- สร้าง `app.config.ts` สำหรับ app configuration และ runtime config
- สร้าง `pages/` สำหรับ file-based routing ตาม Nuxt convention
- ใช้ `components/` สำหรับ Vue components ที่ auto-import ได้
- สร้าง `middleware/` สำหรับ route guards และใช้ `stores/` สำหรับ Pinia

3. Components Organization

จัดโครงสร้าง components ตาม feature domain

```text
app/components/
├── ui/                      # Base UI components (buttons, inputs, cards)
│   ├── Button.vue
│   ├── Input.vue
│   └── Card.vue
├── layout/                  # Layout components
│   ├── Header.vue
│   ├── Sidebar.vue
│   └── Footer.vue
├── [feature]/               # Feature-specific components
│   ├── booking/
│   │   ├── BookingCard.vue
│   │   ├── BookingList.vue
│   │   └── BookingForm.vue
│   └── customer/
│       ├── CustomerProfile.vue
│       └── CustomerList.vue
└── global/                  # Globally available components
    ├── LoadingSpinner.vue
    ├── ErrorBoundary.vue
    └── ToastNotification.vue
```

- ใช้ `ui/` สำหรับ base components ที่ใช้ทั่วทั้งแอพ (button, input, card)
- ใช้ `layout/` สำหรับ layout-specific components (header, sidebar, footer)
- ใช้ `[feature]/` สำหรับ components เฉพาะ feature แยกตาม domain
- ใช้ `global/` สำหรับ components ที่ใช้ทุกหน้า (loading, error, toast)
- ตั้งชื่อไฟล์ด้วย PascalCase เสมอ (e.g., `BookingCard.vue`)
- ใช้ `index.vue` ใน folder สำหรับ main component ของ feature นั้น
- Components ทั้งหมด auto-import ได้โดยไม่ต้อง import เอง

4. Composables Structure

สร้าง composables ตาม feature domain

```text
app/composables/
├── useAuth.ts               # Authentication composable
├── useFetch.ts              # Data fetching wrapper
├── [feature]/               # Feature-specific composables
│   ├── booking/
│   │   ├── useBooking.ts
│   │   ├── useBookingList.ts
│   │   └── useBookingForm.ts
│   └── customer/
│       ├── useCustomer.ts
│       ├── useCustomerSearch.ts
│       └── useCustomerProfile.ts
├── utils/                   # Utility composables
│   ├── useDateFormat.ts
│   ├── useLocalStorage.ts
│   └── useDebounce.ts
└── types/                   # Shared composable types
    ├── index.ts
    └── fetch.types.ts
```

- ตั้งชื่อ composable ด้วย `use` prefix เสมอ (e.g., `useBooking.ts`)
- ใช้ `[feature]/` สำหรับ composables เฉพาะ feature แยกตาม domain
- ใช้ `utils/` สำหรับ reusable utility composables (formatting, storage, debounce)
- แยก types ไปไว้ใน `types/` พร้อม barrel export
- Return object pattern สำหรับ expose หลาย values/functions
- ใช้ `try/catch` สำหรับ error handling ใน data fetching composables
- ใช้ `computed` สำหรับ derived state ที่ต้องการ reactivity

```typescript
// ตัวอย่าง composable pattern
export function useFeature() {
  const state = ref<Feature[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchData = async () => {
    loading.value = true
    error.value = null
    try {
      state.value = await $fetch('/api/feature')
    }
    catch (err) {
      error.value = err as Error
    }
    finally {
      loading.value = false
    }
  }

  const filteredData = computed(() => 
    state.value.filter(item => item.active)
  )

  return {
    data: readonly(state),
    loading: readonly(loading),
    error: readonly(error),
    filteredData,
    fetchData,
    refresh: fetchData
  }
}
```

5. Layers Setup

สร้าง Layers สำหรับ feature-based architecture

```text
layers/[feature]/
├── app/
│   ├── components/          # Feature-specific components
│   ├── composables/         # Feature composables
│   ├── pages/               # Feature routes
│   └── utils/               # Feature utilities
├── server/
│   ├── api/                 # API routes
│   ├── services/            # Business logic
│   ├── repositories/        # Data access
│   └── utils/               # Server utilities
├── shared/
│   ├── types/               # TypeScript definitions
│   └── utils/               # Shared utilities
└── nuxt.config.ts           # Layer configuration (optional)
```

- แต่ละ Layer มี app/, server/, shared/, nuxt.config.ts ของตัวเอง
- ใช้ extends ใน nuxt.config.ts เพื่อรวม Layers
- หลีกเลี่ยง circular dependencies ระหว่าง layers
- แชร์ types ผ่าน barrel exports ในแต่ละ Layer
- ตั้งชื่อ Layer ตาม feature/domain ชัดเจน

6. Layer Configuration

กำหนดค่า nuxt.config.ts สำหรับแต่ละ Layer (optional)

```typescript
// layers/[feature]/nuxt.config.ts
export default defineNuxtConfig({
  name: 'feature-name',

  routeRules: {
    '/feature/**': { isr: 60 },
    '/api/feature/**': {
      cors: true,
      headers: { 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE' }
    },
    '/feature/admin/**': { ssr: true },
    '/feature/public/**': { prerender: true },
    '/feature/protected/**': {
      appMiddleware: ['auth'],
      headers: { 'X-Robots-Tag': 'noindex' }
    }
  },

  nitro: {
    routeRules: {
      '/api/feature/cache/**': {
        cache: {
          maxAge: 60 * 60,
          swr: true,
          staleMaxAge: 60 * 60 * 24
        }
      }
    },
    storage: {
      feature: {
        driver: 'fs',
        base: './.data/feature'
      }
    },
    scheduledTasks: {
      '0 0 * * *': ['feature:cleanup']
    }
  },

  runtimeConfig: {
    featureApiKey: process.env.FEATURE_API_KEY,
    public: {
      featureEnabled: process.env.NUXT_PUBLIC_FEATURE_ENABLED === 'true',
      featureVersion: '1.0.0'
    }
  },

  app: {
    head: {
      titleTemplate: '%s - Feature Name',
      meta: [
        { name: 'description', content: 'Feature description' }
      ]
    }
  },

  modules: [],

  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          '#feature/*': ['./*']
        }
      }
    }
  }
})
```

- Route Rules: isr, ssr, prerender, cors, cache, appMiddleware, headers, redirect, proxy
- Nitro Config: routeRules, storage, scheduledTasks
- Runtime Config: API keys (private), feature flags (public), version info (public)

7. Server Structure

สร้างโครงสร้าง server/ directory (Nitro)

```text
server/
├── api/                 # API routes
│   └── [feature]/
│       └── [endpoint].ts
├── db/                  # Database schema & migrations (Drizzle)
│   ├── schema/          # Table definitions
│   ├── migrations/      # Migration files
│   └── index.ts         # DB connection
├── middleware/          # Server middleware
├── services/            # Business logic layer
├── repositories/        # Data access layer
├── utils/               # Server utilities
└── composables/         # Server composables
```

- ใช้ `api/` สำหรับ REST API endpoints แยกตาม feature
- สร้าง `db/` สำหรับ database schema, migrations และ connection (Drizzle ORM)
- สร้าง `services/` สำหรับ business logic และ `repositories/` สำหรับ data access
- สร้าง `middleware/` สำหรับ auth, logging, CORS บน server
- ใช้ `composables/` สำหรับ reusable server-side utilities

8. Shared Structure

สร้างโครงสร้าง shared/ directory

```text
shared/
├── types/               # TypeScript definitions
│   ├── index.ts         # Root barrel export
│   ├── [feature].ts     # Feature-specific types
│   └── api.ts           # API request/response types
├── utils/               # Shared utilities
│   ├── index.ts         # Root barrel export
│   ├── date.ts          # Date helpers
│   └── validation.ts    # Validation functions
└── constants/           # Shared constants
```

- ใช้ `types/` สำหรับ TypeScript interfaces, types, enums ทั้งหมด
- สร้าง `utils/` สำหรับ pure functions ที่ใช้ทั้ง client และ server
- แยก types ตาม feature domain (เช่น `user.ts`, `booking.ts`)
- ใช้ barrel exports (`index.ts`) สำหรับทุก subfolder
- เก็บ constants และ enums ที่ใช้ร่วมกันใน `constants/`

9. Barrel Export Pattern

ใช้ barrel exports สำหรับทุก folder และ Layer

```typescript
// shared/index.ts
export * from './types'
export * from './utils'

// layers/[feature]/index.ts
export * from './shared/types'
export * from './shared/utils'
```

- ทุก feature folder ต้องมี index.ts
- Layer ต้องมี barrel export สำหรับ shared/
- ไม่ใช้ relative path import ใน cross-layer imports
- ใช้ import alias สำหรับ external modules
- ตรวจสอบไม่มี circular dependencies ใน barrel exports

10. Data Flow Architecture

กำหนด flow การทำงานของข้อมูล

```
Pages → Components → Composables → Stores → API → Services → Repositories → DB
```

- Pages: รับ parameters และจัดการ routing
- Components: แสดง UI และรับ user interactions  
- Composables: จัดการ business logic และ local state
- Stores: จัดการ global state (Pinia)
- API → Services → Repositories → DB: Server-side data flow

## Rules

1. Frontmatter Standards

กำหนด metadata ที่ถูกต้องสำหรับทุก workflow

- ใช้ title อธิบายชื่อ workflow ชัดเจน
- ใช้ description อธิบายงานที่ทำและ scope
- ใช้ auto_execution_mode: 3
related_workflows: เสมอ
- ไม่เพิ่ม field อื่นนอกเหนือจากนี้โดยไม่จำเป็น

2. Layer Structure Guidelines

กำหนดมาตรฐานสำหรับ Layers

- แต่ละ Layer ต้องมี app/, server/, shared/ ครบถ้วน
- ใช้ extends ใน nuxt.config.ts หลักเพื่อรวม Layers
- หลีกเลี่ยง circular dependencies ระหว่าง layers
- แชร์ types ผ่าน barrel exports ในแต่ละ Layer
- ตั้งชื่อ Layer ตาม feature/domain ชัดเจน

3. Component Naming

กำหนดมาตรฐานการตั้งชื่อ components

- ใช้ PascalCase สำหรับชื่อไฟล์ (e.g., `BookingCard.vue`)
- ใช้ `ui/` สำหรับ base components ที่ใช้ทั่วทั้งแอพ
- ใช้ `layout/` สำหรับ layout-specific components
- ใช้ `[feature]/` สำหรับ components เฉพาะ feature
- ใช้ `global/` สำหรับ components ที่ใช้ทุกหน้า

4. Composable Patterns

กำหนด patterns สำหรับ composables

- ตั้งชื่อด้วย `use` prefix เสมอ
- ใช้ `[feature]/` สำหรับ composables เฉพาะ feature
- ใช้ `utils/` สำหรับ reusable utility composables
- Return object pattern สำหรับ expose หลาย values/functions
- ใช้ `try/catch` สำหรับ error handling ใน data fetching
- ใช้ `computed` สำหรับ derived state ที่ต้องการ reactivity

5. Barrel Export Standards

กำหนดมาตรฐาน barrel exports

- ทุก feature folder ต้องมี index.ts
- Layer ต้องมี barrel export สำหรับ shared/
- ไม่ใช้ relative path import ใน cross-layer imports
- ใช้ import alias สำหรับ external modules
- ตรวจสอบไม่มี circular dependencies

## Expected Outcome

- Nuxt project ใช้ `app/` directory ตามมาตรฐาน Nuxt 4
- มี `layers/` สำหรับ feature-based architecture
- มี `modules/` สำหรับ custom modules
- Components ใช้ PascalCase และแยกตาม feature
- Composables ใช้ `use` prefix
- มี barrel exports ในทุก feature folder


