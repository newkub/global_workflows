---
title: Follow Monorepo
description: Implement Monorepo Architecture สำหรับโปรเจกต์ขนาดใหญ่ที่มีหลาย packages หรือ applications
auto_execution_mode: 3
---

## Goal

Implement Monorepo Architecture สำหรับโปรเจกต์ขนาดใหญ่ที่มีหลาย packages หรือ applications

## Execute

### 1. Analyze Monorepo Requirements

1. ระบุจำนวน apps และ packages
2. ระบุ dependencies ระหว่าง packages
3. ระบุ build system ที่ใช้
4. ระบุ deployment strategy
5. ระบุ team size แล expertise

### 2. Create Monorepo Structure

```
monorepo/
├── apps/              // applications
│   ├── web/          // web application
│   ├── admin/        // admin panel
│   ├── cli/          // CLI tool
│   ├── desktop/      // desktop application
│   ├── browser-extensions/ // browser extensions
│   └── mobile/       // mobile application
├── packages/         // shared packages (TypeScript/JavaScript)
│   ├── shared/       // shared libraries (required)
│   │   ├── ui/       // UI components (required)
│   │   └── utils/    // utility functions (required)
│   └── <domain>/     // domain-specific packages
│       ├── auth/     // authentication
│       ├── billing/  // billing
│       └── ...       // other domains
└── crates/           // Rust packages (optional)
    └── <domain>/     // domain-specific crates
        ├── auth/     // authentication
        └── ...       // other crates
```

### 3. Setup Monorepo

1. ทำตาม `/follow-moonrepo` สำหรับ tool setup
2. แยก packages ตาม concerns
3. กำหนด dependencies ระหว่าง packages อย่างชัดเจน
4. ทำตาม `/refactor` หลังจากเสร็จ

## Rules

### 1. Monorepo Organization

ใช้สำหรับโปรเจกต์ขนาดใหญ่ที่มีหลาย packages หรือ applications

- apps/ สำหรับ deployable applications
- packages/ สำหรับ shared libraries (TypeScript/JavaScript)
- crates/ สำหรับ Rust packages (optional)
- แยก packages/crates ตาม concerns
- กำหนด dependencies ระหว่าง packages/crates อย่างชัดเจน

### 2. Apps Structure

โครงสร้างของ applications ใน monorepo

- web/ - web application (Next.js/Nuxt/Vite)
- admin/ - admin panel (Next.js/Nuxt/Vite)
- cli/ - CLI tool (Bun/Node)
- desktop/ - desktop application (Electron/Tauri)
- browser-extensions/ - browser extensions (Chrome/Firefox)
- mobile/ - mobile application (React Native)
- แต่ละ app มี package.json และ config ของตัวเอง
- ใช้ shared packages จาก packages/

### 3. Packages Structure

โครงสร้างของ shared packages ใน monorepo

- shared/ - shared libraries (required)
  - ui/ - shared UI components (required)
  - utils/ - shared utility functions (required)
- <domain>/ - domain-specific packages
  - auth/ - authentication logic
  - billing/ - billing logic
  - ... - other domain packages
- แต่ละ package มี package.json และ exports
- packages สามารถ depend กันได้
- หลีกเลี่ยง circular dependencies

### 4. Crates Structure

โครงสร้างของ Rust crates ใน monorepo (optional)

- <domain>/ - domain-specific crates
  - auth/ - authentication logic
  - ... - other domain crates
- แต่ละ crate มี Cargo.toml และ exports
- crates สามารถ depend กันได้
- หลีกเลี่ยง circular dependencies

### 5. Dependencies Management

การจัดการ dependencies ระหว่าง packages และ crates

- กำหนด dependencies ระหว่าง packages/crates อย่างชัดเจน
- ใช้ workspace protocol สำหรับ internal dependencies
- หลีกเลี่ยง circular dependencies
- lockfile ระดับ workspace

## Expected Outcome

- Monorepo structure ชัดเจน
- Apps และ packages แยกกัน
- Dependencies ระหว่าง packages ชัดเจน
- Code สามารถ test และ maintain ได้ง่าย
