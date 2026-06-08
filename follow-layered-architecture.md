---
title: Follow Layered Architecture
description: Implement Layered Architecture สำหรับ Frontend projects, Vue/Nuxt applications, โปรเจกต์ขนาดเล็ก-กลาง
auto_execution_mode: 3
---

## Goal

Implement Layered Architecture สำหรับ Frontend projects, Vue/Nuxt applications, โปรเจกต์ขนาดเล็ก-กลาง

## Execute

### 1. Analyze Frontend Requirements

1. ระบุประเภทโปรเจกต์ (Vue/Nuxt/React)
2. ระบุจำนวน features
3. ระบุความซับซ้อนของ state management
4. ระบุ framework ที่ใช้
5. ระบุ team size

### 2. Choose Architecture Pattern

1. เริ่มต้นด้วย `traditional layered` สำหรับโปรเจกต์ใหม่หรือขนาดเล็ก
2. พิจารณา migrate ไป `feature-based` เมื่อโปรเจกต์เติบโตและมี features ชัดเจน
3. พิจารณา team experience และ maintainability
4. เลือก pattern ที่เหมาะกับ project lifecycle

### 3. Create Traditional Layered Structure

```
src/
├── components/        // UI components (global)
├── composables/      // Vue composables / React hooks
├── stores/           // state management (Pinia/Zustand)
├── services/         // API calls and business logic
├── utils/            // utility functions
├── types/            // TypeScript types
├── constants/        // app constants
├── middleware/       // route middleware
├── plugins/          // framework plugins
└── helpers/          // helper functions
```

### 4. Create Feature Structure

```
src/
├── features/          // feature-based organization
│   ├── auth/         // authentication feature
│   │   ├── composables/  // Vue composables
│   │   ├── components/  // Vue components
│   │   ├── api/          // API calls
│   │   ├── stores/ (optional)   // state management
│   │   ├── hooks/ (optional)     // custom hooks
│   │   ├── middleware/ (optional) // route middleware
│   │   └── types/        // TypeScript types
│   └── dashboard/    // dashboard feature
└── shared/           // shared utilities
    ├── utils/        // utility functions
    ├── stores/ (optional)     // global state
    ├── plugins/ (optional)    // framework plugins
    ├── constants/ (optional)  // app constants
    ├── types/ (optional)      // shared types
    └── helpers/ (optional)    // helper functions
```

### 5. Setup Folder Structure

1. สร้าง folder structure ตาม pattern ที่เลือก
2. สร้าง barrel export files (index.ts ในทุก folder)
3. ย้าย code ตาม pattern ที่เลือก
4. ตั้งค่า import alias
5. ทำตาม `/refactor` หลังจากเสร็จ

## Rules

### 1. Pattern Selection

เลือก architecture pattern ตามความเหมาะสมของโปรเจกต์

- `feature-based` เหมาะกับโปรเจกต์ที่มี features ชัดเจนและแยกกันได้
- `traditional layered` เหมาะกับโปรเจกต์ขนาดเล็กหรือต้องการโครงสร้างแบบ classic
- พิจารณา team experience และ maintainability
- เลือก pattern ที่เหมาะกับ project lifecycle

### 2. Feature-Based Organization

ใช้สำหรับ Frontend projects ที่ต้องการโครงสร้างแบบ feature-based

- แยกตาม feature/domain ไม่ใช่ technical layer
- ทุก folder ต้องมี `index.ts` สำหรับ re-export
- ใช้ barrel export pattern ทั้งหมด
- composables ใช้ prefix `use` เสมอ
- import ผ่าน alias ไม่ใช้ relative path

### 3. Traditional Layered Organization

ใช้สำหรับ Frontend projects ที่ต้องการโครงสร้างแบบ traditional layered

- แยกตาม technical layer (components, services, utils)
- `components/` - UI components (global)
- `composables/` - Vue composables / React hooks
- `stores/` - state management (Pinia/Zustand)
- `services/` - API calls และ business logic
- `utils/` - pure utility functions
- `types/` - TypeScript types
- `constants/` - app constants
- `middleware/` - route middleware
- `plugins/` - framework plugins

### 4. Best Practices

- ใช้ barrel export pattern ทั้งหมด (`index.ts`)
- ตั้งค่า import alias ใน `tsconfig`/`nuxt.config`
- หลีกเลี่ยง circular dependencies
- เขียน composables ให้ reusable และ testable
- แยก concerns ตาม Single Responsibility Principle

## Expected Outcome

- เลือก architecture pattern ที่เหมาะสมกับโปรเจกต์
- Feature-based หรือ traditional layered folder structure
- Code แยกตาม domain หรือ technical layer
- Import ผ่าน alias ง่ายและชัดเจน
- Code สามารถ test และ maintain ได้ง่าย
- Reusable composables และ components
